package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String email;
    private String firstName;
    private String lastName;
    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    private boolean approved = false;

    /**
     * @return 
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
    /**
     * @return
     */
    @Override
    public String getUsername() {
        return username;
    }
    /**
     * @return
     */
    @Override
    public String getPassword() {
        return password;
    }

    /**
     * @return 
     */
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    /**
     * @return 
     */
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    /**
     * @return 
     */
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    /**
     * @return 
     */
    @Override
    public boolean isEnabled() {
        return true;
    }
}

