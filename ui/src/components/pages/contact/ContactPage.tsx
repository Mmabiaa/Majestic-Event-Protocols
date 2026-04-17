import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";
import { ContactMessageForm } from "./ContactMessageForm";

export function ContactPage() {
  return (
    <main>
      <ContactHero />
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactMessageForm />
        </div>
      </section>
    </main>
  );
}
