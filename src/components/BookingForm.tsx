import { useState } from "react";
import { FiCheck } from "react-icons/fi";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  careType: string;
  urgency: string;
  message: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  careType: "",
  urgency: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "var(--radius-md)",
    border: "1.5px solid var(--color-border)",
    background: "var(--color-bg-white)",
    fontSize: "0.9375rem",
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color var(--transition-base)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "var(--color-text-secondary)",
    marginBottom: "0.4rem",
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem 2rem",
          background: "var(--color-primary-light)",
          borderRadius: "var(--radius-xl)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            background: "var(--color-primary)",
            borderRadius: "var(--radius-full)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <FiCheck size={28} color="white" />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            marginBottom: "0.75rem",
            color: "var(--color-text-primary)",
          }}
        >
          Request Received!
        </h3>
        <p style={{ color: "var(--color-text-secondary)", maxWidth: "400px", margin: "0 auto" }}>
          Thank you, {form.firstName}. A care coordinator will contact you within 24 hours to schedule your free in-home assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="form-row-2">
        <div>
          <label style={labelStyle}>First Name *</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            placeholder="Jane"
            style={fieldStyle}
            onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Last Name *</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            placeholder="Smith"
            style={fieldStyle}
            onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
      </div>

      <div className="form-row-2">
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            style={fieldStyle}
            onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="(555) 000-0000"
            style={fieldStyle}
            onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
      </div>

      <div className="form-row-2">
        <div>
          <label style={labelStyle}>ZIP Code *</label>
          <input
            name="zip"
            value={form.zip}
            onChange={handleChange}
            required
            placeholder="10001"
            style={fieldStyle}
            onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Type of Care Needed *</label>
          <select
            name="careType"
            value={form.careType}
            onChange={handleChange}
            required
            style={{ ...fieldStyle, cursor: "pointer" }}
            onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
            onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
          >
            <option value="">Select a service</option>
            <option>Personal Care</option>
            <option>Companion Care</option>
            <option>Memory Care</option>
            <option>Post-Surgery Care</option>
            <option>Respite Care</option>
            <option>24/7 Live-In Care</option>
            <option>Not Sure Yet</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>How soon do you need care?</label>
        <select
          name="urgency"
          value={form.urgency}
          onChange={handleChange}
          style={{ ...fieldStyle, cursor: "pointer" }}
          onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
          onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
        >
          <option value="">Select timeframe</option>
          <option>Immediately (within 48 hours)</option>
          <option>Within 1 week</option>
          <option>Within 1 month</option>
          <option>Just exploring options</option>
        </select>
      </div>

      <div>
        <label style={labelStyle}>Additional Notes</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more about your loved one's needs, schedule preferences, or any questions you have..."
          rows={4}
          style={{ ...fieldStyle, resize: "vertical", lineHeight: 1.6 }}
          onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
          onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ padding: "0.875rem 2rem", fontSize: "1rem", fontWeight: 600, width: "100%" }}
      >
        Request Free Assessment
      </button>

      <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", textAlign: "center" }}>
        No obligation. A care coordinator will contact you within 24 hours.
      </p>

      <style>{`
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 560px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
}