package com.pedro256.docdoc.services;

import com.pedro256.docdoc.dto.docbase.DocumentBaseDto;
import com.pedro256.docdoc.dto.docbase.DocumentBaseItemDto;
import com.pedro256.docdoc.entities.DocumentBaseEntity;
import com.pedro256.docdoc.exceptions.NotFoundException;
import com.pedro256.docdoc.repository.docbase.IDocBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DocBaseService {

    @Autowired
    private IDocBaseRepository iDocBaseRepository;

    public UUID createDocumentBase(DocumentBaseDto documentBaseDto){
        DocumentBaseEntity docBaseEtt = new DocumentBaseEntity();
        docBaseEtt.setTitle(documentBaseDto.getTitle());
        docBaseEtt.setDocType(documentBaseDto.getDocType());
        this.iDocBaseRepository.save(docBaseEtt);
        return  docBaseEtt.getId();
    }
    public UUID updateDocumentBase(DocumentBaseDto documentBaseDto){
        DocumentBaseEntity docBaseEtt = new DocumentBaseEntity();
        docBaseEtt.setId(documentBaseDto.getId());
        docBaseEtt.setTitle(documentBaseDto.getTitle());
        docBaseEtt.setDocType(documentBaseDto.getDocType());
        this.iDocBaseRepository.save(docBaseEtt);
        return  docBaseEtt.getId();
    }
    public List<DocumentBaseItemDto> listaDocumentsBase(){
        List<DocumentBaseEntity>  docs = this.iDocBaseRepository.findAll();
        List<DocumentBaseItemDto> docDto = new ArrayList<>();
        docs.forEach(doc->{
            DocumentBaseItemDto t = new DocumentBaseItemDto();
            t.setTitle(doc.getTitle());
            t.setId(doc.getId());
            docDto.add(t);
        });
        return docDto;
    }

    public DocumentBaseDto getDocumentsBaseBy(UUID id) throws NotFoundException {
        Optional<DocumentBaseEntity> req = this.iDocBaseRepository.findById(id);
        if(req.isEmpty()){
            throw new NotFoundException("Documento não encontrado");
        }
        DocumentBaseEntity doc = req.get();
        DocumentBaseDto dto = new DocumentBaseDto();
        dto.setId(doc.getId());
        dto.setDocType(doc.getDocType());
        dto.setTitle(doc.getTitle());

        return dto;
    }
    public Void deletDocumentBase(String id){
        this.iDocBaseRepository.deleteById(UUID.fromString(id));
        return null;
    }
}
