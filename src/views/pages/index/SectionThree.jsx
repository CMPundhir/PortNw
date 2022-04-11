import { CCol, CRow } from "@coreui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionThree = () => {
  return (
    <>
      <CRow lg={12} className="text-center">
        <CCol lg={6} style={{ border: "2px solid blue" }}>
          jndxjw
        </CCol>
        <CCol lg={6} style={{ border: "2px solid blue" }}>
          <CCol>
            <span
              className="py-2 px-3"
              style={{
                backgroundColor: "#F9F0FF",
                borderRadius: "22px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#1B76FF",
              }}
            >
              <FontAwesomeIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
                icon={faEye}
              />
              Why Portpay
            </span>
          </CCol>
        </CCol>
      </CRow>
    </>
  );
};

export default SectionThree;
