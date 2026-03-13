import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FiPhone,
  FiMenu,
  FiX,
  FiHeart,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Service Areas", path: "/areas" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      style={{
        background: "var(--color-bg-white)",
        boxShadow: "var(--shadow-nav)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "var(--color-primary)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiHeart size={18} color="white" />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--color-text-primary)",
            }}
          >
            Bright<span style={{ color: "var(--color-primary)" }}>Path</span> Care
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: "0.5rem 0.875rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9375rem",
                fontWeight: isActive(link.path) ? 600 : 400,
                color: isActive(link.path)
                  ? "var(--color-primary)"
                  : "var(--color-text-secondary)",
                background: isActive(link.path)
                  ? "var(--color-primary-light)"
                  : "transparent",
                textDecoration: "none",
                transition: "all var(--transition-base)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          className="desktop-nav"
        >
          <a
            href="tel:+18005550100"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <FiPhone size={15} style={{ color: "var(--color-primary)" }} />
            (800) 555-0100
          </a>
          <Link to="/book" className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "0.6rem 1.25rem" }}>
            Book Assessment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-text-primary)",
          }}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "var(--color-bg-white)",
            borderTop: "1px solid var(--color-border-light)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-md)",
                fontSize: "1rem",
                fontWeight: isActive(link.path) ? 600 : 400,
                color: isActive(link.path)
                  ? "var(--color-primary)"
                  : "var(--color-text-secondary)",
                background: isActive(link.path)
                  ? "var(--color-primary-light)"
                  : "transparent",
                textDecoration: "none",
                marginBottom: "0.25rem",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href="tel:+18005550100"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontWeight: 500,
                padding: "0 1rem",
              }}
            >
              <FiPhone size={16} style={{ color: "var(--color-primary)" }} />
              (800) 555-0100
            </a>
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Book Free Assessment
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}