package com.pedro256.docdoc.controllers;


import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import com.pedro256.docdoc.dto.docbase.DocumentBaseDto;
import com.pedro256.docdoc.dto.docbase.DocumentBaseItemDto;
import com.pedro256.docdoc.dto.requests.CreateDocBaseReqDto;
import com.pedro256.docdoc.dto.requests.UpdateDocBaseRefDto;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.services.DocBaseService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/document-base")
public class DocumentBAseController {

    @Autowired
    private DocBaseService docBaseService;
    @PostMapping
    public ResponseEntity createDoc(@Valid @RequestBody CreateDocBaseReqDto docBaseReqDto) {
        DocumentBaseDto documentBaseDto = new DocumentBaseDto();
        documentBaseDto.setTitle(docBaseReqDto.title);
        UUID id =  docBaseService.createDocumentBase(documentBaseDto);
        HashMap<String, Object> resp = new HashMap<>();
        resp.put("id",id);
        return ResponseEntity.ok(resp);
    }
    @PutMapping
    public ResponseEntity updateDocuments(@Valid @RequestBody UpdateDocBaseRefDto docBaseReqDto) {
        DocumentBaseDto documentBaseDto = new DocumentBaseDto();
        documentBaseDto.setId(UUID.fromString(docBaseReqDto.id));
        documentBaseDto.setTitle(docBaseReqDto.title);
        docBaseService.updateDocumentBase(documentBaseDto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteDocument(@PathVariable @UUIDValidation String id){
        this.docBaseService.deletDocumentBase(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping
    public ResponseEntity lisDocuments() {
        List<DocumentBaseItemDto> l =  docBaseService.listaDocumentsBase();
        return ResponseEntity.ok(l);
    }

    @GetMapping("/{id}")
    public ResponseEntity findOnById(@PathVariable @UUIDValidation String id) throws NotFoundException {
        DocumentBaseDto d =  docBaseService.getDocumentsBaseBy(UUID.fromString(id));
        return ResponseEntity.ok(d);
    }


}
