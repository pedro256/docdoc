package com.pedro256.docdoc.dto;

import org.springframework.http.HttpStatus;

import java.util.Optional;

public class ExceptionDto {
    private Integer code;
    private HttpStatus httpCode;
    private String message;

    public ExceptionDto(){
        this.code = 0;
        this.httpCode=HttpStatus.INTERNAL_SERVER_ERROR;
        this.message="Error !";
    }
    public ExceptionDto(String message, HttpStatus httpCode){
        this.code =0;
        this.httpCode = httpCode;
        this.message = message;
    }
}
