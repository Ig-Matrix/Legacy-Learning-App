package com.example.demo.Services;


import com.example.demo.Entity.Announcement;
import com.example.demo.Entity.User;
import com.example.demo.Repository.AnnouncementRepository;
import com.example.demo.Exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {
    @Autowired
    private AnnouncementRepository announcementRepository;


    @Override
    public Announcement createAnnouncement(Announcement announcement) {
        announcement.setCreatedAt(new Date());
        return announcementRepository.save(announcement);
    }

    @Override
    public Announcement editAnnouncement(Announcement announcement) throws ResourceNotFoundException {
        Announcement existingAnnouncement = announcementRepository.findById(announcement.getAnnouncementId()).orElseThrow(() -> new ResourceNotFoundException("Announcement not found!"));
        existingAnnouncement.setAnnouncementContent(announcement.getAnnouncementContent());
        return announcementRepository.save(existingAnnouncement);
    }

    @Override
    public void deleteAnnouncement(Long announcementId) throws ResourceNotFoundException {
        announcementRepository.deleteById(announcementId);
    }

    @Override
    public List<Announcement> findAnnouncementsForStudent(User student) {
        return announcementRepository.findAll();
    }

}