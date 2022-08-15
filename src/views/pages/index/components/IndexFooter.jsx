import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import SearchBox from "src/commons/components/SearchBox";
import { FBook, Insta, RoseCharge, Twitter } from "src/iconsimport";

const IndexFooter = () => {
  const history = useHistory();

  return (
    <div style={{ marginTop: "200px" }}>
      {/* FOOTER START */}
      <div className="footer text-center">
        <CContainer>
          <span
            className="mx-3 fw-bold footerLinks"
            onClick={() => {
              history.push("/faq");
            }}
          >
            Faq
          </span>
          <span
            className="mx-3 fw-bold footerLinks"
            onClick={() => {
              history.push("/contact");
            }}
          >
            Contact
          </span>
          <span
            className="mx-3 fw-bold footerLinks"
            onClick={() => {
              history.push("/terms");
            }}
          >
            Terms & Condition
          </span>
          <span
            className="mx-3 fw-bold footerLinks"
            onClick={() => {
              history.push("/support");
            }}
          >
            Support
          </span>
          <div className=" mt-3">
            Rosecharge © 2020-2022 . All Rights Reserved.
          </div>
        </CContainer>
      </div>
    </div>
  );
};

export default IndexFooter;
