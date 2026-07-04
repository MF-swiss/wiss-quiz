package ch.wiss.quizbackend.shop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;

/**
 * Legt Beispiel-Bestellungen an, falls die Tabelle leer ist.
 */
@Component
public class ShopDataSeeder implements CommandLineRunner {
    private final OrderRepository orderRepository;

    public ShopDataSeeder(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public void run(String... args) {
        if (orderRepository.count() > 0) {
            return; // schon geseedet, nichts tun
        }

        Order order1 = new Order("Anna Muster", "Bahnhofstrasse 1, 8001 Zürich");
        order1.addItem(new OrderItem("Tastatur", new BigDecimal("49.90"), 1));
        order1.addItem(new OrderItem("Maus", new BigDecimal("19.90"), 2));

        Order order2 = new Order("Beat Beispiel", "Seestrasse 12, 8002 Zürich");
        order2.addItem(new OrderItem("Monitor", new BigDecimal("199.00"), 1));

        // Nur die Bestellung speichern - die Positionen kommen
        // dank cascade = ALL automatisch mit.
        orderRepository.save(order1);
        orderRepository.save(order2);
    }
}