package com.pedro256.docdoc.services;


import com.pedro256.docdoc.entities.UserEntity;
import com.pedro256.docdoc.repository.users.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private IUserRepository iUserRepository;

    public UUID createUser(UserEntity entity){
        this.iUserRepository.save(entity);
        return entity.getId();
    }
}
