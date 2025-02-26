package com.pedro256.docdoc.services;


import com.pedro256.docdoc.dto.realms.RealmDto;
import com.pedro256.docdoc.entities.RealmEntity;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.repository.realm.IRealmRepository;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class RealmService {

    @Autowired
    private IRealmRepository realmRepository;

    public Void deleteRealm(UUID id){
        realmRepository.deleteById(id);
        return null;
    }

    public RealmDto getOneById(UUID id) throws NotFoundException {
        Optional<RealmEntity> req = realmRepository.findById(id);
        if(req.isEmpty()){
            throw new NotFoundException("realm não encontrado");
        }
        RealmEntity realm = req.get();
        RealmDto dto = new RealmDto();
        dto.setId(realm.getId());
        dto.setName(realm.getName());
        dto.setDescription(realm.getDescription());
        dto.setCreatedBy(realm.getCreatedBy());
        return dto;

    }
}
