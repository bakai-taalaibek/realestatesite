package com.example.realestatesite.services;

import com.example.realestatesite.models.dtos.AnnouncementDto;
import com.example.realestatesite.models.entities.Announcement;

import java.util.List;

public interface AnnouncementService {

    AnnouncementDto save(AnnouncementDto announcementDto);

    List<AnnouncementDto> findAll();

    AnnouncementDto findById(Long id);

    AnnouncementDto delete(Long id);

    AnnouncementDto update(AnnouncementDto announcementDto);

}
