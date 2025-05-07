import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button component", () => {
  it("renders primary button by default", () => {
    render(<Button>Click Me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("bg-[#c9ff36]");
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Edit</Button>);
    const btn = screen.getByRole("button", { name: /edit/i });
    expect(btn).toHaveClass("border");
    expect(btn).toHaveClass("text-[#c9ff36]");
  });

  it("handles click event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Tap</Button>);
    fireEvent.click(screen.getByText(/tap/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByText("Disabled");
    expect(btn).toBeDisabled();
  });
});