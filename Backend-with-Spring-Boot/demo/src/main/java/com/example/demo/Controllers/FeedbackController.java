package com.example.demo.Controllers;

import com.example.demo.Entity.FeedbackResponse;
import com.example.demo.Repository.FeedbackResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FeedbackController {

    @Autowired
    private FeedbackResponseRepository feedbackResponseRepository;
    @PostMapping("/student/sendFeedback")
    public ResponseEntity<FeedbackResponse> submitFeedback(@RequestBody FeedbackResponse feedbackResponse) {
        FeedbackResponse submittedFeedback = feedbackResponseRepository.save(feedbackResponse);
        return new ResponseEntity<>(submittedFeedback, HttpStatus.CREATED);
    }
}
