import ceoImg from "@/assets/people/ceo.jpeg";

export function HomeMeetCeo() {
  return (
    <section className="py-24 px-6 bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the CEO
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-2xl shadow-lg overflow-hidden border border-border bg-card aspect-square">
            <img
              src={ceoImg}
              alt="Majestic Events & Protocols CEO"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border aspect-square flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
              Leadership with elegance and excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Majestic Events & Protocols is driven by a passion for premium guest experience and seamless event execution. Our CEO leads with professionalism, attention to detail, and a commitment to ensuring every event feels refined, organized, and unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}