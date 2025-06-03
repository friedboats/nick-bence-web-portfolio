import BlockQuote from '@/components/BlockQuote';
import { Carousel } from '@/components/Carousel';
import ProjectHeader from '@/components/ProjectHeader';
import TextSection from '@/components/TextSection';
import DynatraceNavCopy from '@/copydeck/DynatraceNavCopy';
import GlobalCopy from '@/copydeck/GlobalCopy';

export default function DynatraceNav() {
  return (
    <>
      <ProjectHeader copy={DynatraceNavCopy} />
      <div className="mt-5">
        <Carousel data={DynatraceNavCopy.projectHeader.carousel} />
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
