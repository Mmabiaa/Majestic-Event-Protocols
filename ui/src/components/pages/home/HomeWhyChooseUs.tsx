import { Star } from "lucide-react";

const reasons = [
  { title: "Professionalism", desc: "Every detail handled with the highest standards." },
  { title: "Elegance", desc: "Refined aesthetics that leave lasting impressions." },
  { title: "Reliability", desc: "Consistent delivery you can count on." },
  { title: "Client Focus", desc: "Your satisfaction is our ultimate measure of success." },
];

export function HomeWhyChooseUs() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Star className="text-gold" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
