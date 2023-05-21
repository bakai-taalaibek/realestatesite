package com.company.realestatesite.controllers;

import com.company.realestatesite.models.dtos.AnnouncementDto;
import com.company.realestatesite.services.AnnouncementService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Api(tags = "4. Объявления")
@RestController
@RequestMapping(value = "/api/v1/announcement")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AllAnnouncementController {

    private final AnnouncementService announcementService;

    @GetMapping("/find/all")
    @ApiOperation("Вывод всех объявлений")
    ResponseEntity<List<AnnouncementDto>> findAll() {
        return ResponseEntity.ok(announcementService.findAll());
    }
}
