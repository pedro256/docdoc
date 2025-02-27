package com.pedro256.docdoc.dto.requests;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CreateDocPartDto {

    @UUIDValidation
    @NotEmpty(message = "Id documento deve ser informado")
    private String idDoc;
    @NotEmpty(message = "Conteudo deve ser informado!")
    private String content;


}
