import type { LucideIcon } from "lucide-react";
import { Crown, Clock, Star, Heart, Users } from "lucide-react";
import serviceCoordination from "@/assets/people/1.jpeg";
import servicePlanning from "@/assets/people/2.jpeg";
import serviceUshering from "@/assets/people/3.jpeg";
import serviceMc from "@/assets/people/4.jpeg";
import serviceTraditional from "@/assets/service-traditional.jpg";

export type ServiceEntry = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const services: ServiceEntry[] = [
  {
    icon: Crown,
    title: "Events Coordination",
    description:
      "We expertly manage event timelines, vendor coordination, and on-the-day execution to ensure every moment flows seamlessly. Our coordination team handles logistics so you can focus on enjoying the occasion.",
    image: serviceCoordination,
  },
  {
    icon: Clock,
    title: "Events Planning",
    description:
      "From concept to completion, we develop comprehensive event plans tailored to your vision. Our planning process covers venue selection, theme development, budgeting, and every detail in between.",
    image: servicePlanning,
  },
  {
    icon: Users,
    title: "Ushering Services",
    description:
      "Our professional ushers provide warm, organized hospitality for your guests. Trained in etiquette and protocol, they ensure smooth guest flow at weddings, corporate functions, and special celebrations.",
    image: serviceUshering,
  },
  {
    icon: Star,
    title: "Master of Ceremonies / Hosting",
    description:
      "Our experienced MCs bring energy, charm, and professionalism to your event. They keep the program on track while engaging your audience and creating memorable moments throughout.",
    image: serviceMc,
  },
  {
    icon: Heart,
    title: "Dowry Bearing / Bridesmaid Duties",
    description:
      "We provide support for traditional marriage ceremonies with grace and cultural sensitivity. Our team handles dowry bearing, bridesmaid coordination, and traditional protocol with elegance.",
    image: serviceTraditional,
  },
];
