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
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) throws UsernameAlreadyExistsException {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new UsernameAlreadyExistsException("Username already exists!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setApproved(true);
        return userRepository.save(user);
    }
}

//    public String allowUser(LoginForm loginForm) {
//        String username = loginForm.getUsername();
//        // Basic validation (replace with more robust validation)
//        if (usernameTokenMap.containsKey(username)) {
//            throw new IllegalArgumentException("Username already exists");
//        }
//
//        // Generate a random token (use a cryptographically secure method)
//        String token = generateToken(username);
//
//        // Store username and token (in-memory, not secure)
//        usernameTokenMap.put(username, token);
//
//        return token;
//    }
//    // for testing purpose only...
//    public String generateToken(String username) {
//        // Here's a basic (insecure) example for demonstration purposes only
//        return UUID.randomUUID().toString(); // Replace with a secure token generation method
//    }


//public User approveUser(Long userId) throws UsernameAlreadyExistsException {
//    User user = userRepository.findById(userId)
//            .orElseThrow(() -> new UserNotFoundException("User not found!"));
//    user.setApproved(true);
//    return userRepository.save(user);
//}