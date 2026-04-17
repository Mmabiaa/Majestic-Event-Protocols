import type { LucideIcon } from "lucide-react";
import { Crown, Clock, Star, Heart, Users } from "lucide-react";
import serviceCoordination from "@/assets/events/coordination/1.jpeg";
import serviceUshering from "@/assets/events/ushering/1.jpeg";
import servicePlanning from "@/assets/events/planning/1.jpeg";
import serviceAirport from "@/assets/events/airport/1.jpeg";
import serviceHospitality from "@/assets/events/hospitality/2.jpeg";
import serviceBilingual from "@/assets/events/bilingual/1.jpeg";
import serviceDowry from "@/assets/events/dowry/2.jpeg";
import serviceWaiting from "@/assets/events/waiting/1.jpeg";
import serviceActivations from "@/assets/events/activations/1.jpeg";
import serviceConference from "@/assets/events/awards/1.jpeg";
import serviceMC from "@/assets/events/mc/1.jpeg";
import serviceFuneral from "@/assets/events/funeral/1.jpeg";

export type ServiceEntry = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const services: ServiceEntry[] = [
  {
    icon: Crown,
    title: "Event Planning",
    description:
      "From concept to completion, we develop comprehensive event plans tailored to your vision. Our planning process covers venue selection, theme development, budgeting, and every detail in between.",
    image: servicePlanning,
  },
  {
    icon: Clock,
    title: "Event Coordination",
    description:
      "We expertly manage event timelines, vendor coordination, and on-the-day execution to ensure every moment flows seamlessly. Our coordination team handles logistics so you can focus on enjoying the occasion.",
    image: serviceCoordination,
  },
  {
    icon: Heart,
    title: "Dowry Bearing",
    description:
      "We provide support for traditional marriage ceremonies with grace and cultural sensitivity. Our team handles dowry bearing and traditional protocol with elegance.",
    image: serviceDowry,
  },
  {
    icon: Users,
    title: "Event Ushering",
    description:
      "Our professional ushers provide warm, organized hospitality for your guests. Trained in etiquette and protocol, they ensure smooth guest flow at weddings, corporate functions, and special celebrations.",
    image: serviceUshering,
  },
  {
    icon: Star,
    title: "Activations",
    description:
      "We create engaging brand activations and experiential marketing events that connect audiences with your message. From pop-ups to immersive experiences, we bring your brand to life.",
    image: serviceActivations,
  },
  {
    icon: Crown,
    title: "Waiting Services",
    description:
      "Our attentive waiting staff provides exceptional service for banquets, receptions, and private dinners. Trained in fine dining etiquette and event protocols.",
    image: serviceWaiting,
  },
  {
    icon: Clock,
    title: "Conference and Exhibition Assistance",
    description:
      "Complete support for conferences and exhibitions including registration, booth management, attendee flow, and logistical coordination for seamless professional events.",
    image: serviceConference,
  },
  {
    icon: Users,
    title: "Airport Pickup",
    description:
      "Professional meet-and-greet services for VIPs, speakers, and guests. We handle signage, luggage assistance, and comfortable transportation to hotels or venues.",
    image: serviceAirport,
  },
  {
    icon: Heart,
    title: "Hospitality Management",
    description:
      "Comprehensive hospitality services including guest reception, accommodation coordination, concierge support, and overall guest experience management for events of any scale.",
    image: serviceHospitality,
  },
  {
    icon: Star,
    title: "Bilingual Services",
    description:
      "Fluent bilingual staff and MCs to bridge language barriers at international events. We provide seamless communication support for diverse audiences.",
    image: serviceBilingual,
  },
  {
    icon: Star,
    title: "Funeral Services",
    description:
      "Professional funeral coordination and support services to ensure a respectful and well-organized farewell. We handle planning, protocol, and smooth execution during this sensitive time.",
    image: serviceFuneral,
  },
  {
    icon: Star,
    title: "MC Services",
    description:
      "Experienced and engaging Masters of Ceremony to host your events with confidence, charisma, and professionalism, ensuring a lively and well-coordinated program.",
    image: serviceMC,
  }
];