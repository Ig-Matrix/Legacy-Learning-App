package com.example.demo.config;

import com.example.demo.utilty.JwtTokenUtil;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.crypto.SecretKey;

@Configuration
public class MySecurityConfig {

    @Bean
    public SecretKey secretKey() {
        return Keys.secretKeyFor(SignatureAlgorithm.HS512);
    }

    @Bean
    public JwtTokenUtil jwtTokenUtil(SecretKey secretKey) {
        int jwtExpirationInMs = 3600000;  // 1 hour in milliseconds
        int refreshExpirationInMs = 86400000;  // 24 hours in milliseconds
        return new JwtTokenUtil(secretKey, jwtExpirationInMs, refreshExpirationInMs);
    }
}
