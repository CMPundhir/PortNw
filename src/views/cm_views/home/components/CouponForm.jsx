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
  faMoneyBill,
  faMoneyCheck,
  faRupeeSign,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ACTION } from "src/commons/Constants";
import CustomInput from "src/commons/inputs/CustomInput";

const handleSignup = (event) => {
  event.preventDefault();
};

const CouponForm = ({ action }) => {
  return (
    <CRow className="px-4 py-5">
      <CCol sm={2} xs={0}></CCol>
      <CCol sm={8} xs={12}>
        <CRow>
          {/* <CCol sm={6}>
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
              name={action == ACTION.MOBILE_RECHARGE ? "Mobile" : "CustomerID"}
            />
          </CCol>
          <CCol sm={6}>
            <Custom_dropDown
              lable="Select Operator"
              className="inputCss bordernew"
              option1="TATASky"
              option2="Airtel"
            />
          </CCol> */}
          <div
            className="text-center fw-bold mb-5"
            style={{ fontSize: "25px" }}
          >
            Purchase your Coupon
          </div>
          <CForm id="CouponForm" onSubmit={handleSignup}>
            <CCol xs={12}>
              <CustomInput
                icon={faRupeeSign}
                className=" bordernew p-2"
                label="Amount"
                type="number"
                placeholder="Enter Amount"
              />
            </CCol>
          </CForm>
        </CRow>
      </CCol>

      <CCol sm={2} xs={0}></CCol>
      <div className="d-flex justify-content-center mt-3">
        <CButton
          className="formbtnCss px-3 py-1"
          type="submit"
          form="CouponForm"
        >
          Submit
        </CButton>
      </div>
    </CRow>
  );
};

export default CouponForm;
