package com.example.demo.Controllers;

import com.example.demo.Entity.LoginForm;
import com.example.demo.utilty.JwtAuthResponse;
import com.example.demo.utilty.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> LoginRequest(@RequestBody LoginForm loginForm) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginForm.getUsername(), loginForm.getPassword()));
//            SecurityContextHolder.getContext()setAuthentication(authentication);
            String token = jwtTokenUtil.generateAccessToken((UserDetails) authentication);
            return new ResponseEntity<>(new JwtAuthResponse(token), HttpStatus.OK);
//            if (authentication.getPrincipal() instanceof UserDetails userDetails) {
//                String jwtToken = jwtTokenUtil.generateAccessToken(userDetails);
//                return new ResponseEntity<>(new JwtAuthResponse(jwtToken), HttpStatus.OK);
//            } else {
//                throw new RuntimeException("Unexpected authentication object type");
//            }
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}


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
