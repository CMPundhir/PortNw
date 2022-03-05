import React, { useState } from "react";
import {
  CButton,
  CCarousel,
  CCarouselItem,
  CCol,
  CContainer,
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
import login_rt_png from "./../../../assets/images/login_rt.png";

import "./LoginView.css";
import { loginApi } from "src/networks/ApiController";
import { useHistory } from "react-router";
import { CM_Nav } from "src/commons/Constants";
import { store } from "src/utils/CMLocalStorage";
import { isValidMobile, isValidPass } from "src/utils/ValidationUtil";
import { okErrorToast } from "src/views/cm_views/custom/cm_toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ForgotPasswordModal } from "src/views/cm_views/custom/cm_modals";

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
    if (validMob && validPass) {
      //setValidated(false);
      loginApi(
        form.eMob.value,
        form.ePass.value,
        setRequest,
        (user) => {
          setTimeout(() => {
            history.push({
              pathname: CM_Nav.DASHBOARD,
              state: { user: user, isNewLogin: true },
            });
          }, 100);
        },
        (error) => {
          okErrorToast("Error: " + error.response.status, error.response.data);
        }
      );
    } else {
      setValidated(true);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{ backgroundColor: "white" }}
    >
      <CContainer fluid className="login-bg">
        <CRow className="justify-content-center">
          <CCol
            xs={12}
            md={6}
            lg={6}
            className="left d-md-block justify-content-center"
          >
            <div className="min-vh-100 d-flex flex-row align-items-center">
              <CContainer
                style={{ backgroundColor: "transparent", padding: 8 }}
              >
                <div className="form form-transparent">
                  <CForm
                    id="MyForm"
                    className="row g-1 needs-validation"
                    noValidate
                    //validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <div className="text-center">
                      <CImage
                        src={logo_png}
                        style={{ width: 200, height: "auto" }}
                      />
                    </div>
                    <div className="text-center mt-2 mb-3">
                      <h4 className="fw-bold" style={{ letterSpacing: "1px" }}>
                        Welcome to <span className="text-primary">PORT</span>{" "}
                        Pay
                      </h4>
                      <h6
                        className="mt-4 fs-6"
                        style={{
                          fontFamily: "fantasy",
                          letterSpacing: "0.09rem",
                        }}
                      >
                        Your Corporate Payment Partner
                      </h6>
                    </div>

                    <div className="mb-1 mt-5 position-relative">
                      <CFormInput
                        className="input-style"
                        name="eMob"
                        type="number"
                        id="eMob"
                        // placeholder="eg. 888xxxx340"
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
                      <CFormLabel
                        className="input-style-placeholder"
                        htmlFor="eMob"
                      >
                        Phone Number
                      </CFormLabel>
                      {validated && !validMob ? (
                        <p className="error-txt">
                          Mobile number must be valid 10 digit
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-3 mt-5">
                      <CInputGroup className="flex-sm-wrap mb-2">
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
                        <CFormLabel
                          className="input-style-placeholder"
                          htmlFor="ePass"
                        >
                          Password
                        </CFormLabel>
                        <CInputGroupText
                          className="input-style"
                          onClick={(e) => {
                            setToggle(!toggle);
                          }}
                        >
                          <FontAwesomeIcon
                            size="sm"
                            icon={toggle ? faEye : faEyeSlash}
                          />
                        </CInputGroupText>
                      </CInputGroup>
                      {validated && !validPass ? (
                        <p className="error-txt">
                          Password Must be at least 8 digit long and contains
                          Caps, Small case, Numeric and Special symbols
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
                    <div className="mb-3 mt-1 d-flex justify-content-center">
                      <CButton
                        className="signup-btn signup login-form-btn"
                        type="button"
                        size="sm"
                        variant="outline"
                        disabled={request}
                      >
                        Sign UP
                      </CButton>
                    </div>

                    <div className="mb-3 d-flex text-black justify-content-center mt-1">
                      <small
                        className="px-3 py-0 fw-bold terms-btn mt-2"
                        disabled={request}
                      >
                        Terms and Conditions
                      </small>
                    </div>
                  </CForm>
                </div>

                <CRow className="justify-content-center"></CRow>
              </CContainer>
            </div>
          </CCol>
          <CCol xs={0} md={6} lg={6} className="d-md-block d-none right">
            <div className="min-vh-100 d-flex justify-content-center align-items-center">
              <CImage className="login-rt-png" src={login_rt_png} width="80%" />
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default LoginView;
