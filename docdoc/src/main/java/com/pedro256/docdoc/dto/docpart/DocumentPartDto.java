package com.pedro256.docdoc.dto.docpart;

import lombok.Data;

import java.util.UUID;

@Data
public class DocumentPartDto {
    private UUID id;
    private UUID referenceDoc;
    private String content;
}
