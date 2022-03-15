import React, { useState } from "react";
import Container from 'react-bootstrap/Container'
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
      <LeftContainer>
          <NavbarLinkContainer>
            <Link to="/"> Home</Link>
            <Link>About</Link>
            <Link>Team</Link>
            <Link to="/about">Presentation</Link>
            <Link>Achievement</Link> 
            <Link>Sales</Link>
            
          </NavbarLinkContainer>
        </LeftContainer>
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
       
      </NavbarInnerContainer>
      {extendNavbar &&(
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended > About</NavbarLinkExtended>
          <NavbarLinkExtended > Team</NavbarLinkExtended>
          <NavbarLinkExtended > Presentation</NavbarLinkExtended>
          <NavbarLinkExtended >Achievement</NavbarLinkExtended>
          <NavbarLinkExtended >Contact Sale</NavbarLinkExtended>
        </NavbarExtendedContainer> 
      )}
    </NavbarContainer>
    </Container>
  );
}

export default Nav;