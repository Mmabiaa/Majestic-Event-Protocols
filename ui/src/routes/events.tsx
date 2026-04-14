import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "@/components/pages/events/EventsPage";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});
