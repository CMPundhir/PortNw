import React from "react";
import {
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CInput,
  CImage,
  CButton,
} from "@coreui/react";
import { mSend_png } from "src/iconsimport";
import { margin, width } from "@mui/system";

const SearchBox = () => {
  return (
    <>
      <div className="input-container">
        <input
          style={{ padding: "8px" }}
          className="input-field"
          type="text"
          placeholder="Email"
          name="usrnm"
        />
        <CImage
          src={mSend_png}
          style={{ width: "30px", margin: "-40px" }}
          onClick={() => {
            alert("hello");
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;
