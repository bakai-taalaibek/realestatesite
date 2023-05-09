package com.example.realestatesite.mappers;

import com.example.realestatesite.models.dtos.AnnouncementDto;
import com.example.realestatesite.models.entities.Announcement;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface AnnouncementMapper extends BaseMapper<Announcement, AnnouncementDto> {

    AnnouncementMapper INSTANCE = Mappers.getMapper(AnnouncementMapper.class);
}
