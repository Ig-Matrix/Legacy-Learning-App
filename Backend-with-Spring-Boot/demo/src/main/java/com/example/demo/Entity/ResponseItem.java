package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ResponseItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackResponseId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feedback_id")
    private FeedbackResponse feedbackResponse;

    private String questionKey;
    private String answer;

    public ResponseItem() {
    }

    public ResponseItem(String questionKey, String answer) {
        this.questionKey = questionKey;
        this.answer = answer;
    }
}
