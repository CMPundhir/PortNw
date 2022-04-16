import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
} from "@coreui/react";
import "./IndexPage.css";

import React from "react";
import { Button } from "bootstrap";

const SectionFiveForm = () => {
  return (
    <div className=" lg-5  front text-center">
      <CForm id="signup_form text-center">
        <div className="text-center ">
          <h3 className="mt-2">Sign Up</h3>
          <CFormInput
            placeholder="Your primary email"
            className="Sinput p-3"
            name="fname"
            type="text"
            id="fname"
            size="sm"
            required
          />
          <CFormInput
            placeholder="Password"
            className="Sinput  p-3"
            name="lname"
            type="text"
            id="lname"
            size="sm"
            required
          />
          <CFormInput
            placeholder="Re-type password"
            className="Sinput p-3"
            name="fname"
            type="text"
            id="fname"
            size="sm"
            required
          />
        </div>
      </CForm>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <span className="buttonCss">Start your free trial</span>
      </div>
      <div>
        <span>OR</span>
      </div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        <CButton>Sign in with Google</CButton>
      </div>
      <hr
        style={{
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "15px",
        }}
      ></hr>

      <div>
        <span>Already have an account?</span>
        <span>
          <a href="#"> Login</a>
        </span>
      </div>
    </div>
  );
};

export default SectionFiveForm;
