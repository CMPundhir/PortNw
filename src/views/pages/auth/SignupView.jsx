import { CCol, CContainer, CForm, CImage, CRow } from "@coreui/react";
import React from "react";
import { portPay, signup_bg, Signup_bg, signup_png } from "src/iconsimport";
import SignUpForm from "./Component/SignUpForm";
import "./SignupView.css";

const SignupView = ({}) => {
  return (
    <div className="min-vh-100 align-items-center signup-bg d-flex flex-row  text-center">
      <CContainer fluid>
        <CRow className="text-center d-flex justify-content-between px-5">
          <CCol className="text-center" xs={12} md={5} lg={6}>
            <div className="p-3 signUpForm">
              <CImage
                src={portPay}
                width="230px"
                height="auto"
                style={{ marginTop: "19px" }}
              />

              <div
                style={{
                  font: "'Montserrat', sans-serif",
                  fontSize: "17px",
                  marginBottom: "20px",
                }}
              >
                Please fill in this form to create an account.
              </div>
              <SignUpForm />
            </div>
          </CCol>
          <CCol
            className="right d-flex align-items-center justify-content-start px-4 py-5"
            xs={0}
            md={5}
            lg={6}
          >
            <div>
              <CImage
                className="login-rt-png"
                src={signup_png}
                width="90%"
                height="auto"
                style={{ marginRight: "85px" }}
              />
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignupView;
