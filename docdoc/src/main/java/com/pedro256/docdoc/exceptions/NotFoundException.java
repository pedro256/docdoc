package com.pedro256.docdoc.exceptions;

public class NotFoundException extends Exception{

    public NotFoundException(){
        super("Não Encontrado");
    }
    public NotFoundException(String message){
        super(message);
    }
}
