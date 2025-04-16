import { fireEvent, render, screen } from '@testing-library/react';
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

  it('applies icon-only styles when isIconOnly is true', () => {
    render(
      <Button
        iconLeft={<span>Icon</span>}
        isIconOnly
        variant="primary"
        aria-label="Icon button"
      />,
    );

    const button = screen.getByRole('button');
    expect(screen.getByText('Icon')).toBeInTheDocument();

    // Confirm it includes the !px-2 class from iconBtnOnlyStyles
    expect(button.className).toMatch(/!px-2/);

    // Confirm the text label is not present
    expect(button).not.toHaveTextContent(/icon-only/i);
  });
});
