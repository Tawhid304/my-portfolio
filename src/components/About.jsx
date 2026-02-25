function About() {
    return (
        <section className="section" id="about">
            <h2>About Me</h2>
            <p>
                I'm a passionate developer with experience in React, Node.js, and modern web technologies.
            </p>

            <style>{`
        #about { padding: 100px 40px; text-align: center; }
        #about h2 { font-size: 2.5rem; margin-bottom: 20px; }
        #about p { font-size: 1.1rem; max-width: 600px; margin: auto; line-height: 1.6; }
        @media screen and (max-width: 768px) {
          #about h2 { font-size: 2rem; }
          #about p { font-size: 1rem; }
        }
      `}</style>
        </section>
    );
}

export default About;