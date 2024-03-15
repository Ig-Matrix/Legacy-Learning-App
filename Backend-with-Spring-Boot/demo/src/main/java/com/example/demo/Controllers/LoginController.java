package com.example.demo.Controllers;

import com.example.demo.Entity.LoginForm;
import com.example.demo.Services.UserService;
import com.example.demo.utilty.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {
    private final AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    private UserService userService;

    public LoginController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }


    @PostMapping("/login")
    public String token (@RequestBody LoginForm loginForm) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginForm.getUsername(), loginForm.getPassword()));
        return jwtTokenUtil.generateAccessToken((UserDetails) authentication);
    }
}

//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginForm loginForm) {
//        try {
//            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
//                    loginForm.getUsername(), loginForm.getPassword());
//            Authentication authentication = authenticationManager.authenticate(token);
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//
//            // **Cast authentication to UserDetails:**
//            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//
//            // Generate JWT token using userDetails
//            String jwtToken = jwtTokenUtil.generateAccessToken(userDetails);
//
//            // Create a login response object with JWT token
//            LoginResponse loginResponse = new LoginResponse(jwtToken);
//            return ResponseEntity.ok(loginResponse);
//        } catch (AuthenticationException e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }
//}


//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody LoginForm loginForm) {
//        String username = loginForm.getUsername();
//        String token = userService.generateToken(username); // UserService retrieves token
//
//        // Weak validation: only check if token exists
//        if (token != null) {
//            return ResponseEntity.ok(new LoginResponse(token));
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }
