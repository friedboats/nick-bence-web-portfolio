import { render, screen } from '@testing-library/react';
import AssetContainer from './AssetContainer';

describe('AssetContainer', () => {
  const src = '/01_sb_holiday_intro.jpg';
  const alt = 'Starbucks';
  const width = 192;
  const height = 192;

  it('renders the image with correct src, alt, width, and height', () => {
    render(
      <AssetContainer src={src} alt={alt} width={width} height={height} />,
    );

    const image = screen.getByRole('img', { name: alt });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining(src));
    expect(image).toHaveAttribute('alt', alt);
  });

  it('renders the container with expected class names', () => {
    render(
      <AssetContainer src={src} alt={alt} width={width} height={height} />,
    );

    const container = screen.getByRole('img', { name: alt }).parentElement;

    expect(container).toHaveClass(
      'relative',
      'rounded-3xl',
      'border-2',
      'border-border-primary',
      'w-full',
      'overflow-hidden',
    );
  });
});
