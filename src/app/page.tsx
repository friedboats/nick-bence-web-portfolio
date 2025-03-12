import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div>
      <main className="p-10">
        <p className="font-heading text-display-size-mobile sm:text-display-size text-display-secondary">
          Testing 123
        </p>
        <h1 className="text-header-primary">h1 - Testing 123</h1>
        <h2 className="text-header-secondary">h2 - Testing 123</h2>
        <h3 className="text-header-tertiary">h3 - Testing 123</h3>
        <h4 className="text-header-primary">h4 - Testing 123</h4>
        <h5 className="text-header-secondary">h5 - Testing 123</h5>
        <h6 className="text-header-tertiary">h6 - Testing 123</h6>
        <p className="text-body-primary">p - Testing 123</p>
        <p className="text-p-bold-mobile sm:text-p-bold text-body-secondary">
          p bold - Testing 123
        </p>
        <p className="text-small-mobile sm:text-small text-body-primary">
          small - Testing 123
        </p>
        <p className="text-small-bold-mobile sm:text-small-bold text-body-secondary">
          small-bold - Testing 123
        </p>
        <p className="text-x-small-mobile sm:text-x-small text-body-primary">
          x-small - Testing 123
        </p>
        <p className="text-x-small-bold-mobile sm:text-x-small-bold text-body-secondary">
          x-small bold - Testing 123
        </p>
        <p className="text-block-quote-mobile sm:text-block-quote text-body-primary">
          quote - Testing 123
        </p>
        <div className="flex gap-5">
          <Button variant="primary">Label</Button>
          <Button variant="secondary">Label</Button>
          <Button variant="link">Label</Button>
        </div>
      </main>
    </div>
  );
}
