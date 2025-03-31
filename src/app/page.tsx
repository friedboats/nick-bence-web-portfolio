import AssetContainer from '@/components/AssetContainer';
import BlockQuote from '@/components/BlockQuote';
import Button from '@/components/Button';
import CircleImage from '@/components/CircleImage';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import PersonalLogo from '@/components/PersonalLogo';
import ThumbGrid from '@/components/ThumbGrid';

export default function Home() {
  const THUMB_GRID_DATA = [
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
    { src: '/dt-nav-home-screen.jpg', alt: 'Dynatrace' },
  ];
  return (
    <div>
      <main className="p-2 sm:p-11">
        <PersonalLogo />
        <ThumbGrid items={THUMB_GRID_DATA} />
        <div className="mt-4"></div>
        <AssetContainer
          src="/dt-nav-home-screen.jpg"
          alt="Dynatrace"
          size="large"
        />
        <Heading as="display">Display Testing 123</Heading>
        <Heading as="h1">h1 Testing 123</Heading>
        <Heading as="h2">h2 Testing 123</Heading>
        <Heading as="h3">h3 Testing 123</Heading>
        <Heading as="h4">h4 Testing 123</Heading>
        <Heading as="h5">h5 Testing 123</Heading>
        <Heading as="h6">h6 Testing 123</Heading>
        <Paragraph>p - Testing 123</Paragraph>
        <Paragraph variant="p-bold">p bold - Testing 123</Paragraph>
        <Paragraph variant="small">small - Testing 123</Paragraph>
        <Paragraph variant="small-bold">smal bold - Testing 123</Paragraph>
        <Paragraph variant="x-small">x small - Testing 123</Paragraph>
        <Paragraph variant="x-small-bold">x small bold - Testing 123</Paragraph>
        <BlockQuote quote="Design is not just what it looks like and feels like. Design is how it works." />
        <div className="flex gap-5">
          <Button variant="primary">Label</Button>
          <Button variant="secondary">Label</Button>
          <Button variant="link">Label</Button>
        </div>
        <CircleImage name="starbucks" />
        <CircleImage name="dynatrace" />
        <CircleImage name="nathans" />
        <CircleImage name="nick-bence" size="large" />
      </main>
    </div>
  );
}
