package com.users.usersapp.service;

import com.users.usersapp.model.User;

import java.util.List;

public interface UserService {
    User addUser(User user);

    void deleteUser(Long id);

    List<User> getUsers();
}
