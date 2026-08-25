import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
       <footer id="contact" className="footer">  

      <div className="footer-container">

        {/* Logo & Description */}

        <div className="footer-section">
          <h2>🎓 StudentMS</h2>

          <p>
            A modern Student Management System built using the MERN Stack.
            Manage students, attendance and reports efficiently.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="/login">Login</Link>
        </div>

        {/* Contact */}

        <div className="footer-section">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> studentms@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> +91 XXXXX XXXXX
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 StudentMS | All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;