package com.example.demo.Controllers;

import com.example.demo.Entity.User;
import com.example.demo.Entity.UserRole;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Services.UserServiceImpl;
import com.example.demo.Services.UsernameAlreadyExistsException;
import com.example.demo.utilty.UnauthorizedAccessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AdminController {
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/registerAdmin")
    public ResponseEntity<User> registerAdmin(@RequestBody User user, @AuthenticationPrincipal UserDetails userDetails) throws UsernameAlreadyExistsException, UnauthorizedAccessException {
        if (!userDetails.getAuthorities().contains(new SimpleGrantedAuthority(UserRole.ADMIN.name()))) {
            throw new UnauthorizedAccessException("You are not authorized to create admins!", "/api/registerAdmin", "POST");
        }
        user.setRole(UserRole.ADMIN);
        user.setApproved(true);
        User registeredUser = userServiceImpl.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }

//    @PostMapping("/registerAdmin")
//    public ResponseEntity<User> registerAdmin(@RequestBody User user) throws UsernameAlreadyExistsException {
//        user.setRole(UserRole.ADMIN);
//        user.setApproved(true);
//        User registeredUser = userServiceImpl.registerUser(user);
//        return ResponseEntity.ok(registeredUser);
//    }

}
