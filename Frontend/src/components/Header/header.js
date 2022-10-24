import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./header.css";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="/Addbb" className="div-1">
            Red Donor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="div-1">
                Home
              </Nav.Link>

              <DropdownButton
                id="dropdown-button"
                variant="secondary"
                title="Links"
              >
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-button" variant="secondary">
                    Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="/login" active>
                      User Login
                    </Dropdown.Item>
                    <Dropdown.Item href="/logina">Admin Login</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant=""
                  title="Signup"
                  className="mt-2"
                >
                  <Dropdown.Item href="/signup" active>
                    User Signup
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="/signupa">Admin Signup</Dropdown.Item> */}
                </DropdownButton>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
