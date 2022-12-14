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
  classs,
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
        <CModalBody className={`px-2 py-0`} style={{ overflowX: "hidden" }}>
          {children}
        </CModalBody>
      </CModal>
    </div>
  );
};

export default CommonModal;
