import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import Paragraph from '../Paragraph';

describe('Paragraph Component - Unit Tests', () => {
  it('renders with default variant and color', () => {
    render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraph = screen.getByText('Test Paragraph');
    expect(paragraph).toHaveClass('text-p-mobile sm:text-p text-body-primary');
  });

  it('applies the correct variant styles', () => {
    render(<Paragraph variant="p-bold">Bold Text</Paragraph>);
    const paragraph = screen.getByText('Bold Text');
    expect(paragraph).toHaveClass('text-p-bold-mobile sm:text-p-bold');
  });

  it('applies the correct color class', () => {
    render(<Paragraph color="text-body-secondary">Colored Text</Paragraph>);
    const paragraph = screen.getByText('Colored Text');
    expect(paragraph).toHaveClass('text-body-secondary');
  });
});

// ==================== Integration Tests ====================

describe('Paragraph Component - Integration Tests', () => {
  it('updates dynamically when context changes', async () => {
    const Wrapper = () => {
      const [text, setText] = useState('Initial Text');
      return (
        <div>
          <Paragraph>{text}</Paragraph>
          <button onClick={() => setText('Updated Text')}>Change Text</button>
        </div>
      );
    };

    render(<Wrapper />);

    expect(screen.getByText('Initial Text')).toBeInTheDocument();

    userEvent.click(screen.getByText('Change Text'));

    await waitFor(() =>
      expect(screen.getByText('Updated Text')).toBeInTheDocument(),
    );
  });

  it('changes color dynamically when props update', async () => {
    const Wrapper = () => {
      const [color, setColor] = useState<
        'text-body-primary' | 'text-body-secondary'
      >('text-body-primary');
      return (
        <div>
          <Paragraph color={color}>Dynamic Color</Paragraph>
          <button onClick={() => setColor('text-body-secondary')}>
            Change Color
          </button>
        </div>
      );
    };

    render(<Wrapper />);
    const paragraph = screen.getByText('Dynamic Color');

    expect(paragraph).toHaveClass('text-body-primary');

    userEvent.click(screen.getByText('Change Color'));

    await waitFor(() => expect(paragraph).toHaveClass('text-body-secondary'));
  });
});
