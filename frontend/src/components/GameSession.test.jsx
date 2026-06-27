import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameSession from "./GameSession";

const mockQuestions = [
  {
    text: "Welche Farbe hat der Himmel?",
    answers: ["Rot", "Blau", "Grün", "Gelb"],
    correctAnswer: "Blau",
  },
  {
    text: "Wieviele Beine hat eine Spinne?",
    answers: ["6", "8", "10"],
    correctAnswer: "8",
  },
];

describe("GameSession", () => {
  it("zeigt die erste Frage und alle Antworten", () => {
    render(<GameSession questions={mockQuestions} />);

    expect(screen.getByText("Welche Farbe hat der Himmel?")).toBeInTheDocument();
    expect(screen.getByText("Rot")).toBeInTheDocument();
    expect(screen.getByText("Blau")).toBeInTheDocument();
    expect(screen.getByText("Grün")).toBeInTheDocument();
    expect(screen.getByText("Gelb")).toBeInTheDocument();
  });

  it("zeigt 'Richtig!' nach korrekter Antwort", async () => {
    const user = userEvent.setup();
    render(<GameSession questions={mockQuestions} />);

    await user.click(screen.getByText("Blau"));

    expect(screen.getByText(/richtig/i)).toBeInTheDocument();
  });

  it("zeigt eine 'Falsch'-Nachricht nach falscher Antwort", async () => {
    const user = userEvent.setup();
    render(<GameSession questions={mockQuestions} />);

    await user.click(screen.getByText("Rot"));

    expect(screen.getByText(/falsch/i)).toBeInTheDocument();
  });
});