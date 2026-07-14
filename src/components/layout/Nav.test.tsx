import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Nav } from "./Nav";

// Mock @tanstack/react-router
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to }: any) => <a href={to}>{children}</a>,
}));

// Mock motion
vi.mock("motion/react", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
}));

describe("Nav Component", () => {
  it("renders navigation links", () => {
    render(<Nav />);
    
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Services").length).toBeGreaterThan(0);
    expect(screen.getAllByText("About").length).toBeGreaterThan(0);
  });
});
