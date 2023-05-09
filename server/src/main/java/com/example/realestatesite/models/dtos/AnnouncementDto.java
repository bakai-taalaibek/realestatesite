package com.example.realestatesite.models.dtos;

import com.example.realestatesite.models.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class AnnouncementDto extends BaseDto {
    private String title;
    private String description;
    private Integer price;
    private String type;
    private String offer;
    private Integer area;
    private Integer rooms;
    private String city;
    private String address;
    private List<User> user;
}
