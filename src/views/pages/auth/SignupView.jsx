import { CCol, CContainer, CForm, CImage, CRow } from "@coreui/react";
import React, { useState } from "react";
import CommonModal from "src/commons/modals/CommonModal";
import {
  logo_png,
  portPay,
  signup_bg,
  Signup_bg,
  signup_png,
} from "src/iconsimport";
import SignUpForm from "./Component/SignUpForm";
import PinInput from "src/commons/pin-input/PinInput";

import "./SignupView.css";

const SignupView = ({}) => {
  const [isOtpModalVisible, setIsOtpModalVisible] = useState(false);

  return (
    <div className="min-vh-100 align-items-center signup-bg d-flex flex-row text-center">
      <CRow className="align-items-center d-flex justify-content-around ">
        <CCol className="text-center d-flex justify-content-around" lg={6}>
          <div className="pt-3 signUpForm">
            <CImage
              src={logo_png}
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
        <CCol lg={6}>
          <CImage
            className="right-column"
            src={signup_png}
            width="70%"
            height="auto"
          />
        </CCol>
      </CRow>
    </div>
  );
};

export default SignupView;
