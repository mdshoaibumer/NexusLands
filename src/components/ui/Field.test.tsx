import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Field } from "./Field";

describe("Field Component", () => {
  it("renders an input field by default", () => {
    render(<Field label="Full Name" name="fullName" />);
    
    const input = screen.getByRole("textbox", { name: /full name/i });
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
  });

  it("renders a textarea when 'as' is textarea", () => {
    render(<Field label="Message" name="message" as="textarea" />);
    
    const textarea = screen.getByRole("textbox", { name: /message/i });
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("passes required attribute correctly", () => {
    render(<Field label="Email" name="email" type="email" required />);
    
    const input = screen.getByRole("textbox", { name: /email/i });
    expect(input).toBeRequired();
  });
});
