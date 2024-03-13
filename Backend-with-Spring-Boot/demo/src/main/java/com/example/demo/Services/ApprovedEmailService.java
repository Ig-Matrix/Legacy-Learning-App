package com.example.demo.Services;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ApprovedEmailService {
    private final List<String> approvedEmails = new ArrayList<>();

    // Method to add an email to the approved list
    public boolean addEmailToApprovedList(String email) {
        if (!approvedEmails.contains(email)) {
            approvedEmails.add(email);
            return true;
        }
        return false;
    }
}
