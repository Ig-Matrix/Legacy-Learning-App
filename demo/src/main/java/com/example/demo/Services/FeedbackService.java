package com.example.demo.Services;

import com.example.demo.Models.FeedbackModel;
import com.example.demo.Models.UserModel;
import com.example.demo.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    public Optional<FeedbackModel> getFeedbackById(Long feedbackId) {
        return feedbackRepository.findById(feedbackId);
    }

    public void submitFeedback(String feedbackForType, Long targetEntityId, String feedbackText, UserModel user) {
        FeedbackModel feedback = new FeedbackModel();

        // selects whether it's "instructor" "assessment" or "course"
        feedback.setFeedbackForType(feedbackForType);

        // if the feedback is any of "instructor" "assessment" or "course",
        // stores the ID of the selected feedback object type...
        feedback.setFeedbackForId(targetEntityId);

        // collects the feedback for any of "instructor" "assessment" or "course"...
        feedback.setFeedbackText(feedbackText);

        // sets the output to the user logged in...
        feedback.setUser(user);

        // Saves the feedback to the database using the repository
        feedbackRepository.save(feedback);
    }


}
