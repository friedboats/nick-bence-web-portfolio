import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createContext, useContext, useState } from 'react';
import Heading from '../Heading';

describe('Heading Component - Unit Tests', () => {
  it('renders the correct default heading tag (h1)', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H1');
  });

  it('renders the correct heading tag based on the "as" prop', () => {
    render(<Heading as="h3">Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H3');
  });

  it('renders the correct class names based on the "as" prop', () => {
    render(<Heading as="h2">Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('font-heading text-h2-mobile sm:text-h2');
  });

  it('renders with the "text-header-primary" color by default', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('text-header-primary');
  });

  it('applies the correct color class based on the "color" prop', () => {
    render(<Heading color="text-header-secondary">Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading).toHaveClass('text-header-secondary');
  });

  it('renders a display heading with h2 as the actual tag', () => {
    render(<Heading as="display">Test Display</Heading>);
    const heading = screen.getByText('Test Display');
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass(
      'font-heading text-display-size-mobile sm:text-display-size',
    );
  });
});

// ==================== Integration Tests ====================

const HeadingContext = createContext({ title: 'Default Title' });

const PageHeader = () => {
  const { title } = useContext(HeadingContext);
  return <Heading>{title}</Heading>;
};

describe('Heading Component - Integration Tests', () => {
  it('renders inside another component (PageHeader)', () => {
    render(
      <HeadingContext.Provider value={{ title: 'Page Title' }}>
        <PageHeader />
      </HeadingContext.Provider>,
    );
    expect(screen.getByText('Page Title')).toBeInTheDocument();
  });

  it('updates dynamically when context changes', async () => {
    const Wrapper = () => {
      const [title, setTitle] = useState('Initial Title');
      return (
        <HeadingContext.Provider value={{ title }}>
          <PageHeader />
          <button onClick={() => setTitle('Updated Title')}>
            Change Title
          </button>
        </HeadingContext.Provider>
      );
    };

    render(<Wrapper />);

    expect(screen.getByText('Initial Title')).toBeInTheDocument();

    userEvent.click(screen.getByText('Change Title'));

    // Wait for state update to reflect in the DOM
    await screen.findByText('Updated Title');
  });

  it('renders inside a section component with dynamic heading levels', () => {
    const Section = ({
      level,
    }: {
      level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    }) => (
      <section>
        <Heading as={level}>Section Title</Heading>
      </section>
    );

    render(<Section level="h2" />);
    const heading = screen.getByText('Section Title');

    expect(heading.tagName).toBe('H2');
  });

  it('dynamically updates the heading level when props change', async () => {
    const Wrapper = () => {
      const [level, setLevel] = useState<'h1' | 'h3'>('h1');
      return (
        <div>
          <Heading as={level}>Dynamic Heading</Heading>
          <button onClick={() => setLevel('h3')}>Change to H3</button>
        </div>
      );
    };

    render(<Wrapper />);

    expect(screen.getByText('Dynamic Heading').tagName).toBe('H1');

    userEvent.click(screen.getByText('Change to H3'));

    // Wait for state update to reflect in the DOM
    await waitFor(() => {
      expect(screen.getByText('Dynamic Heading').tagName).toBe('H3');
    });
  });

  it('ensures heading updates when context and props change together', async () => {
    const Wrapper = () => {
      const [title, setTitle] = useState('Initial Title');
      const [level, setLevel] = useState<'h1' | 'h2'>('h1');

      return (
        <HeadingContext.Provider value={{ title }}>
          <div>
            <Heading as={level}>{title}</Heading>
            <button onClick={() => setTitle('Updated Title')}>
              Change Title
            </button>
            <button onClick={() => setLevel('h2')}>Change to H2</button>
          </div>
        </HeadingContext.Provider>
      );
    };

    render(<Wrapper />);

    expect(screen.getByText('Initial Title').tagName).toBe('H1');

    userEvent.click(screen.getByText('Change Title'));
    await screen.findByText('Updated Title');

    userEvent.click(screen.getByText('Change to H2'));
    await waitFor(() => {
      expect(screen.getByText('Updated Title').tagName).toBe('H2');
    });
  });
});
