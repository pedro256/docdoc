package com.pedro256.docdoc.dto.requests;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UpdateDocBaseRefDto {

    @UUIDValidation
    public String id;
    @NotEmpty(message ="titulo requerido")
    @Size(min = 8,message = "titulo deve ter mais de 8 caracteres")
    public String title;


}
