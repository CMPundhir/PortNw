import { CCol, CImage, CRow } from "@coreui/react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SectionThree.css";
import React from "react";
import { borderRadius } from "@mui/system";
import {
  circuit_svg,
  cloudImage_png,
  smIcon1,
  smIcon2,
  smIcon3,
  smIcon4,
  smIcon5,
  smIcon6,
} from "src/iconsimport.js";

const SectionThree = () => {
  return (
    <div className="mt-5 mb-5">
      <CRow lg={12} className="text-center d-flex align-items-center">
        <CCol lg={6} className="d-flex justify-content-center ">
          <div
            className="position-relative"
            style={{
              height: "400px",
              width: "400px",
            }}
          >
            <img className="image1" src={smIcon1} />
            <img src={smIcon3} className="image2" />
            <img src={smIcon2} className="image3" />
            <img src={smIcon4} className="image4" />
            <img src={smIcon5} className="image5" />
            <img src={cloudImage_png} className="image6" />
            <img src={smIcon5} className="image7" />
            <img src={smIcon6} className="image8" />
          </div>
        </CCol>
        <CCol
          className="ml-3"
          lg={6}
          style={{ textAlign: "left", marginTop: "80px" }}
        >
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
                fontSize: "35px",
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
              // color: "#8989A2",
              fontSize: "15px",
            }}
          >
            A centralized platform that integrates zillions of data sources
            using Big Data ELT (Extract, Load & Transform) that leaves no data
            behind
          </div>
        </CCol>
      </CRow>
    </div>
  );
};

export default SectionThree;
