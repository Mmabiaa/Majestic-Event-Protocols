import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/contact/ContactPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});
