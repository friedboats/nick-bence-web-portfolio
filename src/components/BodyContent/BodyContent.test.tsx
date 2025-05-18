import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import BodyContent from '../BodyContent';

describe('BodyContent Component - Unit Tests', () => {
  it('renders with default variant and color', () => {
    render(<BodyContent>Test Content</BodyContent>);
    const element = screen.getByText('Test Content');
    expect(element).toHaveClass('text-p-mobile sm:text-p text-body-primary');
  });

  it('renders HTML elements like <strong> and <ul>', () => {
    render(
      <BodyContent>
        {`<p>Intro</p><ul><li><b>Bold list item</b></li></ul>`}
      </BodyContent>,
    );
    expect(screen.getByText('Intro')).toBeInTheDocument();
    expect(screen.getByText('Bold list item')).toHaveClass(
      'text-body-secondary',
    );
  });

  it('applies the correct variant and color', () => {
    render(
      <BodyContent variant="small-bold" color="text-body-secondary">
        Sample
      </BodyContent>,
    );
    const element = screen.getByText('Sample');
    expect(element).toHaveClass(
      'text-small-bold-mobile sm:text-small-bold text-body-secondary',
    );
  });
});

// ==================== Integration Tests ====================

describe('BodyContent Component - Integration Tests', () => {
  it('updates dynamically when props change', async () => {
    const Wrapper = () => {
      const [content, setContent] = useState(
        `<p>Initial <strong>bold</strong> content.</p>`,
      );
      return (
        <div>
          <BodyContent>{content}</BodyContent>
          <button
            onClick={() =>
              setContent('<p>Updated <strong>bold</strong> content.</p>')
            }
          >
            Update
          </button>
        </div>
      );
    };

    render(<Wrapper />);

    expect(
      screen.getByText((content, node) => {
        const hasText = (text: string) => text.includes('Initial');
        const nodeHasText = node?.textContent && hasText(node.textContent);
        const childrenDontHaveText = Array.from(node?.children || []).every(
          (child) => !hasText(child.textContent || ''),
        );
        return nodeHasText && childrenDontHaveText;
      }),
    ).toBeInTheDocument();

    userEvent.click(screen.getByText('Update'));

    await waitFor(() =>
      expect(screen.getByText(/Updated/)).toBeInTheDocument(),
    );
  });

  it('changes color dynamically when props update', async () => {
    const Wrapper = () => {
      const [color, setColor] = useState<
        'text-body-primary' | 'text-body-secondary'
      >('text-body-primary');
      return (
        <div>
          <BodyContent color={color}>Dynamic</BodyContent>
          <button onClick={() => setColor('text-body-secondary')}>
            Change Color
          </button>
        </div>
      );
    };

    render(<Wrapper />);
    const content = screen.getByText('Dynamic');
    expect(content).toHaveClass('text-body-primary');

    userEvent.click(screen.getByText('Change Color'));

    await waitFor(() => expect(content).toHaveClass('text-body-secondary'));
  });
});
