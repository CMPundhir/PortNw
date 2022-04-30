import {
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
} from "@coreui/react";
import {
  faArrowRight,
  faLock,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "src/scss/style.scss";
import SpinnerButton from "src/commons/buttons/SpinnerButton";

const handleEnter = (event, onBackspace) => {
  try {
    if (
      event.key.toLowerCase() === "enter" ||
      event.key.toLowerCase() === "arrowright"
    ) {
      const form = event.target.form;
      const index = [...form].indexOf(event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    } else if (
      event.key.toLowerCase() === "backspace" ||
      event.key.toLowerCase() === "delete" ||
      event.key.toLowerCase() === "arrowleft"
    ) {
      const form = event.target.form;
      event.target.value = "";
      const index = [...form].indexOf(event.target);
      form.elements[index - 1].focus();
      event.preventDefault();
      if (onBackspace) onBackspace();
    } else {
    }
  } catch (err) {}
};

function identifyError(invalid) {
  if (invalid && !invalid.data) {
    return invalid.message;
  }
  // else if(invalid && invalid.code == 403 && invalid.message ){
  // }
  else if (invalid && invalid.data) {
    for (let i = 0; i <= 4; i++) {
      if (invalid.data == i) {
        return "MPIN Attempt left: " + (4 - i + 1);
      }
      if (invalid.data == 5) {
        return invalid.message;
      }
    }
  }
}

const PinInput = ({
  label = " Please enter the 6-digit code sent to your mobile number",
  n = 5,
  hidden,
  onComplete,
  onBackspace,
  type = "password",
  invalid,
  error,
  isClearReq,
}) => {
  const [inputValues, setInputValues] = useState([]);
  const pinForm = useRef();
  useEffect(() => {
    let nextComponent;
    const inputs = [];
    for (let i = 0; i < n; i++) {
      inputs[i] = (
        <CFormInput
          ref={(c) => (nextComponent = c)}
          type={type ? type : "password"}
          name={`p_${i}`}
          id={`p_${i}`}
          maxLength={1}
          onKeyDown={(e) => handleEnter(e, onBackspace)}
          style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
          onChange={(event) => {
            if (event.target.value) {
              const form = event.target.form;
              if (i < n - 1) {
                form.elements[i + 1].focus();
              } else {
                form.elements[i].blur();
                const pins = [];
                let pinwa = "";
                for (let i = 0; i < n; i++) {
                  pins[i] = form.elements[i].value;
                  pinwa += pins[i];
                  inputValues[i] = pins[i];
                }
                if (onComplete) {
                  onComplete(pinwa);
                }
              }
            }
          }}
          autoComplete="new-password"
          autoFocus="true"
        />
      );
    }
    setInputValues(inputs);
    return () => {};
  }, [n]);

  useEffect(() => {
    for (let i = 0; i < n; i++) {
      try {
        pinForm.current.elements[i].value = "";
      } catch (err) {
        //console.log(err);
      }
    }
    return () => {};
  }, [isClearReq]);

  return (
    <>
      <div hidden={hidden}>
        <CForm id="PinForm" className="text-center" ref={pinForm}>
          <CFormLabel className="fw-bold pt-5 pb-2" htmlFor="pinGroup">
            {label}
          </CFormLabel>
          <CInputGroup
            className="pin-input fw-bold d-flex align-items-center justify-content-around"
            id="pinGroup"
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" className="me-4" />
            {inputValues}
          </CInputGroup>
          <div className="d-flex justify-content-end pe-4 mt-3 fw-bold">
            <small hidden={!invalid} className="text-danger blink-animation">
              {invalid ? identifyError(invalid) : ""}
            </small>
          </div>
          <div className="d-flex justify-content-end pe-4 mt-3 fw-bold">
            <small hidden={!error} className="text-danger blink-animation">
              {error ? error : ""}
            </small>
          </div>
        </CForm>
      </div>
    </>
  );
};

export default PinInput;
