import Button from '@/components/Button';
import CircleImage from '@/components/CircleImage';
import Heading from '@/components/Heading';
import { ArrowDoubleDown } from '@/components/SVGComponents';

export default function Home() {
  return (
    <main className="fade-in">
      <div
        className="flex justify-center pt-1 flex-col-reverse lg:flex-row
"
      >
        <div className="pr-0 lg:pr-8 pt-0 lg:pt-10 text-center lg:text-left justify-center lg:flex-row lg:block">
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
          <Button variant="secondary" iconRight={<ArrowDoubleDown />}>
            See my work
          </Button>
        </div>
        <div className="mb-4 flex justify-center">
          <CircleImage name="nick-bence" size="large" />
        </div>
      </div>
    </main>
  );
}
