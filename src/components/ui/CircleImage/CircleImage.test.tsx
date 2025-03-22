import { render, screen } from '@testing-library/react';
import CircleImage from './CircleImage';

describe('CircleImage Component', () => {
  it('renders the image correctly for the given type', () => {
    const type = 'starbucks';

    render(<CircleImage type={type} />);

    const image = screen.getByAltText('Starbucks logo');

    // Check if the image src is correct
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('/circle-starbucks.png'),
    );

    // Check if the alt text is correct
    expect(image).toHaveAttribute('alt', 'Starbucks logo');
  });
});
