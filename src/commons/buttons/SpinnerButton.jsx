import { CSpinner, CButton } from "@coreui/react";
import React from "react";

const SpinnerButton = ({ txt = "Submit", onClick, request }) => {
  return (
    <CButton
      className="btn-md"
      form="PinForm"
      variant="outline"
      color="primary"
      type={onClick ? "button" : "submit"}
      disabled={request}
      onClick={onClick ? onClick : () => {}}
    >
      <CSpinner
        component="span"
        size="sm"
        aria-hidden="true"
        hidden={!request}
      />
      {txt}
    </CButton>
  );
};

export default SpinnerButton;
