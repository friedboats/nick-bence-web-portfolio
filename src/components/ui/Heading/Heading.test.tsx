import { render, screen } from '@testing-library/react';
import Heading from '../Heading';

describe('Heading Component', () => {
  it('renders the correct default heading tag (h1)', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H1');
  });

  it('renders the correct heading tag based on the "as" prop', () => {
    render(<Heading as="h3">Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H3');
  });

  it('renders the correct class names based on the "as" prop', () => {
    render(<Heading as="h2">Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('font-heading text-h2-mobile sm:text-h2');
  });

  it('applies the custom color class', () => {
    render(<Heading color="text-custom-color">Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('text-custom-color');
  });

  it('renders a display heading with h2 as the actual tag', () => {
    render(<Heading as="display">Test Display</Heading>);
    const heading = screen.getByText('Test Display');
    expect(heading.tagName).toBe('H2'); // Display should render as h2
    expect(heading).toHaveClass(
      'font-heading text-display-size-mobile sm:text-display-size',
    );
  });
});
