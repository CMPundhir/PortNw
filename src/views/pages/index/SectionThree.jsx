import { CCol, CRow } from "@coreui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./helper.js";
import "./SectionThree.css";
import React from "react";
import cloudImage from "src/assets/images/png/cloud.png";
import { borderRadius } from "@mui/system";

const SectionThree = () => {
  return (
    <>
      <CRow lg={12} className="text-center">
        <CCol
          lg={6}
          style={{ border: "2px solid blue" }}
          className="d-flex justify-content-center"
        >
          <div
            className="position-relative"
            style={{
              border: "1px solid #000",
              height: "300px",
              width: "300px",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                outline: "2px solid red",
                backgroundColor: "yellow",
                boxShadow:
                  " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
              }}
            >
              <img src={cloudImage} className="image1" />
            </div>
            <div
              style={{
                backgroundColor: "pink",
              }}
            >
              <img src={cloudImage} className="image2" />
            </div>
            <img src={cloudImage} className="image3" />
            <img src={cloudImage} className="image4" />
            <img src={cloudImage} className="image5" />
            <img src={cloudImage} className="image6" />
            <img src={cloudImage} className="image7" />
            <img src={cloudImage} className="image8" />
          </div>
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
