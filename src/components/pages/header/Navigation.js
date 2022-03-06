import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Navigation() {
  return (
    <div className="main-head">
      <Navbar color="warning" container dark expand="md" fixed="top" light>
        <NavbarBrand href="/">
          <img src="images/logo.png" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Design</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Testimonials</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Clients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
