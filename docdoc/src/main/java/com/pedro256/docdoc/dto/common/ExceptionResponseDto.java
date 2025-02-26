package com.pedro256.docdoc.dto.common;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ExceptionResponseDto {
    private Integer code;
    private HttpStatus httpCode;
    private String message;

    public ExceptionResponseDto(){
        this.code = 0;
        this.httpCode=HttpStatus.INTERNAL_SERVER_ERROR;
        this.message="Error !";
    }
    public ExceptionResponseDto(String message, HttpStatus httpCode){
        this.code =0;
        this.httpCode = httpCode;
        this.message = message;
    }
}
