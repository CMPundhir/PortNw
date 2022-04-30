import { CButton } from "@coreui/react";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconTextButton = ({
  txt,
  color = "primary",
  onClick,
  faImg = faQuestion,
  variant = "outline",
  size = "sm",
  hidden = false,
  disabled = "false",
}) => {
  return (
    <CButton
      hidden={hidden}
      size={size}
      className="m-1"
      color={color}
      variant={variant}
      onClick={(e) => onClick(e)}
    >
      <FontAwesomeIcon
        size={size}
        icon={faImg}
        color={color}
        className="me-1"
      />
      <span className="fw-bold">{txt}</span>
    </CButton>
  );
};

export default IconTextButton;
