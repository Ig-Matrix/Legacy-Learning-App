package com.example.demo.Controllers;

import com.example.demo.Models.FeedbackModel;
import com.example.demo.Models.UserModel;
import com.example.demo.Services.FeedbackService;
import com.example.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    @Autowired
    private UserService userService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitFeedback(
            @RequestParam String feedbackForType,
            @RequestParam Long targetEntityId,
            @RequestParam String feedbackText,
            @RequestParam Long userId) {

        // will create a userService...
        // and retrieve the user by userId
        UserModel user = userService.getUserById(userId);

        feedbackService.submitFeedback(feedbackForType, targetEntityId, feedbackText, user);
        return ResponseEntity.ok("Feedback submitted successfully");
    }

    @GetMapping("/{feedbackId}")
    public ResponseEntity<FeedbackModel> getFeedbackById(@PathVariable Long feedbackId) {
        Optional<FeedbackModel> feedback = feedbackService.getFeedbackById(feedbackId);
        return feedback.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

}