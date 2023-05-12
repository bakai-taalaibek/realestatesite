package com.company.realestatesite.mappers;

import com.company.realestatesite.models.dtos.UserDto;
import com.company.realestatesite.models.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper extends BaseMapper<User, UserDto>{

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
}
