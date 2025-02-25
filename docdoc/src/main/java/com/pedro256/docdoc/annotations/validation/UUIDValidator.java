package com.pedro256.docdoc.annotations.validation;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.hibernate.validator.constraints.UUID;


public class UUIDValidator implements ConstraintValidator<UUID, String> {
    private static final String UUID_REGEX = "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$";

    @Override
    public void initialize(UUID constraintAnnotation) {
        // Pode ser utilizado para inicializar a anotação (não necessário neste caso)

    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        System.out.println("uuid validator");
        if (value == null || value.isEmpty()) {
            return false; // Se o valor for nulo ou vazio, considera inválido
        }
        return value.matches(UUID_REGEX); // Valida contra a regex do UUID
    }
}