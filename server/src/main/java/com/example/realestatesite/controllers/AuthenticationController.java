package com.example.realestatesite.controllers;

import com.example.realestatesite.models.dtos.UserDto;
import com.example.realestatesite.services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "1. Авторизация/Регистрация")
@RestController
@RequestMapping(value = "/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final UserService userService;

    @ApiOperation("Регистрация")
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) {
        try {
            return ResponseEntity.ok(toString(userService.register(userDto)));
        } catch (RuntimeException e) {
            throw new RuntimeException("Invalid save User: " + userDto.getUsername() + " " + e.getMessage());
        }
    }

    private String toString(UserDto userDto) {
        return "Registration completed successfully " +
                "\n username: " + userDto.getUsername() +
                "\n email: " + userDto.getEmail();
    }
}
