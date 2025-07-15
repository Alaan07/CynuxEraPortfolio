import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [activeCard, setActiveCard] = useState(null);
  const [slideIn, setSlideIn] = useState(false);

  const cards = [
    {
      title: "Saikodayo",
      subtitle: "Anime E-commerce",
      desc: "An immersive project showcasing the beauty and dynamic storytelling of anime. This highlights our ability to create engaging visual experiences and intricate animations.",
      video: "/img/portfolio/saikodayo_vedio.mp4",
      image: "/img/portfolio/toy.jpg"
    },
    {
      title: "TastyExpress",
      subtitle: "Food Delivery Redefined",
      desc: "A modern and intuitive food delivery platform enabling users to browse restaurants, explore menus, place orders, and track deliveries in real-time.",
      video: "/img/portfolio/tomato_vedio.mp4",
      image: "/img/portfolio/tomato.jpg"
    },
    {
      title: "Greenkart",
      subtitle: "Eco-friendly",
      desc: "Greenkart is an eco-friendly e-commerce platform for organic plants, and sustainable products. It promotes green living through a clean, user-friendly interface and conscious product choices.",
      video: "/img/portfolio/greenkart_vedio.mp4",
      image: "/img/portfolio/greenkart.jpg"
    },
    {
      title: "Sweet Delights",
      subtitle: "Chocolate Creations",
      desc: "A delightful project exploring the aesthetics and artistry of chocolate creations. This demonstrates our attention to detail and ability to bring appealing concepts to life visually.",
      video: "/img/portfolio/choco_vedio.mp4",
      image: "/img/portfolio/choco.jpg"
    },
    {
      title: "Language Translation System",
      subtitle: "ML model",
      desc: "This project aims to develop a Machine Learning-powered language translation system that converts text from a source language (e.g., English) into Japanese, with an additional text-to-speech (TTS) feature to output the translated text in audio format.",
      video: "/img/portfolio/ml_vedio.mp4",
      image: "/img/portfolio/ml.jpg"
    },
    {
      title: "Rapid Rentals",
      subtitle: "Bike Rental App",
      desc: "A comprehensive mobile application for renting bikes, featuring a user-friendly interface for Browse, booking, and managing rentals. The app is designed for seamless user experience and efficient bike management.",
      video: "/img/portfolio/bike.mp4",
      image: "/img/portfolio/rapid_rentals.jpg"
    },
    {
      title: "Mitigating Crime Analysis",
      subtitle: "ML model",
      desc: "A project focused on analyzing crime data to identify patterns and insights for mitigation strategies. This involves data processing, visualization, and predictive modeling, showcasing our expertise in data science and intelligent systems.",
      video: "/img/portfolio/crimevideo.mp4",
      image: "/img/portfolio/crime.jpg"
    },
    {
      title: "College Canteen",
      subtitle: "Smart Food Ordering App",
      desc: "An intuitive food ordering application tailored for college campuses. Users can browse diverse menus, place orders, and make secure payments seamlessly.",
      video: "/img/portfolio/figma.mp4",
      image: "/img/portfolio/colleege.jpg"
    }
  ];

  const openCard = (card) => {
    setActiveCard(card);
    setTimeout(() => setSlideIn(true), 10);
  };

  const closeCard = () => {
    setSlideIn(false);
    setTimeout(() => setActiveCard(null), 500); // match CSS animation duration
  };

  return (
    <div className="everything ">
      <div className={`promainBody ${activeCard ? 'blurred' : ''}`}>
        <div className="proHomeheadsection">
          <div className='prohomepageLeft'>
            <h1 className="projecth1">Projects</h1>
            <h2 className="projecth2">We are creating unique Web Design. Meet our featured projects.</h2>
            <p className="projectdesc">
              Be what you would seem to be – or, if you’d like it put more simply – never imagine yourself not to be otherwise than what it might appear to others that what you were or <Link to="/" className='prolicktohome' id='#HomeTag'>might have been</Link> was not otherwise than what you had been would have appeared to them to be otherwise.
            </p>
          </div>

          <div className='prohomePageright'>
            <img src="/img/newEXP/gear1.png" alt="design" className='gearImage' />
            <img src="/img/newEXP/gear1.png" alt="design" className='gearImageSEC' />
            <img src="/img/newEXP/gear1.png" alt="design" className='gearImagethird' />
            <img src="/img/newEXP/gear1.png" alt="design" className='gearImagefourth' />
            <img src="/img/newEXP/gear1.png" alt="design" className='gearImagefifth' />
          </div>
        </div>

        <div className="procardsectionDiv">
          <div className='procardsectionHome'>
            {cards.map((card, index) => (
              <div
                key={index}
                className="card"
                onClick={() => openCard(card)}
              >
                <img src={card.image} alt={card.title} className="card-img" />

                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p className="subheading">{card.subtitle}</p>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='proHomerighVid'>
           <img src="/img/newEXP/probackground.png" className="projectbackgroundimg" alt="" />
            {activeCard && (
              <div className={`prohomevidsection ${slideIn ? "slide-in" : ""}`}>
                <div className='homepagevidright'>
                  <video src={activeCard.video} controls autoPlay />
                </div>
                <div className='homepageviddescright'>
                  <h3>{activeCard.title}</h3>
                  <p className="subheading">{activeCard.subtitle}</p>
                  <p>{activeCard.desc}</p>
                  <button className="close-btn" onClick={closeCard}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>



      {activeCard && (
      <div className="modalHome">
        <div className="modal-content">
          <div className="modal-video">
            <video src={activeCard.video} controls autoPlay />
          </div>
          <div className="modal-desc">
            <h3>{activeCard.title}</h3>
            <p className="subheading">{activeCard.subtitle}</p>
            <p>{activeCard.desc}</p>
            <button className="close-btn" onClick={() => setActiveCard(null)}>Close</button>
          </div>
        </div>
      </div>
    )}

    </div>
  );
}

export default Projects;
