import React from 'react';
// import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = () => (
  <Carousel 
    showThumbs={false} 
    infiniteLoop={true} 
    autoPlay={true} 
    showStatus={false} 
    stopOnHover={false}
    transitionTime={800}>
    <div>
      <img src="https://images.pexels.com/photos/2399097/pexels-photo-2399097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='happy kid'/>
      <p className='legend'>Legend 1</p>
    </div>
    <div>
      <img src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt='friends laughing'/>
      <p className="legend">Legend 2</p>
    </div>
  </Carousel>
)

export default DemoCarousel;