package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Map;

@Data
@Entity
public class FeedbackResponse {
    @Id
    private Long feedbackId;
    private String model;
    private Map<Integer, QuestionAnswer> questions;

    public static class QuestionAnswer {
        private String question;
        private String answer;
    }
}
