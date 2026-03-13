import { Link } from "react-router";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiHeart,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-text-primary)",
        color: "var(--color-text-inverse)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  background: "var(--color-primary)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiHeart size={16} color="white" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                }}
              >
                BrightPath Care
              </span>
            </div>
            <p style={{ color: "#A8B8C8", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "280px" }}>
              Connecting families with compassionate, professional caregivers so your loved ones can thrive at home.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a href="#" aria-label="Facebook" style={{ color: "#A8B8C8", transition: "color var(--transition-base)" }}
                onMouseOver={e => (e.currentTarget.style.color = "white")}
                onMouseOut={e => (e.currentTarget.style.color = "#A8B8C8")}>
                <FiFacebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" style={{ color: "#A8B8C8", transition: "color var(--transition-base)" }}
                onMouseOver={e => (e.currentTarget.style.color = "white")}
                onMouseOut={e => (e.currentTarget.style.color = "#A8B8C8")}>
                <FiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#A8B8C8", marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>
              Quick Links
            </h4>
            {[
              { label: "Our Services", to: "/services" },
              { label: "About Us", to: "/about" },
              { label: "Service Areas", to: "/areas" },
              { label: "Book Assessment", to: "/book" },
              { label: "Contact", to: "/contact" },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: "block",
                  color: "#A8B8C8",
                  textDecoration: "none",
                  marginBottom: "0.6rem",
                  fontSize: "0.9rem",
                  transition: "color var(--transition-base)",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "white")}
                onMouseOut={e => (e.currentTarget.style.color = "#A8B8C8")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#A8B8C8", marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>
              Services
            </h4>
            {[
              "Personal Care",
              "Companion Care",
              "Memory Care",
              "Post-Surgery Care",
              "Respite Care",
              "24/7 Live-In Care",
            ].map(s => (
              <span key={s} style={{ display: "block", color: "#A8B8C8", fontSize: "0.9rem", marginBottom: "0.6rem" }}>
                {s}
              </span>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#A8B8C8", marginBottom: "1.25rem", fontFamily: "var(--font-body)" }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a href="tel:+18005550100" style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#A8B8C8", textDecoration: "none", fontSize: "0.9rem" }}>
                <FiPhone size={15} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                (800) 555-0100
              </a>
              <a href="mailto:hello@brightpathcare.com" style={{ display: "flex", alignItems: "center", gap: "0.625rem", color: "#A8B8C8", textDecoration: "none", fontSize: "0.9rem" }}>
                <FiMail size={15} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                hello@brightpathcare.com
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "#A8B8C8", fontSize: "0.9rem" }}>
                <FiMapPin size={15} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                <span>Serving the Greater<br />Metro Area</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "3rem",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "#6A7E90", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} BrightPath Care. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map(t => (
              <a key={t} href="#" style={{ color: "#6A7E90", textDecoration: "none", fontSize: "0.8125rem" }}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}