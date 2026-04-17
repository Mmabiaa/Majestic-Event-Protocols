import { HomeHero } from "./HomeHero";
import { HomeAboutSummary } from "./HomeAboutSummary";
import { HomeMeetCeo } from "./HomeMeetCeo";
import { HomeServicesPreview } from "./HomeServicesPreview";
import { HomeWhyChooseUs } from "./HomeWhyChooseUs";


export function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeAboutSummary />
      <HomeMeetCeo />
      <HomeServicesPreview />
      <HomeWhyChooseUs />
    </main>
  );
}
