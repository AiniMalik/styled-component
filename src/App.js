import React from "react";
import NavContainer from "./Container/NavContainer";
import HeaderContainer from './Container/HeaderContainer';
import ContactContainer from './Container/ContactContainer';
import FooterContainer from './Container/FooterContainer';
import About from '../src/Screens/About/index' 
 const App=()=>{
  return (
    <>
      <NavContainer/>
      <HeaderContainer />
      <About/>
      <ContactContainer/>
      <FooterContainer/>
    </>
    
  
  );
}

export default App;
