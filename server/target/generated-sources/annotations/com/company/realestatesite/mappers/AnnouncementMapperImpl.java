package com.company.realestatesite.mappers;

import com.company.realestatesite.models.dtos.AnnouncementDto;
import com.company.realestatesite.models.entities.Announcement;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-12T18:50:15+0600",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Eclipse Adoptium)"
)
public class AnnouncementMapperImpl implements AnnouncementMapper {

    @Override
    public Announcement toEntity(AnnouncementDto dto) {
        if ( dto == null ) {
            return null;
        }

        Announcement announcement = new Announcement();

        announcement.setId( dto.getId() );
        announcement.setCreated( dto.getCreated() );
        announcement.setUpdated( dto.getUpdated() );
        announcement.setStatus( dto.getStatus() );
        announcement.setTitle( dto.getTitle() );
        announcement.setDescription( dto.getDescription() );
        announcement.setPrice( dto.getPrice() );
        announcement.setType( dto.getType() );
        announcement.setOffer( dto.getOffer() );
        announcement.setArea( dto.getArea() );
        announcement.setRooms( dto.getRooms() );
        announcement.setCity( dto.getCity() );
        announcement.setAddress( dto.getAddress() );
        announcement.setUser( dto.getUser() );

        return announcement;
    }

    @Override
    public AnnouncementDto toDto(Announcement entity) {
        if ( entity == null ) {
            return null;
        }

        AnnouncementDto announcementDto = new AnnouncementDto();

        announcementDto.setId( entity.getId() );
        announcementDto.setCreated( entity.getCreated() );
        announcementDto.setUpdated( entity.getUpdated() );
        announcementDto.setStatus( entity.getStatus() );
        announcementDto.setTitle( entity.getTitle() );
        announcementDto.setDescription( entity.getDescription() );
        announcementDto.setPrice( entity.getPrice() );
        announcementDto.setType( entity.getType() );
        announcementDto.setOffer( entity.getOffer() );
        announcementDto.setArea( entity.getArea() );
        announcementDto.setRooms( entity.getRooms() );
        announcementDto.setCity( entity.getCity() );
        announcementDto.setAddress( entity.getAddress() );
        announcementDto.setUser( entity.getUser() );

        return announcementDto;
    }

    @Override
    public List<Announcement> toEntities(List<AnnouncementDto> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Announcement> list = new ArrayList<Announcement>( dtoList.size() );
        for ( AnnouncementDto announcementDto : dtoList ) {
            list.add( toEntity( announcementDto ) );
        }

        return list;
    }

    @Override
    public List<AnnouncementDto> toDtos(List<Announcement> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<AnnouncementDto> list = new ArrayList<AnnouncementDto>( entityList.size() );
        for ( Announcement announcement : entityList ) {
            list.add( toDto( announcement ) );
        }

        return list;
    }
}
