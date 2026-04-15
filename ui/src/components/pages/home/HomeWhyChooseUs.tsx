import { Star } from "lucide-react";

const reasons = [
  {
    title: "Professionalism",
    desc: "Every detail handled with the highest standards.",
    mobileDesc: "High standards, every detail.",
  },
  {
    title: "Elegance",
    desc: "Refined aesthetics that leave lasting impressions.",
    mobileDesc: "Refined, premium presentation.",
  },
  {
    title: "Reliability",
    desc: "Consistent delivery you can count on.",
    mobileDesc: "On-time, dependable delivery.",
  },
  {
    title: "Client Focus",
    desc: "Your satisfaction is our ultimate measure of success.",
    mobileDesc: "Your satisfaction first.",
  },
];

export function HomeWhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((item, i) => (
            <div key={i} className="text-center p-4 sm:p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="text-gold" size={22} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm sm:hidden">{item.mobileDesc}</p>
              <p className="hidden sm:block text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
