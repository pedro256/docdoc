package com.pedro256.docdoc.dto.requests;

import com.pedro256.docdoc.annotations.validation.UUIDValidation;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UpdateUserReqDto {
    @UUIDValidation
    public String id;


    @NotEmpty(message = "nome deve ser preenchido")
    @Size(min = 10, message = "nome de usuario muito pequeno")
    public String name;

//    @NotEmpty(message = "Usuario deve ser informado!")
//    @Size(min = 5, message = "Usuario deve conter mais de 5 caracteres")
//    @Size(max = 15, message = "Usuario deve conter menos de 15 caracteres")
//    public String username;
}
