package com.example.realestatesite.models.dtos;

import com.example.realestatesite.models.entities.Role;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto extends BaseDto{
    private String username;
    private String email;
    private String password;
    private Integer age;
    private List<Role> roles;
}
