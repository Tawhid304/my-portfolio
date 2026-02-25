import React from "react";
import profilePic from "../assets/profile.jpg"; // <-- your profile image

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <img src={profilePic} alt="Tawhidullah Akhnozada" className="hero-img" />
                <h1 className="hero-title">Hello, I'm Tawhidullah Akhnozada</h1>
                <p className="hero-subtitle">Full-Stack Developer | Welcome to my Portfolio</p>
                <a href="#contact" className="hero-btn">
                    Contact Me <span>+93782049304</span>
                </a>
            </div>

            <style>{`
        /* Hero Section */
        .hero {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          text-align: center;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
        }

        /* Moving gradient background */
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, #ff7e5f, #feb47b, #86a8e7, #7c3aed);
          animation: bgMove 15s linear infinite;
          opacity: 0.15;
          z-index: 0;
        }

        @keyframes bgMove {
          0% { transform: rotate(0deg) translate(0,0); }
          50% { transform: rotate(180deg) translate(20px,20px); }
          100% { transform: rotate(360deg) translate(0,0); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          max-width: 700px;
          padding: 0 20px;
        }

        /* Profile image with soft shadow and float */
        .hero-img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 4px solid white;
          object-fit: cover;
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          animation: float 4s ease-in-out infinite;
          transition: transform 0.3s;
        }

        .hero-img:hover {
          transform: scale(1.05);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Gradient animated title */
        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #7c3aed);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Subtitle with fade-up animation */
        .hero-subtitle {
          font-size: 1.2rem;
          color: #e0e0e0;
          opacity: 0;
          animation: fadeUp 1s forwards 0.5s;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
          from { opacity: 0; transform: translateY(20px); }
        }

        /* Button with glow and bounce effect */
        .hero-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 0 15px rgba(255,255,255,0.4);
          animation: fadeUp 1s forwards 0.8s, bounce 2s infinite 1.5s;
          transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
        }

        .hero-btn span {
          display: block;
          font-size: 0.9rem;
          color: #2563eb;
        }

        .hero-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 25px rgba(255,255,255,0.6);
          background: #f3f4f6;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Responsive */
        @media screen and (max-width: 768px) {
          .hero-title { font-size: 2rem; }
          .hero-subtitle { font-size: 1rem; }
          .hero-img { width: 120px; height: 120px; }
          .hero-btn { padding: 10px 20px; }
        }
      `}</style>
        </section>
    );
}

export default Hero;