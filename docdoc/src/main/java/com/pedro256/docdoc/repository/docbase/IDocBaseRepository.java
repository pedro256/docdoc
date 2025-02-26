package com.pedro256.docdoc.repository.docbase;

import com.pedro256.docdoc.entities.DocumentBaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IDocBaseRepository extends JpaRepository<DocumentBaseEntity, UUID> {
}
