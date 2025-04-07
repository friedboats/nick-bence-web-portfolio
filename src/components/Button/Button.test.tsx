import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with default (primary) styles', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click Me');
    expect(button.className).toMatch(/button-primary/i);
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/button-secondary/i);
  });

  it('applies link variant styles', () => {
    render(<Button variant="link">Link</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/button-link/i);
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies disabled styles and attribute', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.className).toMatch(/opacity-50|cursor-not-allowed/);
  });

  it('renders left and right icons', () => {
    const LeftIcon = () => <svg data-testid="icon-left" />;
    const RightIcon = () => <svg data-testid="icon-right" />;
    render(
      <Button iconLeft={<LeftIcon />} iconRight={<RightIcon />}>
        Icon Button
      </Button>,
    );
    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/custom-class/);
  });
});
