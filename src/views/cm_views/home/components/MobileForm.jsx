import { CButton, CCol, CFormInput, CFormLabel, CRow } from "@coreui/react";
import React from "react";

const MobileForm = () => {
  return (
    <>
      <CRow>
        <CCol
          lg={12}
          md={12}
          className="d-flex flex-column align-items-center justify-content-between "
        >
          <br />
          <div lg={12}>
            <CRow lg={6}>
              <CCol>
                <div className="text_css">Mobile Number</div>
                <CFormInput
                  lg={6}
                  type="text"
                  size="sm"
                  placeholder="Small input"
                  aria-label="sm input example"
                  className="inputCss bordernew"
                />
              </CCol>
              <CCol>
                Operator
                <CFormInput
                  lg={6}
                  type="text"
                  size="sm"
                  placeholder="Small input"
                  aria-label="sm input example"
                  className="inputCss bordernew"
                />
              </CCol>
            </CRow>
            <CRow lg={6}>
              <CCol>
                <CFormLabel htmlFor="mobile" style={{ fontSize: "14px" }}>
                  Amount
                </CFormLabel>
                <CFormInput
                  className="mobile-recharge bordernew inputCss"
                  type="number"
                  size="sm"
                  id="mobile"
                  placeholder="Enter Mobile Number"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol lg={4}></CCol>
              <CCol>
                <CButton type="submit" className="button_css">
                  Submit
                </CButton>
              </CCol>
              <CCol lg={4}></CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default MobileForm;
