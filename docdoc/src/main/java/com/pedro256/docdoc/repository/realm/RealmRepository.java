package com.pedro256.docdoc.repository.realm;

import com.pedro256.docdoc.models.RealmEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RealmRepository extends JpaRepository<RealmEntity, UUID> {
}
