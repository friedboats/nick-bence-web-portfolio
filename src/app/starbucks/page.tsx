'use client';

import BlockQuote from '@/components/BlockQuote';
import { Carousel } from '@/components/Carousel';
import ProjectHeader from '@/components/ProjectHeader';
import TextSection from '@/components/TextSection';
import GlobalCopy from '@/copydeck/GlobalCopy';
import StarbucksCopy from '@/copydeck/StarbucksCopy';

export default function Starbucks() {
  return (
    <>
      <ProjectHeader copy={StarbucksCopy} />
      <div className="mt-5">
        <Carousel data={StarbucksCopy.projectHeader.carousel} />
      </div>

      <div className="section-spacing">
        <TextSection
          layout="right"
          title={StarbucksCopy.planning.title}
          body={StarbucksCopy.planning.body}
          images={StarbucksCopy.planning.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          layout="left"
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
          layout="left"
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
    </>
  );
}
