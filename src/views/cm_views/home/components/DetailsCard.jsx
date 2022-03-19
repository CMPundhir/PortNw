import React from "react";
import { CCard, CRow, CCol } from "@coreui/react";
import TransparentCard from "src/commons/cards/TransparentCard";
import { Col } from "react-bootstrap";

const DetailsCard = () => {
  return (
    <TransparentCard>
      <CRow>
        <CCol>
          <div
            style={{
              backgroundColor: " rgb(192, 192, 194)",
              width: "40px",
              height: "30px",
              margin: "10px",
              borderRadius: "10px",
              marginLeft: "40px",
              textAlign: "center",
            }}
          ></div>
        </CCol>
        <CCol
          style={{
            textAlign: "right",
            fontSize: "18px",
            color: "GrayText",
            margin: "10px",
            marginRight: "40px",
          }}
        >
          INDIA
        </CCol>
      </CRow>
      <CRow>
        <div style={{ textAlign: "center", fontSize: "18px" }}>
          4323 3434 5252 6869
        </div>
      </CRow>
      <CRow>
        <CCol>
          <div style={{ textAlign: "right", fontSize: "10px" }}>
            VALID
            <br />
            THRU
          </div>
        </CCol>
        <CCol>
          <div style={{ textAlign: "left", fontSize: "15px" }}>12/20</div>
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{ margin: "5px" }}>RAHUL SHARMA</CCol>
        <CCol
          style={{
            margin: "5px",
            textAlign: "right",
            fontSize: "20px",
            color: "darkblue",
          }}
        >
          <b>VISA</b>
        </CCol>
      </CRow>
    </TransparentCard>
  );
};

export default DetailsCard;
