package com.pedro256.docdoc.dto.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class CreateDocBaseReqDto {
    @NotEmpty(message ="titulo requerido")
    @Size(min = 8,message = "titulo deve ter mais de 8 caracteres")
    public String title;

}
