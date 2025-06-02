// TextSection.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TextSection from './TextSection';

const mockImage = {
  src: '/test-image.jpg',
  alt: 'Test Image',
};

describe('TextSection', () => {
  it('renders title and body with one image (default layout)', () => {
    render(
      <TextSection
        title="Test Title"
        body="<p>This is a <strong>test</strong> body.</p>"
        images={[mockImage]}
      />,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('renders layout right with one image', () => {
    render(
      <TextSection
        title="Test Title"
        body="<p>Layout test</p>"
        images={[mockImage]}
        layout="right"
      />,
    );

    expect(screen.getByText('Layout test')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('renders two images side-by-side', () => {
    render(
      <TextSection
        title="Multi Image"
        body="<p>With two images</p>"
        images={[mockImage, mockImage]}
      />,
    );

    const images = screen.getAllByAltText('Test Image');
    expect(images).toHaveLength(2);
  });

  it('renders heading and body when layout is not left or right', () => {
    render(
      <TextSection
        title="Standalone Title"
        body="<p>Default layout content</p>"
        images={[mockImage]}
      />,
    );

    expect(screen.getByText('Standalone Title')).toBeInTheDocument();
    expect(screen.getByText('Default layout content')).toBeInTheDocument();
  });
});
