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
  input = "",
  setInput,
  pattern,
  error,
  rightItem,
  readOnly = false,
  onClick,
  handleEnter,
  bottomMargin = "mb-3",
  flip,
  iconText = "",
  maxLength,
  onKeyUp,
  isShowCheck = true,
  fontSize,
  paddingRightItem,
  paddingRightItemBottom,
  min,
  max,
  required = false,
  hidden = false,
}) => {
  const [data, setData] = useState(input ? input : "");
  const [start, setStart] = useState();
  const [valid, setValid] = useState();

  useEffect(() => {
    setData(input);
    return () => {};
  }, [input]);

  useEffect(() => {
    console.log(data);
    return () => {};
  }, [data]);

  useEffect(() => {
    if (pattern) {
      // console.log("pattern input =>>>", pattern);
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
    if (valid) {
      //if (setInput) setInput(data);
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
  const elementScrollData = () => {
    console.log("elementScrollData ");
  };
  return (
    <div hidden={hidden} style={{ textAlign: "left" }}>
      {label ? (
        <CFormLabel
          htmlFor={id}
          className="d-flex justify-content-start"
          style={{ fontSize: "12px", marginBottom: "4px" }}
        >
          {label}
        </CFormLabel>
      ) : (
        ""
      )}

      <CInputGroup className={bottomMargin}>
        {icon || iconText ? (
          <CInputGroupText
            style={{
              background: "white",
              borderRight: "none",
              borderColor: start ? (valid ? "#5CB466" : "#d55d58") : "#B2B7C0",
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

        <CFormInput
          id={id}
          name={name}
          value={data}
          min={min ? min : ""}
          max={max ? max : ""}
          style={
            !rightItem
              ? {
                  // borderLeft: "none",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                  fontSize: fontSize,
                }
              : {
                  borderLeft: "none",
                  borderRight: "none",
                  fontSize: fontSize,
                }
          }
          placeholder={placeholder}
          type={type}
          aria-label="Username"
          aria-describedby="basic-addon1"
          aria-autocomplete="none"
          valid={isShowCheck && start ? valid : undefined}
          invalid={isShowCheck && start ? !valid : undefined}
          onChange={(e) => {
            const s = e.target.value;
            if (maxLength) {
              if (s.length <= maxLength) setData(s);
            } else {
              setData(s);
            }
            if (!start) setStart(true);
          }}
          onSelect={(e) => {
            //alert("selected : " + e.target.value);
          }}
          onClick={() => {
            if (onClick) onClick();
          }}
          onKeyDown={valid ? handleEnter : () => {}}
          autoComplete="new-password"
          autoCorrect="false"
          list={"data_" + name}
          readOnly={readOnly}
          onWheel={(e) => {
            e.currentTarget.blur();
          }}
          onKeyUp={onKeyUp}
          required={required}
        />
        <CInputGroupText
          className="d-flex align-items-center"
          hidden={!rightItem}
          style={{
            background: "transparent",
            borderLeft: "none",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            borderColor: start ? (valid ? "#5CB466" : "#d55d58") : "#B2B7C0",
            padding: paddingRightItem,
            paddingBottom: paddingRightItemBottom,
          }}
        >
          {rightItem}
        </CInputGroupText>

        <CFormFeedback invalid>
          <small>{error ? error : " "}</small>
        </CFormFeedback>
      </CInputGroup>
    </div>
  );
};

export default CustomInput;
