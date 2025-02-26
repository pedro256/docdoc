package com.pedro256.docdoc.repository.users;

import com.pedro256.docdoc.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IUserRepository extends JpaRepository<UserEntity, UUID> {

}
