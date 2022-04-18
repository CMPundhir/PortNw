import { CCol, CContainer, CRow } from "@coreui/react";
import { faEye, faLock, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTwo = () => {
  return (
    <div style={{ marginBottom: "8%" }}>
      <CRow className="d-flex text-center">
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
              style={{
                marginRight: "5px",
                fontSize: "20px",
                marginTop: "50px",
              }}
              icon={faEye}
            />
            Why Portpay
          </span>
        </CCol>
        <h1 className="mt-4 fw-bold">Built with security in mind</h1>
        <div className="d-flex justify-content-center align-item-center  mt-4 d-flex text-center">
          <span style={{ width: "60%" }}>
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Social Media is now
            one of the most powerful marketing tools with the ability to
            communicate with a target audience in real time.
          </span>
        </div>
      </CRow>

      <CContainer style={{ marginTop: "80px" }}>
        <CRow>
          <CCol className="text-center" md={4}>
            <div>
              <div className="mb-4">
                <span
                  style={{
                    backgroundColor: "#F6FFED",
                    padding: "6px",
                    borderRadius: "25px",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      color: " #52C41A",
                    }}
                    icon={faLock}
                  />
                </span>
              </div>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Safe</span>
            </div>
            <div>
              We ensure you get a good night sleep with your money staying with
              large and highly stable banks in India.
            </div>
          </CCol>
          <CCol className="text-center" md={4}>
            <div>
              <div className="mb-4">
                <span
                  style={{
                    backgroundColor: "#FFF1F0",
                    padding: "6px",
                    borderRadius: "25px",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      color: " #F5222D",
                    }}
                    icon={faEye}
                  />
                </span>
              </div>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Safe</span>
            </div>
            <div>
              We ensure you get a good night sleep with your money staying with
              large and highly stable banks in India.
            </div>
          </CCol>
          <CCol className="text-center" md={4}>
            <div>
              <div className="mb-4">
                <span
                  style={{
                    backgroundColor: "#E6F7FF",
                    padding: "6px",
                    borderRadius: "25px",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      fontSize: "20px",
                      color: " #1B76FF",
                    }}
                    icon={faUserClock}
                  />
                </span>
              </div>
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Safe</span>
            </div>
            <div>
              We ensure you get a good night sleep with your money staying with
              large and highly stable banks in India.
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SectionTwo;
