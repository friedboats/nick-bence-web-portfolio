import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LinkButton from './LinkButton';

jest.mock('next/link', () => {
  const mockedLink = ({ children, ...props }: any) => (
    <a {...props}>{children}</a>
  );
  mockedLink.displayName = 'MockLink';
  return mockedLink;
});

describe('LinkButton', () => {
  it('renders the children correctly', () => {
    render(<LinkButton href="https://example.com">Click Me</LinkButton>);

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('renders an external link with target="_blank" and rel="noopener noreferrer"', () => {
    render(<LinkButton href="https://example.com">External Link</LinkButton>);

    const linkElement = screen.getByRole('link', { name: /External Link/i });
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders an internal link using Next.js Link', () => {
    render(<LinkButton href="/internal-page">Internal Link</LinkButton>);

    const linkElement = screen.getByText('Internal Link');
    expect(linkElement.closest('a')).toHaveAttribute('href', '/internal-page');
  });

  it('does not follow the link when disabled', async () => {
    const onClickMock = jest.fn();
    render(
      <LinkButton href="https://example.com" disabled onClick={onClickMock}>
        Disabled Link
      </LinkButton>,
    );

    const linkElement = screen.getByText('Disabled Link');
    await userEvent.click(linkElement);

    // Ensure the link is not followed by checking if onClick isn't called
    expect(onClickMock).not.toHaveBeenCalled();

    expect(linkElement.closest('a')).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies the correct classes based on the variant prop', () => {
    render(
      <LinkButton href="https://example.com" variant="primary">
        Primary Button
      </LinkButton>,
    );

    const linkElement = screen.getByRole('link', { name: /Primary Button/i });
    expect(linkElement).toHaveClass(
      'px-4 py-1 h-7 rounded-xl text-button-primary-default',
    );
  });

  it('renders left and right icons correctly', () => {
    render(
      <LinkButton
        href="https://example.com"
        iconLeft={<span>Left Icon</span>}
        iconRight={<span>Right Icon</span>}
      >
        Button with Icons
      </LinkButton>,
    );

    expect(screen.getByText('Left Icon')).toBeInTheDocument();
    expect(screen.getByText('Right Icon')).toBeInTheDocument();
  });

  it('handles dynamic className correctly with mock', () => {
    render(
      <LinkButton
        href="/starbucks"
        variant="secondary"
        className="custom-class"
        data-testid="custom-link-button"
      >
        About Us
      </LinkButton>,
    );

    // Get the link element (it will be an <a> tag due to the mock)
    const linkElement = screen.getByRole('link', { name: /about us/i });
    expect(linkElement).toHaveClass('custom-class');
  });
});
