package com.example.demo.utilty;

import io.jsonwebtoken.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.crypto.SecretKey;
import java.util.*;
import java.util.function.Function;

public class JwtTokenUtil {

    private final SecretKey secretKey;
    private final int jwtExpirationInMs;
    private final int refreshExpirationInMs;

    public JwtTokenUtil(SecretKey secretKey, int jwtExpirationInMs, int refreshExpirationInMs) {
        this.secretKey =  secretKey; // More secure key generation
        this.jwtExpirationInMs = jwtExpirationInMs;
        this.refreshExpirationInMs = refreshExpirationInMs;
    }

    public String generateAccessToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", userDetails.getUsername());
        claims.put("roles", extractRoles(userDetails.getAuthorities()));

        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(generateExpirationDate(jwtExpirationInMs))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public String generateRefreshToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", userDetails.getUsername());

        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(generateExpirationDate(refreshExpirationInMs))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (SecurityException | MalformedJwtException | ExpiredJwtException | UnsupportedJwtException | IllegalArgumentException e) {
            System.err.println("Invalid JWT token: " + e.getMessage());
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public List<String> getRolesFromToken(String token) {
        return getClaimFromToken(token, claims -> claims.get("roles", List.class));
    }

    private <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        return claimsResolver.apply(claims);
    }

    private Date generateExpirationDate(int expiration) {
        return new Date(System.currentTimeMillis() + expiration);
    }

    private List<String> extractRoles(Collection<? extends GrantedAuthority> authorities) {
        List<String> roles = new ArrayList<>();
        for (GrantedAuthority authority : authorities) {
            roles.add(authority.getAuthority()); // Extract role name from GrantedAuthority
        }
        return roles;
    }
}
