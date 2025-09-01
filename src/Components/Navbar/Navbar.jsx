import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// FullCalendar imports
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // Example events for calendar
  const events = [
    { title: "Women Empowerment Workshop", date: "2025-09-10" },
    {
      title: "Community Awareness Drive",
      date: "2025-09-15",
      color: "#d65a84",
    },
  ];

  return (
    <header className="navbar">
      {/* Top bar */}
      <div className="top-bar">
        <span className="phone">+91 1800 123 456</span>
        <span className="language">Language</span>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61578878787699">
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com/@MSMPCulture">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/msmp.culture/">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="main-navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">
            <h1>Maharashtra Stree Mukti Parishad</h1>
            <p>For the Feminist Transformation of Society</p>
          </div>
        </div>

        {/* Hamburger Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/">HOME</a>
          <div className="dropdown">
            <a href="#">EVENTS ▾</a>
            <div className="dropdown-content">
              <a href="#">Event 1</a>
              <a href="#">Event 2</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">WHO WE ARE ▾</a>
            <div className="dropdown-content">
              <a href="/about">About Us</a>
              <a href="/about">Team</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">DOCUMENTATION ▾</a>
            <div className="dropdown-content">
              <a href="#">Reports</a>
              <a href="#">Research</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#">ANNOUNCEMENTS ▾</a>
            <div className="dropdown-content">
              <a href="#">Notice</a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCalendar(true);
                }}
              >
                Event Calendar
              </a>
            </div>
          </div>
          <a href="/blogs">BLOG</a>
          <a href="#">CONTACT US</a>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </nav>
      </div>

      {/* Floating Modal for Calendar */}
      {showCalendar && (
        <div className="calendar-modal">
          <div className="calendar-content">
            <button
              className="calendar-close"
              onClick={() => setShowCalendar(false)}
            >
              ✕
            </button>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              height="auto"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
