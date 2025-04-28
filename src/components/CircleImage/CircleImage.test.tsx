import { render, screen } from '@testing-library/react';
import CircleImage from './CircleImage';

describe('CircleImage Component', () => {
  it('renders the image correctly for the given type', () => {
    const type = 'starbucks';

    render(<CircleImage name={type} />);

    const image = screen.getByAltText('Starbucks logo');

    // Check if the image src is correct
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('/starbucks-circle.png'),
    );
  });

  it('renders the alt text correctly for the given type', () => {
    const type = 'starbucks';

    render(<CircleImage name={type} />);

    const image = screen.getByAltText('Starbucks logo');

    // Check if the alt text is correct
    expect(image).toHaveAttribute('alt', 'Starbucks logo');
  });

  it('renders the large image correctly for the given type', () => {
    const type = 'nick-bence';

    render(<CircleImage name={type} size="large" />);

    const image = screen.getByAltText('Nick bence logo');

    // Check if the image src is correct
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('/nick-bence-circle.png'),
    );
  });
});
