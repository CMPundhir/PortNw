import React from "react";
import {
  CInputGroup,
  CFormInput,
  CInputGroupText,
  CInput,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
  return (
    <>
      <CInputGroup className="flex-nowrap">
        <CFormInput
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <CInputGroupText id="addon-wrapping"></CInputGroupText>
      </CInputGroup>
    </>
  );
};

export default SearchBox;
