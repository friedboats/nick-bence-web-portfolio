import { fireEvent, render, screen } from '@testing-library/react';
import Carousel from './Carousel';

const mockData = [
  {
    alt: 'Image 1',
    src: '/starbucks-featured-main.png',
  },
  {
    alt: 'Image 2',
    src: '/dynatrace-navigation-featured-main.png',
  },
  {
    alt: 'Image 3',
    src: '/dynatrace-platform-featured-main.png',
  },
  {
    alt: 'Image 4',
    src: '/nathans-featured-main.png',
  },
];

describe('Carousel', () => {
  it('renders the first image by default', () => {
    render(<Carousel data={mockData} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('navigates to the next image on right arrow click', () => {
    render(<Carousel data={mockData} />);
    const rightArrow = screen.getByLabelText(/click the right arrow/i);
    fireEvent.click(rightArrow);
    expect(screen.getByAltText('Image 2')).toBeInTheDocument();
  });

  it('navigates to the previouse image on left arrow click', () => {
    render(<Carousel data={mockData} />);
    const rightArrow = screen.getByLabelText(/click the right arrow/i);
    fireEvent.click(rightArrow);

    const leftArrow = screen.getByLabelText(/click the left arrow/i);
    fireEvent.click(leftArrow);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });

  it('clicking a pagination dot updates the slide', () => {
    render(<Carousel data={mockData} />);
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[2]);
    expect(screen.getByAltText('Image 3')).toBeInTheDocument();
  });
});
