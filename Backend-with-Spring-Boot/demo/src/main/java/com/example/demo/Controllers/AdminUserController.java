package com.example.demo.Controllers;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Services.ApprovedEmailService;
import com.example.demo.Services.UserService;
import com.example.demo.Services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminUserController {
    private final UserServiceImpl userServiceImpl;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ApprovedEmailService approvedEmailService;

    @Autowired
    public AdminUserController(UserServiceImpl userServiceImpl, UserRepository userRepository, PasswordEncoder passwordEncoder, ApprovedEmailService approvedEmailService) {
        this.userServiceImpl = userServiceImpl;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.approvedEmailService = approvedEmailService;
    }

    @Secured("ROLE_ADMIN")
    @PostMapping("/admin/users")
    public ResponseEntity<String> createAdminUser(@RequestBody User user) {
        if (user.getUsername() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Username and password are required");
        }
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }
        user.setAdmin(true);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        boolean isApproved = userServiceImpl.checkApprovalStatus(user.getEmail());
        user.setApproved(isApproved);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully");
    }

    @Secured("ROLE_ADMIN")
    @PostMapping("/student/users")
    public ResponseEntity<String> createStudentUser(@RequestBody User user) {
        if (user.getUsername() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Username and password are required");
        }
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }
        user.setAdmin(false);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        boolean isApproved = userServiceImpl.checkApprovalStatus(user.getEmail());
        user.setApproved(isApproved);
        userRepository.save(user);

        if (isApproved) {
            return ResponseEntity.status(HttpStatus.CREATED).body("User created and approved successfully");
        } else {
            return ResponseEntity.status(HttpStatus.CREATED).body("User created but not yet approved. Please contact Admin to approve the email first.");
        }
    }

    @Secured("ROLE_ADMIN")
    @PostMapping("/admin/approve-email")
    public ResponseEntity<String> approveEmail(@RequestBody String email) {
        if (!isAdmin()) {
            return new ResponseEntity<>("Unauthorized", HttpStatus.UNAUTHORIZED);
        }
        boolean approvedEmails = approvedEmailService.addEmailToApprovedList(email);
        if (approvedEmails) {
            return new ResponseEntity<>("Email approved successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to approve email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private boolean isAdmin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof UserDetails userDetails) {
            return userDetails.getAuthorities().stream()
                    .anyMatch(authority -> authority.getAuthority().equals("ROLE_ADMIN"));
        }
        return false;
    }

}
