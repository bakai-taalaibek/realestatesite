package com.company.realestatesite.controllers;

import com.company.realestatesite.models.dtos.UserDto;
import com.company.realestatesite.models.entities.User;
import com.company.realestatesite.security.jwt.JwtTokenProvider;
import com.company.realestatesite.security.securityDto.AuthenticationRequestDto;
import com.company.realestatesite.security.securityDto.AuthenticationResponseDto;
import com.company.realestatesite.services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@Api(tags = "1. Авторизация/Регистрация")
@RestController
@RequestMapping(value = "/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthenticationController {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @ApiOperation("Авторизация")
    @PostMapping("/authentication")
    public ResponseEntity<?> authentication(@RequestBody AuthenticationRequestDto requestDto) {
        try {
            String username = requestDto.getUsername();

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, requestDto.getPassword()));
            User user = userService.findByUsername(username);

            String token = jwtTokenProvider.createToken(username, user.getRoles());

            AuthenticationResponseDto responseDto = new AuthenticationResponseDto();
            responseDto.setUsername(username);
            responseDto.setToken(token);

            return ResponseEntity.ok(responseDto);
        } catch (AuthenticationException e) {
            return new ResponseEntity<>("Invalid username or password", HttpStatus.NOT_FOUND);

        }
    }

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
