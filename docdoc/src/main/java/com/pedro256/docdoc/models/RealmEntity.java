package com.pedro256.docdoc.models;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter

public class RealmEntity {
    private String id;
    private String name;
    private String description;
    private Date createdAt;
    private Date updatedAt;
}
