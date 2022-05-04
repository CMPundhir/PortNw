import { CButton, CCol, CImage, CRow } from "@coreui/react";
import { width } from "@mui/system";
import React from "react";
import TransparentCard from "src/commons/cards/TransparentCard";
import CommonPage from "src/commons/components/CommonPage";
import { qrCode_png } from "src/iconsimport";
import RightSideComponent from "../custom/RightSideComponent";
import FormContainer from "../home/components/FormContainer";

const TransactionView = ({ user }) => {
  return (
    <>
      <CRow>
        <CCol lg={9} md={12}>
          <TransparentCard title="My QR Code">
            <CRow className="text-center">
              <div className="text-center">
                <div style={{ fontWeight: "bold", fontSize: "25px" }}>
                  Rahul Sharma
                </div>
                <div className="mt-3">rahulsharma005663@icici</div>
              </div>
              <div style={{ marginTop: "50px" }}>
                <CImage
                  align="center"
                  rounded
                  src={qrCode_png}
                  width={200}
                  height={200}
                />
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <CButton
                  style={{
                    marginTop: "50px",
                    width: "200px",
                    color: "white",
                  }}
                  color="primary"
                  shape="rounded-pill"
                >
                  Share
                </CButton>
              </div>
              <div
                style={{
                  marginTop: "30px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  fontStyle: "normal",
                }}
              >
                Scan this code and pay me
              </div>
              <CRow>
                <div style={{ margin: "20px" }}>
                  anyone can scan this code from any UPI App and pay you. This
                  scan code is linked with your &ensp;
                  <span style={{ color: "#1877F2" }}>9354245563</span>
                </div>
              </CRow>
            </CRow>
          </TransparentCard>
        </CCol>
        <RightSideComponent />
      </CRow>
    </>
  );
};

export default TransactionView;
