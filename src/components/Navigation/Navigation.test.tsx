import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { usePathname, useRouter } from 'next/navigation';

// Mock next/navigation hooks
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('Navigation', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders correctly when not on home page', () => {
    (usePathname as jest.Mock).mockReturnValue('/project-page');

    render(<Navigation />);

    expect(screen.getByLabelText('Nick Bence Logo')).toBeInTheDocument();
    expect(screen.getAllByText('See more work')).toHaveLength(2);
    expect(screen.getByText("Let's chat!")).toBeInTheDocument();
  });

  it('does not show "See more work" when on home page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Navigation />);

    expect(screen.queryByText('See more work')).not.toBeInTheDocument();
  });
});
