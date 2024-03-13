package com.example.demo.Services;

import com.example.demo.Entity.User;
import org.springframework.stereotype.Service;

public interface UserService {
    User findByUsername(String username);
    boolean authenticate(String username, String password);
    User createUser(User user);
    boolean checkApprovalStatus(String email);
}
