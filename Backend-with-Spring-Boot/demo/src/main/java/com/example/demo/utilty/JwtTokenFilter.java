package com.example.demo.utilty;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;

public class JwtTokenFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsService userDetailsService;
    private JwtTokenUtil jwtTokenUtil;
    private final SecretKey secretKey;

    public JwtTokenFilter(SecretKey secretKey) {
        this.secretKey = secretKey;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response); // Skip if no bearer token present
            return;
        }

        String token = authorizationHeader.split(" ")[1];
        if (!jwtTokenUtil.validateToken(token)) {
            // Handle invalid token (e.g., throw exception or redirect)
            try {
                throw new UnauthorizedException("Invalid JWT token");
            } catch (UnauthorizedException e) {
                throw new RuntimeException(e);
            }
        }

        String username = jwtTokenUtil.getUsernameFromToken(token);

        // Load user details from username (replace with your logic)
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        // Create authentication object (e.g., UsernamePasswordAuthenticationToken)
        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

        // Set authentication in SecurityContext
        SecurityContextHolder.getContext().setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }

}
