import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiCheckCircle, FiArrowRight, FiPhone } from "react-icons/fi";
import {
  FaUserNurse,
  FaHandHoldingHeart,
  FaBrain,
  FaWheelchair,
  FaHome,
  FaBed,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserNurse size={28} />,
    title: "Personal Care",
    description:
      "Our trained caregivers assist with the activities of daily living — bathing, dressing, grooming, toileting, and medication reminders — while always preserving your loved one's dignity and independence.",
    includes: [
      "Bathing and personal hygiene",
      "Dressing and grooming assistance",
      "Medication reminders",
      "Mobility and transfer assistance",
      "Meal preparation",
      "Light housekeeping",
    ],
    color: "var(--color-primary-light)",
  },
  {
    icon: <FaHandHoldingHeart size={28} />,
    title: "Companion Care",
    description:
      "Social connection is essential to wellbeing. Our companion caregivers provide friendship, conversation, mental engagement, and help with errands and outings to keep seniors active and joyful.",
    includes: [
      "Meaningful conversation and activities",
      "Accompaniment to appointments",
      "Grocery shopping and errands",
      "Games, reading, crafts",
      "Light exercise and walking",
      "Transportation assistance",
    ],
    color: "#EBF7F0",
  },
  {
    icon: <FaBrain size={28} />,
    title: "Memory Care",
    description:
      "We provide specialized, evidence-informed care for individuals living with Alzheimer's disease or other forms of dementia — delivered by caregivers trained in dementia-specific techniques.",
    includes: [
      "Dementia-specific training",
      "Safe, structured daily routines",
      "Sundowning and behavioral support",
      "Family communication and guidance",
      "Cognitive engagement activities",
      "Wandering prevention strategies",
    ],
    color: "#FFF4E6",
  },
  {
    icon: <FaWheelchair size={28} />,
    title: "Post-Surgery Care",
    description:
      "Recovery is smoother at home with the right support. We help with mobility, nutrition, follow-up appointment transportation, and ensure your loved one follows their recovery plan.",
    includes: [
      "Post-op mobility support",
      "Wound care monitoring",
      "Medication management",
      "Doctor appointment transport",
      "Physical therapy support",
      "Nutrition and meal planning",
    ],
    color: "var(--color-primary-light)",
  },
  {
    icon: <FaHome size={28} />,
    title: "Respite Care",
    description:
      "Family caregivers deserve rest too. Our respite services give you a break — whether for a few hours, a weekend, or longer — while your loved one receives consistent, caring attention.",
    includes: [
      "Scheduled and on-demand availability",
      "Seamless transitions from family care",
      "All personal and companion care services",
      "Regular updates for family caregivers",
      "Flexible scheduling options",
      "Weekend and holiday availability",
    ],
    color: "#EBF7F0",
  },
  {
    icon: <FaBed size={28} />,
    title: "24/7 Live-In Care",
    description:
      "For seniors who need constant supervision or support, our live-in caregivers provide round-the-clock presence in the comfort of home — a compassionate alternative to facility-based care.",
    includes: [
      "Overnight and 24-hour coverage",
      "Emergency response readiness",
      "Complete daily living assistance",
      "Consistent caregiver assignments",
      "Family coordination and reporting",
      "Meal planning and preparation",
    ],
    color: "#FFF4E6",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <div>
      {/* Page header */}
      <section
        style={{
          background: "linear-gradient(140deg, var(--color-bg-hero) 0%, var(--color-bg-white) 60%)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <p style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            Our Services
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "1.25rem",
            }}
          >
            Comprehensive In-Home Care
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
            }}
          >
            From occasional companion visits to 24/7 live-in support, every BrightPath service is personalized, professional, and delivered with genuine compassion.
          </p>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="section" style={{ background: "var(--color-bg-base)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card service-detail-card"
              style={{ padding: "0", overflow: "hidden" }}
            >
              <div className={`service-detail-inner ${i % 2 === 1 ? "service-reverse" : ""}`}>
                {/* Icon side */}
                <div
                  style={{
                    background: s.color,
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "1rem",
                    minWidth: "280px",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "var(--color-primary)",
                      borderRadius: "var(--radius-lg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem" }}>
                    {s.title}
                  </h3>
                  <Link
                    to="/book"
                    className="btn btn-primary"
                    style={{ fontSize: "0.875rem" }}
                  >
                    Book this service <FiArrowRight size={14} />
                  </Link>
                </div>

                {/* Content side */}
                <div style={{ padding: "2.5rem", flex: 1 }}>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {s.description}
                  </p>
                  <div className="service-includes-grid">
                    {s.includes.map(item => (
                      <div
                        key={item}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}
                      >
                        <FiCheckCircle size={15} style={{ color: "var(--color-success)", flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-bg-section)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", marginBottom: "1rem" }}>
            Not Sure Which Service Is Right?
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            That's what our free in-home assessments are for. A care coordinator will meet with your family, assess your loved one's needs, and recommend the ideal care plan.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/book" className="btn btn-primary">
              Schedule Free Assessment
            </Link>
            <a href="tel:+18005550100" className="btn btn-outline">
              <FiPhone size={15} /> Talk to a Coordinator
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-inner {
          display: flex;
          align-items: stretch;
        }
        .service-includes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.625rem;
        }
        @media (max-width: 768px) {
          .service-detail-inner { flex-direction: column; }
          .service-reverse { flex-direction: column; }
          .service-includes-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      </div>
      <Footer />
    </>
  );
}