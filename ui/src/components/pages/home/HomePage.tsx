import { HomeHero } from "./HomeHero";
import { HomeAboutSummary } from "./HomeAboutSummary";
import { HomeServicesPreview } from "./HomeServicesPreview";
import { HomeWhyChooseUs } from "./HomeWhyChooseUs";
import { HomeCta } from "./HomeCta";

export function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeAboutSummary />
      <HomeServicesPreview />
      <HomeWhyChooseUs />
      <HomeCta />
    </main>
  );
}
