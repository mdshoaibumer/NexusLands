import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { PrimaryButton, GhostButton } from "./Button";

describe("Button Components", () => {
  it("PrimaryButton renders children and handles click", async () => {
    const handleClick = vi.fn();
    render(<PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>);
    
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("PrimaryButton renders as an anchor when href is provided", () => {
    render(<PrimaryButton href="https://example.com">Go to Site</PrimaryButton>);
    
    const link = screen.getByRole("link", { name: /go to site/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("GhostButton renders correctly", () => {
    render(<GhostButton href="/about">About Us</GhostButton>);
    
    const link = screen.getByRole("link", { name: /about us/i });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).not.toHaveAttribute("target", "_blank"); // Relative link
  });
});
