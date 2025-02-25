package com.pedro256.docdoc.exceptions;

import com.pedro256.docdoc.dto.ExceptionDto;
import jakarta.validation.ValidationException;
import org.apache.coyote.BadRequestException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(HttpClientErrorException.NotFound.class)
    public ResponseEntity<ExceptionDto> NotFoundException(HttpClientErrorException.NotFound e){

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ExceptionDto(e.getMessage(),HttpStatus.NOT_FOUND)
        );
    }

    @ExceptionHandler(HttpClientErrorException.Forbidden.class)
    public ResponseEntity<ExceptionDto> ForbiddenException(HttpClientErrorException.Forbidden e){

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
                new ExceptionDto(e.getMessage(),HttpStatus.FORBIDDEN)
        );
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ExceptionDto> BadRequestException(BadRequestException e){

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ExceptionDto(e.getMessage(),HttpStatus.BAD_REQUEST)
        );
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ExceptionDto> IllegalArgumentException(IllegalArgumentException e){

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ExceptionDto(e.getMessage(),HttpStatus.BAD_REQUEST)
        );
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ExceptionDto> DataIntegrityViolationException(DataIntegrityViolationException e){

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ExceptionDto(e.getMessage(),HttpStatus.BAD_REQUEST)
        );
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity<ExceptionDto> ViolationException(ValidationException e){

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ExceptionDto(e.getMessage(),HttpStatus.BAD_REQUEST)
        );
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();

        for (FieldError error : ex.getBindingResult().getFieldErrors()) {
            errors.put("message", error.getDefaultMessage());
        }

        return ResponseEntity.badRequest().body(errors);
    }
}
