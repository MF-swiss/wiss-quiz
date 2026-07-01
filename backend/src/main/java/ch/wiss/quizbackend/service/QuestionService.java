package ch.wiss.quizbackend.service;

import ch.wiss.quizbackend.dto.QuestionFormDTO;
import ch.wiss.quizbackend.exception.QuestionNotFoundException;
import ch.wiss.quizbackend.mapper.QuestionMapper;
import ch.wiss.quizbackend.model.Question;
import ch.wiss.quizbackend.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Service-Schicht für Fragen. Kapselt die Geschäftslogik und
 * vermittelt zwischen Controller und Repository.
 */
@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    /**
     * Liefert alle Fragen aus der Datenbank.
     * @return
     */
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    /**
     * Lädt eine einzelne Frage anhand ihrer ID.
     *
     * <p>Diese Methode wird vom Frontend genutzt, um die Detailansicht
     * einer Frage zu füllen.</p>
     *
     * <p>Mögliche Antworten:</p>
     * <ul>
     *   <li><b>200 OK</b> – die Frage wurde gefunden</li>
     *   <li><b>404 Not Found</b> – keine Frage mit dieser ID</li>
     * </ul>
     *
     * <p>Beispielaufruf:</p>
     * <pre>{@code GET /api/questions/42}</pre>
     *
     * @param id die eindeutige ID der Frage, z.B. {@code "42"}
     * @return die gefundene {@link Question}
     * @throws QuestionNotFoundException wenn keine Frage mit dieser ID existiert
     * @see QuestionService#getQuestionById(String)
     */
    public Question getQuestionById(String id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new QuestionNotFoundException(id));
    }

    /**
     * Erstellt eine neue Frage aus den übergebenen Formulardaten.
     * Die ID wird serverseitig generiert.
     * @param form die validierten Eingabedaten der neuen Frage
     * @return die gespeicherte {@link Question} inklusive generierter ID
     */
    public Question createQuestion(QuestionFormDTO form) {
        String id = UUID.randomUUID().toString();
        Question question = QuestionMapper.toEntity(id, form);
        return questionRepository.save(question);
    }


    /**
     * Aktualisiert eine bestehende Frage. Die id stammt aus der URL
     * und ist damit die einzige Quelle der Wahrheit.
     * @param id die ID der gesuchten Frage
     * @param form die validierten Eingabedaten der zu aktualisierenden Frage
     * @return die aktualiserte {@link Question} mit der gesuchten ID
     * @throws QuestionNotFoundException wenn keine Frage mit dieser ID existiert
     */
    public Question updateQuestion(String id, QuestionFormDTO form) {
        if(!questionRepository.existsById(id)) {
            throw new QuestionNotFoundException(id);
        }

        Question question = QuestionMapper.toEntity(id, form);
        return questionRepository.save(question);
    }


    /**
     * Löscht die Frage mit der angegebenen id aus der Datenbank.
     */
    public void deleteQuestion(String id) {
        if(!questionRepository.existsById(id)) {
            throw new QuestionNotFoundException(id);
        }
        questionRepository.deleteById(id);
    }

    /**
     * Liefert alle Fragen einer bestimmten Kategorie.
     * @param category die gewünschte Kategorie der Fragen
     * @return die {@link List<Question>} der gesuchten Kategorie
     */
    public List<Question> getQuestionByCategory(String category) {
        return questionRepository.findByCategory(category);
    }

    /**
     * Liefert alle Fragen einer bestimmten Schwierigkeit.
     * @param difficulty die gewünschte Schwierigkeit der Fragen
     * @return die {@link List<Question>} der gesuchten Schwierigkeit
     */
    public List<Question> getQuestionsByDifficulty(String difficulty) {
        return questionRepository.findByDifficulty(difficulty);
    }


//    public List<Question> getRandomQuestions(String category, int count) {
//        List<Question> pool = (category == null) ? questionRepository.findAll() : questionRepository.findByCategory(category);
//
//        List<Question> shuffledPool = new ArrayList<>(pool);
//        Collections.shuffle(shuffledPool);
//
//        return shuffledPool.stream().limit(count).toList();
//    }
//
//    public List<Question> getRandomQuestions(String difficulty, int count) {
//        List<Question> pool = (difficulty == null) ? questionRepository.findAll() : questionRepository.findByDifficulty(difficulty);
//
//        List<Question> shuffledPool = new ArrayList<>(pool);
//        Collections.shuffle(shuffledPool);
//
//        return shuffledPool.stream().limit(count).toList();
//    }


    /**
     * Gibt eine Liste von zufälligen Fragen zurück.
     * @param category Optional die Kategorie der zufälligen Fragen
     * @param difficulty Optional die Schwierigkeit der zufälligen Fragen
     * @param count Optional die Anzahl der Fragen
     * @return die {@link List<Question>} der zufälligen Fragen
     */
    public List<Question> getRandomQuestions(String category, String difficulty, int count) {
        List<Question> pool;

        if (category != null && difficulty != null) {
            pool = questionRepository.findByCategoryAndDifficulty(category, difficulty);
        } else if (category != null) {
            pool = questionRepository.findByCategory(category);
        } else if (difficulty != null) {
            pool = questionRepository.findByDifficulty(difficulty);
        } else {
            pool = questionRepository.findAll();
        }

        List<Question> shuffledPool = new ArrayList<>(pool);
        Collections.shuffle(shuffledPool);
        return shuffledPool.stream().limit(count).toList();
    }

//    public List<Question> getRandomQuestions(String category, String difficulty, int count) {
//        List<Question> pool = Optional.ofNullable(category)
//                .flatMap(cat -> Optional.ofNullable(difficulty)
//                    .map(diff -> questionRepository.findByCategoryAndDifficulty(cat, diff))
//                    .or(() -> Optional.ofNullable(questionRepository.findByCategory(cat)))
//                )
//                .orElseGet(() -> Optional.ofNullable(difficulty)
//                        .map(questionRepository::findByDifficulty)
//                        .orElseGet(questionRepository::findAll)
//                );
//
//        List<Question> shuffledPool = new ArrayList<>(pool);
//        Collections.shuffle(shuffledPool);
//
//        return shuffledPool.stream().limit(count).toList();
//    }

}