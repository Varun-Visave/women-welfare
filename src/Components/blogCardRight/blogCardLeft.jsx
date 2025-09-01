import React, { useState } from "react";
import "./BlogCardLeft.css";
import mandala from "../../assets/mandalaRight.png";
import Separator from "../Separator/Separator";

const BlogCardLeft = ({ title, description, date, readTime, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="blog-card">
        {/* Blog Image */}
        <img src={image} alt="Blog" className="blog-image" />

        {/* Overlay Content */}
        <div className="blog-content">
          <h2 className="blog-title">{title}</h2>

          {/* Date + Read Time */}
          <div className="blog-meta">
            <span className="blog-date">{date}</span>
            <span className="blog-separator">•</span>
            <span className="blog-readtime">{readTime}</span>
          </div>

          <p className={`blog-text ${expanded ? "expanded" : "collapsed"}`}>
            {description}
          </p>

          <button className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less →" : "Read now →"}
          </button>
        </div>
      <img src={mandala} alt="Mandala" className="mandala-right" />
      </div>
      <Separator/>
    </>
  );
};

export default BlogCardLeft;
