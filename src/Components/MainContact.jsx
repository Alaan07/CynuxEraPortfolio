import React, { useState, useEffect } from "react";
import "../App.css";
import ContactCard from "./ContactCard";
import newHome1 from "/img/svg/new_home1.png"; // Adjust the path as necessary
import Footer from "./footer.jsx";
import { Link } from "react-router-dom";
import { FaGlobe, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="everything" id="top">
      {/* 🌐 Navbar */}
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <ul className="navbar_logo">
          <Link to={"/"}>
            <img
              className="navbarLogoImage"
              src="/img/New_loader.png"
              alt="Cynux Era Logo"
            />
          </Link>
        </ul>

        <ul>
          <span className="menubar" onClick={toggleMenu}>
            <FaBars />
          </span>
        </ul>
      </div>

      {/* 📋 Side Menu */}
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
                <Link className="menubarlinks" to={'/about'}>
                  <li className="menubarli">
                    <span>About us</span>
                  </li>
                </Link>
                <Link to={"/projects"} className="menubarlinks">
                  <li className="menubarli">
                    <span>Project</span>
                  </li>
                </Link>
                <Link className="menubarlinks" to={"/contact"}>
                  <li className="menubarli">
                    <span>Contact us</span>
                  </li>
                </Link>
              </ul>
            </div>

           <div className='menubarlistadd'>
           
              <div className='.fixed_width_text '>
                <Link to={'https://maps.app.goo.gl/Z8vHEB5TjfrTSMdA8'} target='https://maps.app.goo.gl/Z8vHEB5TjfrTSMdA8'><span>AIC DSU 3rd Floor <br /> DSU Kudlu Gate Bangalore - 560068</span></Link>
                  </div>
           
                                     
                <div> <Link to={'mailto:support@cynuxera.in?subject=Message%20from%20your%20site'}><span>support@cynuxera.in</span></Link>
                 <br /> <br /> 
                 <Link to={'tel:+919065254600'}><span>+91 90652 54600</span></Link></div>
                               
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

      {/* 🧭 Main Content */}
      <div>
        <main
          className="main-content"
          style={{
            marginTop: "7rem",
            marginLeft: "33vw",
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            overflowY: "auto",
          }}
        >
          <section className="left-section">
            <div
              style={{
                marginTop: "76px",
                fontFamily: "'Poppins', Arial, sans-serif",
                fontWeight: 600,
                fontSize: "1.3rem",
                color: "#ff7eb3",
                letterSpacing: "0.5px",
                display: "flex",
                alignItems: "center",
                transition: "opacity 0.6s, transform 0.6s",
                position: "relative",
              }}
            >
              <span
                style={{
                  borderBottom: "3px solid #ff7eb3",
                  paddingBottom: "5px",
                  marginRight: "10px",
                  width: "6rem",
                  display: "inline-block",
                  transition: "opacity 0.6s, transform 0.6s",
                }}
              ></span>
              Contact
            </div>

            <div className="hero-title">
              Let’s get in touch. Welcome to{" "}
              <span className="highlight">the new office.</span>
            </div>

            <div className="hero-desc">
              Our website is under construction but we are ready to go! You can
              call us or leave a message to the mail mentioned below. We are
              always glad to see you in
              <a
                href="https://maps.app.goo.gl/Z8vHEB5TjfrTSMdA8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#b3bbc3",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: 300,
                  transition: "color 300ms",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#b3bbc3";
                }}
              >
                {" "}
                our office
              </a>{" "}
              from 9:00 to 18:00.
            </div>

            <div
              className="cards"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                marginTop: "32px",
              }}
            >
              <ContactCard type="location" />
              <ContactCard type="follow" />
              <ContactCard type="contact" />
            </div>
          </section>
        </main>

        {/* 📸 Right Side Image */}
        <aside
          className="right-section media-image-contact"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "30%",
            height: "100vh",
            borderRadius: "0 0 0 18px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            backgroundImage: `url(${newHome1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        ></aside>

        {/* 🧭 Footer */}
        <div
          className="footerhomediv"
          style={{ marginLeft: "31vw", zIndex: 2, position: "relative" }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
