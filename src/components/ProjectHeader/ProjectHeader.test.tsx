import { render, screen } from '@testing-library/react';
import ProjectHeader from './ProjectHeader';

const mockCopy = {
  projectHeader: {
    imageID: 'starbucks',
    title: 'Starbucks for Life',
    role: 'Senior Interface Developer',
  },
} as const;

describe('ProjectHeader', () => {
  it('renders the title and role', () => {
    render(<ProjectHeader copy={mockCopy} />);

    // Title
    expect(
      screen.getByRole('heading', { name: mockCopy.projectHeader.title }),
    ).toBeInTheDocument();

    // Role
    expect(
      screen.getByRole('heading', { name: mockCopy.projectHeader.role }),
    ).toBeInTheDocument();
  });

  it('renders the circle image', () => {
    render(<ProjectHeader copy={mockCopy} />);

    // Image alt text comes from CircleImage, so match loosely
    expect(screen.getByAltText(/starbucks/i)).toBeInTheDocument();
  });
});
