import "./contact.scss";

const ContactPage = () => {
  return (
    <div className="contact text-box">
      <h2>contact me</h2>
      <span className="highlight-blue">kevinsctfries@gmail.com</span>
      <div className="contact-links">
        <a
          className="button"
          href="https://www.linkedin.com/in/kevin-fries-097377302">
          LinkedIn
        </a>
        <a className="button" href="https://github.com/kevinsctfries/">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
