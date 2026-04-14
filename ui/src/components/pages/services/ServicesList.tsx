import { services } from "./services-data";

export function ServicesList() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {services.map((service, i) => (
          <div
            key={i}
            className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
          >
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <service.icon className="text-gold" size={24} />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {service.title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
