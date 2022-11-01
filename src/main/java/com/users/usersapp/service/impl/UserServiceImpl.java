package com.users.usersapp.service.impl;

import com.users.usersapp.model.User;
import com.users.usersapp.repository.UserRepository;
import com.users.usersapp.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<User> getUsers() {
        return repository.findAll();
    }
}
