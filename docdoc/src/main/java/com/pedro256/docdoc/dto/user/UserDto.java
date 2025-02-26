package com.pedro256.docdoc.dto.user;

import lombok.Data;

import java.util.UUID;

@Data
public class UserDto {

    private UUID id;
    private String name;
    private String username;
}
