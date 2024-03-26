package com.example.demo.Entity;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;


@Getter
@Setter
@Entity
public class FeedbackResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackId;
    private String model;

    @ElementCollection
    @CollectionTable(name = "feedback_response_items", joinColumns = @JoinColumn(name = "feedback_id"))
    private Map<String, String> response;

    public FeedbackResponse() {
    }

    public FeedbackResponse(String model, Map<String, String> response) {
        this.model = model;
        this.response = response;
    }

}
