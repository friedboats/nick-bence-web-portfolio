import BlockQuote from '@/components/BlockQuote';
import BodyContent from '@/components/BodyContent';
import Button from '@/components/Button';
import { ImageCarousel } from '@/components/ImageCarousel';
import ProjectHeader from '@/components/ProjectHeader';
import TextSection from '@/components/TextSection';
import DynatraceNavCopy from '@/copydeck/DynatraceNavCopy';
import GlobalCopy from '@/copydeck/GlobalCopy';

export default function DynatraceNav() {
  return (
    <>
      <ProjectHeader copy={DynatraceNavCopy} />
      <div className="mt-5">
        <ImageCarousel data={DynatraceNavCopy.projectHeader.carousel} />
      </div>
      <div className="section-spacing">
        <TextSection
          layout="right"
          title={DynatraceNavCopy.challenge.title}
          body={DynatraceNavCopy.challenge.body}
          images={DynatraceNavCopy.challenge.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatraceNavCopy.competitiveAnalysis.title}
          body={DynatraceNavCopy.competitiveAnalysis.body}
          images={DynatraceNavCopy.competitiveAnalysis.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatraceNavCopy.cardSorting.title}
          body={DynatraceNavCopy.cardSorting.body}
          images={DynatraceNavCopy.cardSorting.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatraceNavCopy.infoArch.title}
          body={DynatraceNavCopy.infoArch.body}
          images={DynatraceNavCopy.infoArch.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          layout="right"
          title={DynatraceNavCopy.highFidelity.title}
          body={DynatraceNavCopy.highFidelity.body}
          images={DynatraceNavCopy.highFidelity.assets}
          button={<Button variant="secondary">View webpage</Button>}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          layout="right"
          title={DynatraceNavCopy.usabilityTesting.title}
          body={DynatraceNavCopy.usabilityTesting.body}
        ></TextSection>
        {/* TODO */}
        <BodyContent>Quote go here...</BodyContent>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatraceNavCopy.impact.title}
          body={DynatraceNavCopy.impact.body}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <BlockQuote quote={GlobalCopy.quotes.professionalism} />
      </div>
    </>
  );
}
