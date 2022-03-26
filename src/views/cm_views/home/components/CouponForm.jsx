import { CButton, CCol, CRow } from "@coreui/react";
import React from "react";
import CustomInput from "src/commons/inputs/CustomInput";

const CouponForm = () => {
  return (
    <>
      <CRow>
        <CCol className="d-flex flex-column align-items-center justify-content-center">
          <br />

          <CRow>
            <CCol xs={12}>
              <CustomInput
                className="inputCss bordernew"
                label="Amount"
                type="number"
                id="amount"
                placeholder="Enter Amount"
                name="Amount"
              />
            </CCol>
          </CRow>
          <br />
          <CRow>
            <CCol>
              <CButton
                style={{
                  backgroundColor: "#0079b6",
                  color: "white",
                  margin: "10px",
                  borderRadius: "16px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={12}
                type="submit"
              >
                Submit
              </CButton>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </>
  );
};

export default CouponForm;
