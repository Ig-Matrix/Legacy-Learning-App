package com.example.demo.Services;

import com.example.demo.Entity.ApprovedEmail;
import com.example.demo.Repository.ApprovedEmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class ApprovedEmailService {
    private final ApprovedEmailRepository approvedEmailRepository;

    @Autowired
    public ApprovedEmailService(ApprovedEmailRepository approvedEmailRepository) {
        this.approvedEmailRepository = approvedEmailRepository;
    }

    // Method to add an email to the approvedEmailRepo
    public boolean addEmailToApprovedList(String email) {
        if (!approvedEmailRepository.existsByEmail(email)) {
            approvedEmailRepository.save(new ApprovedEmail(email));
            return true;
        }
        return false;
    }
}
