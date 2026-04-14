import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Let Us Handle Your Next Event With Excellence
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Ready to create something unforgettable? Get in touch with us today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0242907335">
            <Button variant="hero" size="lg" className="rounded-full px-8">
              Call Now
            </Button>
          </a>
          <a href="https://wa.me/233242907335" target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="lg" className="rounded-full px-8">
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
