import { CButton, CCol, CFormInput, CFormLabel, CRow } from "@coreui/react";
import React from "react";
import { ACTION } from "src/commons/Constants";
import CustomInput from "src/commons/inputs/CustomInput";
import Custom_dropDown from "src/commons/inputs/Custom_dropDown";

const MobileForm = ({ action }) => {
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
                  label={
                    action == ACTION.MOBILE_RECHARGE
                      ? "Mobile Number"
                      : "Customer ID"
                  }
                  name="mobile"
                  className="inputCss bordernew"
                  id="mobile"
                  placeholder={
                    action == ACTION.MOBILE_RECHARGE
                      ? "Mobile Number"
                      : "Customer ID"
                  }
                  type="simple input"
                />
              </CCol>
              <CCol>
                <Custom_dropDown
                  lg={6}
                  className="inputCss bordernew"
                  lable="Operator"
                  id="operator"
                  name="operator"
                  option1="Airtel"
                  option2="JIO"
                />
              </CCol>
            </CRow>
            <CRow lg={6}>
              <CCol>
                <CustomInput
                  label="Amount"
                  name="amount"
                  className="inputCss bordernew"
                  id="amount"
                  placeholder="amount"
                  type="simple input"
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
