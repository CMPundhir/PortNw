import {
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import { useState } from "react";
import { getGhostBtn } from "./cm_views";

export const showRightCanvas = (btnTxt, icon, title, body) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {getGhostBtn(btnTxt, icon, (e) => {
        setVisible(!visible);
      })}
      <COffcanvas
        placement="bottom"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>{title}</COffcanvasTitle>
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody>{body}</COffcanvasBody>
      </COffcanvas>
    </>
  );
};
