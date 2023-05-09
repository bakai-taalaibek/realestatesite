package com.example.realestatesite.services.impl;

import com.example.realestatesite.mappers.UserMapper;
import com.example.realestatesite.models.dtos.UserDto;
import com.example.realestatesite.models.entities.Role;
import com.example.realestatesite.models.entities.User;
import com.example.realestatesite.models.enums.Status;
import com.example.realestatesite.repository.RoleRepository;
import com.example.realestatesite.repository.UserRepository;
import com.example.realestatesite.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private UserMapper userMapper = UserMapper.INSTANCE;

    @Override
    public UserDto register(UserDto userDto) {
        return userMapper.toDto(userRepository.save(toEntity(userDto)));
    }

    @Override
    public List<UserDto> findAll() {
        return userMapper.toDtos(userRepository.findAll());
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User is not found"));
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

    private User toEntity(UserDto userDto) {

        Role roleUser = roleRepository.findByName("ROLE_USER");
        List<Role> userRoles = new ArrayList<>();
        userRoles.add(roleUser);

        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setAge(userDto.getAge());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.setRoles(userRoles);
        user.setStatus(Status.ACTIVE);

        return user;
    }
}
