import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CTable,
} from "@coreui/react";
import { CCol, CRow } from "@coreui/react";
import "src/views/pages/auth/Component/VrfySignup.css";

import React from "react";

const VrfySignup = () => {
  return (
    <div className="px-4 py-5  ">
      <span className=" head fw-bold p-3 d-flex justify-content-center">
        User Verification
      </span>
      <div className="d-flex justify-content-center">
        <CForm id="signup_form2">
          <CRow className="d-flex justify-content-center ms-2">
            <CCol>
              <div className="mb-3 mt-4 position-relative ">
                <CFormInput
                  className="input-style3"
                  name="mNum"
                  type="number"
                  id="mNum"
                  size="sm"
                  required
                />
                <CFormLabel className="input-style-placeholder" htmlFor="mNum">
                  Mobile Number
                </CFormLabel>
              </div>
            </CCol>
            <CCol className="ms-2">
              <div className="mb-3 mt-4 position-relative ">
                <CFormInput
                  className="input-style3"
                  name="aadhaar2"
                  type="number"
                  id="aadhaar2"
                  size="sm"
                  required
                />
                <CFormLabel
                  className="input-style-placeholder"
                  htmlFor="aadhaar2"
                >
                  Aadhaar
                </CFormLabel>
              </div>
            </CCol>
          </CRow>
          <CRow className="ms-2">
            <CCol>
              <div className="mb-3 mt-4 position-relative ">
                <CFormInput
                  className="input-style3"
                  name="pan"
                  type="text"
                  id="pan"
                  size="sm"
                  required
                />
                <CFormLabel className="input-style-placeholder" htmlFor="pan">
                  Pan No.
                </CFormLabel>
              </div>
            </CCol>
            <CCol>
              <div className="mb-3 mt-4 position-relative ">
                <CFormInput
                  className="input-style3"
                  name="email"
                  type="text"
                  id="email"
                  size="sm"
                  required
                />
                <CFormLabel className="input-style-placeholder" htmlFor="email">
                  Email ID
                </CFormLabel>
              </div>
            </CCol>
          </CRow>
          <div className="mt-3">
            <CFormCheck
              id="flexCheckDefault"
              label="I hereby declare that the information given above and in the
            enclosed documents is true to the best of my knowledge."
            />
          </div>
        </CForm>
      </div>

      <div className="text-center">
        <CButton
          className="signUpBtn"
          form="signup_form2"
          type="submit"
          size="sm"
        >
          Submit
        </CButton>
      </div>
    </div>
  );
};

export default VrfySignup;
