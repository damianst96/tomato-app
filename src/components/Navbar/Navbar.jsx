import './Navbar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

const Navbar = () => {

  return (
    <div className='navbar'>
      <a href='/'><img src={assets.logo} alt='' className='logo' /></a>
      <ul className='navbar-menu'>
        <li>Nosotros</li>
        <li>Menú</li>
        <li>Móvil</li>
        <li>Contacto</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
