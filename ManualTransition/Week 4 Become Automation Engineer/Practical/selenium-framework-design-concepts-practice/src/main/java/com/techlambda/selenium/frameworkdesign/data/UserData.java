package com.techlambda.selenium.frameworkdesign.data;

/**
 * UserData is part of the data layer.
 * It keeps test data away from page objects and test methods.
 */
public record UserData(String email, String password, String expectedName, String expectedRole) {

    public static UserData adminUser() {
        return new UserData("admin@test.com", "123456", "Admin User", "Admin");
    }

    public static UserData regularUser() {
        return new UserData("user@test.com", "123456", "Regular User", "User");
    }
}