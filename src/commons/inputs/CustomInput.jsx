import {
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "src/scss/_custom.scss";

const CustomInput = ({
  id,
  name,
  icon,
  placeholder,
  type,
  label,
  input,
  setInput,
  pattern,
  error,
  rightItem,
  readOnly = false,
  onClick,
  handleEnter,
}) => {
  const [data, setData] = useState(input ? input : undefined);
  const [start, setStart] = useState(undefined);
  const [valid, setValid] = useState(undefined);

  useEffect(() => {
    setData(input);
    return () => {};
  }, [input]);

  useEffect(() => {
    if (pattern) {
      const isValid = data != undefined && pattern.test(data);
      if (start) {
        setValid(isValid);
        if (isValid && setInput) {
          setInput(data);
        }
      } else {
        if (isValid) {
          if (setInput) {
            setInput(data);
          }
          setStart(true);
          setValid(isValid);
        }
      }
    } else {
      if (setInput) setInput(data);
      setValid(true);
    }
    return () => {};
  }, [data]);

  useEffect(() => {
    console.log(`Valid => ${valid}`);
    if (valid) {
      if (setInput) setInput(data);
    } else {
      if (setInput) setInput(undefined);
    }
    return () => {};
  }, [valid]);
  name = name ? name : id;

  // const handleKey = (event) => {
  //   if (
  //     event.key.toLowerCase() === "backspace" ||
  //     event.key.toLowerCase() === "delete" ||
  //     event.key.toLowerCase() === "arrowleft"
  //   ) {
  //     const form = event.target.form;
  //     event.preventDefault();
  //     event.target.value = "";
  //     if (onBackspace) onBackspace();
  //   }
  // };

  return (
    <div style={{ textAlign: "left" }}>
      <CFormLabel className="text-left " htmlFor={id}>
        {label}
      </CFormLabel>
      <CInputGroup className="mb-3" size="">
        <CInputGroupText
          style={{
            background: "transparent",
            borderRight: "none",
            borderColor: start ? (valid ? "#5CB466" : "#d55d58") : "#B2B7C0",
          }}
        >
          <FontAwesomeIcon size="sm" icon={icon} />
        </CInputGroupText>
        <CFormInput
          className="p-2"
          size="sm"
          id={id}
          name={name}
          value={data}
          style={
            !rightItem
              ? {
                  fontSize: "16px",
                  borderLeft: "none",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                }
              : {
                  fontSize: "16px",

                  borderLeft: "none",
                  borderRight: "none",
                }
          }
          placeholder={placeholder}
          type={type}
          aria-label="Username"
          aria-describedby="basic-addon1"
          valid={start ? valid : undefined}
          invalid={start ? !valid : undefined}
          onChange={(e) => {
            setData(e.target.value);
            if (!start) setStart(true);
          }}
          onSelect={(e) => {
            //alert("selected : " + e.target.value);
          }}
          onClick={() => {
            if (onClick) onClick();
          }}
          onKeyDown={valid ? handleEnter : ""}
          autoComplete="off"
          autoCorrect="false"
          list={"data_" + name}
          readOnly={readOnly}
        />
        <CInputGroupText
          hidden={!rightItem}
          style={{
            background: "transparent",
            borderLeft: "none",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            borderColor: start ? (valid ? "#5CB466" : "#d55d58") : "#B2B7C0",
          }}
        >
          {rightItem}
        </CInputGroupText>

        <CFormFeedback hidden={!error} invalid>
          {error ? error : ""}
        </CFormFeedback>
      </CInputGroup>
    </div>
  );
};

export default CustomInput;
