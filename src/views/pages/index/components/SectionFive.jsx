import { CCol, CImage, CRow } from "@coreui/react";
import { fontSize } from "@mui/system";
import React from "react";
import {
  dummy_jpg,
  Trusted1,
  Trusted2,
  Trusted3,
  Trusted4,
} from "src/iconsimport";
import SignUpForm from "../../auth/Component/SignUpForm";
import SectionFiveForm from "./SectionFiveForm";

export const SectionFive = () => {
  return (
    <div style={{ marginBottom: "" }}>
      <CRow>
        <CCol
          style={{ marginTop: "100px" }}
          lg={6}
          md={6}
          sm={12}
          className="text-center"
        >
          <div
            style={{
              fontWeight: "bolder",
              fontSize: "30px",
              fontFamily: "Metropolis",
            }}
          >
            Join us now and get all new <br />
            offers with fast services.
          </div>
          <div className="vLine pt-5 d-flex justify-content-center">
            <div className="vLine1"></div>
            <div className="vBox">Trusted by</div>
          </div>
          <div className="m-auto" style={{ width: "60%" }}>
            <CRow className="pt-5">
              <CCol>
                <div className="py-5 ">
                  <CImage src={Trusted1} />
                </div>
                <div className=" py-5">
                  <CImage src={Trusted3} />
                </div>
              </CCol>
              <CCol>
                <div className=" py-5">
                  <CImage src={Trusted2} />
                </div>
                <div className=" py-4">
                  <CImage src={Trusted4} />
                </div>
              </CCol>
            </CRow>
          </div>
        </CCol>

        <CCol
          md={6}
          sm={12}
          lg={6}
          className=" parent d-flex justify-content-center"
        >
          <div class="back"></div>
          <div className=" text-center d-flex justify-content-center">
            <SectionFiveForm />
          </div>
        </CCol>
      </CRow>
    </div>
  );
};
