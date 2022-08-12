import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from "@coreui/react";
import {
  faArrowDown,
  faDollarSign,
  faMobile,
  faRupeeSign,
  faSortAmountUpAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ACTION } from "src/commons/Constants";
import CustomInput from "src/commons/inputs/CustomInput";
import CustomSelect from "src/commons/inputs/CustomSelect";

const ElectricityForm = ({ action }) => {
  return (
    <CRow>
      <CCol sm={2} xs={0}></CCol>
      <CCol sm={8} xs={12}>
        <CRow>
          <CCol sm={6}>
            <CustomInput
              icon={action == ACTION.MOBILE_RECHARGE ? faMobile : faUser}
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
          <CCol sm={6} className="">
            <label>Select Operator</label>
            <CustomSelect
              icon={faArrowDown}
              lable="Select Operator"
              className="inputCss bordernew "
              option1="TATASky"
              option2="Airtel"
            />
          </CCol>
          <CCol sm={12}>
            <CustomInput
              icon={faRupeeSign}
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

export default ElectricityForm;
