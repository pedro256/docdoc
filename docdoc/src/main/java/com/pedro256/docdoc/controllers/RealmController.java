package com.pedro256.docdoc.controllers;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import com.pedro256.docdoc.dto.realms.RealmDto;
import com.pedro256.docdoc.dto.realms.RealmItemDto;
import com.pedro256.docdoc.dto.requests.UpdateRealmReqDto;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.entities.RealmEntity;
import com.pedro256.docdoc.repository.realm.IRealmRepository;
import com.pedro256.docdoc.services.RealmService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/realm")
public class RealmController {

    @Autowired
    private IRealmRepository realmRepository;
    @Autowired
    private RealmService realmService;

    @PostMapping
    public RealmEntity createRealm(@RequestBody RealmEntity realmEntity) {
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
        Optional<RealmEntity> searh = realmRepository.findById(UUID.fromString(request.id));
        if(searh.isEmpty()){
            throw new NotFoundException("Realm não encontrado");
        }
        RealmEntity realm = searh.get();
        realm.setName(request.name);
        realm.setDescription(request.description);

        realmRepository.save(realm);
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteById(@PathVariable @UUIDValidation String id){
        this.realmService.deleteRealm(UUID.fromString(id));
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity getOnById(@PathVariable @UUIDValidation String id) throws NotFoundException {
        RealmDto realmDto = this.realmService.getOneById(UUID.fromString(id));
        return ResponseEntity.ok(realmDto);
    }



}