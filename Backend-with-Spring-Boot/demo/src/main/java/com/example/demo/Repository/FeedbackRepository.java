package com.example.demo.Repository;

import com.example.demo.Entity.FeedbackResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackResponse, Long> {
}
