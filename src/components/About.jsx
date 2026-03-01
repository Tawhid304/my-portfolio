import { useEffect, useRef, useState } from "react";
import {
    FaLaravel,
    FaPhp,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaBootstrap
} from "react-icons/fa";

function About() {
    const skills = [
        { name: "Laravel", level: 85, icon: <FaLaravel />, color: "#ff2d20" },
        { name: "PHP", level: 80, icon: <FaPhp />, color: "#777bb4" },
        { name: "JavaScript", level: 95, icon: <FaJs />, color: "#f7df1e" },
        { name: "HTML", level: 95, icon: <FaHtml5 />, color: "#e34c26" },
        { name: "CSS", level: 90, icon: <FaCss3Alt />, color: "#264de4" },
        { name: "React", level: 90, icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "#3c873a" },
        { name: "Bootstrap", level: 85, icon: <FaBootstrap />, color: "#7952b3" },
    ];

    const avgSkill = Math.round(
        skills.reduce((acc, s) => acc + s.level, 0) / skills.length
    );

    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () =>
            containerRef.current && observer.unobserve(containerRef.current);
    }, []);

    return (
        <section
            ref={containerRef}
            id="about"
            style={{
                padding: "100px 40px",
                textAlign: "center",
                background:
                    "linear-gradient(135deg, #2563eb, #7c3aed, #ff7e5f, #feb47b)",
                backgroundSize: "400% 400%",
                animation: "gradientBG 20s ease infinite",
                color: "#ffffff",
            }}
        >
            <h2
                style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "0.8s",
                    fontSize: "2.5rem",
                }}
                className={visible ? "active" : ""}
            >
                About Me
            </h2>

            <p
                style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "0.8s 0.3s",
                    maxWidth: "600px",
                    margin: "20px auto",
                }}
                className={visible ? "active" : ""}
            >
                I'm <strong>Tawhidullah Akhnozada</strong>, a passionate full-stack developer.
            </p>

            <h3
                style={{
                    marginTop: "40px",
                    fontSize: "2rem",
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "0.8s 0.6s",
                }}
                className={visible ? "active" : ""}
            >
                Programming & Frameworks
            </h3>

            <div style={{ maxWidth: "650px", margin: "auto" }}>
                {skills.map((s, i) => (
                    <div key={i} style={{ marginBottom: "20px", textAlign: "left" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "5px",
                                fontSize: "1.2rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "28px",
                                    color: s.color,
                                    transition: "0.3s",
                                }}
                            >
                                {s.icon}
                            </span>
                            <span style={{ fontWeight: "bold" }}>{s.name}</span>
                        </div>

                        <div
                            style={{
                                background: "#e2e8f0",
                                borderRadius: "8px",
                                height: "15px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: visible ? `${s.level}%` : "0%",
                                    borderRadius: "8px",
                                    background: s.color,
                                    transition: "width 1.2s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <p
                style={{
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "0.8s 0.9s",
                    marginTop: "20px",
                }}
                className={visible ? "active" : ""}
            >
                Average proficiency: {avgSkill}%
            </p>

            <style>{`
                @keyframes gradientBG {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }

                .active {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `}</style>
        </section>
    );
}

export default About;