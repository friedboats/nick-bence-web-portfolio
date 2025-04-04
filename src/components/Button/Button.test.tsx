import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders the button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByText(/click me/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies default primary variant', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('text-button-primary-default');
    expect(button).toHaveClass('bg-surface-button-primary-default');
  });

  it('applies correct styles for primary variant', () => {
    render(<Button variant="primary">Click me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('text-button-primary-default');
    expect(button).toHaveClass('bg-surface-button-primary-default');
  });

  it('applies correct styles for secondary variant', () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('text-button-secondary-default');
    expect(button).toHaveClass('bg-surface-button-secondary-default');
  });

  it('applies correct styles for link variant', () => {
    render(<Button variant="link">Click me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('text-button-link-default');
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>,
    );

    await userEvent.click(screen.getByText(/click me/i));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies disabled styles', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByText(/click me/i);
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
  });
});
