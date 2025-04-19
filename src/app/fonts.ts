import { MuseoModerno, Quicksand } from 'next/font/google';

export const museo = MuseoModerno({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap',
});
