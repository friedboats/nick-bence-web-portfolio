import { render, screen } from '@testing-library/react';
import Copyright from './Copyright';

describe('Copyright', () => {
  it('renders correct year and text', () => {
    render(<Copyright />);

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(`© ${currentYear} Nick Bence. All rights reserved.`),
    ).toBeInTheDocument();
  });
});
