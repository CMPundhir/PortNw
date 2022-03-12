import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from "@coreui/react";
import React from "react";

const DthForm = () => {
  return (
    <CForm>
      <CRow className="d-flex justify-content-center mt-4">
        <CCol md={4} className="mb-3">
          <CFormLabel htmlFor="dth">Customer ID</CFormLabel>
          <CFormInput
            className="Dthform"
            type="number"
            id="dth"
            placeholder="Enter Customer ID"
          />
        </CCol>
        <CCol md={4} className="mb-3">
          <CFormLabel htmlFor="operator">Select Operator</CFormLabel>
          <CFormSelect className="Dthform" aria-label="Default select example">
            <option>Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3" disabled>
              Three
            </option>
          </CFormSelect>
        </CCol>
        <CCol md={8} className="mb-3">
          <CFormLabel htmlFor="operator">Amount</CFormLabel>
          <CFormInput
            className="Dthform"
            type="text"
            id="operator"
            placeholder="Enter Amount"
          />
        </CCol>
      </CRow>
      <CCol className="mb-2 d-flex justify-content-center ">
        <CButton
          style={{ width: "20%", color: "white" }}
          color="primary"
          shape="rounded-pill"
        >
          Enter
        </CButton>
      </CCol>
      <CCol className="mb-4 d-flex justify-content-center ">
        <p>Brouse Plane</p>
      </CCol>
    </CForm>
  );
};

export default DthForm;
