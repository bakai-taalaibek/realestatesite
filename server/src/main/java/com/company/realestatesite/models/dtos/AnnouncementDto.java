package com.company.realestatesite.models.dtos;

import com.company.realestatesite.models.entities.User;
import com.company.realestatesite.models.enums.Offer;
import com.company.realestatesite.models.enums.Type;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AnnouncementDto extends BaseDto {
    String title;
    String description;
    Integer price;
    Type type;
    Offer offer;
    Integer area;
    Integer rooms;
    String city;
    String address;
    User user;
}
