import { FiCheckCircle, FiPhone, FiClock, FiShield } from "react-icons/fi";
import BookingForm from "../components/BookingForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const benefits = [
  {
    icon: <FiCheckCircle size={20} />,
    title: "Completely Free",
    desc: "No cost, no obligation. The assessment is our gift to your family.",
  },
  {
    icon: <FiClock size={20} />,
    title: "Takes About 60 Minutes",
    desc: "A care coordinator visits your home to understand your loved one's needs.",
  },
  {
    icon: <FiShield size={20} />,
    title: "Personalized Care Plan",
    desc: "You'll receive a detailed, customized care plan and clear pricing.",
  },
];

export default function BookAssessment() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <section
        style={{
          background:
            "linear-gradient(140deg, var(--color-bg-hero) 0%, var(--color-bg-white) 60%)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p
            style={{
              color: "var(--color-primary)",
              fontWeight: 600,
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
            }}
          >
            Get Started
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "1.25rem",
            }}
          >
            Book Your Free In-Home Assessment
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
            }}
          >
            The first step toward the right care is a conversation. Our
            coordinator will meet with your family, assess your loved one's
            needs, and build a plan together — at no cost to you.
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section
        style={{
          background: "var(--color-bg-section)",
          padding: "2rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="benefits-grid">
            {benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "var(--color-primary-light)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                    flexShrink: 0,
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {b.title}
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section
        className="section"
        style={{ background: "var(--color-bg-base)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="book-inner">
            {/* Form */}
            <div className="card" style={{ padding: "2.5rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.625rem",
                  marginBottom: "0.5rem",
                }}
              >
                Request Your Assessment
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  marginBottom: "2rem",
                }}
              >
                Fill out the form below and a care coordinator will contact you
                within 24 hours.
              </p>
              <BookingForm />
            </div>

            {/* Side info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Call CTA */}
              <div
                className="card"
                style={{
                  padding: "2rem",
                  background: "var(--color-primary)",
                  border: "none",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <FiPhone size={28} color="white" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  Prefer to Call?
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  Our care coordinators are available 7 days a week, 8am–8pm
                  local time.
                </p>
                <a
                  href="tel:+18005550100"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "white",
                    color: "var(--color-primary)",
                    borderRadius: "var(--radius-full)",
                    padding: "0.75rem 1.5rem",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    textDecoration: "none",
                  }}
                >
                  (800) 555-0100
                </a>
              </div>

              {/* What to expect */}
              <div className="card" style={{ padding: "2rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    marginBottom: "1rem",
                  }}
                >
                  What to Expect
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      step: "1",
                      text: "We call you within 24 hours to confirm your appointment",
                    },
                    {
                      step: "2",
                      text: "A care coordinator visits your home — at your convenience",
                    },
                    {
                      step: "3",
                      text: "We discuss your loved one's needs, preferences, and routine",
                    },
                    {
                      step: "4",
                      text: "You receive a personalized care plan and transparent pricing",
                    },
                    {
                      step: "5",
                      text: "Care can begin within 24–48 hours if you're ready",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      style={{
                        display: "flex",
                        gap: "0.875rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "var(--radius-full)",
                          background: "var(--color-primary-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          color: "var(--color-primary)",
                          flexShrink: 0,
                        }}
                      >
                        {item.step}
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.55,
                          marginTop: "4px",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badge */}
              <div
                style={{
                  background: "var(--color-primary-light)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <FiShield
                  size={28}
                  style={{
                    color: "var(--color-primary)",
                    marginBottom: "0.75rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  Your information is private and secure. We never share your
                  details without your explicit consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style>{`
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .book-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .book-inner { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }
        @media (max-width: 560px) {
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
