import { CCol, CImage, CRow } from "@coreui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./helper.js";
import "./SectionThree.css";
import React from "react";
import { borderRadius } from "@mui/system";
import { circuit_svg, cloudImage_png } from "src/iconsimport.js";

const SectionThree = () => {
  return (
    <>
      <CRow lg={12} className="text-center d-flex align-items-center">
        <CCol lg={6} className="d-flex justify-content-center">
          <div
            className="position-relative"
            style={{
              height: "300px",
              width: "300px",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                boxShadow:
                  " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
              }}
            >
              <img src={cloudImage_png} className="image1" />
            </div>
            <div
              style={{
                backgroundColor: "pink",
              }}
            >
              <img src={cloudImage_png} className="image2" />
            </div>
            <img src={cloudImage_png} className="image3" />
            <img src={cloudImage_png} className="image4" />
            <img src={cloudImage_png} className="image5" />
            <img src={cloudImage_png} className="image6" />
            <img src={cloudImage_png} className="image7" />
            <img src={cloudImage_png} className="image8" />
          </div>
        </CCol>
        <CCol lg={6} style={{ textAlign: "left" }}>
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
            <CImage
              className="me-3"
              width="20px"
              height="20px"
              src={circuit_svg}
            />
            <span>For Product Theme</span>
          </span>

          <CRow className="text-left">
            <span
              style={{
                fontSize: "25px",
                // fontFamily: "Metropolis",
                fontWeight: "bold",
                marginTop: "25px",
              }}
            >
              Launch with the best
            </span>
          </CRow>
          <div
            className="mt-2"
            style={{
              width: "370px",
              color: "#8989A2",
              fontSize: "12px",
            }}
          >
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default SectionThree;
