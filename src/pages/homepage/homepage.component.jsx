import React from 'react';
import DemoCarousel from '../../components/carousel/carousel.component'
import './homepage.styles.scss';
import BestSellers from '../../components/best-sellers/best-sellers.component';

const HomePage = () => (
  <div className='homepage'>
    <div>
      <DemoCarousel />
    </div>
    <div className='best-sellers'>
      <h1 className='subtitle'>Los mas vendidos</h1>
      <BestSellers />
    </div>
    <h1 className='subtitle'>Guia para comprar</h1>
    <div className='guide-to-buy'>

    </div>
    <h1 className='subtitle'>Reseñas</h1>
    <div className='comments'>
      
    </div>
  </div>
)

export default HomePage;