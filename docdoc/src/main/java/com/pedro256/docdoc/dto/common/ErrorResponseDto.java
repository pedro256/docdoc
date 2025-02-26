package com.pedro256.docdoc.dto.common;

public class ErrorResponseDto {
    public int code;
    public int httpCode;
    public String message;

    public ErrorResponseDto(){
        this.code=0;
        this.httpCode=500;
        this.message="Error";
    }
}
