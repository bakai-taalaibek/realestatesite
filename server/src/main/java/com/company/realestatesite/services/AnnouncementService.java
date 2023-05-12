package com.company.realestatesite.services;

import com.company.realestatesite.models.dtos.AnnouncementDto;

import java.util.List;

public interface AnnouncementService {

    AnnouncementDto save(AnnouncementDto announcementDto);

    List<AnnouncementDto> findAll();

    AnnouncementDto findById(Long id);

    AnnouncementDto delete(Long id);

    AnnouncementDto update(AnnouncementDto announcementDto);

}
