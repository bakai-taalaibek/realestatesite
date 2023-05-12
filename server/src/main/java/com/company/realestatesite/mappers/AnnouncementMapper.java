package com.company.realestatesite.mappers;

import com.company.realestatesite.models.dtos.AnnouncementDto;
import com.company.realestatesite.models.entities.Announcement;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface AnnouncementMapper {

    AnnouncementMapper INSTANCE = Mappers.getMapper(AnnouncementMapper.class);

    Announcement toEntity(AnnouncementDto dto);
    AnnouncementDto toDto(Announcement entity);
    List<Announcement> toEntities(List<AnnouncementDto> dtoList);
    List<AnnouncementDto> toDtos (List<Announcement> entityList);
}
