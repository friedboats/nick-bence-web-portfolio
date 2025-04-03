import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders the children correctly', () => {
    render(<Navigation />);

    const logo = screen.getByLabelText('Nick Bence Logo');
    expect(logo).toBeInTheDocument();

    const buttons = screen.getAllByText('See more work');
    expect(buttons).toHaveLength(2);

    const chatButton = screen.getByText("Let's chat!");
    expect(chatButton).toBeInTheDocument();
  });
});
