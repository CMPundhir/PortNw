import { CButton, CCol, CRow } from "@coreui/react";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const IndexNav = () => {
  return (
    <CRow>
      <Navbar className=" navHeader p-3" expand="lg">
        <Container
          fluid
          className=" d-flex align-items-center justify-content-between"
        >
          <div>
            <Navbar.Brand
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                color: "white",
                textAlign: "right",
              }}
              href="#home"
            ></Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="navLinks"
                  href="#home"
                  style={{ color: "#fff" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="navLinks"
                  href="#link"
                  style={{ color: "#fff" }}
                >
                  Merchants
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "#fff" }}>
                  <span>Reseller</span>
                </Nav.Link>
                <Nav.Link
                  className="navLinks"
                  href="#link"
                  style={{ color: "#fff" }}
                >
                  Gaming
                </Nav.Link>
                <div className="ms-5">
                  <CButton className="signInBtn ">Danger</CButton>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </CRow>
  );
};
