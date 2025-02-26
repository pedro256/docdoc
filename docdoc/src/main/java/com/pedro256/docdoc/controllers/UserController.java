package com.pedro256.docdoc.controllers;


import com.pedro256.docdoc.dto.requests.CreateUserReqDto;
import com.pedro256.docdoc.entities.UserEntity;
import com.pedro256.docdoc.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("users")
public class UserController {



    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity createUser(@Valid @RequestBody CreateUserReqDto request) {
        UserEntity user = new UserEntity();
        user.setUsername(request.username);
        user.setName(request.name);
        UUID id = userService.createUser(user);

        HashMap<String, Object> resp = new HashMap<>();
        resp.put("id",id);
        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }
}
