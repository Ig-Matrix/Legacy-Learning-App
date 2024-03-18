package com.example.demo.Entity;

import com.example.demo.Entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserPrincipal implements UserDetails {
    private final String username;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public UserPrincipal(User user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.authorities = Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        // Implement logic for account expiration
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // Implement logic for account locking
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // Implement logic for credential expiration
        return true;
    }

    @Override
    public boolean isEnabled() {
        // Implement logic for account enabled/disabled status
        return true;
    }
}
