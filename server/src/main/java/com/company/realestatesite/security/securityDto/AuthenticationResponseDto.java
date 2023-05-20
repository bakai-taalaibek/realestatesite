package com.company.realestatesite.security.securityDto;

import com.company.realestatesite.models.entities.Role;
import com.company.realestatesite.models.enums.Gender;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationResponseDto {

    String token;
    Long id;
    String username;
    String email;
    Gender gender;
    int yearOfBirth;
    List<Role> roles;

}
