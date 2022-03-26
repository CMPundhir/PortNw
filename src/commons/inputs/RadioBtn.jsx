import { CFormCheck } from "@coreui/react";
import React from "react";

const RadioBtn = () => {
  return (
    <div>
      <span style={{ padding: "50px" }}>
        <CFormCheck
          className="radio-btn"
          inline
          type="radio"
          name="inlineRadioOptions"
          id="inlineCheckbox1"
          value="option1"
          label="Cash"
        />
      </span>
    </div>
  );
};

export default RadioBtn;
