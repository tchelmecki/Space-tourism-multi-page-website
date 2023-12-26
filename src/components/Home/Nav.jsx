import React from 'react';
import '../../style/home.css';
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <>
    <nav>
    <div class="logo">
    <img src={logo} alt="" />
    </div>
    <div class="line-container">
      <div class="line"></div>
    </div>
    <div class="menu">
    <p><Link to="/"><span>00</span> HOME</Link></p>
    <p><Link to="/destination"><span>01</span> DESTINATION</Link></p>
    <p><span>02</span> CREW</p>
    <p><span>03</span> TECHNOLOGY</p>
    </div>
  </nav>
  </>
  )
}

export default Nav;