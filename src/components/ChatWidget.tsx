import { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX, FiSend, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "Do you accept Medicare?",
  "How soon can care start?",
  "What services do you offer?",
  "How are caregivers screened?",
  "What does care cost?",
];

const botResponses: Record<string, string> = {
  medicare:
    "BrightPath Care currently accepts private pay and long-term care insurance. We do not accept Medicare or Medicaid directly. However, some of our clients use their Medicare Advantage supplemental benefits. Our care coordinators can help you explore all payment options during your free assessment.",
  soon:
    "We understand urgency. In most cases, we can begin care within 24–48 hours of completing your free assessment. For immediate needs, please call us at (800) 555-0100 and we'll do our best to arrange same-day or next-day services.",
  services:
    "We offer a full range of in-home care services including: Personal Care (bathing, dressing, grooming), Companion Care, Memory Care for those with Alzheimer's or dementia, Post-Surgery Recovery Care, Respite Care, and 24/7 Live-In Care. Would you like details on any specific service?",
  screened:
    "Every BrightPath caregiver goes through a rigorous screening process: national background checks, reference verification, skills assessment, and in-person interviews. All caregivers are bonded and insured, and receive ongoing training. Your family's safety is our top priority.",
  cost:
    "Our care rates vary based on the type and hours of care needed. We offer flexible scheduling from just a few hours per week to full-time live-in care. We'll provide a detailed, transparent quote during your free in-home assessment — no hidden fees, ever.",
  default:
    "Thank you for your question! For the most accurate answer, I'd recommend speaking with one of our care coordinators. You can call us at (800) 555-0100 or book a free assessment online. We're happy to help you navigate care options for your loved one.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("medicare") || lower.includes("insurance") || lower.includes("payment")) return botResponses.medicare;
  if (lower.includes("soon") || lower.includes("start") || lower.includes("when") || lower.includes("begin")) return botResponses.soon;
  if (lower.includes("service") || lower.includes("offer") || lower.includes("provide") || lower.includes("help")) return botResponses.services;
  if (lower.includes("screen") || lower.includes("background") || lower.includes("vett") || lower.includes("trust") || lower.includes("safe")) return botResponses.screened;
  if (lower.includes("cost") || lower.includes("price") || lower.includes("rate") || lower.includes("fee") || lower.includes("charge")) return botResponses.cost;
  return botResponses.default;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hi! I'm the BrightPath Care virtual assistant. I'm here to answer your questions about our home care services. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const botReply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: getBotResponse(text),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botReply]);
      setTyping(false);
    }, 1200 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat assistant"}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: "56px",
          height: "56px",
          borderRadius: "var(--radius-full)",
          background: "var(--color-primary)",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(59,130,196,0.4)",
          zIndex: 200,
          transition: "transform var(--transition-smooth), background var(--transition-base)",
        }}
        onMouseOver={e => (e.currentTarget.style.background = "var(--color-primary-hover)")}
        onMouseOut={e => (e.currentTarget.style.background = "var(--color-primary)")}
      >
        {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="chat-open"
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "1.5rem",
            width: "360px",
            maxWidth: "calc(100vw - 2rem)",
            background: "var(--color-bg-white)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 16px 48px rgba(26,43,60,0.18)",
            zIndex: 199,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid var(--color-border-light)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "var(--color-primary)",
              padding: "1rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaRobot size={18} color="white" />
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 600, fontSize: "0.9375rem" }}>BrightPath Assistant</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.75rem" }}>Typically replies in seconds</div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              maxHeight: "340px",
              background: "var(--color-secondary)",
            }}
          >
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  gap: "0.5rem",
                  alignItems: "flex-end",
                }}
              >
                {msg.role === "assistant" && (
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "var(--color-primary)",
                      borderRadius: "var(--radius-full)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaRobot size={12} color="white" />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "0.625rem 0.875rem",
                    borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: msg.role === "user" ? "var(--color-primary)" : "white",
                    color: msg.role === "user" ? "white" : "var(--color-text-primary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "var(--color-secondary-dark)",
                      borderRadius: "var(--radius-full)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FiUser size={13} color="var(--color-text-secondary)" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "var(--color-primary)",
                    borderRadius: "var(--radius-full)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FaRobot size={12} color="white" />
                </div>
                <div
                  style={{
                    padding: "0.625rem 1rem",
                    background: "white",
                    borderRadius: "16px 16px 16px 4px",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span className="dot" style={{ width: "6px", height: "6px", background: "var(--color-text-muted)", borderRadius: "50%", display: "block" }} />
                  <span className="dot" style={{ width: "6px", height: "6px", background: "var(--color-text-muted)", borderRadius: "50%", display: "block" }} />
                  <span className="dot" style={{ width: "6px", height: "6px", background: "var(--color-text-muted)", borderRadius: "50%", display: "block" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          <div
            style={{
              padding: "0.625rem 0.875rem",
              background: "var(--color-bg-white)",
              borderTop: "1px solid var(--color-border-light)",
              display: "flex",
              gap: "0.375rem",
              flexWrap: "wrap",
            }}
          >
            {suggestedQuestions.slice(0, 3).map(q => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                style={{
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  border: "none",
                  borderRadius: "var(--radius-full)",
                  padding: "0.3rem 0.7rem",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  transition: "background var(--transition-base)",
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.75rem",
              borderTop: "1px solid var(--color-border-light)",
              display: "flex",
              gap: "0.5rem",
              background: "var(--color-bg-white)",
            }}
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: "0.625rem 0.875rem",
                borderRadius: "var(--radius-full)",
                border: "1.5px solid var(--color-border)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-body)",
                color: "var(--color-text-primary)",
                outline: "none",
                background: "var(--color-secondary)",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-full)",
                background: input.trim() ? "var(--color-primary)" : "var(--color-border)",
                border: "none",
                cursor: input.trim() ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background var(--transition-base)",
                flexShrink: 0,
              }}
            >
              <FiSend size={15} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}