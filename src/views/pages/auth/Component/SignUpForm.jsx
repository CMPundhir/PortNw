import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import React from "react";

const SignUpForm = () => {
  const handleSignup = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    const fname = form.fname.value;
    const lname = form.lname.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const pan = form.pan.value;
    const aadhaar = form.aadhaar.value;
  };
  return (
    <>
      <CForm id="signup_form" onSubmit={handleSignup}>
        <CRow className="px-4">
          <CCol>
            <div className=" position-relative text-center">
              <CFormInput
                className="input-style2"
                name="fname"
                type="text"
                id="fname"
                size="sm"
                required
              />
              <CFormLabel className="input-style-placeholder" htmlFor="fname">
                First Name
              </CFormLabel>
            </div>
          </CCol>
          <CCol>
            <div className="mb-3 mt-4 position-relative text-center">
              <CFormInput
                className="input-style2"
                name="lname"
                type="text"
                id="lname"
                size="sm"
                required
              />
              <CFormLabel className="input-style-placeholder" htmlFor="lname">
                Last Name
              </CFormLabel>
            </div>
          </CCol>
        </CRow>
        <CRow className="px-4">
          <CCol>
            <div className="mb-3 mt-4 position-relative text-center">
              <CFormInput
                className="input-style2 "
                name="mobile"
                type="number"
                id="mobile"
                size="sm"
                required
              />
              <CFormLabel className="input-style-placeholder" htmlFor="mobile">
                Mobile Number
              </CFormLabel>
            </div>
          </CCol>
          <CCol>
            <div className="mb-3 mt-4 position-relative text-center">
              <CFormInput
                className="input-style2 "
                name="email"
                type="text"
                id="email"
                size="sm"
                required
              />
              <CFormLabel className="input-style-placeholder" htmlFor="email">
                Email id
              </CFormLabel>
            </div>
          </CCol>
        </CRow>
        <CRow className="px-4   ">
          <CCol>
            <div className="mb-3 mt-4 position-relative">
              <CFormInput
                className="input-style2"
                name="pan"
                type="text"
                id="pan"
                size="sm"
                required
              />
              <CFormLabel className="input-style-placeholder" htmlFor="pan">
                Pan Number
              </CFormLabel>
            </div>
          </CCol>
          <CCol>
            <div className="mb-3 mt-4 position-relative ">
              <CFormInput
                className="input-style2"
                name="aadhaar"
                type="number"
                id="aadhaar"
                size="sm"
                required
              />
              <CFormLabel className="input-style-placeholder" htmlFor="aadhaar">
                Aadhaar Number
              </CFormLabel>
            </div>
          </CCol>
        </CRow>
      </CForm>
      <CRow className="text-center">
        <div className="pb-5 mt-4 d-flex justify-content-center">
          <CButton
            className="signup-btn signUp text-center signup-form-btn"
            form="signup_form"
            type="submit"
            size="sm"
          >
            Sign Up
          </CButton>
        </div>
      </CRow>
    </>
  );
};

export default SignUpForm;
