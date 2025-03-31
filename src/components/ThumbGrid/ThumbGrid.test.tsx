import React from 'react';
import { render, screen } from '@testing-library/react';
import ThumbGrid from './ThumbGrid';

// Mock the AssetContainer component
jest.mock('../AssetContainer', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <div data-testid="asset-container" data-src={src} data-alt={alt} />
  ),
}));

describe('ThumbGrid Component', () => {
  const mockItems = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
  ];

  it('renders the correct number of thumbnails', () => {
    render(<ThumbGrid items={mockItems} />);

    // Ensure the correct number of AssetContainer components are rendered
    const assetContainers = screen.getAllByTestId('asset-container');
    expect(assetContainers).toHaveLength(mockItems.length);
  });

  it('passes the correct data to AssetContainer', () => {
    render(<ThumbGrid items={mockItems} />);

    // Check if AssetContainer receives the correct props
    mockItems.forEach((item, index) => {
      const assetContainer = screen.getAllByTestId('asset-container')[index];
      expect(assetContainer).toHaveAttribute('data-src', item.src);
      expect(assetContainer).toHaveAttribute('data-alt', item.alt);
    });
  });
});
