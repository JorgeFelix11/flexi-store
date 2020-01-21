import React from 'react';
import DemoCarousel from '../../components/carousel/carousel.component'
import './homepage.styles.scss';
import BestSellers from '../../components/best-sellers/best-sellers.component';

const HomePage = () => (
  <div className='homepage'>
    <div className='carousel'>
      <DemoCarousel />
    </div>
    <div className='best-sellers'>
      <BestSellers />
    </div>
  </div>
)

export default HomePage;