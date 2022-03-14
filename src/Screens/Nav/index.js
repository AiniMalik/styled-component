import React, { useState } from "react";
import { Container } from "styled-bootstrap-grid";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  Link,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Nav.styled";

function Nav() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <Container fluid>
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
       
        <RightContainer>
          {/* <Logo src={LogoImg}></Logo> */}
          <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
        </RightContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <Link to="/"> Home</Link>
            <Link>About</Link>
            <Link>Team</Link>
            <Link to="/about">Presentation</Link>
            <Link>Achievement</Link> 
            <Link>Contact Sales</Link>
            
          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>
      {extendNavbar &&(
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer> 
      )}
    </NavbarContainer>
    </Container>
  );
}

export default Nav;