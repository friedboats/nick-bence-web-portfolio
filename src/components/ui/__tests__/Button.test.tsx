import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

test("renders the button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/click me/i)).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const handleClick = jest.fn();
  const user = userEvent.setup();

  render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByText(/click me/i));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
