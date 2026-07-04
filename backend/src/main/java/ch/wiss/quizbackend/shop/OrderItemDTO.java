package ch.wiss.quizbackend.shop;


 import java.math.BigDecimal;


 public record OrderItemDTO(
       Long id,
       String productName,
       BigDecimal price,
       int quantity
 ) {
 }
