package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.Exceptions.UsernameAlreadyExistsException;

public interface UserService {
    User registerUser(User user) throws UsernameAlreadyExistsException;

}
