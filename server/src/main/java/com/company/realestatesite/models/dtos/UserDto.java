package com.company.realestatesite.models.dtos;

import com.company.realestatesite.models.entities.Role;
import com.company.realestatesite.models.enums.Gender;
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
public class UserDto extends BaseDto {
    String username;
    String email;
    String password;
    Gender gender;
    int yearOfBirth;
    List<Role> roles;
}