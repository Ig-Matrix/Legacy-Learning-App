package com.example.demo.Services;

import com.example.demo.Entity.User;

public interface UserService {
    boolean authenticate(String username, String password);
    User registerUser(User user) throws UsernameAlreadyExistsException;

}
