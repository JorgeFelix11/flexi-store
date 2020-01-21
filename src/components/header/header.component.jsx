import React from 'react';
// import {connect} from 'react-redux'

import { ReactComponent as Search } from '../../assets/search.svg';
import { Link } from 'react-router-dom';
import './header.styles.scss'

const Header = () => (
  <div className='header'>
    <div className='upperHeader'>
      <Link className='logo-container' to='/'>
        FLEXI LOGO
      </Link>
      <div className="search">
        <input type="text" className='searchBox' />
        <Search className='searchButton' />
      </div>
      <div className="options">
        <Link className='option' to='/shop'> MI CUENTA </Link>
        <Link className='option' to='/shop'> FAVORITOS </Link>
        <Link className='option' to='/shop'> MI CARRITO </Link>
      </div>
    </div>
    <div className='lowerHeader'>
      <Link className='category' to='/shop'>Caballeros</Link>
      <Link className='category' to='/shop'>Damas</Link>
      <Link className='category' to='/shop'>Niños</Link>
      <Link className='category' to='/shop'>Ofertas</Link>
    </div>
  </div>
)

export default Header;