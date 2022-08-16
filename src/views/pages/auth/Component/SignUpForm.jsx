import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import {
  faKey,
  faMailBulk,
  faMobile,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { EnhancedEncryptionTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import SpinnerButton from "src/commons/buttons/SpinnerButton";
import { CM_Nav } from "src/commons/Constants";
import CustomInput from "src/commons/inputs/CustomInput";
import CommonModal from "src/commons/modals/CommonModal";
import PinInput from "src/commons/pin-input/PinInput";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { isValidMobile } from "src/utils/ValidationUtil";
import {
  apiErrorToast,
  okSuccessToast,
} from "src/views/cm_views/custom/cm_toast";
import LoginView from "../LoginView";

const SignUpForm = ({ user }) => {
  const [request, setRequest] = useState();
  const [validated, setValidated] = useState(false);
  const [validMob, setValidMob] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const history = useHistory();

  const handleSignup = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const password = form.password.value;
    if (validMob && validPass) {
      postJsonData(
        ApiEndpoints.REGISTER,
        {
          name: name,
          mobile: mobile,
          email: email,
          password: password,
        },
        setRequest,
        (data) => {
          okSuccessToast(data.message);
          history.push(CM_Nav.LOG_IN);
        },
        (error) => {
          apiErrorToast(JSON.stringify(error));
        }
      );
    } else setValidated(true);
  };
  return (
    <>
      <CForm className="mx-5 my-5" id="signup_form" onSubmit={handleSignup}>
        <CRow className="px-5 py-3">
          <CCol md={6}>
            <CFormLabel htmlFor="name">Name</CFormLabel>
            <CFormInput
              className="input-style"
              name="name"
              type="text"
              id="name"
              placeholder="Name"
              size="sm"
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="mobile">Phone Number</CFormLabel>
            <CFormInput
              className="input-style"
              name="mobile"
              type="number"
              id="mobile"
              placeholder="eg. 888xxxx340"
              size="sm"
              minLength={10}
              required
              disabled={request}
              onChange={(e) => {
                var m = e.target.value;
                setValidMob(isValidMobile(m));
              }}
              valid={validated && validMob}
              invalid={validated && !validMob}
            />
            {validated && !validMob ? (
              <p className="error-txt">Mobile number must be valid 10 digit</p>
            ) : (
              ""
            )}
          </CCol>
        </CRow>
        <CRow className="px-5 py-3">
          <CCol md={6}>
            <CFormLabel htmlFor="email">Email Id</CFormLabel>
            <CFormInput
              className="input-style"
              name="email"
              type="text"
              id="email"
              placeholder="Email Id"
              size="sm"
              minLength={10}
              required
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="password">Password</CFormLabel>
            <CFormInput
              className="input-style"
              name="password"
              // type={toggle ? "text" : "password"}
              id="password"
              placeholder="xxxxxxxx"
              required
              size="sm"
              disabled={request}
              onChange={(e) => {
                var p = e.target.value;
                // setValidPass(isValidPass(p));
                setValidPass(true);
              }}
              invalid={validated && !validPass}
              valid={validated && validPass}
            />
          </CCol>
        </CRow>
      </CForm>
      <CRow className="text-center px-4">
        <div className="d-flex justify-content-center align-items-center">
          <CButton
            className="signUpBtn"
            form="signup_form"
            type="submit"
            size="sm"
          >
            Register
          </CButton>
        </div>

        <div className="mb-5 mt-2">
          <span>Already have an account?</span>
          <span
            style={{ cursor: "pointer", paddingLeft: "3px", color: "#e1609c" }}
            onClick={(e) => {
              history.push(CM_Nav.LOG_IN);
            }}
          >
            Login
          </span>
        </div>
      </CRow>
    </>
  );
};

export default SignUpForm;
