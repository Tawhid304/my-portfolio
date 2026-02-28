import React from "react";
import profilePic from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        background: "linear-gradient(135deg, #2563eb, #7c3aed, #ff7e5f, #feb47b)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 20s ease infinite",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", maxWidth: "700px", padding: "0 20px" }}>
        <img
          src={profilePic}
          alt="Tawhidullah Akhnozada"
          style={{ width: "160px", height: "160px", borderRadius: "50%", border: "4px solid white", objectFit: "cover", boxShadow: "0 15px 35px rgba(0,0,0,0.4)", animation: "float 4s ease-in-out infinite", transition: "transform 0.3s" }}
        />
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "900",
          margin: 0,
          background: "linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #7c3aed)",
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 6s ease infinite"
        }}>Hello, I'm Tawhidullah Akhnozada</h1>
        <p style={{ fontSize: "1.2rem", color: "#e0e0e0", opacity: 0, animation: "fadeUp 1s forwards 0.5s" }}>
          Full-Stack Developer | Welcome to my Portfolio
        </p>
        <a href="#contact" style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 28px",
          borderRadius: "50px",
          fontWeight: 600,
          textDecoration: "none",
          background: "#ffffff",
          color: "#0f172a",
          boxShadow: "0 0 15px rgba(255,255,255,0.4)",
          animation: "fadeUp 1s forwards 0.8s, bounce 2s infinite 1.5s",
          transition: "transform 0.3s, box-shadow 0.3s, background 0.3s"
        }}>
          Contact Me <span style={{ display: "block", fontSize: "0.9rem", color: "#2563eb" }}>+93782049304</span>
        </a>
      </div>

      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
          from { opacity: 0; transform: translateY(20px); }
        }
        @keyframes bounce {
          0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-5px); }
        }
        @media screen and (max-width: 768px){
          h1{ font-size: 2rem; }
          p{ font-size: 1rem; }
          img{ width: 120px; height: 120px; }
        }
      `}</style>
    </section>
  );
}

export default Hero;