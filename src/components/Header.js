import React from 'react';
import logo from '../assets/logo.jpg';
import Nav from './Nav';

export default function Header(){
  return <header>
    <img src={logo} alt="Little Lemon Logo" />
    <Nav />
  </header>
}