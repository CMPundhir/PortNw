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

const CustomInput = ({
  label,
  className = "custom-input",
  type = "number",
  id = "custom_input",
  placeholder = "Enter Value",
  name,
}) => {
  return (
    <div className="">
      <CFormLabel htmlFor={id} style={{ fontSize: "14px" }}>
        {label}:
      </CFormLabel>
      <CFormInput
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        size="sm"
      />
    </div>
  );
};

export default CustomInput;
