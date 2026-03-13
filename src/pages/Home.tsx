import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiShield,
  FiHeart,
  FiClock,
  FiUsers,
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaHandHoldingHeart,
  FaBrain,
  FaUserNurse,
  FaWheelchair,
} from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const stats = [
  { icon: <FiUsers size={22} />, value: "2,400+", label: "Families Served" },
  { icon: <FiShield size={22} />, value: "100%", label: "Background Checked" },
  { icon: <FiClock size={22} />, value: "24/7", label: "Available Support" },
  { icon: <FiHeart size={22} />, value: "98%", label: "Satisfaction Rate" },
];

const services = [
  {
    icon: <FaUserNurse size={22} />,
    title: "Personal Care",
    description:
      "Assistance with daily activities including bathing, dressing, grooming, and medication reminders to maintain your loved one's dignity.",
  },
  {
    icon: <FaHandHoldingHeart size={22} />,
    title: "Companion Care",
    description:
      "Meaningful engagement through conversation, activities, and outings. Combating isolation while keeping seniors connected to life.",
  },
  {
    icon: <FaBrain size={22} />,
    title: "Memory Care",
    description:
      "Specialized support for those living with Alzheimer's or dementia, from trained caregivers who bring patience and expertise.",
  },
  {
    icon: <FaWheelchair size={22} />,
    title: "Post-Surgery Care",
    description:
      "Recovering at home is better with professional help. We assist with mobility, wound care support, and follow-up appointments.",
  },
];

const testimonials = [
  {
    name: "Margaret T.",
    relation: "Daughter, caring for her mother",
    text: "BrightPath gave us peace of mind we couldn't find anywhere else. Our caregiver, Rosa, is like family now. Mom looks forward to her visits every single day.",
    initials: "MT",
    accentColor: "var(--color-primary)",
  },
  {
    name: "Robert K.",
    relation: "Son, caring for his father",
    text: "From the very first phone call, the team was compassionate and professional. They matched Dad with a caregiver who shares his love of chess. The difference has been remarkable.",
    initials: "RK",
    accentColor: "#4AAB8C",
  },
  {
    name: "Linda & James H.",
    relation: "Couple managing care remotely",
    text: "Living three states away, we worried constantly. BrightPath's coordinators keep us informed and involved. We finally feel like we're not navigating this alone.",
    initials: "LH",
    accentColor: "#E8A838",
  },
];

const whyUs = [
  "Rigorous caregiver vetting — background checks, skills assessments, and personal interviews",
  "Guaranteed caregiver match within 24 hours of your free assessment",
  "Care coordinators available around the clock — including nights, weekends, and holidays",
  "Flexible care plans that adapt as your loved one's needs change",
  "No long-term contracts — care on your terms, always",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        {/* Hero */}
        <section
          style={{
            background:
              "linear-gradient(140deg, var(--color-bg-hero) 0%, var(--color-bg-white) 60%)",
            padding: "5rem 1.5rem 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circle */}
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "rgba(59,130,196,0.06)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="hero-inner">
              <div className="hero-text">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                    borderRadius: "var(--radius-full)",
                    padding: "0.375rem 1rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  <FiShield size={14} />
                  Trusted In-Home Senior Care
                </div>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                    lineHeight: 1.15,
                    color: "var(--color-text-primary)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Compassionate Care,
                  <br />
                  <span style={{ color: "var(--color-primary)" }}>
                    Right at Home
                  </span>
                </h1>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "540px",
                    marginBottom: "2rem",
                  }}
                >
                  We connect families with caring, professional caregivers — so
                  your loved ones can live safely and comfortably in the home
                  they love.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link
                    to="/book"
                    className="btn btn-primary"
                    style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}
                  >
                    Book Free Assessment
                  </Link>
                  <a
                    href="tel:+18005550100"
                    className="btn btn-outline"
                    style={{ fontSize: "1rem" }}
                  >
                    <FiPhone size={16} /> Call Us Now
                  </a>
                </div>
                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    "No obligation assessment",
                    "Care starts within 24hrs",
                    "Licensed & insured",
                  ].map((t) => (
                    <span
                      key={t}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      <FiCheckCircle
                        size={15}
                        style={{ color: "var(--color-success)" }}
                      />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hero card panel */}
              <div className="hero-card-panel">
                <div
                  style={{
                    background: "var(--color-bg-white)",
                    borderRadius: "var(--radius-xl)",
                    boxShadow: "var(--shadow-card-hover)",
                    padding: "2rem",
                    border: "1px solid var(--color-border-light)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      color: "var(--color-text-primary)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Find Care in Your Area
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.875rem",
                    }}
                  >
                    <input
                      placeholder="Enter your ZIP code"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1.5px solid var(--color-border)",
                        fontSize: "1rem",
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text-primary)",
                        background: "var(--color-secondary)",
                        outline: "none",
                      }}
                    />
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1.5px solid var(--color-border)",
                        fontSize: "1rem",
                        fontFamily: "var(--font-body)",
                        color: "var(--color-text-secondary)",
                        background: "var(--color-secondary)",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Type of care needed</option>
                      <option>Personal Care</option>
                      <option>Companion Care</option>
                      <option>Memory Care</option>
                      <option>Post-Surgery Care</option>
                      <option>Respite Care</option>
                    </select>
                    <Link
                      to="/book"
                      className="btn btn-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "0.875rem",
                      }}
                    >
                      Get Started
                    </Link>
                  </div>
                  <p
                    style={{
                      marginTop: "1rem",
                      textAlign: "center",
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Free, no-obligation — takes less than 2 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section
          style={{ background: "var(--color-primary)", padding: "2rem 1.5rem" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="stats-grid">
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "1.375rem", fontWeight: 700 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.8125rem", opacity: 0.8 }}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          className="section"
          style={{ background: "var(--color-bg-base)" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                maxWidth: "560px",
                margin: "0 auto 3rem",
              }}
            >
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
                What We Offer
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  marginBottom: "1rem",
                }}
              >
                Care Tailored to Every Family
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                }}
              >
                From a few hours a week to around-the-clock support, we build a
                care plan that fits your loved one's unique needs.
              </p>
            </div>
            <div className="services-grid">
              {services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link to="/services" className="btn btn-outline">
                View All Services <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why BrightPath */}
        <section
          className="section"
          style={{ background: "var(--color-bg-section)" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="why-inner">
              <div>
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
                  Why Families Choose Us
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Care You Can Trust,
                  <br />
                  From People Who Care
                </h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "1.0625rem",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  We know that inviting someone into your family's home is a
                  profound act of trust. That's why every part of our process is
                  built around earning — and keeping — that trust.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                    marginBottom: "2rem",
                  }}
                >
                  {whyUs.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <FiCheckCircle
                        size={18}
                        style={{
                          color: "var(--color-success)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <span
                        style={{
                          color: "var(--color-text-secondary)",
                          fontSize: "0.9375rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="btn btn-primary">
                  Learn About Our Process <FiArrowRight size={16} />
                </Link>
              </div>

              <div
                style={{
                  background: "var(--color-bg-white)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2.5rem",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-border-light)",
                }}
              >
                <div
                  style={{
                    background: "var(--color-primary-light)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.0625rem",
                      color: "var(--color-text-primary)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    "Finding care for Mom was overwhelming — until we called
                    BrightPath. Within two days we had a wonderful caregiver,
                    and within a week it felt like she'd always been part of our
                    family."
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        background: "var(--color-primary)",
                        borderRadius: "var(--radius-full)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                      }}
                    >
                      SL
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9375rem" }}>
                        Susan L.
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        Daughter, Phoenix AZ
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  {[
                    { label: "Years in Service", value: "12+" },
                    { label: "Active Caregivers", value: "850+" },
                    { label: "5-Star Reviews", value: "1,200+" },
                  ].map((m) => (
                    <div key={m.label} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1.625rem",
                          fontWeight: 700,
                          color: "var(--color-primary)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="section"
          style={{ background: "var(--color-bg-base)" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                maxWidth: "520px",
                margin: "0 auto 3rem",
              }}
            >
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
                Families We've Helped
              </p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Real Stories, Real Comfort
              </h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, #2A6FAF 100%)",
            padding: "4rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
              color: "white",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                opacity: 0.88,
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              A free, no-obligation in-home assessment is the first step. Meet a
              care coordinator, discuss your loved one's needs, and receive a
              personalized care plan — at no cost.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/book"
                style={{
                  background: "white",
                  color: "var(--color-primary)",
                  padding: "0.875rem 2rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "1rem",
                  transition: "opacity var(--transition-base)",
                }}
              >
                Book Free Assessment
              </Link>
              <a
                href="tel:+18005550100"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.5)",
                  padding: "0.8125rem 2rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FiPhone size={16} /> (800) 555-0100
              </a>
            </div>
          </div>
        </section>

        <style>{`
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-card-panel { max-width: 400px; margin-left: auto; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .why-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
          .hero-card-panel { margin: 0; max-width: 100%; }
          .why-inner { grid-template-columns: 1fr; gap: 2rem; }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
}