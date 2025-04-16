'use client';

import LinkButton from '@/components/Button/LinkButton';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { LinkedIn } from '@/components/SVGComponents';

const Contact = () => {
  return (
    <div className="text-center w-full px-4 py-12 bg-surface-background-info">
      <Heading as="h2" color="text-header-inverse" className="pb-4">
        Get in touch
      </Heading>
      <Paragraph color="text-body-inverse" className="pb-6">
        {`I'm always open to new opportunities and projects.`}
        <br />
        Connect with me on LinkedIn!
      </Paragraph>
      <LinkButton
        variant="secondary"
        href="https://www.linkedin.com/in/nicholasbence/"
        iconRight={<LinkedIn />}
        className="whitespace-nowrap"
      >
        {"Let's chat!"}
      </LinkButton>
    </div>
  );
};

export default Contact;
