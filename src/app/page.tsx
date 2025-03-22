import BlockQuote from '@/components/ui/BlockQuote';
import Button from '@/components/ui/Button';
import CircleImage from '@/components/ui/CircleImage/CircleImage';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';

export default function Home() {
  return (
    <div>
      <main className="p-10">
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
        <CircleImage type="starbucks" />
        <CircleImage type="dynatrace" />
        <CircleImage type="nathans" />
      </main>
    </div>
  );
}
