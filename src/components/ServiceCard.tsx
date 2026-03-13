import type { ReactNode } from "react";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function ServiceCard({ icon, title, description, color = "var(--color-primary-light)" }: ServiceCardProps) {
  return (
    <div
      className="card"
      style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          background: color,
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-primary)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1875rem",
          fontWeight: 600,
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "0.9375rem",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {description}
      </p>
      <Link
        to="/services"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          color: "var(--color-primary)",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: 600,
        }}
      >
        Learn more <FiArrowRight size={14} />
      </Link>
    </div>
  );
}