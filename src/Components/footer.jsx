import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function footer() {
  return (
    <div className='footerwholedbody'>
      <div className='footer'>
        <div className='leftfooter'>
          <div className='footersymboleimgdiv'>
              <img src="/img/New_logo2.png" alt="" className='footersymboleImg'/>
          </div>
          <div className='footeraddress'>
            <p>
               AIC DSU 3rd Floor DSU Kudlu Gate <br />Bangalore - 560068
            </p>
          </div>
        </div>




        <div className='rightfooter'>
          <div className='footerleftcynuxEraImgdiv'>
             <div>
            <img src="/img/cynux-era-logo.png" alt="" className='footerleftcynuxEraImg'/>
            </div>
          </div>
          <div className='footerleftbottom'>
            <div className='footeraboutusdiv'>
              <h3 className='footeraboutusheading'> About us</h3>
               <ul>
                <Link className='footerLink' to={'/about'}><li>Mission</li></Link>
                <Link className='footerLink' to={'/about'}><li>Team</li></Link>
                <Link className='footerLink' to={'https://www.cynuxera.in/certificates'} target='_blank'><li>Certificates</li></Link>
               </ul>
            </div>
            <div className='footerSupportdiv'>
              <h3 className='footerSupportheading'> Support</h3>
               <ul>
                <Link className='footerLink' to={'/contact'}><li>Contact</li></Link>
                <Link className='footerLink' to={'mailto:cynuxera@gmail.com'}><li>Mail us</li></Link>
               </ul>
            </div>
            <div className='footerSocialsdiv'>
              <h3 className='footerSocialsheading'> Socials</h3>
               <ul>
                <Link className='footerLink' to={'https://www.cynuxera.in/'} target='_blank'><li>Official Website</li></Link>
                <Link className='footerLink' to={'https://www.linkedin.com/company/cynux-era'} target='_blank'><li>LinkedIn</li></Link>
                <Link className='footerLink' to={'https://www.instagram.com/cynux_era_/'} target='_blank'><li>Instagram</li></Link>
               </ul>
            </div>
            <div className='moblinksdiv'>
                <ul>
                <Link className='footerLink' to={'https://www.cynuxera.in/'} target='_blank'><li><FaGlobe/></li></Link>
                <Link className='footerLink' to={'https://www.linkedin.com/company/cynux-era'} target='_blank'><li><FaLinkedin/></li></Link>
                <Link className='footerLink' to={'https://www.instagram.com/cynux_era_/'} target='_blank'><li><FaInstagram/></li></Link>
               </ul>
            </div>
          </div>
        </div>
      </div>
      <span className='footercopyright'>&copy; 2025 CynuxEra. All rights reserved.</span>
      <a className="footerLink footerbacktotop" href="#top"><span><span className='backtotoptoggle'>Back to top</span> <FaArrowUp /></span></a>
    </div>
  )
}

export default footer
