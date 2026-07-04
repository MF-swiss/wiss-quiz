package ch.wiss.quizbackend.shop;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record OrderItemFormDTO(
        @NotBlank(message = "productName darf nicht leer sein") String productName,

        @Positive(message = "price muss positiv sein") BigDecimal price,

        @Positive(message = "quantity muss positiv sein") int quantity) {
}