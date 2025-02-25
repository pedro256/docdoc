package com.pedro256.docdoc.controllers;

import com.pedro256.docdoc.dto.realms.RealmItemDto;
import com.pedro256.docdoc.dto.requests.UpdateRealmReqDto;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.models.RealmEntity;
import com.pedro256.docdoc.repository.realm.RealmRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/realm")
public class RealmController {

    @Autowired
    private RealmRepository realmRepository;

    @PostMapping
    public RealmEntity createProduct(@RequestBody RealmEntity realmEntity) {
        return realmRepository.save(realmEntity);
    }
    @GetMapping
    public List<RealmItemDto> listRealms(){
        List<RealmEntity> data = realmRepository.findAll();
        ArrayList<RealmItemDto> realmDtos = new ArrayList<>();
        data.forEach(realm->{
            RealmItemDto dto = new RealmItemDto();
            dto.setId(realm.getId());
            dto.setName(realm.getName());
            dto.setDescription(realm.getDescription());
            realmDtos.add(dto);
        });
        return realmDtos;
    }
    @PutMapping()
    public Void updateRealm(@RequestBody @Valid UpdateRealmReqDto request) throws NotFoundException {
//        Optional<RealmEntity> searh = realmRepository.findById(UUID.fromString(request.id));
//        if(searh.isEmpty()){
//            throw new NotFoundException("Realm não encontrado");
//        }
//        RealmEntity realm = searh.get();
//        realm.setName(request.name);
//        realm.setDescription(request.description);
//
//        realmRepository.save(realm);
        return null;
    }



}
