package com.pedro256.docdoc.dto.requests;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class UpdateRealmReqDto {

    @NotEmpty(message = "Id Requerido")
    @UUIDValidation(message = "Pufavir")
    public String id;

    @NotBlank(message = "Nome requerido")
    public String name;
    @NotBlank(message = "Descricao requerida")
    public String description;
}
