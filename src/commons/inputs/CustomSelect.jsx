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
  value,
  iconText,
  flip,
  fontSize,
}) => {
  let defaultValue = { name: "Select" };
  if (defaultIndex) {
    try {
      defaultValue = list[defaultIndex];
      //list.splice(defaultIndex, 1);
    } catch (err) {}
  }
  return (
    <div>
      <CFormLabel
        htmlFor={id}
        className="d-flex justify-content-start"
        style={{ fontSize: "12px", marginBottom: "4px" }}
      >
        {label}
      </CFormLabel>
      <CInputGroup className="mb-3">
        {icon || iconText ? (
          <CInputGroupText
            style={{
              background: "white",
              borderRight: "none",
              background: "transparent",
            }}
          >
            {icon ? (
              <FontAwesomeIcon size="sm" icon={icon} flip={flip} />
            ) : (
              iconText
            )}
          </CInputGroupText>
        ) : (
          ""
        )}

        <CFormSelect
          id={id}
          placeholder="select"
          style={
            !(icon || iconText)
              ? {
                  fontSize: fontSize,
                }
              : {
                  fontSize: fontSize,
                  borderLeft: "none",
                }
          }
          onChange={(item) => {
            const name = item.currentTarget.value;
            if (defaultValue && name == defaultValue.name) {
              onSelect(defaultValue);
              return;
            }
            const length = list ? list.length : 0;
            for (let i = 0; i < length; i++) {
              if ((list[i].name && list[i].name == name) || list[i] == name) {
                onSelect(list[i]);
                break;
              }
            }
          }}
          value={value}
        >
          <option>{defaultValue && defaultValue.name}</option>
          {list
            ? list.map((item) => {
                return <option>{item && item.name ? item.name : item}</option>;
              })
            : []}
        </CFormSelect>
        {/* <CFormFeedback invalid>{emptyInput ? "empty" : "invalid"}</CFormFeedback> */}
      </CInputGroup>
    </div>
  );
};

export default CustomSelect;
