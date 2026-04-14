import { Eye, Target } from "lucide-react";

export function ServicesMissionVision() {
  return (
    <section className="py-24 px-6 bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Target className="text-gold" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Mission Statement
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide exceptional ushering and protocol services through professionalism, attention to detail, and a commitment to excellence, ensuring every event is seamless, elegant, and unforgettable for both clients and guests.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <Eye className="text-gold" size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Vision Statement – Majestic Events Protocols
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading and most trusted event ushering and protocol agency, known for delivering excellence, elegance, and professionalism at every event, while setting the standard for outstanding guest experience and seamless event coordination across Ghana and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
