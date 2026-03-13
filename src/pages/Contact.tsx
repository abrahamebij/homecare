import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck } from "react-icons/fi";

const contactMethods = [
  {
    icon: <FiPhone size={22} />,
    label: "Phone",
    value: "(800) 555-0100",
    sub: "Mon–Sun, 8am–8pm",
    href: "tel:+18005550100",
  },
  {
    icon: <FiMail size={22} />,
    label: "Email",
    value: "hello@brightpathcare.com",
    sub: "Response within 24 hours",
    href: "mailto:hello@brightpathcare.com",
  },
  {
    icon: <FiMapPin size={22} />,
    label: "Headquarters",
    value: "450 Wellness Ave, Suite 300",
    sub: "New York, NY 10001",
    href: "#",
  },
  {
    icon: <FiClock size={22} />,
    label: "Office Hours",
    value: "Monday – Sunday",
    sub: "8:00 AM – 8:00 PM (local time)",
    href: "#",
  },
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "12px",
  border: "1.5px solid var(--color-border)",
  background: "var(--color-bg-white)",
  fontSize: "0.9375rem",
  color: "var(--color-text-primary)",
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color 200ms ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "var(--color-text-secondary)",
  marginBottom: "0.4rem",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(140deg, var(--color-bg-hero) 0%, var(--color-bg-white) 60%)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <p style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            Get In Touch
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem" }}>
            We're Here to Help
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Have a question? Just want to learn more? Our care coordinators are real people who are happy to talk — no pressure, no sales pitch.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section style={{ background: "var(--color-bg-section)", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="contact-methods-grid">
            {contactMethods.map(m => (
              <a
                key={m.label}
                href={m.href}
                style={{
                  background: "var(--color-bg-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-border-light)",
                  textDecoration: "none",
                  transition: "box-shadow var(--transition-smooth), transform var(--transition-smooth)",
                }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--color-primary-light)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                  }}
                >
                  {m.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                    {m.label}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: "1rem", color: "var(--color-text-primary)" }}>{m.value}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>{m.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + map */}
      <section className="section" style={{ background: "var(--color-bg-base)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="contact-form-grid">
            {/* Form */}
            <div className="card" style={{ padding: "2.5rem" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "var(--color-primary)",
                      borderRadius: "var(--radius-full)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.25rem",
                    }}
                  >
                    <FiCheck size={26} color="white" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Thank you for reaching out. A care coordinator will respond within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9375rem", marginBottom: "2rem" }}>
                    We'll get back to you within one business day.
                  </p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div className="form-row-2">
                      <div>
                        <label style={labelStyle}>Your Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" style={fieldStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
                          onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@example.com" style={fieldStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
                          onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
                      </div>
                    </div>
                    <div className="form-row-2">
                      <div>
                        <label style={labelStyle}>Phone (optional)</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" style={fieldStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
                          onBlur={e => (e.target.style.borderColor = "var(--color-border)")} />
                      </div>
                      <div>
                        <label style={labelStyle}>Subject</label>
                        <select name="subject" value={form.subject} onChange={handleChange} style={{ ...fieldStyle, cursor: "pointer" }}
                          onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
                          onBlur={e => (e.target.style.borderColor = "var(--color-border)")}>
                          <option value="">Select a topic</option>
                          <option>Services & Care Plans</option>
                          <option>Pricing & Insurance</option>
                          <option>Caregiver Employment</option>
                          <option>Service Area</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Your Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        style={{ ...fieldStyle, resize: "vertical", lineHeight: 1.6 }}
                        onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
                        onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ padding: "0.875rem", fontSize: "1rem", fontWeight: 600, width: "100%" }}>
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info side */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* FAQ snippets */}
              <div className="card" style={{ padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", marginBottom: "1.25rem" }}>
                  Common Questions
                </h3>
                {[
                  {
                    q: "How quickly can care begin?",
                    a: "In most areas, care can begin within 24–48 hours of your free assessment.",
                  },
                  {
                    q: "Do you accept insurance?",
                    a: "We accept long-term care insurance and private pay. We can help you check your coverage.",
                  },
                  {
                    q: "Are your caregivers employees?",
                    a: "Yes. All our caregivers are BrightPath employees — background-checked, insured, and trained.",
                  },
                  {
                    q: "Can I meet the caregiver first?",
                    a: "Absolutely. We encourage a meet-and-greet before care begins to ensure a great match.",
                  },
                ].map(faq => (
                  <div key={faq.q} style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid var(--color-border-light)" }}>
                    <p style={{ fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.375rem", color: "var(--color-text-primary)" }}>
                      {faq.q}
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>

              {/* Emergency */}
              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-primary) 0%, #2A6FAF 100%)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  color: "white",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", color: "white", marginBottom: "0.5rem" }}>
                  Urgent Care Needed?
                </h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.85, lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  If your family has an immediate care need, don't wait — call us directly and we'll do everything we can to help right away.
                </p>
                <a
                  href="tel:+18005550100"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: "white",
                    color: "var(--color-primary)",
                    borderRadius: "var(--radius-full)",
                    padding: "0.75rem 1.5rem",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    textDecoration: "none",
                  }}
                >
                  <FiPhone size={18} /> (800) 555-0100
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-methods-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .contact-methods-grid { grid-template-columns: repeat(2, 1fr); }
          .contact-form-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .contact-methods-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
}