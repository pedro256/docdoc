package com.pedro256.docdoc.controllers;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/document-part")
public class DocPartController {


    @GetMapping("/{idDoc}")
    public ResponseEntity getDocParts(@UUIDValidation @PathVariable String idDoc){
        return  ResponseEntity.noContent().build();
    }

}
