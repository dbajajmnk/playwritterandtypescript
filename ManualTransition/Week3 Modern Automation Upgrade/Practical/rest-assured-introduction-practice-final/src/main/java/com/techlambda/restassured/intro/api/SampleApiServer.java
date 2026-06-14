package com.techlambda.restassured.intro.api;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * This is a small local API server for learning REST Assured.
 *
 * Why local API?
 * - Students do not depend on internet APIs.
 * - Tests are stable and repeatable.
 * - We can control status codes and response bodies.
 */
public class SampleApiServer {

    private final HttpServer server;
    private final List<User> users = new ArrayList<>();

    public SampleApiServer(int port) throws IOException {
        server = HttpServer.create(new InetSocketAddress(port), 0);
        server.setExecutor(Executors.newFixedThreadPool(4));

        seedData();

        // Register all sample API routes.
        server.createContext("/api/health", this::handleHealth);
        server.createContext("/api/users", this::handleUsers);
    }

    public void start() {
        server.start();
    }

    public void stop() {
        server.stop(0);
    }

    /**
     * Reset the in-memory data before each test.
     * This keeps every test independent and avoids order-based failures.
     */
    public void resetData() {
        seedData();
    }

    private void seedData() {
        users.clear();
        users.add(new User(1, "Deepak", "trainer", true));
        users.add(new User(2, "Kapil", "developer", true));
        users.add(new User(3, "Guest User", "guest", false));
    }

    private void handleHealth(HttpExchange exchange) throws IOException {
        if (!"GET".equals(exchange.getRequestMethod())) {
            sendJson(exchange, 405, "{\"error\":\"Method not allowed\"}");
            return;
        }

        sendJson(exchange, 200, "{\"status\":\"UP\",\"service\":\"sample-rest-api\"}");
    }

    private void handleUsers(HttpExchange exchange) throws IOException {
        String method = exchange.getRequestMethod();
        String path = exchange.getRequestURI().getPath();

        // GET /api/users/{id} path parameter example.
        if (path.matches("/api/users/\\d+") && "GET".equals(method)) {
            int id = Integer.parseInt(path.substring(path.lastIndexOf('/') + 1));
            handleGetUserById(exchange, id);
            return;
        }

        if ("GET".equals(method)) {
            handleGetUsers(exchange);
            return;
        }

        if ("POST".equals(method)) {
            handleCreateUser(exchange);
            return;
        }

        sendJson(exchange, 405, "{\"error\":\"Method not allowed\"}");
    }

    private void handleGetUsers(HttpExchange exchange) throws IOException {
        String query = exchange.getRequestURI().getQuery();
        String roleFilter = extractQueryParam(query, "role");

        List<User> filteredUsers = users.stream()
                .filter(user -> roleFilter == null || user.role().equalsIgnoreCase(roleFilter))
                .toList();

        StringBuilder json = new StringBuilder("{\"total\":")
                .append(filteredUsers.size())
                .append(",\"data\":[");

        for (int i = 0; i < filteredUsers.size(); i++) {
            json.append(filteredUsers.get(i).toJson());
            if (i < filteredUsers.size() - 1) {
                json.append(',');
            }
        }

        json.append("]}");
        sendJson(exchange, 200, json.toString());
    }

    private void handleGetUserById(HttpExchange exchange, int id) throws IOException {
        User foundUser = users.stream()
                .filter(user -> user.id() == id)
                .findFirst()
                .orElse(null);

        if (foundUser == null) {
            sendJson(exchange, 404, "{\"error\":\"User not found\"}");
            return;
        }

        sendJson(exchange, 200, "{\"data\":" + foundUser.toJson() + "}");
    }

    private void handleCreateUser(HttpExchange exchange) throws IOException {
        String body = readBody(exchange.getRequestBody());
        String name = extractJsonString(body, "name");
        String role = extractJsonString(body, "role");

        if (name == null || name.isBlank() || role == null || role.isBlank()) {
            sendJson(exchange, 400, "{\"error\":\"name and role are required\"}");
            return;
        }

        User createdUser = new User(users.size() + 1, name, role, true);
        users.add(createdUser);

        sendJson(exchange, 201, "{\"created\":true,\"data\":" + createdUser.toJson() + "}");
    }

    private String readBody(InputStream inputStream) throws IOException {
        return new String(inputStream.readAllBytes(), StandardCharsets.UTF_8);
    }

    private String extractQueryParam(String query, String key) {
        if (query == null || query.isBlank()) {
            return null;
        }

        String[] pairs = query.split("&");
        for (String pair : pairs) {
            String[] parts = pair.split("=", 2);
            if (parts.length == 2 && parts[0].equals(key)) {
                return parts[1];
            }
        }
        return null;
    }

    private String extractJsonString(String json, String field) {
        Pattern pattern = Pattern.compile("\\\"" + field + "\\\"\\s*:\\s*\\\"([^\\\"]+)\\\"");
        Matcher matcher = pattern.matcher(json);
        return matcher.find() ? matcher.group(1) : null;
    }

    private void sendJson(HttpExchange exchange, int statusCode, String json) throws IOException {
        byte[] responseBytes = json.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().add("Content-Type", "application/json");
        exchange.sendResponseHeaders(statusCode, responseBytes.length);

        try (OutputStream outputStream = exchange.getResponseBody()) {
            outputStream.write(responseBytes);
        }
    }

    /**
     * Simple immutable user object used by the sample API.
     */
    private record User(int id, String name, String role, boolean active) {
        String toJson() {
            return "{\"id\":" + id +
                    ",\"name\":\"" + name + "\"" +
                    ",\"role\":\"" + role + "\"" +
                    ",\"active\":" + active + "}";
        }
    }
}
