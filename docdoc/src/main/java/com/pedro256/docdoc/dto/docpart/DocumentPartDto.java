package com.pedro256.docdoc.dto.docpart;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Data
@Getter
@Setter
public class DocumentPartDto {
    private UUID id;
    private UUID referenceDoc;
    private String content;
}
