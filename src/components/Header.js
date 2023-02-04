import React from 'react';
import logo from '../assets/logo.png';
import Nav from './Nav';

export default function Header(){
  return <header id="header">
    <img src={logo} alt="Little Lemon Logo" />
    <Nav />
  </header>
}