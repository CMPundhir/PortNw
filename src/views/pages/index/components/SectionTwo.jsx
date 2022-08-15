import { CCol, CContainer, CRow } from "@coreui/react";
import { faEye, faLock, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SectionTwo = () => {
  return (
    <div style={{ marginBottom: "8%" }}>
      <CRow className="d-flex text-center">
        <CCol className="my-5">
          <span
            className="py-3 px-3"
            style={{
              backgroundColor: "#F9F0FF",
              borderRadius: "22px",
              fontSize: "15px",
              fontWeight: "bold",
              color: "#831e4d",
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
            Why RoseCharge
          </span>
        </CCol>
        <h1 className="mt-5 mb-3 fw-bold">
          Built <span className="underline"> with security in</span> mind
        </h1>
        <div className="d-flex justify-content-center align-item-center  mt-5 d-flex text-center">
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
            <div className="offerCard">
              <div className="">
                <div className="mb-5 ">
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
                We ensure you get a good night sleep with your money staying
                with large and highly stable banks in India.
              </div>
            </div>
          </CCol>
          <CCol className="text-center" md={4}>
            <div className="offerCard">
              {" "}
              <div>
                <div className="mb-5">
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
                <span style={{ fontWeight: "bold" }}>Secure</span>
              </div>
              <div>
                Moving your card details to a much more secured place.100%
                Payment Protection. Easy Return Policy.
              </div>
            </div>
          </CCol>
          <CCol className="text-center" md={4}>
            <div className="offerCard">
              <div>
                <div className="mb-5">
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
                        color: " #831e4d",
                      }}
                      icon={faUserClock}
                    />
                  </span>
                </div>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Reliable</span>
              </div>
              <div>
                Get your recharge to family and friends in minutes.Always get
                cheapest price with the best in the industry.
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SectionTwo;
