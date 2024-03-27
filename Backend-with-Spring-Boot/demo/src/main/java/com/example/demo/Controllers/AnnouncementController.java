package com.example.demo.Controllers;

import com.example.demo.Entity.Announcement;
import com.example.demo.Entity.User;
import com.example.demo.Services.AnnouncementService;
import com.example.demo.Exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AnnouncementController {
    @Autowired
    private AnnouncementService announcementService;

    @PostMapping("/admin/createAnnouncement")
    public ResponseEntity<Announcement> createAnnouncement(@RequestBody Announcement announcement) {
        Announcement announcementContent = announcementService.createAnnouncement(announcement);
        return ResponseEntity.ok(announcementContent);
    }

    @PutMapping("/admin/editAnnouncement/{announcementId}")
    public ResponseEntity<Announcement> editAnnouncement(@PathVariable Long announcementId, @RequestBody Announcement editedAnnouncement) throws ResourceNotFoundException {
        editedAnnouncement.setAnnouncementId(announcementId);
        Announcement editedAnnouncementObject = announcementService.editAnnouncement(editedAnnouncement);
        return ResponseEntity.ok(editedAnnouncementObject);
    }

    @DeleteMapping("/admin/deleteAnnouncement/{announcementId}")
    public ResponseEntity<?> deleteAnnouncement(@PathVariable Long announcementId) throws ResourceNotFoundException {
        announcementService.deleteAnnouncement(announcementId);
        return ResponseEntity.noContent().build();
    }

    // You can optionally create a dedicated endpoint for admin at say, "/admins/getAnnouncement" if needs be...

    @GetMapping("/getAnnouncement")
    public ResponseEntity<List<Announcement>> getAnnouncements(@AuthenticationPrincipal User loggedInUser) {
        List<Announcement> announcements = announcementService.findAnnouncementsForStudent(loggedInUser);
        return ResponseEntity.ok(announcements);
    }

}
