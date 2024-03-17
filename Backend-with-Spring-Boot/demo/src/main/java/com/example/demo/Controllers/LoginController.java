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
//            UserDetails details = User()

            String token = jwtTokenUtil.generateAccessToken(authentication);
            return new ResponseEntity<>(new JwtAuthResponse(token), HttpStatus.OK);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
// NOTES: Would help in determining roles after user authentication...
//if (userDetails.getAuthorities().contains(new SimpleGrantedAuthority(UserRole.ADMIN.name()))) {
//        // Redirect to admin dashboard
//        } else {
//        // Redirect to student dashboard
//        }

