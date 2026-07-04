package ch.wiss.quizbackend.shop;

import jakarta.persistence.*;
import java.math.BigDecimal;

/**
 * Eine einzelne Position innerhalb einer Bestellung.
 * Hält den Fremdschlüssel zur Bestellung (Owning Side).
 */
@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;

    // Geld immer mit BigDecimal, nie mit double.
    // precision/scale verhindern, dass Rappen abgeschnitten werden.
    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    private int quantity;

    // Die Many-Seite hält den Fremdschlüssel: Spalte order_id.
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    // Leerer Konstruktor für JPA
    public OrderItem() {
    }

    public OrderItem(String productName, BigDecimal price, int quantity) {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    // --- Getter / Setter ---
}
