package com.company.realestatesite.repository;

import com.company.realestatesite.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String name);
    User findByEmail(String email);
}
