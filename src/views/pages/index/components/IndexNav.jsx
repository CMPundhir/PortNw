import { CButton, CCol, CImage, CRow } from "@coreui/react";
import { Button } from "bootstrap";
import React from "react";
import { useHistory } from "react-router";

import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { CM_Nav, UserType } from "src/commons/Constants";
import { portPay } from "src/iconsimport";

export const IndexNav = () => {
  const history = useHistory();
  return (
    <>
      <Navbar className="navHeader" position="fixed" expand="lg">
        <Container>
          <Navbar.Brand style={{ marginLeft: "50px" }} href="#home">
            <CImage src={portPay} width="90px" height="auto" />
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav className=" me-5">
              <span href="#" className="navLinks me-4">
                About
              </span>
              <span href="#" className="navLinks me-4">
                Pricing
              </span>
              <span href="#" className="navLinks me-4">
                ContactUs
              </span>
              <span
                onClick={() => {
                  history.push(CM_Nav.LOG_IN);
                }}
                className="navLinks me-4"
              >
                Login
              </span>
              <div className=" justify-content-md-left">
                <CButton
                  className="signInBtn"
                  onClick={() => {
                    history.push(CM_Nav.SIGNUP_VIEW);
                  }}
                >
                  Get Started
                </CButton>
              </div>
            </Nav>
            {/* <Form className="d-flex d-md-none">
              <CButton>SignIn</CButton>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
