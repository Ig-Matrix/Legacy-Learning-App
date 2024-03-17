package com.example.demo.Services;

import com.example.demo.Entity.User;

public interface UserService {
    User registerUser(User user) throws UsernameAlreadyExistsException;

}
