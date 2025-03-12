import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Nick Bence | Senior UX/UI Engineer & Front-End Developer',
  description:
    'Nick Bence is a Senior UX/UI Engineer based in Detroit, MI. Specializing in front-end development and user-centered design, Nick creates intuitive, visually engaging digital experiences. Explore a portfolio of innovative work across UX design, interface development, and interactive web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
