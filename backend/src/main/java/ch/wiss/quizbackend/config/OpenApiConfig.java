package ch.wiss.quizbackend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Konfiguriert die Kopfdaten (Titel, Version, Beschreibung),
 * die Swagger UI oben anzeigt.
 */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI quizApiInfo() {
        return new OpenAPI()
                .info(new Info()
                        .title("Quiz API")
                        .version("1.0")
                        .description("REST-API für das WISS-Quiz-Backend (Modul M295)."));
    }
}