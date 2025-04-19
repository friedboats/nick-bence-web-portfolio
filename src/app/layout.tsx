import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { AnimatedBackground } from '@/components/SVGComponents';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { museo, quicksand } from './fonts';

export const metadata: Metadata = {
  title: 'Nick Bence | Senior UI / UX Engineer',
  description:
    'Nick Bence is a Senior UI / UX Engineer based in Detroit, MI. Specializing in front-end development and user-centered design, Nick creates intuitive, visually engaging digital experiences. Explore a portfolio of innovative work across UX design, interface development, and interactive web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${museo.className} ${quicksand.className} bg-surface-background-primary`}
      >
        <div className="relative">
          <AnimatedBackground className="w-full h-screen fixed top-0 left-0" />
          <div className="relative z-5 mx-3">
            <div className="mx-auto max-w-[1138px] pt-1 md:pt-4 pb-4 md:pb-15 transform scale-[0.95] sm:scale-100">
              <Navigation />
            </div>
            {children}
          </div>
          <div className="relative mt-16">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
