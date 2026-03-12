import { Link } from "react-router";
import { ShieldCheck, Heart, Clock, Star, ArrowRight, CheckCircle, PhoneCall } from "lucide-react";

const TRUST_STATS = [
  { value: "500+", label: "Families Served" },
  { value: "12+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Available Support" },
];

const SERVICES_PREVIEW = [
  {
    icon: "🧼",
    title: "Personal Care",
    desc: "Bathing, dressing, grooming, and hygiene support delivered with dignity and respect.",
  },
  {
    icon: "🫂",
    title: "Companionship",
    desc: "Meaningful connection through conversation, activities, and emotional support.",
  },
  {
    icon: "🧠",
    title: "Dementia Care",
    desc: "Specialized, patient-centered care for those living with Alzheimer's or dementia.",
  },
  {
    icon: "🏥",
    title: "Post-Hospital Care",
    desc: "Safe recovery support at home after surgery, illness, or hospital discharge.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    relation: "Daughter",
    city: "Springfield, IL",
    text: "Comfort & Care has been a lifesaver for our family. Mom's caregiver, Linda, is patient, kind, and truly treats her like family. I finally feel at peace knowing she's safe.",
    stars: 5,
  },
  {
    name: "James & Patricia R.",
    relation: "Son & Daughter-in-law",
    city: "Decatur, IL",
    text: "We were nervous about bringing in outside care, but from the first assessment they made us feel heard. The quality of care has exceeded every expectation.",
    stars: 5,
  },
  {
    name: "David K.",
    relation: "Son",
    city: "Lincoln, IL",
    text: "Dad has dementia and needed specialized care. The team was incredibly knowledgeable and patient. I can't recommend them enough to any family in our situation.",
    stars: 5,
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Book a Free Assessment", desc: "Schedule a no-obligation consultation at your convenience — in person or by phone." },
  { step: "02", title: "Create a Care Plan", desc: "We learn about your loved one's needs, preferences, and routine to build a personalized plan." },
  { step: "03", title: "Meet Your Caregiver", desc: "We carefully match your family with a compatible, vetted caregiver you'll feel confident in." },
  { step: "04", title: "Care Begins", desc: "Services start on your schedule. We check in regularly and adjust as needs change." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, #3DA89A 100%)",
          minHeight: "calc(100vh - 110px)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "4rem 0",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "45vw", height: "45vw", maxWidth: "600px", maxHeight: "600px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: "35vw", height: "35vw", maxWidth: "500px", maxHeight: "500px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />

        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", position: "relative", zIndex: 1 }}>
          {/* Left: text */}
          <div className="animate-fade-in-up">
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(255,255,255,0.15)",
              borderRadius: "var(--radius-full)",
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
            }}>
              <ShieldCheck size={14} color="rgba(255,255,255,0.9)" />
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-ui)", letterSpacing: "0.05em" }}>
                Licensed & Insured • Background-Checked Caregivers
              </span>
            </div>

            <h1 style={{ color: "white", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              Compassionate Care<br />
              <em style={{ color: "var(--color-secondary-light)" }}>in the Comfort</em><br />
              of Home
            </h1>

            <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", fontFamily: "var(--font-body)" }}>
              We help families like yours find trusted, professional caregivers for aging parents — so your loved one can live safely, independently, and with dignity.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}>
              <Link to="/book-assessment" className="btn-secondary">
                Book a Free Assessment <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline-white">
                Explore Services
              </Link>
            </div>

            {/* Quick trust items */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {["No long-term contracts", "Same-day availability", "Free care consultation"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <CheckCircle size={15} color="var(--color-secondary-light)" />
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontFamily: "var(--font-ui)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image card */}
          <div className="animate-fade-in-up delay-300" style={{ position: "relative" }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.3)", position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=700&q=80"
                alt="Caregiver holding hands with an elderly woman"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
              {/* Overlay card */}
              <div style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                backgroundColor: "rgba(255,255,255,0.95)",
                borderRadius: "var(--radius-lg)",
                padding: "1.125rem 1.25rem",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}>
                <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", backgroundColor: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Heart size={18} color="var(--color-primary)" fill="var(--color-primary)" />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--color-text)", fontFamily: "var(--font-ui)", margin: 0 }}>
                    500+ Families Trust Us
                  </p>
                  <div style={{ display: "flex", gap: "2px", marginTop: "3px" }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--color-secondary)" color="var(--color-secondary)" />)}
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginLeft: "0.375rem", fontFamily: "var(--font-body)" }}>4.9 / 5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "var(--color-surface-warm)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
          {TRUST_STATS.map((stat, i) => (
            <div key={stat.label} style={{
              padding: "1.75rem 1.5rem",
              textAlign: "center",
              borderRight: i < TRUST_STATS.length - 1 ? "1px solid var(--color-border)" : "none",
            }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)", margin: 0 }}>{stat.value}</p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", fontFamily: "var(--font-ui)", margin: 0, marginTop: "0.25rem" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="label-tag" style={{ display: "inline-flex" }}>Our Services</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)", marginBottom: "1rem" }}>
              Care Tailored to Your Family's Needs
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.0625rem", maxWidth: "540px", margin: "0 auto", fontFamily: "var(--font-body)" }}>
              From a few hours a week to round-the-clock support, we offer flexible care options that fit your situation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {SERVICES_PREVIEW.map((service) => (
              <div
                key={service.title}
                className="card"
                style={{ padding: "1.75rem", border: "1.5px solid var(--color-border)", transition: "all 0.25s ease", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-elevated)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)"; }}
              >
                <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "1.125rem", color: "var(--color-text)", marginBottom: "0.625rem", fontFamily: "var(--font-display)" }}>{service.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: "var(--font-body)", margin: 0 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/services" className="btn-outline">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-surface-teal)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="label-tag" style={{ display: "inline-flex" }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)" }}>
              Getting Started Is Simple
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} style={{ position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 700, color: "rgba(44,110,106,0.12)", lineHeight: 1, marginBottom: "0.5rem" }}>{step.step}</div>
                <h4 style={{ fontSize: "1.0625rem", color: "var(--color-text)", marginBottom: "0.5rem", fontFamily: "var(--font-display)" }}>{step.title}</h4>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65, fontFamily: "var(--font-body)", margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/book-assessment" className="btn-primary">Book Your Free Assessment <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="label-tag" style={{ display: "inline-flex" }}>Testimonials</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--color-text)" }}>
              Families Who Trust Us
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="card"
                style={{ padding: "1.75rem", border: "1.5px solid var(--color-border)" }}
              >
                <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={15} fill="var(--color-secondary)" color="var(--color-secondary)" />)}
                </div>
                <p style={{ color: "var(--color-text)", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "1.25rem", fontFamily: "var(--font-body)", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-text)", fontFamily: "var(--font-ui)", margin: 0 }}>{t.name}</p>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.825rem", fontFamily: "var(--font-body)", margin: 0 }}>{t.relation} · {t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: "var(--color-primary)", padding: "4rem 0" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
          <div>
            <h2 style={{ color: "white", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", marginBottom: "0.75rem" }}>
              Not sure where to start? We're here to help.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.0625rem", fontFamily: "var(--font-body)", margin: 0 }}>
              Call us anytime or book a free, no-pressure care assessment online.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flexShrink: 0 }}>
            <Link to="/book-assessment" className="btn-secondary">Book Free Assessment</Link>
            <a href="tel:+15551234567" className="btn-outline-white" style={{ justifyContent: "center" }}>
              <PhoneCall size={16} /> (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}