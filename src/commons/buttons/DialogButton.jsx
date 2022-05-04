import { CButton } from "@coreui/react";
import React from "react";

import BrandLogo from "src/commons/components/BrandLogo.jsx";
import SpinnerButton from "./SpinnerButton";

const DialogButton = ({ txt, request, setVisible, onClick }) => {
  return (
    <div className="d-flex justify-content-between" style={{ width: "100%" }}>
      <BrandLogo />
      <div>
        <CButton
          className="me-2"
          variant="ghost"
          color="secondary"
          onClick={() => setVisible(false)}
          disabled={request}
        >
          Close
        </CButton>
        <SpinnerButton txt={txt} request={request} onClick={onClick} />
      </div>
    </div>
  );
};

export default DialogButton;
