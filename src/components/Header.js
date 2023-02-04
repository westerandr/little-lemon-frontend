import React from 'react';
import logo from '../assets/logo.png';
import Nav from './Nav';
import { Link } from 'react-router-dom';

export default function Header(){
  return <header id="header">
    <Link to="/">
      <img src={logo} alt="Little Lemon Logo" />
    </Link>
    <Nav />
  </header>
}