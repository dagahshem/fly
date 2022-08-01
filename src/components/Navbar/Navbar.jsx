import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.cstempl} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about us">About us</a></li>
        <li className="p__opensans"><a href="#">Courses</a></li>
        <li className="p__opensans"><a href="#">Projects</a></li>
        <li className="p__opensans"><a href="#contact us">Contact us</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Sign up </a>
        <div />
        <a href="/" className="p__opensans">Sign in</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about us" onClick={() => setToggleMenu(false)}>About us</a></li>
              <li><a href="#Courses" onClick={() => setToggleMenu(false)}>Courses</a></li>
              <li><a href="#Projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
              <li><a href="#contact us" onClick={() => setToggleMenu(false)}>Contact us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
