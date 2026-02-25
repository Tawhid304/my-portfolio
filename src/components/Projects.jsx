import project1 from "../assets/project1.jpg";


function Projects() {
    const projects = [
        { title: "Project One", img: project1 },
      
    ];

    return (
        <section className="section" id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                        <img src={p.img} alt={p.title} />
                        <h3>{p.title}</h3>
                    </div>
                ))}
            </div>

            <style>{`
        #projects { padding: 100px 40px; text-align: center; }
        #projects h2 { font-size: 2.5rem; margin-bottom: 30px; }
        .projects-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
        .project-card { background: #1e293b; padding: 20px; border-radius: 10px; width: 300px; transition: transform 0.3s; }
        .project-card img { width: 100%; border-radius: 8px; margin-bottom: 10px; }
        .project-card:hover { transform: translateY(-5px); }
        @media screen and (max-width: 768px) {
          .project-card { width: 90%; }
        }
      `}</style>
        </section>
    );
}

export default Projects;