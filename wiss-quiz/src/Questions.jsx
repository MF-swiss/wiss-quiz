import { useState } from "react";
import Counter1 from "./Counter1";

function Questions() {
    const fragen = [
        {
            frage: "Was ist die Hauptstadt der Schweiz?",
            antworten: ["Bern", "Zürich", "Genf"],
            korrekt: 0
        },
        {
            frage: "Wie viele Kantone hat die Schweiz?",
            antworten: ["23", "26", "25"],
            korrekt: 1
        },
        {
            frage: "Welcher Fluss fliesst durch Basel?",
            antworten: ["Aare", "Rhein", "Reuss"],
            korrekt: 1
        },
        {
            frage: "Wann ist Wochenende?",
            antworten: ["Jetzt", "Jetzt", "Jetzt"],
            korrekt: [0, 1, 2]
        }
    ];

    const [aktuelleFrage, setAktuelleFrage] = useState(0);
    const [auswahl, setAuswahl] = useState(null);
    const [score, setScore] = useState(0);

    const frage = fragen[aktuelleFrage];


    const istRichtig = (idx) =>
        Array.isArray(frage.korrekt)
            ? frage.korrekt.includes(idx)
            : idx === frage.korrekt;

    const handleAntwort = (index) => {
        if (istRichtig(index)) {
            setScore((prev) => prev + 1);
        }
        setAuswahl(index);
        setTimeout(() => {
            setAuswahl(null);
            setAktuelleFrage((prev) => prev + 1);
        }, 1000);
    };

    if (aktuelleFrage >= fragen.length) {
        return (
            <div>
                <p>Quiz beendet! 🎉</p>
                <Counter1 count={score} />
            </div>
        );
    }

    return (
        <div>
            <Counter1 count={score} />
            <h3>{frage.frage}</h3>
            {frage.antworten.map((antwort, idx) => (
                <button
                    key={idx}
                    onClick={() => handleAntwort(idx)}
                    style={{
                        backgroundColor:
                            auswahl === idx
                                ? istRichtig(idx)
                                    ? "lightgreen"
                                    : "salmon"
                                : ""
                    }}
                    disabled={auswahl !== null}
                >
                    {antwort}
                </button>
            ))}
        </div>
    );
}

export default Questions;