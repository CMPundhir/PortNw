import { CButton } from "@coreui/react";
import React from "react";

const ScrollCardBtn = ({ txt, id }) => {
  return (
    <>
      <CButton
        type="submit"
        id={id}
        className="buttonCss d-flex justify-content-center"
      >
        {txt}
      </CButton>
    </>
  );
};

export default ScrollCardBtn;
