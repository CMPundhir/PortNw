import { CCol, CRow, CTable } from "@coreui/react";
import { faEye, faLock, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "@material-ui/core";
import React from "react";

const SectionTwo = () => {
  return (
    <div style={{ border: "solid black" }}>
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
      <div className="mt-4 d-flex justify-content-center text-center">
        <table class="table" style={{ width: "60%" }}>
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
        </table>
        {/* <CRow
          md={9}
          className="d-flex justify-content-center align-item-center my-5 mx-5"
        >
          <CCol md={3} sm={6}>
            <div
              style={{
                alignItems: "center",
                padding: "10px",
              }}
            >
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

              <p className="mt-5" style={{ fontWeight: "bold" }}>
                Safe
              </p>
              <p style={{ width: "200px" }}>
                We ensure you get a good night sleep with your money staying
                with large and highly stable banks in India.
              </p>
            </div>
          </CCol>
          <CCol md={3} sm={6}>
            <div
              style={{
                alignItems: "center",
                padding: "10px",
              }}
            >
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

              <p className="mt-5" style={{ fontWeight: "bold" }}>
                Secure
              </p>
              <p style={{ width: "200px" }}>
                We ensure you get a good night sleep with your money staying
                with large and highly stable banks in India.
              </p>
            </div>
          </CCol>
          <CCol md={3} sm={6}>
            <div
              style={{
                alignItems: "center",
                padding: "10px",
              }}
            >
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

              <p className="mt-5" style={{ fontWeight: "bold" }}>
                Helpful
              </p>
              <p style={{ width: "200px" }}>
                We ensure you get a good night sleep with your money staying
                with large and highly stable banks in India.
              </p>
            </div>
          </CCol>
        </CRow> */}
      </div>
    </div>
  );
};

export default SectionTwo;
