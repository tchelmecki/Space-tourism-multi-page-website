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
    <Link className='under' to="/"><p><span>00</span> HOME</p></Link>
    <Link className='under' to="/destination"><p><span>01</span> DESTINATION</p></Link>
    <Link className='under' to="/crew"><p><span>02</span> CREW</p></Link>
    <Link className='under' to="/technology"><p><span>03</span> TECHNOLOGY</p></Link>
    </div>
  </nav>
  </>
  )
}

export default Nav;