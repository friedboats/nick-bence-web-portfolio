import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle Component - Unit Tests', () => {
  it('renders with light theme by default', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(document.body.classList.contains('dark')).toBe(false); // Check that dark theme is not applied initially
  });

  it('applies dark theme when toggled', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    userEvent.click(button); // Toggle to dark mode

    await waitFor(() => {
      expect(document.body.classList.contains('dark')).toBe(true); // Dark theme should be applied
    });

    userEvent.click(button); // Toggle back to light mode

    await waitFor(() => {
      expect(document.body.classList.contains('dark')).toBe(false); // Light theme should be applied
    });
  });

  it('stores the theme in localStorage', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    userEvent.click(button); // Toggle to dark mode

    await waitFor(() => {
      expect(localStorage.getItem('theme')).toBe('dark'); // Theme should be stored in localStorage
    });

    userEvent.click(button); // Toggle back to light mode

    await waitFor(() => {
      expect(localStorage.getItem('theme')).toBe('light'); // Theme should be updated in localStorage
    });
  });
});

// ==================== Integration Tests ====================

describe('ThemeToggle Component - Integration Tests', () => {
  it('toggles between light and dark themes', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    expect(document.body.classList.contains('dark')).toBe(false); // Default is light theme

    userEvent.click(button); // Toggle to dark mode

    await waitFor(() => {
      expect(document.body.classList.contains('dark')).toBe(true); // Dark theme should be applied
    });

    userEvent.click(button); // Toggle back to light mode

    await waitFor(() => {
      expect(document.body.classList.contains('dark')).toBe(false); // Light theme should be applied again
    });
  });

  it('maintains theme state after page reload', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    userEvent.click(button); // Toggle to dark mode

    await waitFor(() => {
      expect(document.body.classList.contains('dark')).toBe(true); // Dark theme should be applied
    });

    // Simulate page reload
    render(<ThemeToggle />);

    // Check if dark theme is maintained after reload
    await waitFor(() => {
      expect(document.body.classList.contains('dark')).toBe(true); // Theme should persist
    });
  });
});
