package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Announcement {
    @Id
    private Long announcementId;
    private String announcementContent ;
    private Date createdAt;
}
