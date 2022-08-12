import React, { useState } from "react";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from "@coreui/react";
import logo_png from "./../../../assets/images/logo.png";

import "./LoginView.css";
import { getRequest, loginApi, postJsonData } from "src/networks/ApiController";
import { useHistory } from "react-router";
import { CM_Nav, UserType } from "src/commons/Constants";
import { store } from "src/utils/CMLocalStorage";
import { isValidMobile, isValidPass } from "src/utils/ValidationUtil";
import {
  apiErrorToast,
  okErrorToast,
  okSuccessToast,
} from "src/views/cm_views/custom/cm_toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ForgotPasswordModal } from "src/views/cm_views/custom/cm_modals";
import { login_png } from "src/iconsimport";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { Container } from "react-bootstrap";
import CircleGrad from "src/commons/components/CircleGrad";
import CircleGradGreen from "src/commons/components/CircleGradGreen";

const myUser = {
  id: 9,
  name: "GYANENDER",
  establishment: "GYANENDER",
  username: 7011256694,
  w1: 95900,
  w2: 0,
  hold: 0,
  email: "gyan.lamba1981@gmail.com",
  address: "ROHINI",
  state: "7",
  district: "NORTH WEST",
  pincode: "110085",
  aadhar: "572981560977",
  pan: "AALCM0181E",
  gstin: "BSUPK5566Q",
  role: UserType.ADMIN,
  status: 1,
  active: 1,
  kyc: 0,
  created_at: "2018-09-01T07:54:50.000000Z",
  api_token: "MmU2MmFkano1cXplc1VndktsUTFRTXY4TGp1SW9DQmsyaDArQ21BTFQybz0=",
  instId: "53494",
  dmt1: 0,
  dmt2: 1,
  dmt3: 1,
  dmt4: 1,
};

const LoginView = () => {
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [validMob, setValidMob] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  localStorage.clear();
  store.clear().then((v) => {});
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    //event.stopPropagation();
    console.log(form);
    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    //   setValidated(true);
    // }
    // {
    //   username: "9350265444",
    //   password: "2020@Vihaan",
    // }
    if (validMob && validPass) {
      //setValidated(false);
      // getRequest(
      //   ApiEndpoints.GET_ME_USER,
      //   "c01652e06270aba98d8b5af488c13737f1a4c987ed41965330a1416cd9a39623",
      //   setRequest,
      //   (data) => {
      //     okSuccessToast("Success", JSON.stringify(data));
      //   },
      //   (error) => {
      //     apiErrorToast(error);
      //     console.log(error);
      //   }
      // );
      loginApi(
        form.eMob.value,
        form.ePass.value,
        setRequest,
        (user) => {
          setTimeout(() => {
            history.push({
              pathname: CM_Nav.HOME,
              state: { user: user, isNewLogin: true },
            });
          }, 100);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <div
        style={{ position: "fixed", zIndex: -2, left: "1050px", top: "290px" }}
      >
        <CircleGrad width="600px" height="600px" radius="300px" />
      </div>
      <div
        style={{ position: "fixed", zIndex: -1, left: "150px", top: "150px" }}
      >
        <CircleGradGreen width="200px" height="200px" radius="100px" />
      </div>
      <div className=" login_bg">
        <CForm
          id="MyForm"
          className="row form needs-validation"
          noValidate
          //validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <CImage src={logo_png} style={{ width: 200, height: "auto" }} />
          </div>
          <div className="text-center mt-3 mb-4">
            <div style={{ letterSpacing: "1px", fontSize: "16.5px" }}>
              Enter your login details.
            </div>
          </div>

          <div className="mb-2 mt-4 position-relative">
            <CFormLabel htmlFor="eMob">Phone Number</CFormLabel>
            <CFormInput
              className="input-style"
              name="eMob"
              type="number"
              id="eMob"
              placeholder="eg. 888xxxx340"
              size="sm"
              minLength={10}
              required
              disabled={request}
              onChange={(e) => {
                var m = e.target.value;
                setValidMob(isValidMobile(m));
                //console.log("mob: " + m + ", " + validMob);
              }}
              valid={validated && validMob}
              invalid={validated && !validMob}
            />
            {validated && !validMob ? (
              <p className="error-txt">Mobile number must be valid 10 digit</p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-2 mt-3">
            <CFormLabel htmlFor="ePass">Password</CFormLabel>
            <CInputGroup className="flex-sm-wrap mb-3">
              <CFormInput
                className="input-style"
                name="ePass"
                type={toggle ? "text" : "password"}
                id="ePass"
                // placeholder="eg. Test@123"
                required
                size="sm"
                disabled={request}
                onChange={(e) => {
                  var p = e.target.value;
                  //console.log(p);
                  setValidPass(isValidPass(p));
                }}
                invalid={validated && !validPass}
                valid={validated && validPass}
              />
              <CInputGroupText
                className="input-style"
                onClick={(e) => {
                  setToggle(!toggle);
                }}
              >
                <FontAwesomeIcon size="sm" icon={toggle ? faEye : faEyeSlash} />
              </CInputGroupText>
            </CInputGroup>
            {validated && !validPass ? (
              <p className="error-txt">
                Password Must be at least 8 digit long and contains Caps, Small
                case, Numeric and Special symbols
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-3">
            <CRow className="align-items-end">
              <CCol className="flex-end">
                <ForgotPasswordModal />
              </CCol>
            </CRow>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3 mt-3 d-flex justify-content-center">
                <CButton
                  className="login-btn login text-center login-form-btn"
                  form="MyForm"
                  type="submit"
                  disabled={request}
                  size="sm"
                >
                  {request ? (
                    <CSpinner
                      component="span"
                      size="sm"
                      aria-hidden="true"
                      className="me-2"
                    />
                  ) : (
                    ""
                  )}
                  Log In
                </CButton>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3 mt-3 d-flex justify-content-center">
                <CButton
                  className="signup-btn signup login-form-btn"
                  type="button"
                  size="sm"
                  variant="outline"
                  disabled={request}
                  onClick={() => {
                    history.push(CM_Nav.SIGNUP_VIEW);
                  }}
                >
                  Sign Up
                </CButton>
              </div>
            </div>
          </div>

          <div className="mb-3 mt-3 d-flex text-black justify-content-center mt-1">
            <small className="px-0 py-0  terms-btn mt-2" disabled={request}>
              Terms and Conditions
            </small>
          </div>
        </CForm>
      </div>
    </div>
  );
};

export default LoginView;
