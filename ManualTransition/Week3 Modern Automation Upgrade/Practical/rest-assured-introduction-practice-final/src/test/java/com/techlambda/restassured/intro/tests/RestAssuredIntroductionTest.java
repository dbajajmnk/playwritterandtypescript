package com.techlambda.restassured.intro.tests;

import com.techlambda.restassured.intro.api.SampleApiServer;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

/**
 * REST Assured Introduction
 *
 * This file demonstrates starter API automation tests:
 * - GET request
 * - POST request
 * - Status code validation
 * - JSON field validation
 * - Header validation
 * - Query parameter testing
 * - Path parameter testing
 * - Negative API testing
 */
class RestAssuredIntroductionTest {

    private static SampleApiServer apiServer;

    @BeforeAll
    static void startLocalApi() throws IOException {
        // Start our local API server before all tests.
        // This makes the project independent of public internet APIs.
        apiServer = new SampleApiServer(9090);
        apiServer.start();

        // REST Assured global configuration.
        // Every request in this class will use this base URI and port.
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 9090;
    }

    @BeforeEach
    void resetApiDataBeforeEachTest() {
        // Reset sample API data before each test so POST tests do not affect GET tests.
        apiServer.resetData();
    }

    @AfterAll
    static void stopLocalApi() {
        // Stop the local API server after all tests are complete.
        if (apiServer != null) {
            apiServer.stop();
        }
    }

    @Test
    @DisplayName("GET health API should return status UP")
    void getHealthShouldReturnUpStatus() {
        given()
                // given() is used for request setup.
                .accept(ContentType.JSON)
        .when()
                // when() is used for the actual API action.
                .get("/api/health")
        .then()
                // then() is used for assertions/validations.
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("status", equalTo("UP"))
                .body("service", equalTo("sample-rest-api"));
    }

    @Test
    @DisplayName("GET users API should return all users")
    void getUsersShouldReturnUserList() {
        given()
                .accept(ContentType.JSON)
        .when()
                .get("/api/users")
        .then()
                .statusCode(200)
                // Validate top-level JSON field. Data is reset before every test, so total remains stable.
                .body("total", equalTo(3))
                // Validate JSON array size.
                .body("data", hasSize(3))
                // Validate first user name.
                .body("data[0].name", equalTo("Deepak"));
    }

    @Test
    @DisplayName("Query parameter should filter users by role")
    void queryParameterShouldFilterUsersByRole() {
        given()
                .accept(ContentType.JSON)
                // Query parameter example: /api/users?role=developer
                .queryParam("role", "developer")
        .when()
                .get("/api/users")
        .then()
                .statusCode(200)
                .body("total", equalTo(1))
                .body("data[0].name", equalTo("Kapil"))
                .body("data[0].role", equalTo("developer"));
    }

    @Test
    @DisplayName("Path parameter should fetch user by id")
    void pathParameterShouldFetchUserById() {
        given()
                .accept(ContentType.JSON)
                // Path parameter example: /api/users/{userId}
                .pathParam("userId", 1)
        .when()
                .get("/api/users/{userId}")
        .then()
                .statusCode(200)
                // Validate nested JSON fields.
                .body("data.id", equalTo(1))
                .body("data.name", equalTo("Deepak"))
                .body("data.active", equalTo(true));
    }

    @Test
    @DisplayName("POST users API should create a new user")
    void postUsersShouldCreateNewUser() {
        Map<String, Object> payload = Map.of(
                "name", "REST Assured Student",
                "role", "tester"
        );

        given()
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON)
                // Send request body/payload.
                .body(payload)
        .when()
                .post("/api/users")
        .then()
                .statusCode(201)
                .body("created", equalTo(true))
                .body("data.name", equalTo("REST Assured Student"))
                .body("data.role", equalTo("tester"))
                .body("data.active", equalTo(true));
    }

    @Test
    @DisplayName("POST users API should return bad request for invalid payload")
    void postUsersShouldReturnBadRequestForInvalidPayload() {
        Map<String, Object> invalidPayload = Map.of(
                "name", "Missing Role User"
        );

        given()
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON)
                .body(invalidPayload)
        .when()
                .post("/api/users")
        .then()
                .statusCode(400)
                .body("error", equalTo("name and role are required"));
    }

    @Test
    @DisplayName("Response object can be stored for custom validation")
    void responseCanBeStoredForCustomValidation() {
        // Sometimes we store the response when we need custom logic.
        Response response = given()
                .accept(ContentType.JSON)
        .when()
                .get("/api/users/2");

        response.then()
                .statusCode(200)
                .body("data.name", equalTo("Kapil"));

        // Extract value from JSON response.
        String role = response.jsonPath().getString("data.role");

        // Normal Java assertion can be used for additional custom checks.
        org.junit.jupiter.api.Assertions.assertEquals("developer", role);
    }

    @Test
    @DisplayName("Negative test should return 404 for unknown user")
    void unknownUserShouldReturnNotFound() {
        given()
                .accept(ContentType.JSON)
        .when()
                .get("/api/users/999")
        .then()
                .statusCode(404)
                .body("error", equalTo("User not found"));
    }
}
