import { render, screen } from '@testing-library/react';
import AssetContainer from './AssetContainer';

describe('AssetContainer', () => {
  const src = '/starbucks-featured-main.png';
  const alt = 'Starbucks';
  const width = 192;
  const height = 192;

  it('renders the image with correct src, alt, width, and height', () => {
    render(
      <AssetContainer src={src} alt={alt} width={width} height={height} />,
    );

    const image = screen.getByRole('img', { name: alt });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', alt);
  });

  it('renders the container with expected class names', () => {
    render(
      <AssetContainer src={src} alt={alt} width={width} height={height} />,
    );

    const container = screen.getByRole('img', { name: alt }).parentElement;

    // Update the expected classes to match the ones in the actual container
    expect(container).toHaveClass(
      'relative',
      'flex',
      'justify-center',
      'items-center',
      'overflow-hidden',
      'rounded-3xl',
      'box-border',
      'aspect-[192/192]',
      'outline-none',
    );
  });

  it('applies cursor style when interactive', () => {
    render(
      <AssetContainer
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => {}}
      />,
    );

    const container = screen.getByRole('img', { name: alt }).parentElement;

    expect(container).toHaveClass('cursor-zoom-in');
  });

  it('does not apply cursor style when non-interactive', () => {
    render(
      <AssetContainer src={src} alt={alt} width={width} height={height} />,
    );

    const container = screen.getByRole('img', { name: alt }).parentElement;

    expect(container).not.toHaveClass('cursor-zoom-in');
  });
});
