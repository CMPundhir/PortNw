import { CButton, CCol, CImage, CRow } from "@coreui/react";
import React from "react";
import { lapTop_png, star_svg } from "src/iconsimport";

const SectionOne = () => {
  return (
    <div
      className="indexView"
      style={{ position: "absolute", marginTop: "60px" }}
    >
      <CRow>
        <CCol className="rightSide d-flex text-right justify-content-right align-item-right px-5">
          <div className="rightSide2 d-flex justify-content-left my-5 column1-margin">
            <div>
              <div
                className="mt-3 fw-bold"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bold",
                }}
              >
                <div className="mb-3">
                  <span
                    className="px-5"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#F9F0FF",
                      padding: "10px",
                    }}
                  >
                    <CImage src={star_svg} />
                    <small className="ms-2 mt-2 mb-2 fw-bold text-primary">
                      All in one payment Solutions
                    </small>
                  </span>
                </div>
                <div style={{ fontSize: "40px" }}>Welcome to </div>
                <div style={{ fontSize: "40px", color: "#1B76FF" }}>
                  PortPay
                </div>
              </div>
              <div>
                PortPay is India’s Neo Banking platform delivering full stack
                banking services to individuals and businesses of all sizes.
              </div>
              <div className="d-md-flex">
                <CButton
                  style={{ color: "white" }}
                  className="Ibtn"
                  type="submit"
                  color="primary"
                >
                  Join now
                </CButton>
                <CButton className="Ibtn" type="submit" color="light">
                  Learn more
                </CButton>
              </div>
            </div>
          </div>
        </CCol>

        <CCol className="column2-margin" lg={6} md={6}>
          <div className="d-flex text-left">
            <CImage src={lapTop_png} style={{ width: "90%" }} />
          </div>
        </CCol>
      </CRow>
    </div>
  );
};

export default SectionOne;
