import { useState } from "react";

const inputClass =
  "w-full bg-transparent border-0 border-b border-gold/30 py-2 text-sm text-foreground font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold transition-colors duration-300";

export function ContactMessageForm() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", eventType: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send message.");
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", eventType: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <p className="text-[11px] tracking-[0.22em] uppercase text-gold mb-3 font-light">
        Let's connect
      </p>
      <h2
        className="font-heading text-3xl font-semibold text-foreground mb-2 leading-tight"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Send a <em className="italic text-gold">Message</em>
      </h2>
      <div className="w-8 h-px bg-gold mb-8" />

      {submitted ? (
        <div className="py-16 text-center border border-gold/20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Received</p>
          <h3
            className="text-2xl font-semibold text-foreground mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Thank You
          </h3>
          <p className="text-sm text-muted-foreground font-light">We'll be in touch shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p className="text-xs text-red-500 border-b border-red-300 pb-2">{error}</p>
          )}

          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-gold mb-1.5">Full Name</label>
            <input type="text" required placeholder="Your full name" value={formData.name} onChange={set("name")} className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] tracking-[0.18em] uppercase text-gold mb-1.5">Phone</label>
              <input type="tel" required placeholder="+233..." value={formData.phone} onChange={set("phone")} className={inputClass} />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.18em] uppercase text-gold mb-1.5">Email</label>
              <input type="email" required placeholder="you@example.com" value={formData.email} onChange={set("email")} className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-gold mb-1.5">Event Type</label>
            <select required value={formData.eventType} onChange={set("eventType")}
              className={`${inputClass} cursor-pointer appearance-none`}
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23B8943F' opacity='.5'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 0.25rem center" }}
            >
              <option value="">Select event type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="traditional">Traditional Ceremony</option>
              <option value="birthday">Birthday / Celebration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.18em] uppercase text-gold mb-1.5">Message</label>
            <textarea required rows={4} placeholder="Tell us about your event..." value={formData.message} onChange={set("message")}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 border border-gold text-gold text-[11px] tracking-[0.2em] uppercase font-light hover:bg-gold hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}