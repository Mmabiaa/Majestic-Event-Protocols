import { HomeHero } from "./HomeHero";
import { HomeAboutSummary } from "./HomeAboutSummary";
import { HomeMeetCeo } from "./HomeMeetCeo";
import { HomeServicesPreview } from "./HomeServicesPreview";
import { HomeWhyChooseUs } from "./HomeWhyChooseUs";
import { HomeCta } from "./HomeCta";

export function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeAboutSummary />
      <HomeMeetCeo />
      <HomeServicesPreview />
      <HomeWhyChooseUs />
      <HomeCta />
    </main>
  );
}
