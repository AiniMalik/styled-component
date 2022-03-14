import React from "react";
import NavContainer from "./Container/NavContainer";
import HeaderContainer from './Container/HeaderContainer';
import About from "./Container/AboutContainer";
import ContactContainer from './Container/ContactContainer';
import FooterContainer from './Container/FooterContainer';
import Navbar from "./Screens/NavBar/Navbar";
 
 const App=()=>{
  return (
    <>
      <NavContainer/>
      <HeaderContainer />
      {/* <About/> */}
      <ContactContainer/>
      <FooterContainer/>
    </>
    
  
  );
}

export default App;
