package com.techlambda.capstone.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;

/**
 * ProductApiClient keeps REST Assured API call logic separate from tests.
 * Tests should focus on validation, not repeated request-building code.
 */
public class ProductApiClient {

    public ProductApiClient(String baseUrl) {
        RestAssured.baseURI = baseUrl;
    }

    public Response searchProduct(String searchKeyword) {
        return RestAssured
                .given()
                .contentType("application/x-www-form-urlencoded; charset=UTF-8")
                .formParam("search_product", searchKeyword)
                .when()
                .post("/api/searchProduct");
    }
}
