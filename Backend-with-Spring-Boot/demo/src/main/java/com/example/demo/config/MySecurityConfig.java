package com.example.demo.config;

import com.example.demo.Controllers.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;

@Configuration
public class MySecurityConfig {

    @Bean
    public SecretKey secretKey() {
        // Retrieve secret key string from secure property source
        String secretKeyString = "20245249";

        // Generate the SecretKey object
        byte[] keyBytes = secretKeyString.getBytes(StandardCharsets.UTF_8);
        return new SecretKeySpec(keyBytes, "HmacSHA512");
    }

    @Bean
    public JwtTokenUtil jwtTokenUtil(SecretKey secretKey) {
        int jwtExpirationInMs = 7200000;  // 1 hour in milliseconds
        int refreshExpirationInMs = 86400000;  // 24 hours in milliseconds
        return new JwtTokenUtil(secretKey, jwtExpirationInMs, refreshExpirationInMs);
    }
}
