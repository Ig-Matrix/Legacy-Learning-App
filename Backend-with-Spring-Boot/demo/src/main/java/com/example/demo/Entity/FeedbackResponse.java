package com.example.demo.Entity;

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

    // Correct this to be a list of name: value objects...
    // That's why you are receiving response of null input...
    @ElementCollection
    @CollectionTable(name = "feedback_response_items", joinColumns = @JoinColumn(name = "feedback_id"))
    private Map<String, String> response;

    public FeedbackResponse(String model, Map<String, String> response) {
        this.model = model;
        this.response = response;
    }

}
