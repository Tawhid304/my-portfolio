import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/username" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/username" },
    { icon: <FaTwitter />, url: "https://twitter.com/username" },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        padding: "100px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        background:
          "linear-gradient(135deg, #2563eb, #7c3aed, #ff7e5f, #feb47b)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 20s ease infinite",
        borderRadius: "12px",
      }}
    >
      {/* Styles */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .fade-slide {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-slide.active {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.3s; }
        .delay-2 { transition-delay: 0.6s; }
        .delay-3 { transition-delay: 0.9s; }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 1.5rem;
          transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
        }

        .social-icon:hover {
          transform: scale(1.2) rotate(-10deg);
          background: rgba(255,255,255,0.25);
          box-shadow: 0 0 15px rgba(255,255,255,0.6);
        }

        .contact-link {
          color: #fff;
          text-decoration: none;
          transition: 0.3s;
        }

        .contact-link:hover {
          text-decoration: underline;
          color: #facc15;
        }

        @media screen and (max-width: 768px) {
          #contact h2 { font-size: 2rem; }
        }
      `}</style>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15,23,42,0.6)",
          zIndex: 0,
          borderRadius: "12px",
        }}
      ></div>

      {/* Heading */}
      <h2
        className={`fade-slide ${visible ? "active" : ""}`}
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Contact Me
      </h2>

      {/* Contact Form */}
      <form
        className={`fade-slide delay-1 ${visible ? "active" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
          margin: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />
        <textarea
          placeholder="Message"
          rows="5"
          style={inputStyle}
        ></textarea>
        <button
          type="submit"
          className={`fade-slide delay-2 ${visible ? "active" : ""}`}
          style={buttonStyle}
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div
        className={`fade-slide delay-2 ${visible ? "active" : ""}`}
        style={{
          marginTop: "30px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{ margin: "8px 0", fontSize: "1.1rem" }}>
          <FaEnvelope style={{ marginRight: "8px" }} />
          <a href="mailto:tawhid.zia.2020@gmail.com" className="contact-link">
            tawhid.zia.2020@gmail.com
          </a>
        </p>

        <p style={{ margin: "8px 0", fontSize: "1.1rem" }}>
          <FaPhone style={{ marginRight: "8px" }} />
          <a href="tel:+93782049304" className="contact-link">
            +93782049304
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div
        className={`fade-slide delay-3 ${visible ? "active" : ""}`}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  fontSize: "1rem",
  outline: "none",
  background: "rgba(255,255,255,0.1)",
  color: "#ffffff",
};

const buttonStyle = {
  padding: "12px 28px",
  borderRadius: "50px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
  background: "#ffffff",
  color: "#0f172a",
  boxShadow: "0 0 15px rgba(255,255,255,0.4)",
  transition: "0.3s",
};

export default Contact;