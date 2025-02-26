package com.pedro256.docdoc.services;


import com.pedro256.docdoc.repository.realm.IRealmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class RealmService {

    @Autowired
    private IRealmRepository realmRepository;

    public Void deleteRealm(UUID id){
        realmRepository.deleteById(id);
        return null;
    }
}
