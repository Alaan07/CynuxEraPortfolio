// src/components/Aboutushomepage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/abouthome.css";


const people = [
  {
    role: "Founder",
    subtitle: "Cynux Era",
    name: "Mohammed Tousif",
    bio: "Built on a foundation of Linux, fortified by ethical hacking. I navigate the digital frontier with the mindset of a Cyber Security Analyst and the precision of a CEH.",
    image: "/img/backgrounds/tousif.png",
  },
  {
    role: "Co-Founder",
    subtitle: "Cynux Era",
    name: "Suraj Kumar",
    bio: "Forged through academia and sharpened by hands-on training, I bridge theory and practice as a Cybersecurity Trainer — molding minds with the discipline of a strategist and the skill set of an ethical hacker.",
    image: "/img/backgrounds/Suraj.jpg",
  },
];

const AboutHomePage = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const startSlider = () => {
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 4000);
  };

  const stopSlider = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <div className="aboutus-container">
      <span className="feature__subtitle">About Us</span>
      <div
        className="slider-wrapper"
        onMouseEnter={stopSlider}
        onMouseLeave={startSlider}
      >
        {people.map((person, i) => (
          <div
            key={i}
            className={`aboutus-card slide ${i === index ? "active" : ""}`}
          >

          <div className="aboutus-image">
              <img src={person.image} alt={person.role} />
            </div>
            <div className="aboutus-content">
            
              <h2>{person.name}</h2>
              <span className="feature__subtitle">{person.role}</span>
              <span className="feature__subtitle">{person.subtitle}</span>
              <span>
                <p>{person.bio}</p>
              </span>
              <div className="link-container">
                <Link to="/about" className="more-info">
                  More Info →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHomePage;
