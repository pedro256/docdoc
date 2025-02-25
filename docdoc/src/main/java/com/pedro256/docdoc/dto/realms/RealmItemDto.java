package com.pedro256.docdoc.dto.realms;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.UUID;

@Data
public class RealmItemDto {

    
    private UUID id;
    private String name;
    private String description;

}
