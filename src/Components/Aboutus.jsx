// src/components/About.js
import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import Footer from "./footer.jsx";
import "../style/abouttemp.css";
import "../style/skillbar.css";
import "../App.css";

import tousif from "/img/backgrounds/tousif.png";
import surendar from "/img/backgrounds/surendar.jpg";
import george from "/img/backgrounds/george.jpg";
import indhu from "/img/backgrounds/indhu.jpg";
import vijay from "/img/backgrounds/vijay.jpg";
import raiyan from "/img/backgrounds/raiyan.jpg";
import shreya from "/img/backgrounds/shreya.jpg";
import soaeb from "/img/backgrounds/soaeb.jpg";

const terminalLines = [
  'Team Name: " C Y N U X E R A "',
  "Initializing team...",
  "Mission: Build modern, secure, scalable systems",
  "Strengths: React | Node.js | Firebase | UI/UX | Tailwind | SQL | Docker | Cloud | AI",
  "Culture: Curiosity, Consistency, Collaboration",
  "Motto: We don’t just build projects — we craft experiences.",
  "Status: READY 🚀",
];

  

const Aboutus = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {

    const handleScroll = () => {
              if (window.scrollY > 0) {
                setScrolled(true);
              } else {
                setScrolled(false);
              }
            };
  
               window.addEventListener("scroll", handleScroll);



    const terminal = document.getElementById("terminal");
    let currentLine = 0;
    let currentChar = 0;
    let typedLines = [];
    let typingStarted = false;

    function typeLine() {
      if (currentLine >= terminalLines.length) {
        setTimeout(() => {
          terminal.innerHTML = "";
          typedLines = [];
          currentLine = 0;
          currentChar = 0;
          typeLine();
        }, 2000);
        return;
      }

      const fullLine = terminalLines[currentLine];
      if (currentChar < fullLine.length) {
        if (!typedLines[currentLine]) {
          typedLines[currentLine] = "";
          const div = document.createElement("div");
          div.className = "terminal-line";
          div.innerHTML = `<span class="terminal-prompt">(dev@cynuxera)─[~]$ </span> <span class="typed-content" id="line-${currentLine}"></span>`;
          terminal.appendChild(div);
        }

        const lastLine = terminal.lastElementChild;
        if (document.getElementById("blinking-cursor")) {
          document.getElementById("blinking-cursor").remove();
        }

        if (lastLine) {
          const cursorSpan = document.createElement("span");
          cursorSpan.className = "blinking-cursor";
          cursorSpan.id = "blinking-cursor";
          cursorSpan.textContent = "|";
          lastLine.appendChild(cursorSpan);
        }

        document.getElementById(`line-${currentLine}`).textContent =
          typedLines[currentLine];
        typedLines[currentLine] += fullLine[currentChar];
        document.getElementById(`line-${currentLine}`).textContent =
          typedLines[currentLine];
        currentChar++;
        setTimeout(typeLine, 20);
      } else {
        currentLine++;
        currentChar = 0;
        setTimeout(typeLine, 300);
      }
    }

    function startTypingTerminal() {
      if (typingStarted) return;
      typingStarted = true;
      terminal.innerHTML = "";
      typedLines = [];
      currentLine = 0;
      currentChar = 0;
      typeLine();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTypingTerminal();
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById("about-terminal");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
              window.removeEventListener("scroll", handleScroll);
            };


  }, []);

  const visionaries = [
    {
      name: "Mohammed Tousif",
      subtitle1: "Founder",
      subtitle2: "Cynux Era",
      img: tousif,
      desc: "Built on a foundation of Linux, fortified by ethical hacking. I navigate the digital frontier with the mindset of a Cyber Security Analyst and the precision of a CEH.",
    },
    {
      name: "Suraj Kumar",
      subtitle1: "Co-Founder",
      subtitle2: "Broader AI",
      img: soaeb,
      desc: "Forged through academia and sharpened by hands-on training, I bridge theory and practice as a Cybersecurity Trainer — molding minds with the discipline of a strategist and the skill set of an ethical hacker.",
    },
  ];

  const team = [
    {
      name: "Surendar K",
      trait: "Steadfast",
      img: surendar,
      desc: "Call me stubborn if you must — I prefer 'committed with Wi-Fi problems'.",
    },
    {
      name: "George Bush R",
      trait: "Resolute",
      img: george,
      desc: "I may not know where I’m going, but I’m going there with full conviction and presidential posture.",
    },
    {
      name: "D Indhushree",
      trait: "Graceful",
      img: indhu,
      desc: "I trip over flat surfaces, but I do it with such elegance you'd swear it was choreography.",
    },
    {
      name: "J Vijaya Bhaskar",
      trait: "Versatile",
      img: vijay,
      desc: "I’m not multitasking — I’m just trying to finish yesterday, today, and tomorrow all at once.",
    },
    {
      name: "Mohmmed Raiyan khan",
      trait: "Dynamic",
      img: raiyan,
      desc: "I don’t follow the vibe. I am the vibe. Occasionally unstable, but always interesting.",
    },
    {
      name: "Shreya Bandekar",
      trait: "Radiant",
      img: shreya,
      desc: "I don’t glow because I’m well-rested — I glow because I gave up and chose chaos with confidence.",
    },
  ];

  const skills = [
    { title: "Web Development", percent: 96 },
    { title: "Branding & Logo Design", percent: 80 },
    { title: "Machine Learning", percent: 90 },
    { title: "Cyber Security", percent: 75 },
  ];

  const certifications = [
    {
      title: "Adobe",
      desc: "The ACP certification validates skills in Adobe Creative Cloud...",
      logo: "/img/adobe.png",
    },
    {
      title: "CompTIA",
      desc: "Globally recognized cybersecurity certification...",
      logo: "/img/comptia.jpg",
    },
    {
      title: "CISCO",
      desc: "Covers networking basics, IT infrastructure, and cybersecurity",
      logo: "/img/cisco.jpg",
    },
    {
      title: "Information technology Specialist",
      desc: "These courses are self-paced, job-ready tech skills",
      logo: "/img/infotech.jpg",
    },
    {
      title: "Meta",
      desc: "Great starting point for digital marketing careers",
      logo: "/img/meta.jpg",
    },
    {
      title: "Microsoft Certified Fundamentals",
      desc: "Strong base in Microsoft tools, cloud, and security",
      logo: "/img/microsoft.jpg",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <ul className="navbar_logo">
          <Link to={"/"}>
            {" "}
            <img
              className="navbarLogoImage"
              src="/img/New_loader.png"
              alt="Cynux Era Logo"
            />
          </Link>
        </ul>
        <ul className="nav_right">
          <Link to={"https://www.cynuxera.in/"} target="_blank">
            <li className="nav_item">
              <FaGlobe className="Faicon" />
            </li>
          </Link>
          <Link to={"https://www.instagram.com/cynux_era/"} target="_blank">
            <li className="nav_item">
              <FaInstagram className="Faicon" />
            </li>
          </Link>
          <Link
            to={"https://www.linkedin.com/company/cynux-era"}
            target="_blank"
          >
            <li className="nav_item">
              <FaLinkedin className="Faicon" />
            </li>
          </Link>
        </ul>
        <ul>
          <span className="menubar" onClick={toggleMenu}>
            <FaBars />
          </span>
        </ul>
      </div>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Close Button */}

        <div
          className="menubarwholebody"
          style={{ display: isMenuOpen ? "flex" : "none" }}
        >
          <span className="close-btn" onClick={toggleMenu}>
            X{" "}
          </span>

          <div className="menudivleft">
            <div className="testtt">
              <img
                src="/img/newEXP/withoutlock.png"
                alt=""
                className="withoutlockimg"
              />
              <img
                src="/img/newEXP/onlylock.png"
                alt=""
                className="onlylockimg"
              />
            </div>
          </div>

          <div className="menudivright">
            <div className="background-animations">
              <div className="circle"></div>
              <div className="circle small"></div>
              <div className="blob"></div>
              <div className="blob large"></div>
              <div className="diamond"></div>
              <div className="hexagon"></div>
              <div className="star"></div>
              <div className="ellipse"></div>
              <div className="line"></div>
              <div className="triangle"></div>
              <div className="cross"></div>
              <div className="zigzag"></div>
              <div className="vline"></div>
              <div className="arc"></div>
            </div>

            <div className="menucynuxlogodiv">
              <img
                src="/img/New_logo2.png"
                alt=""
                className="menucynuxlogoimg"
              />
              <img
                src="/img/cynux-era-logo.png"
                alt=""
                className="menucynuxnameimg"
              />
            </div>

            <div className="menubarlistmenu">
              <ul>
                <Link to={"/"} onClick={toggleMenu} className="menubarlinks">
                  <li className="menubarli">
                    <span>Home</span>
                  </li>
                </Link>
                <Link to={"/about"} className="menubarlinks">
                  <li className="menubarli">
                    <span>About us</span>
                  </li>
                </Link>
                <Link to={"/projects"} className="menubarlinks">
                  <li className="menubarli">
                    <span>Project</span>
                  </li>
                </Link>
                <Link className="menubarlinks" to={'/contact'}>
                  <li className="menubarli">
                    <span>Contact us</span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="menubarlistadd">
              <div className=".fixed_width_text ">
                AIC DSU 3rd Floor <br /> DSU Kudlu Gate Bangalore
              </div>

              <div>
                {" "}
                support@cynuxera.in <br /> <br /> +91 90652 54600
              </div>
            </div>

            <div className="menuby">
              <h3 className="menubyh3">
                {" "}
                By{" "}
                <Link
                  to={"https://www.cynuxera.in/"}
                  className="menubylink"
                  target="_blank"
                >
                  CYNUXERA
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <div className="terminal-block" id="about-terminal">
            <div className="terminal-header">
              <div className="mac-buttons">
                <span className="close"></span>
                <span className="minimize"></span>
                <span className="maximize"></span>
              </div>
            </div>
            <div className="terminal-body" id="terminal"></div>
          </div>

          <div className="visionaries-block">
            <span className="feature__subtitle">Meet The Visionaries</span>
            <div className="visionary-grid">
              {visionaries.map((v, i) => (
                <div className="cardabout" key={i}>
                  <img src={v.img} alt={v.name} />
                  <div className="card-body">
                    <h4>{v.name}</h4>
                    <span className="section__subtitle">{v.subtitle1}</span>
                    <span className="section__subtitle">{v.subtitle2}</span>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-block">
            <span className="feature__subtitle">Meet The Team</span>
            <div className="team-grid">
              {team.map((member, idx) => (
                <div className="cardabout" key={idx}>
                  <img src={member.img} alt={member.name} />
                  <div className="card-body">
                    <h5>{member.name}</h5>
                    <span>{member.trait}</span>
                    <p>{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-block">
            <span className="feature__subtitle">Skills</span>
            {skills.map((skill, i) => (
              <div className="skillbar" key={i}>
                <span className="skillbar-title">{skill.title}</span>
                <div
                  className="skillbar-bar"
                  style={{ width: `${skill.percent}%` }}
                ></div>
                <span className="skillbar-percent">{skill.percent}%</span>
              </div>
            ))}
          </div>

          <div className="certifications-block">
            <span className="feature__subtitle">Certifications</span>
            <div className="certification-grid">
              {certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                  <img src={cert.logo} alt={cert.title} />
                  <h5>{cert.title}</h5>
                  <p>{cert.desc}</p>
                  <button
                    className="cert-button"
                    onClick={() =>
                      (window.location.href =
                        "https://www.cynuxera.in/certificates")
                    }
                  >
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Aboutus;
