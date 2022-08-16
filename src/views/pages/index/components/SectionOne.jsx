import { CButton, CCol, CImage, CRow } from "@coreui/react";
import React from "react";
import { CM_Nav } from "src/commons/Constants";
import { lapTop_png, star_svg } from "src/iconsimport";
import { useHistory } from "react-router";

const SectionOne = () => {
  const history = useHistory();

  return (
    <div>
      <CRow>
        <CCol
          className="rightSide d-flex text-right justify-content-right align-item-right px-5"
          lg={6}
          md={12}
        >
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
                    <small className="ms-2 mt-2 mb-5 fw-bold text-primary">
                      All in one payment Solutions
                    </small>
                  </span>
                </div>
                <div className="mt-5" style={{ fontSize: "40px" }}>
                  Welcome to{" "}
                </div>
                <div style={{ fontSize: "40px", color: "#e1609c" }}>
                  RoseCharge
                </div>
              </div>
              <div
                className=""
                style={{
                  fontSize: "18px",
                  lineHeight: "30px",
                  letterSpacing: "0.6px",
                  wordSpacing: "2px",
                }}
              >
                RoseCharge is India’s Neo Banking platform delivering full stack
                banking services to individuals and businesses of all sizes.
              </div>
              <div className="d-md-flex ">
                <CButton
                  style={{ color: "white", backgroundColor: "#e1609c" }}
                  className="Ibtn"
                  type="submit"
                  onClick={() => {
                    history.push(CM_Nav.SIGNUP_VIEW);
                  }}
                >
                  Join now
                </CButton>
                {/* <CButton className="Ibtn" type="submit" color="light">
                  Learn more
                </CButton> */}
              </div>
            </div>
          </div>
        </CCol>

        <CCol className=" mt-3 d-flex " lg={6} md={0}>
          <CImage
            className="hidden_md column2-margin"
            src={lapTop_png}
            style={{ width: "90%", height: "80%" }}
          />
        </CCol>
      </CRow>
    </div>
  );
};

export default SectionOne;
