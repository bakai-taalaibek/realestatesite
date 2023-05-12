package com.company.realestatesite.controllers;

import com.company.realestatesite.models.dtos.AnnouncementDto;
import com.company.realestatesite.services.AnnouncementService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = "3. Объявления")
@RestController
@RequestMapping(value = "/api/v1/announcement")
@RequiredArgsConstructor
public class AnnouncementController {

    private final AnnouncementService announcementService;

    @PostMapping("/save")
    @ApiOperation("Добавление объявления")
    public ResponseEntity<?> save(@RequestBody AnnouncementDto announcementDto) {
        try {
            return ResponseEntity.ok(announcementService.save(announcementDto));
        } catch (RuntimeException e) {
            throw new RuntimeException("Invalid save Announcement");
        }
    }

    @GetMapping("/find/by/id")
    @ApiOperation("Поиск объявления по id")
    ResponseEntity<?> findById(@RequestParam Long id) {
        try {
            return new ResponseEntity<>(announcementService.findById(id), HttpStatus.FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/find/all")
    @ApiOperation("Вывод всех объявлений")
    ResponseEntity<List<AnnouncementDto>> findAll() {
        return ResponseEntity.ok(announcementService.findAll());
    }

    @DeleteMapping("/delete")
    @ApiOperation("Удаления объявления")
    ResponseEntity<?> delete(@RequestParam Long id) {
        try {
            announcementService.delete(id);
            return ResponseEntity.ok("database entry deleted");
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}
