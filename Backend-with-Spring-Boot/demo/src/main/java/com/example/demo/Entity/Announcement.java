package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Announcement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long announcementId;
    private String title;

    @Column(columnDefinition = "LONGTEXT")
    private String announcementContent ;
    private Date createdAt;
}
