package com.pedro256.docdoc.repository.docpart;

import com.pedro256.docdoc.entities.DocumentPartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface IDocPartRepository extends JpaRepository<DocumentPartEntity, UUID> {

    List<DocumentPartEntity> findByReferenceDoc(UUID referenceDoc);

}
