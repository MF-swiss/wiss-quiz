# Installationsanleitung für `wiss-quiz`

Diese Anleitung beschreibt, wie du das Quiz-Projekt lokal oder mit Docker startest.

## Voraussetzungen

### Für die lokale Installation
- **Java 21** oder neuer
- **Node.js 20** oder neuer
- **npm**
- **PostgreSQL 16** oder ein passender PostgreSQL-Container

### Für die Docker-Variante
- **Docker**
- **Docker Compose**

## Projektstruktur kurz erklärt

- `backend/` – Spring Boot Backend
- `frontend/` – React/Vite Frontend
- `docker-compose.yml` – startet Datenbank, Backend und Frontend zusammen

## Variante A: Empfohlen mit Docker

Das ist die einfachste Variante, weil die Datenbank direkt mitgestartet wird.

### 1. Projekt starten
Im Projektordner:

- `docker compose up --build`

### 2. Dienste öffnen
- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:8080`
- **Swagger/OpenAPI:** meist unter `http://localhost:8080/swagger-ui.html` oder `http://localhost:8080/swagger-ui/index.html`

### 3. Datenbank
Die Compose-Datei startet automatisch:

- PostgreSQL auf **Port 5433**
- Benutzer: `quizUser`
- Passwort: `quizPW`
- Datenbank: `quizdb`

## Variante B: Lokal ohne Docker

Diese Variante ist nützlich, wenn du Backend und Frontend getrennt entwickeln willst.

### 1. PostgreSQL starten
Die Backend-Konfiguration erwartet standardmäßig:

- Host: `localhost`
- Port: `5433`
- Datenbank: `quizdb`
- Benutzer: `quizUser`
- Passwort: `quizPW`

Du kannst dafür entweder:

- eine lokale PostgreSQL-Instanz aufsetzen, oder
- nur die Datenbank per Docker starten.

Beispiel:

- `docker compose up postgres -d`

### 2. Backend installieren und starten
Wechsle in den Ordner `backend/` und starte das Backend mit dem Maven-Wrapper.

- Windows: `& .\\mvnw.cmd spring-boot:run`
- macOS/Linux: `./mvnw spring-boot:run`

Falls du die Tests ausführen willst:

- Windows: `& .\\mvnw.cmd test`
- macOS/Linux: `./mvnw test`

### 3. Frontend installieren und starten
- `npm install`
- `npm run dev`

Danach ist das Frontend normalerweise unter:

- `http://localhost:5173`

## Optional: Frontend-API konfigurieren

Das Frontend verwendet standardmäßig das Backend unter:

- `http://localhost:8080/api`

Wenn dein Backend auf einer anderen Adresse läuft, kannst du im `frontend/` eine `.env`-Datei anlegen:

- `VITE_API_URL=http://localhost:8080/api`

## Empfohlene Startreihenfolge

Wenn du lokal arbeitest:

1. Datenbank starten
2. Backend starten
3. Frontend starten

## Projekt prüfen

### Backend testen
Im Ordner `backend/`:

- `.mvnw.cmd test`

### Frontend bauen
Im Ordner `frontend/`:

- `npm run build`

### Frontend testen
Im Ordner `frontend/`:

- `npm run test`

## Häufige Probleme

### Backend startet nicht wegen Datenbankfehler
Prüfe, ob PostgreSQL läuft und ob Port `5433` frei ist.

### Frontend findet das Backend nicht
Prüfe:

- läuft das Backend auf `http://localhost:8080`?
- ist `VITE_API_URL` korrekt gesetzt?

### Docker-Container starten nicht
Prüfe, ob Docker Desktop läuft und ob keine anderen Prozesse bereits die Ports `5173`, `8080` oder `5433` belegen.

## Kurzfassung

Am einfachsten ist:

1. `docker compose up --build`
2. Browser öffnen: `http://localhost:5173`

Dann solltest du direkt mit dem Quiz loslegen können.