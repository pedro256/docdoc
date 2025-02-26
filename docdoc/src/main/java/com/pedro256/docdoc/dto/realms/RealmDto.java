package com.pedro256.docdoc.dto.realms;

import lombok.Data;

import java.util.UUID;

@Data
public class RealmDto {
    private UUID id;
    private String name;
    private String description;
    private UUID createdBy;
}
