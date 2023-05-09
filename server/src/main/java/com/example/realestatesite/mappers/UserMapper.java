package com.example.realestatesite.mappers;

import com.example.realestatesite.models.dtos.UserDto;
import com.example.realestatesite.models.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper extends BaseMapper<User, UserDto>{

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
}
