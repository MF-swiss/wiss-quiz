import { useState } from "react";

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
        }
    ];

    const [aktuelleFrage, setAktuelleFrage] = useState(0);
    const [auswahl, setAuswahl] = useState(null);

    const handleAntwort = (index) => {
        setAuswahl(index);
        setTimeout(() => {
            setAuswahl(null);
            setAktuelleFrage((prev) => prev + 1);
        }, 1000);
    };

    if (aktuelleFrage >= fragen.length) {
        return <div>Quiz beendet! 🎉</div>;
    }

    const frage = fragen[aktuelleFrage];

    return (
        <div>
            <h3>{frage.frage}</h3>
            {frage.antworten.map((antwort, idx) => (
                <button
                    key={idx}
                    onClick={() => handleAntwort(idx)}
                    style={{
                        backgroundColor:
                            auswahl === idx
                                ? idx === frage.korrekt
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