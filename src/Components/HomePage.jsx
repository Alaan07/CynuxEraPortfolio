import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaBars} from "react-icons/fa";
import AboutHome from "./AboutHomePage.jsx";
import ProjectsHome from './ProjectHomePage.jsx';
import Footer from './footer.jsx';
import ContactPage from './ContactPage.jsx';

function HomePage() {

  const [showDev, setShowDev] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

      useEffect(() => {

              const handleScroll = () => {
            if (window.scrollY > 0) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };

             window.addEventListener("scroll", handleScroll);

          const interval = setInterval(() => {
            setShowDev(prev => !prev);
          }, 3000);

           
            const container = document.querySelector(".falling-code");

            const characters =
              "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*";

            const generateStream = (length) => {
              let stream = "";
              for (let i = 0; i < length; i++) {
                stream +=
                  characters[Math.floor(Math.random() * characters.length)] + "\n";
              }
              return stream;
            };

            for (let i = 0; i < 30; i++) {
              const span = document.createElement("span");
              span.classList.add("stream");

              span.textContent = generateStream(6 + Math.floor(Math.random() * 8));

              span.style.left = `${Math.random() * 100}%`;
              span.style.animationDuration = `${3 + Math.random() * 4}s`;
              span.style.fontSize = `${0.5 + Math.random() * 0.4}rem`;

              span.style.color =
                Math.random() > 0.5 ? "#f987d6" : "rgb(143, 81, 156)";

              container.appendChild(span);
            }

            // 👇 cleanup when component unmounts
            return () => {
              clearInterval(interval);
              if (container) {
                container.innerHTML = ""; // remove falling-code spans
              }
              window.removeEventListener("scroll", handleScroll);
            };
          }, []);


const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  
  return (
    <div className="everything" id='top'>
    
    <div className="wholeContainer">
      <div className="homemainbody" id='HomeTag'>


          <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <ul className='navbar_logo'>
              <Link to={'/'}> <img className='navbarLogoImage' src="/img/New_loader.png" alt="Cynux Era Logo" /></Link>
            </ul>
            <ul className='nav_right'>
              <Link to={'https://www.cynuxera.in/'} target='_blank'><li className='nav_item'><FaGlobe className='Faicon'/></li></Link>
              <Link to={'https://www.instagram.com/cynux_era_/'} target='_blank'><li className='nav_item'><FaInstagram className='Faicon'/></li></Link>
              <Link to={'https://www.linkedin.com/company/cynux-era'} target='_blank'><li className='nav_item'><FaLinkedin className='Faicon'/></li></Link>
            </ul>
            <ul>
              <span className='menubar' onClick={toggleMenu}><FaBars/></span>
            </ul>
          </div>
         

            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                {/* Close Button */}

                <div className='menubarwholebody' style={{ display: isMenuOpen ? 'flex' : 'none' }}>
                <span className="close-btn" onClick={toggleMenu}>X </span>

                  <div className='menudivleft'>
                    <div className="testtt">
                      <img src="/img/newEXP/withoutlock.png" alt="" className='withoutlockimg'/>
                      <img src="/img/newEXP/onlylock.png" alt=""  className='onlylockimg'/>
                    </div>
                  </div>


                  <div className='menudivright'>

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

                    
                      <div className='menucynuxlogodiv'>
                          <img src="/img/New_logo2.png" alt="" className='menucynuxlogoimg'/>
                          <img src="/img/cynux-era-logo.png" alt="" className='menucynuxnameimg'/>
                      </div>



                    <div className='menubarlistmenu'>
                      <ul>
                        <Link to={'/'} onClick={toggleMenu} className='menubarlinks'><li className='menubarli'><span>Home</span></li></Link>
                        <Link className='menubarlinks' to={'/about'}><li className='menubarli'><span>About us</span></li></Link>
                        <Link to={'/projects'} className='menubarlinks'><li className='menubarli'><span>Project</span></li></Link>
                        <Link className='menubarlinks' to={'/contact'}><li className='menubarli'><span>Contact us</span></li></Link>
                      </ul>
                  </div>


                  <div className='menubarlistadd'>

                    <div className='.fixed_width_text '>
                    <Link to={'https://goo.gl/maps/xap5o3MZBuC6DFHz8'} target='https://goo.gl/maps/xap5o3MZBuC6DFHz8'><span>AIC DSU 3rd Floor <br /> DSU Kudlu Gate Bangalore</span></Link>
                    </div>

                          
                     <div> <Link to={'mailto:support@cynuxera.in?subject=Message%20from%20your%20site'}><span>support@cynuxera.in</span></Link>
                       <br /> <br /> 
                     <Link to={'tel:+919065254600'}><span>+91 90652 54600</span></Link></div>
                    
                    </div>

                    <div className="menuby">
                      <h3 className='menubyh3'> By <Link to={'https://www.cynuxera.in/'} className='menubylink' target='_blank'>CYNUXERA</Link></h3>
                    </div>
                    

                  </div>           
              </div>
              
              </div>

      


        <div className='homemainbodyleft'>

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
              <div className="shield"></div>
              <div className="lock"></div>
              <div className="circuit-lines"></div>
              <div className="node"></div>
              <div className="glow-blob"></div>
            </div>


      

          



          <div className="homebody">
            <div className="homecontainer">
              <div className='HomeMainHeading'>
                <img src="/img/cynux-era-logo.png" className='homemaingheadingimg' alt="CYNUX ERA" />
                <div className="dot-with-trail"></div>
              </div>
              <div className='HomeSubHeading'>
              <h2>We're  
              <span>
               {showDev ? (
                <span className="HomesubheadingDev"> Developers.</span>
              ) : (
                <span className="HomesubheadingSecurity"> Security-Experts.</span>
              )}
              </span>
              </h2>
              </div>

                <div className="trustedBy">
                  <h3 className='Trustheading'>Trusted by ...</h3>

                 <img src="/img/newEXP/dsu.png" alt="reva"  className='dsutrustedimg'/>
                 <img src="/img/newEXP/Reva_logo.jpeg" alt="jain" className='revatrustedimg' />
                  
                  {/* if its not good then we change to side by side  */}

                </div>

            </div>

              {/* <div className="forphoneviewimgdiv">
                <img src="/img/newEXP/shieldwingsnobg.png" alt="" className='shieldwingsimg'/>
              </div> */}

          </div>










        </div>

          <div className='homemainbodyright'>
            <div className="HomeBodyRightanimation">

              <div className="falling-code"></div>

              <div className="rectanimation1"></div>
              <div className="rectanimation2"></div>
              <div className="Circleanimation1"></div>
              <div className="Circleanimation2"></div>
              <div className="Circleanimation3"></div>
              {/* <img src="/img/newEXP/cynusLogoSymbole.png" alt=""  className='homerightCynuxlogo'/> */}
              

              {/* <img className="gozilaa" src="/img/backgrounds/godzilla.jpg" alt="rightanimation" /> */}
            </div>
          </div>

       </div>

         <div className="dot-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="abouthomepage">
          <AboutHome />
        </div>



        <div className="dot-loader" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

       
     <div className="projectMainBody">
              <ProjectsHome/>
     </div>

      
      <div className="dot-loader" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="contact">
        <ContactPage/>
      </div>

              
      <div className='footerhomediv'>
            <Footer/>
      </div>


    </div>
    </div>
  )
}

export default HomePage
