package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Announcement {
    @Id
    private Long announcementId;
    private String title;
    private String announcementContent ;
    private Date createdAt;
}
