package com.example.demo.Services;

import com.example.demo.Entity.Announcement;
import com.example.demo.Entity.User;
import com.example.demo.Exceptions.ResourceNotFoundException;

import java.util.List;


public interface AnnouncementService {
    Announcement createAnnouncement(Announcement announcement);
    Announcement editAnnouncement(Announcement announcement) throws ResourceNotFoundException;
    void deleteAnnouncement(Long announcementId) throws ResourceNotFoundException;

    List<Announcement> findAnnouncementsForStudent(User student);

}
