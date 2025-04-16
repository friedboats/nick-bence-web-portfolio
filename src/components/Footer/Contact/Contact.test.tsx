import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact component', () => {
  it('renders the heading, paragraph, and button with correct content', () => {
    render(<Contact />);

    // Check if the heading renders correctly
    expect(
      screen.getByRole('heading', { name: /get in touch/i }),
    ).toBeInTheDocument();

    // Check if the paragraph renders correctly with the content
    expect(
      screen.getByText(/I'm always open to new opportunities and projects./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Connect with me on LinkedIn!/i),
    ).toBeInTheDocument();

    // Check if the LinkButton renders and contains the correct text
    const linkButton = screen.getByRole('link', { name: /Let's chat!/i });
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/nicholasbence/',
    );
  });
});
