package com.example.demo.Repository;

import com.example.demo.Entity.ApprovedEmail;
import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ApprovedEmailRepository extends JpaRepository<ApprovedEmail, Long> {
    boolean existsByEmail(String email);

//    Optional<User> findByEmail(String email);
}
