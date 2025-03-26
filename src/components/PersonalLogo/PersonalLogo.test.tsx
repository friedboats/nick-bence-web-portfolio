import { render, screen } from '@testing-library/react';
import PersonalLogo from './PersonalLogo';

describe('PersonalLogo', () => {
  it('renders the logo correctly', () => {
    render(<PersonalLogo />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<PersonalLogo clickURL="https://www.google.com" />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.google.com',
    );
  });

  it('has blank href by default', () => {
    render(<PersonalLogo />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '');
  });

  it('contains an image inside the link', () => {
    render(<PersonalLogo />);
    expect(screen.getByRole('link').querySelector('svg')).toBeInTheDocument();
  });

  it('has an accessible name if provided', () => {
    render(<PersonalLogo aria-label="Personal Logo" />);
    expect(
      screen.getByRole('link', { name: 'Nick Bence Logo' }),
    ).toBeInTheDocument();
  });
});
