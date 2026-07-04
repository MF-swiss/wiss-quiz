package ch.wiss.quizbackend.shop;

import java.util.List;

public record OrderDTO(
        Long id,
        String customerName,
        String shippingAddress,
        List<OrderItemDTO> items

) {
}
