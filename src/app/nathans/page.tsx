import BlockQuote from '@/components/BlockQuote';
import { ImageCarousel } from '@/components/ImageCarousel';
import PageNavigator from '@/components/PageNavigator';
import ProjectHeader from '@/components/ProjectHeader';
import TextSection from '@/components/TextSection';
import GlobalCopy from '@/copydeck/GlobalCopy';
import NathansCopy from '@/copydeck/NathansCopy';

export default function Nathans() {
  return (
    <>
      <ProjectHeader copy={NathansCopy} />
      <div className="mt-5">
        <ImageCarousel data={NathansCopy.projectHeader.carousel} />
      </div>
      <div className="section-spacing">
        <TextSection
          layout="left"
          title={NathansCopy.planning.title}
          body={NathansCopy.planning.body}
          images={NathansCopy.planning.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={NathansCopy.collab.title}
          body={NathansCopy.collab.body}
          images={NathansCopy.collab.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          layout="right"
          title={NathansCopy.development.title}
          body={NathansCopy.development.body}
          images={NathansCopy.development.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={NathansCopy.whatWeLearned.title}
          body={NathansCopy.whatWeLearned.body}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={NathansCopy.impact.title}
          body={NathansCopy.impact.body}
          images={NathansCopy.impact.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <BlockQuote quote={GlobalCopy.quotes.creativeSide} />
      </div>
      <div className="section-spacing">
        <PageNavigator />
      </div>
    </>
  );
}
