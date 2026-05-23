import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  it("zeigt den text-Prop als Beschriftung", () => {
    render(<Button text="Klick mich" onClick={() => {}} />);
    expect(screen.getByText("Klick mich")).toBeInTheDocument();
  });

  it("ruft onClick auf, wenn geklickt wird", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button text="Klick mich" onClick={handleClick} />);

    await user.click(screen.getByText("Klick mich"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("ist deaktiviert, wenn disabled true ist", () => {
    render(<Button text="Antwort A" onClick={() => {}} disabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});