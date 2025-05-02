import { render, screen } from '@testing-library/react';
import ProjectHeader from './ProjectHeader';

const mockCopy = {
  projectHeader: {
    imageID: 'starbucks',
    title: 'Starbucks for Life',
    role: 'Senior Interface Developer',
    description: 'I built this thing and it was awesome.',
  },
} as const;

describe('ProjectHeader', () => {
  it('renders the title, role, and description', () => {
    render(<ProjectHeader copy={mockCopy} />);

    expect(
      screen.getByRole('heading', { name: mockCopy.projectHeader.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: mockCopy.projectHeader.role }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockCopy.projectHeader.description),
    ).toBeInTheDocument();
  });

  it('renders the circle image', () => {
    const { getByAltText } = render(<ProjectHeader copy={mockCopy} />);
    expect(getByAltText(/starbucks/i)).toBeInTheDocument();
  });
});
