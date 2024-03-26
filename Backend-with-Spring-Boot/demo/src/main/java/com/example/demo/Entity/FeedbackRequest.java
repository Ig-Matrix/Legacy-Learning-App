package com.example.demo.Entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class FeedbackRequest {
    private String model;
    private Map<String, String> response;
}
