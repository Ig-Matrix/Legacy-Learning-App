package com.example.demo.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class FeedbackModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackId;

    @ManyToOne
    @JoinColumn(name="user_id")
    private UserModel user;

    private String feedbackForType;
    // could be "instructor, assessment or course"

    private Long feedbackForId;
    // should be the ID of "instructor, assessment or course"

    private String feedbackText;

    public void setFeedbackTargetId(Object targetEntityId) {
        if ("instructor".equals(feedbackForType)) {
            this.feedbackForId = (Long) targetEntityId;
        }
        else if ("assessment".equals(feedbackForType)) {
            this.feedbackForId = (Long) targetEntityId;
        }
        else if ("course".equals(feedbackForType)) {
            this.feedbackForId = (Long) targetEntityId;
        }
    }

}