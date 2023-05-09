package com.example.realestatesite.models.dtos;

import com.example.realestatesite.models.enums.Status;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BaseDto {
    private Long id;
    @JsonFormat(pattern = "dd.MM.yyyy")
    private Date created;
    @JsonFormat(pattern = "dd.MM.yyyy")
    private Date updated;
    private Status status;
}
