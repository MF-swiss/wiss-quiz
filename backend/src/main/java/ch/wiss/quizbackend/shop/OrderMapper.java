package ch.wiss.quizbackend.shop;

import java.util.List;

/**
 * Wandelt Order-Entities in OrderDTOs um
 * (inkl. der verschachtelten Positionen).
 */
public class OrderMapper {

    private OrderMapper() {
        // statische Hilfsklasse, keine Instanzen
    }

    public static OrderDTO toDTO(Order order) {
        List<OrderItemDTO> itemDTOs = order.getItems().stream()
                .map(OrderMapper::toItemDTO)
                .toList();

        return new OrderDTO(
                order.getId(),
                order.getCustomerName(),
                order.getShippingAddress(),
                itemDTOs);
    }

    public static OrderItemDTO toItemDTO(OrderItem item) {
        return new OrderItemDTO(
                item.getId(),
                item.getProductName(),
                item.getPrice(),
                item.getQuantity());
    }
}
