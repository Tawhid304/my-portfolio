import { useEffect, useRef, useState } from "react";
import project1 from "../assets/project1.jpg";

function Projects() {
    const projects = [
        {
            title: "Project One",
            img: project1,
            description: "A modern web application built with React and Vite.",
            liveLink: "https://example.com/project1",
            githubLink: "https://github.com/username/project1",
            impact: 1200,
        },
        // Add more projects here
    ];

    const totalImpact = projects.reduce((acc, p) => acc + p.impact, 0);

    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        }, { threshold: 0.2 });

        if (containerRef.current) observer.observe(containerRef.current);
        return () => containerRef.current && observer.unobserve(containerRef.current);
    }, []);

    return (
        <section
            ref={containerRef}
            id="projects"
            style={{
                padding: "100px 40px",
                textAlign: "center",
                background: "linear-gradient(135deg, #2563eb, #7c3aed, #ff7e5f, #feb47b)",
                backgroundSize: "400% 400%",
                animation: "gradientBG 20s ease infinite",
                color: "#ffffff",
                overflow: "hidden",
            }}
        >
            <h2 style={{ opacity: 0, transform: "translateY(20px)", transition: "0.8s" }} className={visible ? "active" : ""}>
                Projects
            </h2>
            <p style={{ opacity: 0, transform: "translateY(20px)", transition: "0.8s 0.3s" }} className={visible ? "active" : ""}>
                Total Impact: {totalImpact} users/projects!
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
                {projects.map((p, i) => (
                    <div
                        key={i}
                        style={{
                            background: "#ffffff33",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "300px",
                            color: "#fff",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(20px)",
                            transition: `all 0.8s ease ${0.3 + i * 0.3}s`,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        }}
                    >
                        <img src={p.img} alt={p.title} style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} />
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div style={{ marginBottom: "10px" }}>
                            <a href={p.liveLink} target="_blank" rel="noopener noreferrer"
                                style={{ marginRight: "10px", color: "#ffeb3b", fontWeight: "bold", textDecoration: "none" }}>Live</a>
                            <a href={p.githubLink} target="_blank" rel="noopener noreferrer"
                                style={{ color: "#03dac5", fontWeight: "bold", textDecoration: "none" }}>GitHub</a>
                        </div>
                        <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>Users: {p.impact}</p>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .active { opacity: 1 !important; transform: translateY(0) !important; }
        @media screen and (max-width: 768px){
          h2{ font-size: 2rem; }
          p{ font-size: 1rem; }
        }
      `}</style>
        </section>
    );
}

export default Projects;