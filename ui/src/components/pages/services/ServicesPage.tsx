import { ServicesHero } from "./ServicesHero";
import { ServicesList } from "./ServicesList";
import { ServicesMissionVision } from "./ServicesMissionVision";

export function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesMissionVision />
      <ServicesList />
    </main>
  );
}
