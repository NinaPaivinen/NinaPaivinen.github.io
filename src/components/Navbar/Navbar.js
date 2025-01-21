import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./CSS/navbar.css"
import { Link } from "react-router-dom";
import Logo from "./pics/logo.png"

function NavBar() {

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "60px";
      if (window.matchMedia("(max-width: 600px)").matches) {
        document.getElementById("navbar").style.height = "auto";
        console.log("on alle ")
      } else {
        console.log("ei ole alle")
      }
    } else {
      document.getElementById("navbar").style.height = "100px";
      if (window.matchMedia("(max-width: 600px)").matches) {
        document.getElementById("navbar").style.height = "auto";
        console.log("on alle ")
      } else {
        console.log("ei ole alle")
      }
    }
  } 

  return (
    <Navbar id="navbar"
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={Logo} className="img-fluid logo" alt="brand" />

        </Navbar.Brand>  <span className="logo_font">WEB-APP</span>     
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
             Etusivu
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/mina"
                onClick={() => updateExpanded(false)}
              >
       Meistä
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/koodari"
                onClick={() => updateExpanded(false)}
              >
  Palvelut
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
 Ota yhteyttä
              </Nav.Link>
            </Nav.Item>

        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
