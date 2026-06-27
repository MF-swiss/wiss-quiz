package ch.wiss.quizbackend.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.List;

/**
 * Eine Quizfrage mit ihren Antwortmöglichkeiten.
 * <p>
 * Diese Klasse ist eine JPA-Entity und wird von Hibernate auf die Tabelle
 * "questions" abgebildet. Jede Instanz entspricht einer Zeile dieser Tabelle.
 */
@Entity
@Table(name = "questions")
public class Question {

    /**
     * Eindeutige ID der Frage. Wird manuell gesetzt (passend zum M294-Frontend).
     */
    @Id
    private String id;

    /** Der Fragetext, der dem Nutzer angezeigt wird. */
    private String text;

    /** Themengebiet der Frage, z.B. "Sport" oder "Geografie". */
    private String category;

    /** Schwierigkeitsgrad, z.B. "leicht", "mittel" oder "schwer". */
    private String difficulty;

    /**
     * Die möglichen Antworten als einfache Liste von Texten. Mit
     * {@code @ElementCollection} legt Hibernate dafür die Tabelle
     * "question_answers" an. Die Liste wird {@code EAGER} geladen, weil
     * eine Frage ohne ihre Antworten nutzlos ist.
     */
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> answers;

    /** Die korrekte Antwort. Entspricht einem Eintrag aus {@link #answers}. */
    private String correctAnswer;

    /**
     * Parameterloser Konstruktor, den JPA/Hibernate zwingend benötigt.
     */
    public Question() {
    }

    // Behalte deinen bestehenden Konstruktor mit Parametern aus 02B!
    // (Der Service nutzt ihn, um die hartcodierten Fragen zu bauen.)

    // ... deine Getter und Setter bleiben unverändert ...

    public Question(String id, String text, String category, String difficulty, List<String> answers,
            String correctAnswer) {
        this.id = id;
        this.text = text;
        this.category = category;
        this.difficulty = difficulty;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    public String getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public String getCategory() {
        return category;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}