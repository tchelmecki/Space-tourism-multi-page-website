import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../style/home.css';
import logo from '../../assets/shared/logo.svg';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('/destination');
  const [openHmenu, setOpenHmenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/destination':
        setActiveLink(1);
        break;
      case '/crew':
        setActiveLink(2);
        break;
      case '/technology':
        setActiveLink(3);
        break;
      default:
        setActiveLink(0);
        break;
    }
  }, [location.pathname]);

  const toggleMenu = () =>{
    console.log('clicked');
    setOpenHmenu(!openHmenu)

  }

  return (
    <>
      <nav>
      <div className="logo">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className={`hamburger-menu ${openHmenu ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        <div className={`menu ${openHmenu ? 'open' : ''}`}>
          
          <Link
            className={`under ${activeLink === 0 ? 'active' : ''}`}
            to="/"
          >
            <p><span>00</span> HOME</p>
          </Link>
          <Link
            className={`under ${activeLink === 1 ? 'active' : ''}`}
            to="/destination"
          >
            <p><span>01</span> DESTINATION</p>
          </Link>
          <Link
            className={`under ${activeLink === 2 ? 'active' : ''}`}
            to="/crew"
          >
            <p><span>02</span> CREW</p>
          </Link>
          <Link
            className={`under ${activeLink === 3 ? 'active' : ''}`}
            to="/technology"
          >
            <p><span>03</span> TECHNOLOGY</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
