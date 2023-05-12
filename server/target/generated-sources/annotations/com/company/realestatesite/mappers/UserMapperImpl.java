package com.company.realestatesite.mappers;

import com.company.realestatesite.models.dtos.UserDto;
import com.company.realestatesite.models.entities.Role;
import com.company.realestatesite.models.entities.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-12T18:40:23+0600",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Eclipse Adoptium)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public User toEntity(UserDto dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        user.setId( dto.getId() );
        user.setCreated( dto.getCreated() );
        user.setUpdated( dto.getUpdated() );
        user.setStatus( dto.getStatus() );
        user.setUsername( dto.getUsername() );
        user.setEmail( dto.getEmail() );
        user.setPassword( dto.getPassword() );
        user.setGender( dto.getGender() );
        user.setAge( dto.getAge() );
        List<Role> list = dto.getRoles();
        if ( list != null ) {
            user.setRoles( new ArrayList<Role>( list ) );
        }

        return user;
    }

    @Override
    public UserDto toDto(User entity) {
        if ( entity == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( entity.getId() );
        userDto.setCreated( entity.getCreated() );
        userDto.setUpdated( entity.getUpdated() );
        userDto.setStatus( entity.getStatus() );
        userDto.setUsername( entity.getUsername() );
        userDto.setEmail( entity.getEmail() );
        userDto.setPassword( entity.getPassword() );
        userDto.setGender( entity.getGender() );
        userDto.setAge( entity.getAge() );
        List<Role> list = entity.getRoles();
        if ( list != null ) {
            userDto.setRoles( new ArrayList<Role>( list ) );
        }

        return userDto;
    }

    @Override
    public List<User> toEntities(List<UserDto> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<User> list = new ArrayList<User>( dtoList.size() );
        for ( UserDto userDto : dtoList ) {
            list.add( toEntity( userDto ) );
        }

        return list;
    }

    @Override
    public List<UserDto> toDtos(List<User> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<UserDto> list = new ArrayList<UserDto>( entityList.size() );
        for ( User user : entityList ) {
            list.add( toDto( user ) );
        }

        return list;
    }
}
