import { render, screen } from '@testing-library/react';
import PersonalLogo from './PersonalLogo';

describe('PersonalLogo', () => {
  it('renders the logo correctly', () => {
    render(<PersonalLogo />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has the correct href', () => {
    render(<PersonalLogo />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('contains an image inside the link', () => {
    render(<PersonalLogo />);
    expect(screen.getByRole('link').querySelector('svg')).toBeInTheDocument();
  });

  it('has an accessible name', () => {
    render(<PersonalLogo />);
    expect(
      screen.getByRole('link', { name: 'Nick Bence Logo' }),
    ).toBeInTheDocument();
  });
});
