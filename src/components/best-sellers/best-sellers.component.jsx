import React from "react";

import "./best-sellers.styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BestSellers = () => (
  <Carousel
    className="carousel-best-sellers"
    showStatus={false}
    infiniteLoop={true}
    showIndicators={false}
    showThumbs={false}
    centerMode
    centerSlidePercentage={33}
  >
    <div>
      <img
        className="each-shoe"
        alt='temporary shoe pic'
        src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <p className="legend">Legend</p>
    </div>
    <div>
      <img
        className="each-shoe"
        alt='temporary shoe pic'
        src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <p className="legend">Legend</p>
    </div>
    <div>
      <img
        className="each-shoe"
        alt='temporary shoe pic'
        src="https://images.pexels.com/photos/1335463/pexels-photo-1335463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <p className="legend">Legend</p>
    </div>
    <div>
      <img
        className="each-shoe"
        alt='temporary shoe pic'
        src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <p className="legend">Legend</p>
    </div>
    <div>
      <img
        className="each-shoe"
        alt='temporary shoe pic'
        src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <p className="legend">Legend</p>
    </div>
  </Carousel>
);
export default BestSellers;
