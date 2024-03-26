package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
    private List<ResponseItem> responseItems;

    public FeedbackResponse() {
    }

    public FeedbackResponse(String model, List<ResponseItem> responseItems) {
        this.model = model;
        this.responseItems = responseItems;
    }

}
