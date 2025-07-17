import React from "react";
import "../App.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSatelliteDish,
  FaMobileAlt,
  FaGlobe,
  FaFax,
  FaCommentDots,
  FaPhoneVolume,
  FaSignal,
  FaVoicemail,
  FaAddressCard,
} from "react-icons/fa";

function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    fetch("https://formspree.io/f/myzpyrqd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (res.ok) {
          alert("Message sent successfully!");
          e.target.reset();
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((err) => {
        console.error("Formspree error:", err);
        alert("Error sending message.");
      });
  }

  return (
    <div className="contact-wrapper">
      {/* Left Section: Motion Orbit Around Globe */}
      <div className="contact-left" style={{ position: "relative", overflow: "hidden" }}>
        <div className="solar-contact-system">
          <div className="central-sun"><FaGlobe /></div>

          <div className="orbit orbit-1 clockwise">
            <span className="orbit-icon"><FaPhone /></span>
            <span className="orbit-icon"><FaPhone /></span>
            <span className="orbit-icon"><FaPhone /></span>
          </div>

          <div className="orbit orbit-2 counter">
            <span className="orbit-icon"><FaEnvelope /></span>
            <span className="orbit-icon"><FaEnvelope /></span>
            <span className="orbit-icon"><FaEnvelope /></span>
            <span className="orbit-icon"><FaEnvelope /></span>
          </div>

          <div className="orbit orbit-3 clockwise">
            <span className="orbit-icon"><FaMapMarkerAlt /></span>
            <span className="orbit-icon"><FaMobileAlt /></span>
            <span className="orbit-icon"><FaSatelliteDish /></span>
            <span className="orbit-icon"><FaPhone /></span>
          </div>

          <div className="orbit orbit-4 counter">
            <span className="orbit-icon"><FaFax /></span>
            <span className="orbit-icon"><FaCommentDots /></span>
            <span className="orbit-icon"><FaPhoneVolume /></span>
          </div>

          <div className="orbit orbit-5 clockwise">
            <span className="orbit-icon"><FaSignal /></span>
            <span className="orbit-icon"><FaVoicemail /></span>
            <span className="orbit-icon"><FaAddressCard /></span>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="contact-right">
        <div className="contact-container">
          <h1 className="contact-title">Get in Touch</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
          <div className="dot-loader"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
