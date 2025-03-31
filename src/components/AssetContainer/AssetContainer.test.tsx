import React from 'react';
import { render, screen } from '@testing-library/react';
import AssetContainer from './AssetContainer';

describe('AssetContainer', () => {
  const src = '/01_sb_holiday_intro.jpg';
  const alt = 'Starbucks';

  it('renders with the correct background image for small size', () => {
    render(<AssetContainer src={src} alt={alt} size="small" />);

    const container = screen.getByRole('img');
    expect(container).toHaveStyle(`background-image: url(${src})`);
  });

  it('renders with the correct background image for large size', () => {
    render(<AssetContainer src={src} alt={alt} size="large" />);

    const container = screen.getByRole('img');
    expect(container).toHaveStyle(`background-image: url(${src})`);
  });

  it('applies the correct paddingTop for small size to maintain aspect ratio', () => {
    render(<AssetContainer src={src} alt={alt} size="small" />);

    const container = screen.getByRole('img');
    const paddingTopValue = 100 / (190 / 192);
    expect(container).toHaveStyle(`padding-top: ${paddingTopValue}%`);
  });

  it('applies the correct paddingTop for large size to maintain aspect ratio', () => {
    render(<AssetContainer src={src} alt={alt} size="large" />);

    const container = screen.getByRole('img');
    const paddingTopValue = 100 / (427 / 288); // (100 / aspect ratio for large)
    expect(container).toHaveStyle(`padding-top: ${paddingTopValue}%`);
  });

  it('sets the correct aria-label based on the alt prop', () => {
    render(<AssetContainer src={src} alt={alt} size="small" />);

    const container = screen.getByRole('img');
    expect(container).toHaveAttribute('aria-label', alt);
  });

  it('renders the correct class names for styling', () => {
    render(<AssetContainer src={src} alt={alt} size="small" />);

    const container = screen.getByRole('img');
    expect(container).toHaveClass(
      'relative rounded-3xl border-2 border-border-primary w-full',
    );
  });
});
