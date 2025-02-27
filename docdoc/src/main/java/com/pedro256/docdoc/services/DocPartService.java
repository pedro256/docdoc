package com.pedro256.docdoc.services;

import com.pedro256.docdoc.dto.docpart.DocumentPartDto;
import com.pedro256.docdoc.entities.DocumentPartEntity;
import com.pedro256.docdoc.repository.docpart.IDocPartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class DocPartService {

    @Autowired
    private IDocPartRepository iDocPartRepository;

    public List<DocumentPartDto> getListPartsDocByDoc(UUID docId){
        List<DocumentPartEntity> parts = this.iDocPartRepository.findByReferenceDoc(docId);
        List<DocumentPartDto> partsDto = new ArrayList<>();
        parts.forEach(part->{
            DocumentPartDto partDto = new DocumentPartDto();
            partDto.setReferenceDoc(part.getReferenceDoc());
            partDto.setContent(part.getStrConteudo());
            partDto.setId(part.getId());
            partsDto.add(partDto);
        });
        return partsDto;
    }

    public Void deleteDocumentPart(UUID id){
        this.iDocPartRepository.deleteById(id);
        return null;
    }

    public UUID createDocumentPart(DocumentPartDto documentPartDto){
        DocumentPartEntity documentPartEntity = new DocumentPartEntity();
        documentPartEntity.setConteudoByStr(documentPartDto.getContent());
        documentPartEntity.setReferenceDoc(documentPartDto.getReferenceDoc());

        this.iDocPartRepository.save(documentPartEntity);
        return  documentPartEntity.getId();
    }
    public Void updateDocumentPart(DocumentPartDto documentPartDto){
        DocumentPartEntity documentPartEntity = new DocumentPartEntity();
        documentPartEntity.setId(documentPartDto.getId());
        documentPartEntity.setConteudoByStr(documentPartDto.getContent());
        documentPartEntity.setReferenceDoc(documentPartDto.getReferenceDoc());
        this.iDocPartRepository.save(documentPartEntity);
        return  null;
    }

    public Void updateContentDocumentPart(DocumentPartDto documentPartDto){
        DocumentPartEntity documentPartEntity = new DocumentPartEntity();
        documentPartEntity.setId(documentPartDto.getId());
        documentPartEntity.setConteudoByStr(documentPartDto.getContent());
        this.iDocPartRepository.save(documentPartEntity);
        return  null;
    }

}
