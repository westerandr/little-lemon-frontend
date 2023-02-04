import React from "react";
import {ReactComponent as HamburgerIcon} from '../assets/🦆 icon _hamburger menu_.svg';
import { ReactComponent as CloseIcon } from "../assets/close_icon.svg";

export default function Nav(){
  const [openNav, setOpenNav] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    if(ref.current.classList.contains('mobile-none') && openNav){
      ref.current.classList.remove('mobile-none')
    }else{
      ref.current.classList.add('mobile-none')
    }
  }, [openNav])

  const toggleNav = function(state){
    setOpenNav(state);
  }

  return <nav id="navbar">
    <div id="hamburger-icon" className="mobile-hidden">
      {openNav ? <CloseIcon onClick={() => toggleNav(false)} /> : <HamburgerIcon width="25px" onClick={() => toggleNav(true)} />}
    </div>
    <ul ref={ref} className="mobile-none">
      <li className="menu-link"><a href="/">Home</a></li>
      <li className="menu-link"><a href="#about">About</a></li>
      <li className="menu-link"><a href="/">Menu</a></li>
      <li className="menu-link"><a href="/book">Reservations</a></li>
      <li className="menu-link"><a href="/">Order Online</a></li>
      <li className="menu-link"><a href="/">Login</a></li>
    </ul>
  </nav>
}