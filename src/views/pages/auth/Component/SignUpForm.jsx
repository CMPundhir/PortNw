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
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import SpinnerButton from "src/commons/buttons/SpinnerButton";
import { CM_Nav } from "src/commons/Constants";
import CustomInput from "src/commons/inputs/CustomInput";
import CommonModal from "src/commons/modals/CommonModal";
import PinInput from "src/commons/pin-input/PinInput";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import {
  apiErrorToast,
  okSuccessToast,
} from "src/views/cm_views/custom/cm_toast";
import Swal from "sweetalert2";
import VrfySignup from "./VrfySignup";
let mobile;
const SignUpForm = ({ user }) => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [isModelVisible, setisModelVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [otp, setOtp] = useState();
  const history = useHistory();

  // signup api call . . .  . . ..
  const handleSignup = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const name = form.name.value;
    mobile = form.mobile.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name == "" || mobile == "" || email == "" || password == "") {
      event.preventDefault();
    } else {
      postJsonData(
        ApiEndpoints.REGISTER,
        {
          username: mobile,
          password: password,
          name: name,
          email: email,
        },
        setRequest,
        (data) => {
          okSuccessToast("Kindly Verify Yourself");
          setOtpVisible(true);
        },
        (error) => {
          apiErrorToast("Please verify Yourself", error);
          setOtpVisible(true);
        }
      );
    }
  };

  // otp user verification function to be implemented later  . . . . .
  function verifyOtp(otp) {
    if (otp) {
      postJsonData(
        ApiEndpoints.VERIFY_USER,
        {
          otp: otp,
          username: mobile,
        },
        setRequest,
        (data) => {
          okSuccessToast("user verified..... Redirecting . . .", data.message);
          history.push(CM_Nav.LOG_IN);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    }
  }

  return (
    <>
      <CForm className="mx-5 my-5" id="signup_form" onSubmit={handleSignup}>
        <CRow className="px-5 py-3">
          <CCol md={6}>
            <CustomInput
              icon={faUserAlt}
              label="Name"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
          </CCol>
          <CCol md={6}>
            <CustomInput
              icon={faMobile}
              label="Mobile Number"
              id="mobile"
              name="mobile"
              placeholder="Enter Mobile Number"
            />
          </CCol>
        </CRow>
        <CRow className="px-5 py-3">
          <CCol md={6}>
            <CustomInput
              icon={faMailBulk}
              label="Email ID"
              id="email"
              name="email"
              placeholder="Enter your Email ID"
            />
          </CCol>
          <CCol md={6}>
            <CustomInput
              icon={faKey}
              label="Password"
              id="password"
              name="password"
              placeholder="Create your password"
              type="password"
            />
          </CCol>
        </CRow>
        <CRow className="px-4">
          <CCol>
            <div hidden={!otpVisible}>
              <PinInput
                n={6}
                onComplete={(otpp) => {
                  setOtp(otpp);
                }}
              />
            </div>
          </CCol>
        </CRow>
      </CForm>
      <CRow className="text-center px-4">
        <div className="pb-3 d-flex justify-content-center">
          <CButton
            hidden={otpVisible}
            className="signUpBtn"
            form="signup_form"
            type="submit"
            size="sm"
          >
            Register
          </CButton>
          <CButton
            hidden={!otpVisible}
            className="signUpBtn"
            size="sm"
            onClick={() => {
              verifyOtp(otp);
            }}
          >
            Verify
          </CButton>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center">
          <CButton
            className="signUpBtn"
            form="signup_form"
            type="submit"
            size="sm"
          >
            Register
          </CButton>
          
        </div> */}

        <div className="mb-5 mt-2">
          <span>Already have an account?</span>
          <span
            style={{ cursor: "pointer", paddingLeft: "3px", color: "#1692ff" }}
            onClick={(e) => {
              history.push(CM_Nav.LOG_IN);
            }}
          >
            Login
          </span>
          <CommonModal
            isVisible={isModelVisible}
            setIsVisible={setisModelVisible}
          >
            <VrfySignup />
          </CommonModal>
        </div>
      </CRow>
    </>
  );
};

export default SignUpForm;
