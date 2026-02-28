import { useEffect, useRef, useState } from "react";

function About() {
    const skills = [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "CSS & HTML", level: 90 },
        { name: "Vite / Webpack", level: 80 },
    ];

    const avgSkill = Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length);
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        }, { threshold: 0.3 });
        if (containerRef.current) observer.observe(containerRef.current);
        return () => containerRef.current && observer.unobserve(containerRef.current);
    }, []);

    return (
        <section ref={containerRef} id="about" style={{
            padding: "100px 40px",
            textAlign: "center",
            background: "linear-gradient(135deg, #2563eb, #7c3aed, #ff7e5f, #feb47b)",
            backgroundSize: "400% 400%",
            animation: "gradientBG 20s ease infinite",
            color: "#ffffff"
        }}>
            <h2 style={{ opacity: 0, transform: "translateY(20px)", transition: "0.8s", fontSize: "2.5rem" }}
                className={visible ? "active" : ""}>About Me</h2>
            <p style={{ opacity: 0, transform: "translateY(20px)", transition: "0.8s 0.3s", maxWidth: "600px", margin: "20px auto" }}
                className={visible ? "active" : ""}>
                I'm <strong>Tawhidullah Akhnozada</strong>, a passionate developer with experience in React, Node.js, and modern web technologies.
            </p>

            <h3 style={{ marginTop: "40px", fontSize: "2rem", opacity: 0, transform: "translateY(20px)", transition: "0.8s 0.6s" }}
                className={visible ? "active" : ""}>My Skills</h3>

            <div style={{ maxWidth: "600px", margin: "auto" }}>
                {skills.map((s, i) => (
                    <div key={i} style={{ marginBottom: "15px", textAlign: "left" }}>
                        <span>{s.name}</span>
                        <div style={{ background: "#e2e8f0", borderRadius: "8px", height: "15px", overflow: "hidden" }}>
                            <div style={{
                                height: "100%",
                                width: visible ? `${s.level}%` : "0%",
                                borderRadius: "8px",
                                background: "#38bdf8",
                                transition: "width 1.2s ease-in-out"
                            }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <p style={{ opacity: 0, transform: "translateY(20px)", transition: "0.8s 0.9s" }} className={visible ? "active" : ""}>
                Average proficiency: {avgSkill}%
            </p>

            <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .active { opacity: 1 !important; transform: translateY(0) !important; }
        @media screen and (max-width: 768px){
          h2{ font-size: 2rem; } h3{ font-size: 1.5rem; } p{ font-size: 1rem; }
        }
      `}</style>
        </section>
    );
}

export default About;