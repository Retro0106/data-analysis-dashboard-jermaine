import React from "react";
import "./Footer.css"; // optional for styling

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Jermaine Adesanya</p>
      <p>Built with React</p>
      <div className="social-links">
        {/* Placeholder social links */}
        <a href="#">Twitter</a> | <a href="#">LinkedIn</a> | <a href="#">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
