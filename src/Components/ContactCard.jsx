import { FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGlobe, FaPhone, FaEnvelope, FaRocket } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6"; // Import for location bullet
import iconContact1 from "/img/svg/icon-contact-1.svg";
import iconContact2 from "/img/svg/icon-contact-2.svg"; 
import iconContact3 from "/img/svg/icon-contact-3.svg";



export default function ContactCard({ type }) {

  const cardStyle = {
     width: "300px",
  Height: "220px",
  background: "#20193a",
  borderRadius: "24px",
  padding: "32px 18px",
  margin: "0 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex",
  justifyContent: "flex",
  color: "#b9b9d1",
  fontSize: "1.00rem",
  fontWeight: 200,
  gap: "8px",
  position:"relative"

 
  };
  


  return (
    <>
      {type === "location" && (
        <div className="card-contact" style={cardStyle}>
          <div className="card-icon" style={{ marginBottom: "8px" }}>
            <img src={iconContact1} alt="Location Icon" style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="card-title" style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>Location</div>
          
          <div className="location-address" style={{ display: "flex", alignItems: "flex-start" }}>
            <FaLocationCrosshairs className="bullet-icon" />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
<div className="location-block" style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-start" }}>
 
  <a href="https://goo.gl/maps/xap5o3MZBuC6DFHz8" target='https://goo.gl/maps/xap5o3MZBuC6DFHz8' className="location-line intensity-1"><span className="location-line intensity-1">AIC DSU 3rd Floor</span></a>
  <a href="https://goo.gl/maps/xap5o3MZBuC6DFHz8" target='https://goo.gl/maps/xap5o3MZBuC6DFHz8' className="location-line intensity-2"><span className="location-line intensity-2">DSU Kudlu Gate</span></a>
  <a href="https://goo.gl/maps/xap5o3MZBuC6DFHz8" target='https://goo.gl/maps/xap5o3MZBuC6DFHz8' className="location-line intensity-3"><span className="location-line intensity-3">Bangalore</span></a>

</div>

</div>


          </div>
          
        </div>
      )}
      {type === "follow" && (
        <div className="card-contact" style={cardStyle}>
          <div className="card-icon" style={{ marginBottom: "8px" }}>
            <img src={iconContact2} alt="Follow Us Icon" style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="card-title" style={{ fontWeight: 700, fontSize: "1rem", color: "#ffff", marginBottom: "8px" }}>Follow us</div>
         <a
  href="https://www.instagram.com/cynux_era_/"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <FaInstagram style={{ color: "#f987d6" }} /> Instagram
 
</a>



<a
  href="https://www.linkedin.com/company/cynux-era/"
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <FaLinkedin style={{ color: "#f987d6" }}/> LinkedIn
</a>
<a
  href="https://www.cynuxera.in/" 
  target="_blank"
  rel="noopener noreferrer"
  className="social-link"
>
  <FaGlobe style={{ color: "#f987d6" }}/> Our Website
</a>
        </div>
      )}
      {type === "contact" && (
        <div className="card-contact" style={cardStyle}>
          <div className="card-icon" style={{ marginBottom: "8px" }}>
            <img src={iconContact3} alt="Contact Icon" style={{ width: "80px", height: "80px" }} />
          </div>
          <div className="card-title" style={{ fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "8px" }}>Contact</div>
         <a href="tel:+919065254600" className="social-link">
  <FaPhone  className="bullet-icon" /> +91 90652 54600
</a>

<a href="mailto:support@cynuxera.in" className="social-link">
  <FaEnvelope className="bullet-icon" />  support@cynuxera.in
</a>


        </div>
      )}
    </>
  );
}