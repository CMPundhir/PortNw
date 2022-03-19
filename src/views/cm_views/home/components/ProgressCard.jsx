import { CCard, CCol, CProgress, CProgressBar, CRow } from "@coreui/react";
import { left } from "@popperjs/core";
import React from "react";
import CommonCard from "src/commons/cards/CommonCard";

const ProgressCard = () => {
  return (
    <CommonCard>
      <CRow>
        <CCol>
          <div style={{ marginLeft: "30px", marginTop: "30px" }}>
            <CProgress className="progressData">
              <CProgressBar className="Progress" value={25}>
                25%
              </CProgressBar>
            </CProgress>
          </div>
        </CCol>
        <CCol>
          <div
            style={{
              margin: "5px",
              textAlign: "right",
              fontSize: "15px",
              color: "darkblue",
            }}
          >
            <b>VISA</b>
          </div>
          <p style={{ textAlign: "right", fontSize: "10px" }}>
            <b>RAHUL SHARMA</b>
          </p>
          <p
            style={{
              textAlign: "right",
              fontSize: "15px",
              color: "rgb(9, 12, 143)",
            }}
          >
            <b>4120,000.00</b>
          </p>
        </CCol>
        <div
          style={{
            fontSize: "12px",
            color: "red",
            marginLeft: "40%",
          }}
        >
          Current 30,000,00.00
          <p style={{ color: "black", marginLeft: "30px", fontSize: "8px" }}>
            <b>More Details</b>
          </p>
        </div>
      </CRow>
    </CommonCard>
  );
};

export default ProgressCard;
