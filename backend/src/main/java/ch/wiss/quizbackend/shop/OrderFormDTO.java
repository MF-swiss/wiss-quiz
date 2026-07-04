package ch.wiss.quizbackend.shop;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

public record OrderFormDTO(
        @NotBlank(message = "customerName darf nicht leer sein") String customerName,

        @NotBlank(message = "shippingAddress darf nicht leer sein") String shippingAddress,

        @Valid // kaskadiert die Validierung in die Positionen (siehe Zusatzaufgabe 4)
        List<OrderItemFormDTO> items) {
}