import React from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./carousel.styles.scss";

const DemoCarousel = () => (
  <div className="carousel-mine">
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      stopOnHover={false}
      transitionTime={800}
    >
      <div>
        <img
          className='carousel-images'
          src="https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="happy kid"
        />
      </div>
      <div>
        <img
          className='carousel-images'
          src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="friends laughing"
        />
      </div>
    </Carousel>
  </div>
);

export default DemoCarousel;
