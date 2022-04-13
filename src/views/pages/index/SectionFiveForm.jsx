import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import "./IndexPage.css";

import React from "react";

const SectionFiveForm = () => {
  return (
    <div className=" lg-5  front text-center">
      <CForm id="signup_form text-center">
        <div className="text-center ">
          <h3 className="mt-5">Sign Up</h3>
          <CFormInput
            placeholder="Your primary email"
            className="Sinput p-3"
            name="fname"
            type="text"
            id="fname"
            size="sm"
            required
          />
        </div>

        <div className=" text-center  ">
          <CFormInput
            placeholder="Password"
            className="Sinput  p-3"
            name="lname"
            type="text"
            id="lname"
            size="sm"
            required
          />
        </div>
        <div className=" position-relative text-center">
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
      <CRow className="text-center">
        <div className="pb-5 mt-4 d-flex justify-content-center">
          <CButton
            style={{ width: "320px", padding: "9px" }}
            className=" text-center"
            form="signup_form"
            type="submit"
            size="sm"
          >
            Start your free trial
          </CButton>
          <CRow>
            <CButton>Or Sign in with Google</CButton>
          </CRow>
        </div>
      </CRow>
    </div>
  );
};

export default SectionFiveForm;
