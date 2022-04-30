import { CModal, CModalBody } from "@coreui/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import IconTextButton from "../buttons/IconTextButton";

const CommonModal = ({
  btn,
  btnTxt,
  btnIcon,
  btnVariant = "outline",
  isVisible = false,
  setIsVisible,
  outDismiss = true,
  request = false,
  color,
  children,
  backgroundColor = "white",
  size,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isVisible);
    return () => {};
  }, [isVisible]);

  return (
    <div>
      {btn ? (
        btn
      ) : (
        <IconTextButton
          hidden={!btnTxt}
          txt={btnTxt}
          faImg={btnIcon}
          variant={btnVariant}
          color={color}
          onClick={() => {
            setIsVisible(!visible);
            setVisible(!visible);
          }}
        />
      )}
      <CModal
        className="modal_wid"
        alignment="center"
        visible={visible}
        size={size ? size : ""}
        onDismiss={() => {
          if (request) {
            Swal.fire(
              "Warning!!",
              "Please wait request is under progress",
              "warning"
            );
          } else {
            if (outDismiss) {
              setIsVisible(false);
              setVisible(false);
            }
          }
        }}
        scrollable
      >
        <CModalBody
          className="ps-4 pe-4 pt-1 pb-1"
          style={{ backgroundColor: backgroundColor }}
        >
          {children}
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CommonModal;
