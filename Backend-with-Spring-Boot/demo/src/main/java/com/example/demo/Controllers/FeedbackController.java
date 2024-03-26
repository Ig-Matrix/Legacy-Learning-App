package com.example.demo.Controllers;

import com.example.demo.Entity.FeedbackRequest;
import com.example.demo.Entity.FeedbackResponse;
import com.example.demo.Entity.ResponseItem;
import com.example.demo.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api")
public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping("/student/sendFeedback")
    public ResponseEntity<FeedbackResponse> submitFeedback(@RequestBody FeedbackRequest feedbackRequest) {

        String modelPicked = feedbackRequest.getModel();
        Map<String, String> responseGiven = feedbackRequest.getResponse();

        List<ResponseItem> responseItems = responseGiven.entrySet().stream()
                .map(entry -> new ResponseItem(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());

        FeedbackResponse feedbackResponse = new FeedbackResponse(modelPicked, responseItems);
        feedbackRepository.save(feedbackResponse);

        return ResponseEntity.ok().build();
    }
}