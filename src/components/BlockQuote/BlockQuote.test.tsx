import { render, screen } from '@testing-library/react';
import BlockQuote from './BlockQuote';

describe('BlockQuote', () => {
  it('renders the children correctly', () => {
    render(<BlockQuote quote="Test Quote" />);
    expect(screen.getByText('"Test Quote"')).toBeInTheDocument();
  });

  it('has the correct classes applied', () => {
    const { container } = render(<BlockQuote quote="Styled Quote" />);
    expect(container.firstChild).toHaveClass(
      'text-block-quote-mobile sm:text-block-quote text-body-secondary text-center',
    );
  });
});
