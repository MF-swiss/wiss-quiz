package ch.wiss.quizbackend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Globale CORS-Konfiguration: erlaubt dem M294-Frontend den Zugriff
 * auf die /api-Endpoints.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // wir erlauben Zugriff auf alle Endpoints nach /api/
        registry.addMapping("/api/**")
                // nur unser FE darf zugreifen alle anderen Seiten nicht
                .allowedOrigins("http://localhost:5173")
                // wir entscheiden welche Operationen wir zulassen
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                // erlaubt u.a. den Content-Type: application/json-Header,
                // den POST/PUT schicken.
                .allowedHeaders("*");
    }
}
