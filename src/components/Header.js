import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import logoIcon from "./../images/logo_icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoggedIn, fetchUseStatus, getIsLoggedIn, fetchUserData, getUsers } from "../features/libitems/libitemsSlice";
import profilePhoto from "../images/profile.png";
library.add(fas);

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const logoutHandler = () => {

    dispatch(updateLoggedIn(false));
    navigate("/");
  };

  const usersData = useSelector(getUsers);
  const allName = usersData ? usersData[0].firstName + " " + usersData[0].lastName : "";
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  useEffect(() => {
    dispatch(fetchUseStatus());
  }, [dispatch]);

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
                <NavDropdown.Item key="1" href={`/category/1`}>
                  Books
                </NavDropdown.Item>
                <NavDropdown.Item key="2" href={`/category/2`}>
                  Magazines
                </NavDropdown.Item>
                <NavDropdown.Item key="3" href={`/category/3`}>
                  Newspapers
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto">

              <Nav.Link eventKey={2} href={`/all`}>
                <div>
                  <span className="ml-2">All Items</span>
                </div>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link>
                <div className="text-white mr-2 profile">
                  <img className="mr-3 profile_image" src={profilePhoto} alt="" />
                  <span >{allName}</span>
                </div>
              </Nav.Link>
              <Nav.Link eventKey={2} onClick={e => logoutHandler()}>
                <div className="header-app__signin">
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />

                </div>
              </Nav.Link>
            </Nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default Header;
