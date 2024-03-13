package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ApprovedEmail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long emailId;

    @Column(unique = true, nullable = false)
    private String email;

    public ApprovedEmail(String email) {
        this.email = email;
    }
}
