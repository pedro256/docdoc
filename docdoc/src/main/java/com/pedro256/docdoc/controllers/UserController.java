package com.pedro256.docdoc.controllers;


import com.pedro256.docdoc.dto.requests.CreateUserReqDto;
import com.pedro256.docdoc.dto.requests.UpdateUserReqDto;
import com.pedro256.docdoc.dto.user.UserDto;
import com.pedro256.docdoc.entities.UserEntity;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.services.UserService;
import jakarta.validation.Valid;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("users")
public class UserController {



    @Autowired
    private UserService userService;

    @PutMapping
    public ResponseEntity updateUser(@Valid @RequestBody UpdateUserReqDto request) {
        UserDto user = new UserDto();
        user.setUsername(request.username);
        user.setName(request.name);
        user.setId(UUID.fromString(request.id));
        userService.updateUser(user);

        return ResponseEntity.noContent().build();
    }

    @PostMapping
    public ResponseEntity createUser(@Valid @RequestBody CreateUserReqDto request) throws BadRequestException {
        UserDto user = new UserDto();
        user.setUsername(request.username);
        user.setName(request.name);
        UUID id = userService.createUser(user);

        HashMap<String, Object> resp = new HashMap<>();
        resp.put("id",id);
        return ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }

    @GetMapping("/{id}")
    public ResponseEntity getOnUser(@PathVariable String id) throws NotFoundException {
        UserDto user = this.userService.getOne(id);
        return ResponseEntity.ok(user);
    }
}
