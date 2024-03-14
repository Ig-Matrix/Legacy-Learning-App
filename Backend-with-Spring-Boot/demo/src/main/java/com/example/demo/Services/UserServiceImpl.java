package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private  PasswordEncoder passwordEncoder;

    public User registerUser(User user) throws UsernameAlreadyExistsException {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new UsernameAlreadyExistsException("Username already exists!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setApproved(false);
        return userRepository.save(user);
    }
    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false;
    }
}

//public User approveUser(Long userId) throws UsernameAlreadyExistsException {
//    User user = userRepository.findById(userId)
//            .orElseThrow(() -> new UserNotFoundException("User not found!"));
//    user.setApproved(true);
//    return userRepository.save(user);
//}

//    public UserServiceImpl(UserRepository userRepository, ApprovedEmailRepository approvedEmailRepository) {
//        this.userRepository = userRepository;
//        this.approvedEmailRepository = approvedEmailRepository;
//    }