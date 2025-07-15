import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa'

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
               AIC DSU 3rd Floor DSU Kudlu Gate Bangalore
            </p>
          </div>
        </div>




        <div className='rightfooter'>
          <div className='footerleftcynuxEraImgdiv'>
            <img src="/img/cynux-era-logo.png" alt="" className='footerleftcynuxEraImg'/>
          </div>
          <div className='footerleftbottom'>
            <div className='footeraboutusdiv'>
              <h3 className='footeraboutusheading'> About us</h3>
               <ul>
                <Link className='footerLink'><li>Mission</li></Link>
                <Link className='footerLink'><li>Team</li></Link>
                <Link className='footerLink'><li>Certificates</li></Link>
               </ul>
            </div>
            <div className='footerSupportdiv'>
              <h3 className='footerSupportheading'> Support</h3>
               <ul>
                <Link className='footerLink'><li>Conatct</li></Link>
                <Link className='footerLink'><li>Mail us</li></Link>
               </ul>
            </div>
            <div className='footerSocialsdiv'>
              <h3 className='footerSocialsheading'> Socials</h3>
               <ul>
                <Link className='footerLink'><li>Official Website</li></Link>
                <Link className='footerLink'><li>Linked in</li></Link>
                <Link className='footerLink'><li>Instagram</li></Link>
               </ul>
            </div>
          </div>
        </div>
      </div>
      <span className='footercopyright'>&copy; 2025 CynuxEra. All rights reserved.</span>
      <span className='footerbacktotop'>Back to top <FaArrowUp/></span>
    </div>
  )
}

export default footer
