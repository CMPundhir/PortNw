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
import CustomInput from "src/commons/inputs/CustomInput";
import Custom_dropDown from "src/commons/inputs/Custom_dropDown";

const DthForm = () => {
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
                <CustomInput
                  className="inputCss bordernew"
                  label="Customer ID"
                  type="number"
                  id="customer_id"
                  placeholder="Enter Customer ID"
                  name="customer_id"
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

    // <CForm lg={6} className="bordernew">
    //   <CRow lg={6} ></CRow>
    //   <CRow lg={6} className="d-flex justify-content-center mt-4 bordernew">
    //     <CCol md={4} className="mb-3">
    //
    //     </CCol>
    //     <CCol md={4} className="mb-3">
    //       <Custom_dropDown
    //         lable="Select Operator"
    //         className="inputCss bordernew"
    //         option1="TATASky"
    //         option2="Airtel"
    //       />
    //     </CCol>
    //     <CCol md={8} className="mb-3">
    //       <CustomInput
    //         className="inputCss bordernew"
    //         label="Amount"
    //         type="number"
    //         id="customer_id"
    //         placeholder="Enter Amount"
    //         name="customer_id"
    //       />
    //     </CCol>
    //   </CRow>
    //   <CCol className="mb-2 d-flex justify-content-center ">
    //     <CButton
    //       style={{ width: "20%", color: "white" }}
    //       color="primary"
    //       shape="rounded-pill"
    //     >
    //       Enter
    //     </CButton>
    //   </CCol>
    //   <CCol className="mb-4 d-flex justify-content-center ">
    //     <p>Brouse Plane</p>
    //   </CCol>
    // </CForm>
  );
};

export default DthForm;
