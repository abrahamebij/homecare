import { FiStar } from "react-icons/fi";

interface TestimonialCardProps {
  name: string;
  relation: string;
  text: string;
  rating?: number;
  initials: string;
  accentColor?: string;
}

export default function TestimonialCard({
  name,
  relation,
  text,
  rating = 5,
  initials,
  accentColor = "var(--color-primary)",
}: TestimonialCardProps) {
  return (
    <div
      className="card"
      style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {Array.from({ length: rating }).map((_, i) => (
          <FiStar
            key={i}
            size={16}
            style={{ color: "#E8A838", fill: "#E8A838" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "0.9375rem",
          lineHeight: 1.7,
          fontStyle: "italic",
          flex: 1,
        }}
      >
        "{text}"
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "var(--radius-full)",
            background: accentColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 700,
            fontSize: "0.875rem",
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-text-primary)" }}>
            {name}
          </div>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
            {relation}
          </div>
        </div>
      </div>
    </div>
  );
}