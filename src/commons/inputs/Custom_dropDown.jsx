import React from "react";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from "@coreui/react";

const Custom_dropDown = ({ lable, className, option1, option2, id, name }) => {
  return (
    <>
      <CFormLabel htmlFor="operator">{lable}</CFormLabel>
      <CFormSelect className={className} size="sm" id={id} name={name}>
        <option>Select</option>
        <option value="1">{option1}</option>
        <option value="2">{option2}</option>
      </CFormSelect>
    </>
  );
};

export default Custom_dropDown;
