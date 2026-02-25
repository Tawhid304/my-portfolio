function Contact() {
    return (
        <section className="section" id="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows="5"></textarea>
                <button type="submit">Send</button>
            </form>

            <style>{`
        #contact { padding: 100px 40px; text-align: center; }
        #contact h2 { font-size: 2.5rem; margin-bottom: 20px; }
        .contact-form { display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: auto; }
        .contact-form input, .contact-form textarea {
          padding: 10px;
          border-radius: 5px;
          border: none;
          font-size: 1rem;
        }
        .contact-form button {
          padding: 12px;
          border: none;
          background-color: #2563eb;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: transform 0.2s, background-color 0.2s;
        }
        .contact-form button:hover { background-color: #7c3aed; transform: scale(1.05); }
        @media screen and (max-width: 768px) {
          #contact h2 { font-size: 2rem; }
        }
      `}</style>
        </section>
    );
}

export default Contact;