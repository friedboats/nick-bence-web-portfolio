import { render, screen } from '@testing-library/react';
import BlockQuote from './BlockQuote';

describe('BlockQuote', () => {
  it('renders the quote text correctly', () => {
    render(<BlockQuote quote="Test Quote" />);
    expect(screen.getByText('Test Quote')).toBeInTheDocument();
  });

  it('has the correct classes applied to the quote text', () => {
    render(<BlockQuote quote="Styled Quote" />);
    const quoteText = screen.getByText('Styled Quote');
    expect(quoteText).toHaveClass('text-block-quote-mobile');
    expect(quoteText).toHaveClass('sm:text-block-quote');
    expect(quoteText).toHaveClass('text-body-secondary');
    expect(quoteText).toHaveClass('text-center');
  });
});
