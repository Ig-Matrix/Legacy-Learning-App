package com.example.demo.Controllers;

import com.example.demo.Entity.FeedbackRequest;
import com.example.demo.Entity.FeedbackResponse;
import com.example.demo.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

import static com.mysql.cj.conf.PropertyKey.logger;

@RestController
@RequestMapping("/api")
public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping("/student/sendFeedback")
    public ResponseEntity<Void> submitFeedback(@RequestBody FeedbackRequest feedbackRequest) {

        String model = feedbackRequest.getModel();
        Map<String, String> response = feedbackRequest.getResponse();

        for (Map.Entry<String, String> entry : response.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            // Process each key-value pair (e.g., print them, store them)
            System.out.println("Key: " + key + ", Value: " + value); // Example: print for debugging
        }

        FeedbackResponse feedbackResponse = new FeedbackResponse(model, response);
        feedbackRepository.save(feedbackResponse);

        return ResponseEntity.ok().build();
    }
}

//        logger.info("Extracted data: model={}, response={}", feedbackRequest.getModel(), feedbackRequest.getResponse()); // Log before extraction