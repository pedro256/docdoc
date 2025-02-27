package com.pedro256.docdoc.dto.requests;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class UpdateDocPartReqDto {

    @NotEmpty(message = "Conteudo deve ser informado!")
    private String content;
}
