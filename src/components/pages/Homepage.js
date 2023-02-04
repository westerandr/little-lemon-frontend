import React from "react";
import CallToAction from '../sections/CallToAction';
import Specials from "../sections/Specials";
import CustomersSay from "../sections/CustomersSay";
import Chicago from "../sections/Chicago";

export default function Main(){
  return <main>
    <CallToAction />
    <Specials />
    <CustomersSay />
    <Chicago />
  </main>
}
