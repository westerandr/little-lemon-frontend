import React from "react";
import chefImage from '../assets/restaurant chef B.jpg'
import fbIcon from '../assets/fb-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import igIcon from '../assets/ig-icon.png';
import { Link } from "react-router-dom";

export default function Footer(){
  return <footer>
    <div className="footer-inner">
      <img src={chefImage} alt="Chef Mario preparing a dish"/>
      <nav>
        <ul className='quick-links'>
          <span>Quick Links</span>
          <Link to="/">
            Home
          </Link>
          <Link to="#about">
            About
          </Link>
          <Link to="/">
            Menu
          </Link>
          <Link to="/booking">
            Reservations
          </Link>
          <Link to="/">
            Order Online
          </Link>
          <Link to="/">
            Login
          </Link>
        </ul>
        <ul className='contact'>
          <span>Contact</span>
          <li>23 Main St, Chicago, IL 60601</li>
          <li>(312) 555-1212</li>
          <li>contact@littlelemon.com</li>
        </ul>
        <ul>
          <span>Social Media</span>
          <div className="social-media">
            <img src={fbIcon} alt="Facebook Logo" />
            <img src={twitterIcon} alt="Twitter Logo" />
            <img src={igIcon} alt="Instagram Logo" />
          </div>
        </ul>
      </nav>
    </div>
  </footer>
}