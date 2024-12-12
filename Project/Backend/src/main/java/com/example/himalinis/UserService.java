package com.example.himalinis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public UserEntity saveUser(UserEntity user) {
        return userRepo.save(user);
    }
    
}
//    public List<UserEntity> getUsers() {
//        return userRepo.findAll();
//    }
//
//    public UserEntity findByEmail(String email) {
//        return userRepo.findByEmail(email);
//    }