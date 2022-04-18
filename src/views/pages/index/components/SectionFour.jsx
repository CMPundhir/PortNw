import { CCol, CImage, CRow } from "@coreui/react";
import React from "react";
import { dummy_jpg } from "src/iconsimport";

export const SectionFour = () => {
  return (
    <div
      className="text-center d-flex justify-content-center"
      style={{
        marginBotton: "50px",
        marginTop: "80px",
        clipPath: "polygon(50% 0%, 100% 0, 100% 75%, 0 91%, 0 0)",
        background:
          "transparent linear-gradient(180deg, #FFFFFF70 0%, #1563FF80 100%) 0% 0% no-repeat padding-box",
      }}
    >
      <CRow>
        <CRow
          style={{ width: "50%" }}
          className="text-center d-flex justify-content-center py-5 px-5"
        >
          <p style={{ width: "50%", marginTop: "100px" }}>
            "I am genuine user of this company and using there products from
            more then a year. This app is super easy to use and I can transfer
            money Instantly. I earn on money transfer, recharges and all type of
            bill payments. They provide good customer support as well. I must
            recommend this app to give a try i…"
          </p>
        </CRow>
        <CCol className="text-center">
          <CImage
            src={dummy_jpg}
            style={{ borderRadius: "50%", width: "80px" }}
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              marginBottom: "150px",
            }}
          >
            Narender Modi
            <br />
            @BiggBrains
          </p>
        </CCol>
      </CRow>
    </div>
  );
};
