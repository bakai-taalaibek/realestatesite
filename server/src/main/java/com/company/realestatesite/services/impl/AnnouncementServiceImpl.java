package com.company.realestatesite.services.impl;

import com.company.realestatesite.mappers.AnnouncementMapper;
import com.company.realestatesite.models.dtos.AnnouncementDto;
import com.company.realestatesite.models.entities.Announcement;
import com.company.realestatesite.models.enums.Status;
import com.company.realestatesite.repository.AnnouncementRepository;
import com.company.realestatesite.services.AnnouncementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnnouncementServiceImpl implements AnnouncementService {

    private final AnnouncementRepository announcementRepository;
    private AnnouncementMapper announcementMapper = AnnouncementMapper.INSTANCE;

    @Override
    public AnnouncementDto save(AnnouncementDto dto) {
        return announcementMapper.toDto(announcementRepository.save(announcementMapper.toEntity(dto)));
    }

    @Override
    public AnnouncementDto findById(Long id) {
        return announcementMapper.toDto(announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Habit is not found")));
    }

    @Override
    public List<AnnouncementDto> findAll() {
        return announcementMapper.toDtos(announcementRepository.findAll());
    }

    @Override
    public AnnouncementDto update(AnnouncementDto dto) {
        Announcement announcement = announcementRepository.findById(dto.getId())
                .orElseThrow(() -> new RuntimeException("Announcement is not found"));
        announcement.setTitle(dto.getTitle());
        announcement.setDescription(dto.getDescription());
        announcement.setPrice(dto.getPrice());
        announcement.setType(dto.getType());
        announcement.setOffer(dto.getOffer());
        announcement.setArea(dto.getArea());
        announcement.setRooms(dto.getRooms());
        announcement.setCity(dto.getCity());
        announcement.setAddress(dto.getAddress());
        announcement.setUser(dto.getUser());
        return announcementMapper.toDto(announcementRepository.save(announcement));
    }

    @Override
    public AnnouncementDto delete(Long id) {
        AnnouncementDto announcementDto = announcementMapper.toDto(announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Announcement is not found")));
        announcementDto.setStatus(Status.DELETED);
        return save(announcementDto);
    }
}
