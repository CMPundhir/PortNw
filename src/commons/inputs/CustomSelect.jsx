import {
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CustomSelect = ({
  icon,
  label,
  id,
  onSelect,
  list = [],
  emptyInput,
  defaultIndex,
  width,
}) => {
  let defaultValue = { name: "Select" };
  if (defaultIndex) {
    try {
      defaultValue = list[defaultIndex];
      list.splice(defaultIndex, 1);
    } catch (err) {}
  }
  return (
    <>
      <CFormLabel htmlFor={id} className="d-flex justify-content-start fw-bold">
        {label}
      </CFormLabel>
      <CInputGroup className="mb-3">
        {icon ? (
          <CInputGroupText
            id="basic-addon1"
            style={{ background: "white", borderRight: "none" }}
          >
            <FontAwesomeIcon size="sm" icon={icon} />
          </CInputGroupText>
        ) : (
          ""
        )}

        <CFormSelect
          id={id}
          placeholder="select"
          style={{ borderLeft: "none", width: { width } }}
          onChange={(item) => {
            const name = item.currentTarget.value;
            // const nameTemp = "ankur   dharmosht";
            // const name = nameTemp.replace(/\s{1,}/g, " ").trim();
            // nameTemp.replace(/\s{2,}/g, " ").trim();
            if (name == defaultValue.name) {
              onSelect(defaultValue);
              return;
            }
            console.log("CustomSelect=> ", name);
            const length = list ? list.length : 0;
            for (let i = 0; i < length; i++) {
              if ((list[i].name && list[i].name == name) || list[i] === name) {
                onSelect(list[i]);
                break;
              }
            }
          }}
        >
          <option>{defaultValue.name}</option>
          {list
            ? list.map((item) => {
                return <option>{item.name ? item.name : item}</option>;
              })
            : []}
        </CFormSelect>
        {/* <CFormFeedback invalid>{emptyInput ? "empty" : "invalid"}</CFormFeedback> */}
      </CInputGroup>
    </>
  );
};

export default CustomSelect;
