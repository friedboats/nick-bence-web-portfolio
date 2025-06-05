import { act, render, screen } from '@testing-library/react';
import RotatingQuotes from './RotatingQuotes';

jest.useFakeTimers();

const sampleQuotes = [
  {
    quote: 'Test quote one.',
    author: 'Author One',
    title: 'Title One',
  },
  {
    quote: 'Test quote two.',
    author: 'Author Two',
    title: 'Title Two',
  },
];

describe('RotatingQuotes', () => {
  it('renders the first quote initially', () => {
    render(<RotatingQuotes quotes={sampleQuotes} duration={2} />);
    expect(screen.getByText(/Test quote one/i)).toBeInTheDocument();
    expect(screen.getByText(/Author One/i)).toBeInTheDocument();
    expect(screen.getByText(/Title One/i)).toBeInTheDocument();
  });

  it('rotates to the next quote after duration', () => {
    render(<RotatingQuotes quotes={sampleQuotes} duration={2} />);
    act(() => {
      jest.advanceTimersByTime(2000 + 500); // 2s duration + 500ms fade
    });
    expect(screen.getByText(/Test quote two/i)).toBeInTheDocument();
    expect(screen.getByText(/Author Two/i)).toBeInTheDocument();
  });
});
