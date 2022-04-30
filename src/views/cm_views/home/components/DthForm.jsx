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
    <CRow>
      <CCol sm={2} xs={0}></CCol>
      <CCol sm={8} xs={12}>
        <CRow>
          <CCol sm={6}>
            <CustomInput
              className="inputCss bordernew p-2"
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
              name={action == ACTION.MOBILE_RECHARGE ? "Mobile" : "CustomerID"}
            />
          </CCol>
          <CCol sm={6}>
            <Custom_dropDown
              lable="Select Operator"
              className="inputCss bordernew p-2"
              option1="TATASky"
              option2="Airtel"
            />
          </CCol>
          <CCol xs={12}>
            <CustomInput
              className="inputCss bordernew p-2"
              label="Amount"
              type="number"
              id="customer_id"
              placeholder="Enter Amount"
              name="customer_id"
            />
          </CCol>
        </CRow>
      </CCol>
      <CCol sm={2} xs={0}></CCol>
      <div className="d-flex justify-content-center mt-3">
        <CButton className="formbtnCss px-3 py-1" type="submit">
          Submit
        </CButton>
      </div>
    </CRow>
  );
};

export default DthForm;
