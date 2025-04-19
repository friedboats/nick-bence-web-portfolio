import { render, screen } from '@testing-library/react';
import FeaturedSection from './FeaturedSection';

const mockData = [
  {
    alt: 'Starbucks project',
    src: '/starbucks-featured.png',
    href: '/starbucks',
  },
  {
    alt: 'Dynatrace navigation',
    src: '/dynatrace-navigation-featured.png',
    href: '/dynatrace-navigation',
  },
];

describe('FeaturedSection Component', () => {
  it('renders the heading correctly', () => {
    render(<FeaturedSection heading="My Featured Projects" data={mockData} />);
    const heading = screen.getByRole('heading', {
      name: /My Featured Projects/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders all images with correct alt text', () => {
    render(<FeaturedSection heading="Test" data={mockData} />);
    mockData.forEach(({ alt }) => {
      const image = screen.getByRole('img', { name: alt });
      expect(image).toBeInTheDocument();
    });
  });

  it('renders correct hrefs for each project', () => {
    render(<FeaturedSection heading="Test" data={mockData} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockData.length);

    links.forEach((link, i) => {
      expect(link).toHaveAttribute('href', mockData[i].href);
    });
  });
});
