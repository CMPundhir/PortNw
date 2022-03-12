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
import { ACTION } from "src/commons/Constants";
import CustomInput from "src/commons/inputs/CustomInput";
import Custom_dropDown from "src/commons/inputs/Custom_dropDown";

const DthForm = ({ action }) => {
  return (
    <>
      <CRow>
        <CCol
          lg={12}
          md={12}
          className="d-flex flex-column align-items-center justify-content-between"
        >
          <br />
          <div lg={12}>
            <CRow lg={6}>
              <CCol>
                <CustomInput
                  className="inputCss bordernew"
                  label={
                    action == ACTION.MOBILE_RECHARGE
                      ? "Mobile Number"
                      : "Customer ID"
                  }
                  type="number"
                  id={action == ACTION.MOBILE_RECHARGE ? "Mobile" : "Customer"}
                  placeholder={
                    action == ACTION.MOBILE_RECHARGE
                      ? "Mobile Number"
                      : "Customer ID"
                  }
                  name={
                    action == ACTION.MOBILE_RECHARGE ? "Mobile" : "CustomerID"
                  }
                />
              </CCol>
              <CCol style={{ fontSize: "14px" }}>
                <Custom_dropDown
                  lable="Select Operator"
                  className="inputCss bordernew"
                  option1="TATASky"
                  option2="Airtel"
                />
              </CCol>
            </CRow>
            <CRow lg={6}>
              <CCol>
                <CustomInput
                  className="inputCss bordernew"
                  label="Amount"
                  type="number"
                  id="customer_id"
                  placeholder="Enter Amount"
                  name="customer_id"
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

export default DthForm;
