import type { Metadata } from 'next';
import '../styles/globals.css';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import SvgAnimatedBackground from '@/components/SVGComponents/SvgAnimatedBackground';

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
      <body className="font-primary bg-surface-background-primary">
        <div className="relative">
          <SvgAnimatedBackground className="w-full h-screen fixed top-0 left-0" />
          <div className="px-3 relative z-5">
            <div className="mx-auto md:max-w-[1138px]">
              <Navigation />
            </div>
            <Link href="/">Home</Link>
            <Link href="/starbucks">Starbucks</Link>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
