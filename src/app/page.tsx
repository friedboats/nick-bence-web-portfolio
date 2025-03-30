import AssetContainer from '@/components/AssetContainer';
import BlockQuote from '@/components/BlockQuote';
import Button from '@/components/Button';
import CircleImage from '@/components/CircleImage';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import PersonalLogo from '@/components/PersonalLogo';

export default function Home() {
  return (
    <div>
      <main className="p-10">
        <PersonalLogo />
        <AssetContainer
          src="/01_sb_holiday_intro.jpg"
          alt="Starbucks"
          size="small"
        />
        <AssetContainer
          src="/01_sb_holiday_intro.jpg"
          alt="Starbucks"
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
