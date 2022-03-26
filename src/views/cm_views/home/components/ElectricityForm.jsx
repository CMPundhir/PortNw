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

const ElectricityForm = () => {
  return (
    <>
      <CRow>
        <CCol className="d-flex flex-column align-items-center justify-content-center">
          <br />
          <div>
            <CRow>
              <CCol xs={6}>
                <Custom_dropDown
                  lable="Select State"
                  className="inputCss bordernew"
                  option1="Maharashtra"
                  option2="Delhi"
                />
              </CCol>
              <CCol xs={6}>
                <Custom_dropDown
                  lable="Select Operator"
                  className="inputCss bordernew"
                  option1="TATASky"
                  option2="Airtel"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={6}>
                <CustomInput
                  className="inputCss bordernew"
                  label="Amount"
                  type="number"
                  id="customer_id"
                  placeholder="Enter Amount"
                  name="customer_id"
                />
              </CCol>
              <CCol xs={6}>
                <CustomInput
                  className="inputCss bordernew"
                  label="Customer ID"
                  type="number"
                  id="customer_id"
                  placeholder="Enter Customer ID"
                  name="customer_id"
                />
              </CCol>
            </CRow>
            <br />
            <CRow>
              <CCol>
                <CButton type="submit" className="formbtnCss">
                  Submit
                </CButton>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default ElectricityForm;
