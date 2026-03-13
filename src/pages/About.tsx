import { Link } from "react-router";
import {
  FiCheckCircle,
  FiAward,
  FiHeart,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { FaUserNurse } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: <FiHeart size={22} />,
    title: "Compassion First",
    desc: "We see every client as a person with a life story, not a care plan. Empathy shapes every decision we make.",
  },
  {
    icon: <FiShield size={22} />,
    title: "Trust & Safety",
    desc: "Rigorous vetting, background checks, and ongoing supervision mean families can rest easy knowing their loved one is in safe hands.",
  },
  {
    icon: <FiAward size={22} />,
    title: "Excellence in Care",
    desc: "We hold our caregivers to the highest professional standards and invest continuously in their training and development.",
  },
  {
    icon: <FiUsers size={22} />,
    title: "Family Partnership",
    desc: "We believe care works best when families are informed, involved, and supported throughout the journey.",
  },
];

const team = [
  {
    name: "Dr. Patricia Morales",
    role: "Chief Executive Officer",
    bio: "A former geriatric physician with 20 years of clinical experience, Patricia founded BrightPath to bring the warmth and expertise she saw in hospital care directly into people's homes.",
    initials: "PM",
    color: "var(--color-primary)",
  },
  {
    name: "James Okafor",
    role: "Director of Caregiver Excellence",
    bio: "James built our industry-leading caregiver screening and training program from the ground up. He is passionate about investing in caregivers as professionals.",
    initials: "JO",
    color: "#4AAB8C",
  },
  {
    name: "Sandra Lee",
    role: "Head of Family Services",
    bio: "Having navigated finding care for her own parent, Sandra joined BrightPath to ensure every family receives the guidance she wished she had.",
    initials: "SL",
    color: "#E8A838",
  },
  {
    name: "Marcus Webb",
    role: "Director of Operations",
    bio: "Marcus oversees service delivery across all our locations, ensuring consistency, responsiveness, and quality that families can depend on.",
    initials: "MW",
    color: "#5BA4D4",
  },
];

const process = [
  {
    step: "01",
    title: "Free In-Home Assessment",
    desc: "A care coordinator visits your home, meets your loved one, and listens to understand their specific needs, preferences, and routines.",
  },
  {
    step: "02",
    title: "Personalized Care Plan",
    desc: "We design a care plan around your loved one — the right services, schedule, and goals — and walk you through every detail.",
  },
  {
    step: "03",
    title: "Caregiver Matching",
    desc: "We carefully select a caregiver whose skills, personality, and availability align with your family. Your input matters throughout.",
  },
  {
    step: "04",
    title: "Care Begins",
    desc: "Care starts — often within 24 hours. Your coordinator stays in touch, and the plan evolves as needs change.",
  },
];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <section
        style={{
          background:
            "linear-gradient(140deg, var(--color-bg-hero) 0%, var(--color-bg-white) 60%)",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="about-hero-inner">
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
                Our Story
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  marginBottom: "1.25rem",
                }}
              >
                Care Born from Personal Experience
              </h1>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                BrightPath Care was founded in 2012 by a physician who
                experienced firsthand how difficult — and how important —
                finding quality in-home care could be. After helping her own
                grandmother navigate aging at home, she recognized a gap between
                the clinical care people deserved and the inconsistent,
                fragmented help available.
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                Since then, we've grown into a trusted team of over 850
                caregivers, care coordinators, and support staff — united by a
                single mission: helping seniors live fully and safely at home,
                and giving their families genuine peace of mind.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {[
                  { value: "12+", label: "Years in Service" },
                  { value: "2,400+", label: "Families Helped" },
                  { value: "850+", label: "Active Caregivers" },
                ].map((m) => (
                  <div key={m.label}>
                    <div
                      style={{
                        fontSize: "1.875rem",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "var(--color-primary-light)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--color-primary)",
                  borderRadius: "var(--radius-full)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaUserNurse size={36} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                }}
              >
                Accredited & Licensed
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.65,
                }}
              >
                BrightPath is fully licensed in all states we operate,
                accredited by the Home Care Association of America, and
                maintains an A+ rating with the Better Business Bureau.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                {[
                  "HCAOA Member",
                  "BBB A+ Rated",
                  "State Licensed",
                  "Fully Insured & Bonded",
                ].map((b) => (
                  <div
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <FiCheckCircle
                      size={15}
                      style={{ color: "var(--color-success)" }}
                    />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section"
        style={{ background: "var(--color-bg-section)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              What We Stand For
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Our Core Values
            </h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="card" style={{ padding: "2rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "var(--color-primary-light)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="section"
        style={{ background: "var(--color-bg-base)" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              Simple Steps
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              How It Works
            </h2>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {process.map((p, i) => (
              <div
                key={p.step}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "var(--radius-full)",
                    background:
                      i === 0
                        ? "var(--color-primary)"
                        : "var(--color-primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: i === 0 ? "white" : "var(--color-primary)",
                    flexShrink: 0,
                  }}
                >
                  {p.step}
                </div>
                <div
                  style={{
                    background: "var(--color-bg-white)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.5rem",
                    flex: 1,
                    boxShadow: "var(--shadow-card)",
                    border: "1px solid var(--color-border-light)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="section"
        style={{ background: "var(--color-bg-section)" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              The People Behind the Care
            </p>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Our Leadership Team
            </h2>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div
                key={m.name}
                className="card"
                style={{ padding: "2rem", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "var(--radius-full)",
                    background: m.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    margin: "0 auto 1rem",
                  }}
                >
                  {m.initials}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {m.name}
                </h3>
                <p
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginBottom: "0.875rem",
                  }}
                >
                  {m.role}
                </p>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                  }}
                >
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, #2A6FAF 100%)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          Ready to Meet Your Care Team?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "1.0625rem",
            maxWidth: "500px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          Schedule your free assessment and see firsthand why thousands of
          families trust BrightPath.
        </p>
        <Link
          to="/book"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "white",
            color: "var(--color-primary)",
            padding: "0.875rem 2rem",
            borderRadius: "var(--radius-full)",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          Book Free Assessment
        </Link>
      </section>

      <Footer />

      <style>{`
        .about-hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .about-hero-inner { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 540px) {
          .values-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
