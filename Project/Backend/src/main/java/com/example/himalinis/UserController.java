package com.example.himalinis;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private TransportService transportService;
    
    @PostMapping("/user")
    public UserEntity getintouch(@RequestBody UserEntity user) {
        return userService.saveUser(user);
    }
    
    @GetMapping("/search")
    public List<TransportEntity> searchTransport(
        @RequestParam String destination,
        @RequestParam String serviceType
    ) {
        return transportService.searchTransport(destination, serviceType);
    }
    
}
