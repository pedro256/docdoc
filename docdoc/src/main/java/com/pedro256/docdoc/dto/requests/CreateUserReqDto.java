package com.pedro256.docdoc.dto.requests;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class CreateUserReqDto {

    @NotEmpty(message = "nome deve ser preenchido")
    @Size(min = 10, message = "nome de usuario muito pequeno")
    public String name;

    @NotEmpty(message = "Usuario deve ser informado!")
    @Size(min = 5, message = "Usuario deve conter mais de 5 caracteres")
    @Size(max = 15, message = "Usuario deve conter menos de 15 caracteres")
    public String username;
}
