package com.company.realestatesite.repository;

import com.company.realestatesite.models.entities.Announcement;
import com.company.realestatesite.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {

    List<Announcement> findAllByUserId(Long userId);
}
