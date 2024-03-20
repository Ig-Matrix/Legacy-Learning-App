package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class FeedbackResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackId;
    private String model;

    @OneToMany(mappedBy = "feedbackResponse", cascade = CascadeType.ALL)
    private List<QuestionAnswer> questions = new ArrayList<>();
}
