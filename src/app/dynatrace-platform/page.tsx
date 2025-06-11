import BlockQuote from '@/components/BlockQuote';
import { Button } from '@/components/Button';
import PageNavigator from '@/components/PageNavigator';
import ProjectHeader from '@/components/ProjectHeader';
import TextSection from '@/components/TextSection';
import DynatracePlatformCopy from '@/copydeck/DynatracePlatformCopy';
import GlobalCopy from '@/copydeck/GlobalCopy';

export default function DynatracePlatform() {
  return (
    <>
      <ProjectHeader copy={DynatracePlatformCopy} />
      <div className="mt-5">
        <TextSection
          title=""
          body=""
          images={DynatracePlatformCopy.projectHeader.assets}
          button={<Button variant="secondary">View webpage</Button>}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatracePlatformCopy.challenge.title}
          body={DynatracePlatformCopy.challenge.body}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatracePlatformCopy.competitiveAnalysis.title}
          body={DynatracePlatformCopy.competitiveAnalysis.body}
          images={DynatracePlatformCopy.competitiveAnalysis.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatracePlatformCopy.contentStrat.title}
          body={DynatracePlatformCopy.contentStrat.body}
          images={DynatracePlatformCopy.contentStrat.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatracePlatformCopy.flowAndWires.title}
          body={DynatracePlatformCopy.flowAndWires.body}
          images={DynatracePlatformCopy.flowAndWires.assets}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          layout="right"
          title={DynatracePlatformCopy.highFidelity.title}
          body={DynatracePlatformCopy.highFidelity.body}
          images={DynatracePlatformCopy.highFidelity.assets}
          button={<Button variant="secondary">View webpage</Button>}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatracePlatformCopy.usabilityTesting.title}
          body={DynatracePlatformCopy.usabilityTesting.body}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <TextSection
          title={DynatracePlatformCopy.impact.title}
          body={DynatracePlatformCopy.impact.body}
        ></TextSection>
      </div>
      <div className="section-spacing">
        <BlockQuote quote={GlobalCopy.quotes.teamSport} />
      </div>
      <div className="section-spacing">
        <PageNavigator />
      </div>
    </>
  );
}
