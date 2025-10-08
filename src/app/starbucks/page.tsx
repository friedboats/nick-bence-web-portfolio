'use client';

import BlockQuote from '@/components/BlockQuote';
import { ImageCarousel } from '@/components/ImageCarousel';
import PageNavigator from '@/components/PageNavigator';
import ProjectHeader from '@/components/ProjectHeader';
import TextSection from '@/components/TextSection';
import GlobalCopy from '@/copydeck/GlobalCopy';
import StarbucksCopy from '@/copydeck/StarbucksCopy';

export default function Starbucks() {
  return (
    <>
      <ProjectHeader copy={StarbucksCopy} />
      <div className="section-spacing">
        <TextSection
          title={StarbucksCopy.projectOverview.title}
          body={StarbucksCopy.projectOverview.body}
        ></TextSection>
        <ImageCarousel
          data={StarbucksCopy.projectOverview.carousel}
          id="starbucks-new-site"
        />
      </div>

      <div className="section-spacing">
        <TextSection
          title={StarbucksCopy.planning.title}
          body={StarbucksCopy.planning.body}
          images={StarbucksCopy.planning.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={StarbucksCopy.collab.title}
          body={StarbucksCopy.collab.body}
          images={StarbucksCopy.collab.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          layout="right"
          title={StarbucksCopy.development.title}
          body={StarbucksCopy.development.body}
          images={StarbucksCopy.development.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={StarbucksCopy.efficiency.title}
          body={StarbucksCopy.efficiency.body}
          images={StarbucksCopy.efficiency.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={StarbucksCopy.impact.title}
          body={StarbucksCopy.impact.body}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <BlockQuote quote={GlobalCopy.quotes.whatHesAccomplished} />
      </div>
      <div className="section-spacing">
        <PageNavigator />
      </div>
    </>
  );
}
