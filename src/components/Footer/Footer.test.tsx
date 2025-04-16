// Mock the components before importing
jest.mock('./Contact', () => ({
  __esModule: true,
  default: () => <div>Mocked Contact</div>,
}));

jest.mock('./Copyright', () => ({
  __esModule: true,
  default: () => <div>Mocked Copyright</div>,
}));

import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders mocked Contact and Copyright components', () => {
    render(<Footer />);

    // Check if mocked components are rendered
    expect(screen.getByText('Mocked Contact')).toBeInTheDocument();
    expect(screen.getByText('Mocked Copyright')).toBeInTheDocument();
  });
});
