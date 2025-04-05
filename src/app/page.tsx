import Button from '@/components/Button';
import CircleImage from '@/components/CircleImage';
import Heading from '@/components/Heading';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div
        className="fade-in flex justify-center pt-5 pb-2 lg:py-11 flex-col-reverse lg:flex-row
"
      >
        <div className="pr-0 lg:pr-8 pt-0 lg:pt-10 flex flex-col justify-center lg:flex-row lg:block">
          <Heading
            className="text-[2.5rem] sm:text-[64px] text-center lg:text-left"
            as="h1"
          >
            Nick Bence
          </Heading>
          <Heading className="pb-1 text-center lg:text-left" as="h2">
            Senior UI / UX Engineer
          </Heading>
          <Heading
            className="text-header-tertiary mb-3 text-center lg:text-left"
            as="h3"
          >
            Based in Detroit, Mi
          </Heading>
          <Button className="mt-3" variant="secondary">
            See my work
          </Button>
        </div>
        <div className="mb-4 flex justify-center">
          <CircleImage name="nick-bence" size="large" />
        </div>
      </div>
      <Link href="/starbucks">Starbucks</Link>
    </main>
  );
}
