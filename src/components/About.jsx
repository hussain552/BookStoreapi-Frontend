// src/AboutUs.js

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './AboutUs.css'; // Custom styling

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="about-us-container">
      <div className="about-us-section">
        <h1>About Our Bookstore</h1>
        <p>
          Welcome to our bookstore! Founded in 2020, we are passionate about connecting readers
          with the best books across genres. Our mission is to foster a love of reading and 
          provide access to a wide variety of literature for all book enthusiasts.
        </p>
        <p>
          Whether you're looking for the latest bestsellers or rare, hard-to-find books,
          our store offers something for everyone. Come and explore our diverse collection.
        </p>
      </div>

      <div className="advertisement-slider">
        <h2>Explore Our Latest Promotions</h2>
        <Slider {...sliderSettings}>
          <div>
            <img src="/formhouse.jpg" alt="Ad 1" />
          </div>
          <div>
            <img src="/sky.jpg" alt="Ad 2" />
          </div>
          <div>
            <img src="/girlbook.jpg" alt="Ad 3" />
          </div>
        </Slider>
      </div>

      <div className="stats-section">
        <h2>Our Achievements</h2>
        <ul>
          <li><strong>500+</strong> Books Available</li>
          <li><strong>200+</strong> Happy Customers</li>
          <li><strong>50+</strong> Authors Featured</li>
        </ul>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/pexels-pixabay-247599.jpg" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/pexels-pixabay-247599.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Chief Marketing Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
