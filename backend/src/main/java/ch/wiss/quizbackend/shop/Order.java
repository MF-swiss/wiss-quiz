package ch.wiss.quizbackend.shop;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Eine Bestellung mit mehreren Positionen.
 * Inverse Seite der Beziehung (hält den Fremdschlüssel NICHT).
 */
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;

    private String shippingAddress;

    // mappedBy zeigt auf das Feld "order" in OrderItem.
    // cascade: Positionen werden mit der Bestellung gespeichert/gelöscht.
    // orphanRemoval: aus der Liste entfernte Positionen werden gelöscht.
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> items = new ArrayList<>();

    public Order() {
    }

    public Order(String customerName, String shippingAddress) {
        this.customerName = customerName;
        this.shippingAddress = shippingAddress;
    }

    /**
     * Fügt eine Position hinzu und hält BEIDE Seiten
     * der Beziehung synchron.
     */
    public void addItem(OrderItem item) {
        items.add(item);
        item.setOrder(this);
    }

    public void removeItem(OrderItem item) {
        items.remove(item);
        item.setOrder(null);
    }

    // --- Getter / Setter ---
}
