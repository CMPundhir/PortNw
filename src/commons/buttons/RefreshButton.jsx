import { CSpinner, CButton } from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const RefreshButton = ({
  txt = "Refresh",
  size = "md",
  onClick,
  loading = false,
}) => {
  return (
    <CButton
      className="m-1 px-4 py-2"
      form="MyForm"
      variant="outline"
      color="primary"
      type="button"
      size={size}
      disabled={loading}
      onClick={
        onClick
          ? onClick
          : () => {
              alert("Please implement onClick");
            }
      }
    >
      {!loading ? (
        <FontAwesomeIcon size="sm" icon={faSync} className="me-2" />
      ) : (
        ""
      )}
      <CSpinner
        component="span"
        size="sm"
        aria-hidden="true"
        hidden={!loading}
        className="me-2"
      />
      {txt}
    </CButton>
  );
};

export default RefreshButton;
