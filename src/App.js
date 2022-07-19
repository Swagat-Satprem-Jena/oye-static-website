import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Introdiv from "./Introdiv";
import Services from "./Services";
import Advantage from "./Advantage";
import CustomerFeedback from "./CustomerFeedback";
import ReferSection from "./ReferSection";
import GuaranteeSection from "./GuaranteeSection";
import FooterSection from "./FooterSection";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="adjust">
        <Introdiv></Introdiv>
        <Services></Services>
        <Advantage></Advantage>
        <CustomerFeedback></CustomerFeedback>
        <ReferSection></ReferSection>
        <GuaranteeSection></GuaranteeSection>
        <FooterSection></FooterSection>
      </div>
    </>
  );
}

export default App;
