package com.pedro256.docdoc.repository.realm;

import com.pedro256.docdoc.entities.RealmEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IRealmRepository extends JpaRepository<RealmEntity, UUID> {
}
