package com.example.demo.Services;

import com.example.demo.Entity.FeedbackResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class FeedbackService {

    public FeedbackResponse prepareFeedbackResponse(String jsonString) {
        ObjectMapper mapper = new ObjectMapper();
        Map<String, String> feedbackMap;
        try {
            feedbackMap = mapper.readValue(jsonString, Map.class);  // Parse JSON to Map
        } catch (JsonProcessingException e) {
            // Handle parsing exception (optional)
            e.printStackTrace();
            return null; // Or throw an exception depending on your needs
        }
        // ... rest of the logic to create FeedbackResponse object

        return new FeedbackResponse("assessment", feedbackMap);
    }

}
