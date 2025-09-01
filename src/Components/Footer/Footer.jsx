import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import bottomMandela from "../../assets/mandalaBottom.png";
import "./Footer.css"; // external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Name */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <span className="footer-logo-text">
            Maharashtra Stree Mukti Parishad
          </span>
        </div>

        {/* Bottom Section: Contact, Mandala, Social */}
        <div className="footer-bottom">
          {/* Contact Info */}
          <div className="footer-contact">
            <h3>
              Contact <span className="highlight">Us</span>
            </h3>
            <p>Phone: 123456789</p>
            <p>Email: mail@mail.com</p>
          </div>

          {/* Mandala Image */}
          <div className="footer-mandala">
            <img src={bottomMandela} alt="Mandala" />
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h3>
              Follow Us <span className="highlight">On</span>
            </h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=61578878787699"
                className="social facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@MSMPCulture"
                className="social twitter"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/msmp.culture/"
                className="social instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
