package com.pedro256.docdoc.controllers;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import com.pedro256.docdoc.dto.docpart.DocumentPartDto;
import com.pedro256.docdoc.dto.requests.CreateDocPartDto;
import com.pedro256.docdoc.dto.requests.UpdateDocPartReqDto;
import com.pedro256.docdoc.services.DocPartService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/document-part")
public class DocPartController {


    @Autowired
    private DocPartService docPartService;

    @GetMapping("/{idDoc}")
    public ResponseEntity getDocParts(@UUIDValidation @PathVariable String idDoc){
        List<DocumentPartDto> documents = this.docPartService.getListPartsDocByDoc(UUID.fromString(idDoc));
        return  ResponseEntity.ok(documents);
    }

    @PostMapping
    public ResponseEntity documentPartCreate(@Valid @RequestBody CreateDocPartDto request){
        DocumentPartDto partDto = new DocumentPartDto();
        partDto.setReferenceDoc(UUID.fromString(request.getIdDoc()));
        partDto.setContent(request.getContent());
        UUID id =  this.docPartService.createDocumentPart(partDto);
        HashMap<String, Object> resp = new HashMap<>();
        resp.put("id",id);
        return  ResponseEntity.status(HttpStatus.CREATED).body(resp);
    }

    @PatchMapping("/{idDocPar}")
    public ResponseEntity updateContent(
            @UUIDValidation @PathVariable String idDoc,
            @Valid @RequestBody UpdateDocPartReqDto request){
        DocumentPartDto partDto = new DocumentPartDto();
        partDto.setReferenceDoc(UUID.fromString(idDoc));
        partDto.setContent(request.getContent());
        this.docPartService.updateContentDocumentPart(partDto);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/{idDocPar}")
    public  ResponseEntity deleteContent(@UUIDValidation @PathVariable String idDocPart){
        this.docPartService.deleteDocumentPart(UUID.fromString(idDocPart));
        return ResponseEntity.noContent().build();
    }

}
