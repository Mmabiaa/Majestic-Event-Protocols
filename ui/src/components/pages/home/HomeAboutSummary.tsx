import aboutImg from "@/assets/events/3.jpeg";

export function HomeAboutSummary() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two cards side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* CARD 1: Text Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center text-center border border-gray-100">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-base leading-relaxed">
            Majestic Events and Protocols( Event staffing agency) offer a wide range of services, including event planning, 
            event coordination, dowry bearing, event ushering, activations, waiting services, conference and exhibition assistance, 
            hospitality management, bilingual services as well as professional masters of ceremonies to take care of your event.
            </p>
          </div>

          {/* CARD 2: Image */}
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={aboutImg}
              alt="Elegant event setup"
              className="w-full h-64 object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}