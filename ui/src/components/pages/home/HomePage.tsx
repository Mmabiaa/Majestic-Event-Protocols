import { HomeHero } from "./HomeHero";
import { HomeAboutSummary } from "./HomeAboutSummary";
import { HomeMeetCeo } from "./HomeMeetCeo";
import { HomeServicesPreview } from "./HomeServicesPreview";
import { HomeWhyChooseUs } from "./HomeWhyChooseUs";
import { HomeAward } from "./HomeAward";


export function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeAboutSummary />
      <HomeMeetCeo />
      <HomeAward />
      <HomeServicesPreview />
      <HomeWhyChooseUs />
    </main>
  );
}
