import { CModal, CModalBody } from "@coreui/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import IconTextButton from "../buttons/IconTextButton";

const ColourModal = ({
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
        <div
          style={{
            background: "rgb(62,170,225)",
            background:
              "linear-gradient(175deg, rgba(62,170,225,0.8858893899356618) 0%, rgba(186,232,255,1) 51%, rgba(255,255,255,1) 100%)",
          }}
        >
          <CModalBody className="px-0 py-0">{children}</CModalBody>
        </div>
      </CModal>
    </div>
  );
};

export default ColourModal;
