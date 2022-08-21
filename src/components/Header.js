import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import logoIcon from "../images/logo_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


function Header() {
  return (
    <div className="header-app">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="header-app__navbar"
      >
        <Container>
          <Navbar.Brand href={"/"}>
            <div className="header-app__brand">
              <img className="m-1" src={logoIcon} alt="logo" />
              <strong>NuSEC Library</strong>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="header-navbar-id" />
          <Navbar.Collapse id="header-navbar-id">
            <Nav className="me-auto">
              <NavDropdown title="Categories" id="header-app_dropdown">
                <NavDropdown.Item href={`/login`}>Books</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Magazines
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Newspapers</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link eventKey={2} href={`/login`}>
                <div className="header-app__login">
                  <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />

                  <span className="ml-2">Log In</span>
                </div>
              </Nav.Link>
              <Nav.Link eventKey={2} href={`/login`}>
                <span className="header-app__signin ml-2">Sign In</span>
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;