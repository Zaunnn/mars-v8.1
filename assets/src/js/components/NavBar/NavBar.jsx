import React from "react";
import {
  Nav,
  NavContainer,
  NavList,
  NavButton,
  NavIcon,
  NavItem,
  Button,
} from "./NavBarElements.jsx";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavIcon hred="/">
          <img
            src={"/assets/src/images/favicon.png"}
            height="40px"
            width="40px"
          ></img>
        </NavIcon>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>About</NavItem>
        </NavList>
        <NavButton>
          <Button> Sign up</Button>
        </NavButton>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
