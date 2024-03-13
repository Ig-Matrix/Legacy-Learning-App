package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.Repository.ApprovedEmailRepository;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ApprovedEmailRepository approvedEmailRepository;
    @Autowired
    private  PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, ApprovedEmailRepository approvedEmailRepository) {
        this.userRepository = userRepository;
        this.approvedEmailRepository = approvedEmailRepository;
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }

    public User createUser(User user) {
        boolean isApproved = checkApprovalStatus(user.getEmail());
        user.setApproved(isApproved);
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new IllegalArgumentException("Username is already taken");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
    public boolean checkApprovalStatus(String email) {
        return approvedEmailRepository.existsByEmail(email);
    }

}