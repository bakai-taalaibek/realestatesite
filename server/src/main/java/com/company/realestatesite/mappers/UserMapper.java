package com.company.realestatesite.mappers;

import com.company.realestatesite.models.dtos.UserDto;
import com.company.realestatesite.models.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User toEntity(UserDto dto);

    UserDto toDto(User entity);

    List<User> toEntities(List<UserDto> dtoList);

    List<UserDto> toDtos(List<User> entityList);
}
