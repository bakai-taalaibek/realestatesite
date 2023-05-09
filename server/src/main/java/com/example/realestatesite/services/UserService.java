package com.example.realestatesite.services;

import com.example.realestatesite.models.dtos.UserDto;
import com.example.realestatesite.models.entities.User;

import java.util.List;

public interface UserService {

    UserDto register(UserDto userDto);

    List<UserDto> findAll();

    User findByUsername(String username);

    User findByEmail(String email);

    User findById(Long id);

    void delete(Long id);
}
