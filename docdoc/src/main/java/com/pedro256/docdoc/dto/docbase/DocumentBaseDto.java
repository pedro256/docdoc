package com.pedro256.docdoc.dto.docbase;

import lombok.Data;
import java.util.UUID;

@Data
public class DocumentBaseDto {
    private UUID id;
    private String docType;
    private String title;
}
