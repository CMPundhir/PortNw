import React from "react";
import {
  CButton,
  CCarousel,
  CCarouselItem,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
} from "@coreui/react";
import logo_png from "./../../../assets/images/logo.png";

import transfer_png from "src/assets/images/transfer.jpg";
import signup_png from "src/assets/images/signup.png";
import otp_png from "src/assets/images/otp.png";
import hi_png from "src/assets/images/hi.png";
import forgot_png from "src/assets/images/icons/forgot.png";

import "..login2/LoginView.css";

const OtpVerifyView = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{ backgroundColor: "white" }}
    >
      <CContainer fluid style={{ backgroundColor: "white" }}>
        <CRow className="justify-content-center">
          <CCol xs={6} md={6} className="left">
            <CCarousel controls indicators dark className="m-4">
              <CCarouselItem style={{ padding: 50 }}>
                <CImage
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  className="d-block w-100 carimg"
                  src={transfer_png}
                  alt="slide 1"
                />
                <div className="text-center" style={{ marginBottom: 50 }}>
                  <h3>Get Your Payment settled in minutes</h3>
                  <h6>
                    Connect your bank card and create accounts in the selected
                    currency
                  </h6>
                </div>
              </CCarouselItem>
              <CCarouselItem style={{ padding: 50 }}>
                <CImage
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  className="d-block w-100 carimg"
                  src={signup_png}
                  alt="slide 2"
                />
                <div className="text-center" style={{ marginBottom: 50 }}>
                  <h3>Get Your Payment settled in minutes</h3>
                  <h6>
                    Connect your bank card and create accounts in the selected
                    currency
                  </h6>
                </div>
              </CCarouselItem>
              <CCarouselItem style={{ padding: 50 }}>
                <CImage
                  style={{ paddingLeft: 20, paddingRight: 20 }}
                  className="d-block w-100"
                  src={otp_png}
                  alt="slide 3"
                />
                <div className="text-center" style={{ marginBottom: 50 }}>
                  <h3>Get Your Payment settled in minutes</h3>
                  <h6>
                    Connect your bank card and create accounts in the selected
                    currency
                  </h6>
                </div>
              </CCarouselItem>
            </CCarousel>
          </CCol>
          <CCol xs={6} md={6} className="right">
            <div className="min-vh-100 d-flex flex-row align-items-center">
              <CContainer style={{ backgroundColor: "white", margin: 100 }}>
                <CRow className="justify-content-end">
                  <CImage src={logo_png} style={{ width: 200, height: 60 }} />
                </CRow>
                <div style={{ marginTop: 50, marginLeft: 50 }}>
                  <CForm style={{ width: 500, marginBottom: 100 }}>
                    <CImage src={hi_png} style={{ width: 60, height: 60 }} />
                    <h2>Welcome Back!</h2>
                    <h6>Please Login to access your account</h6>
                    <div className="mb-3" style={{ marginTop: 50 }}>
                      <CFormLabel htmlFor="eMob">Phone Number</CFormLabel>
                      <CFormInput
                        name="eMob"
                        type="number"
                        id="eMob"
                        placeholder="eg. 888xxxx340"
                        minLength={10}
                        required
                        size="lg"
                        style={{ backgroundColor: "#ECF2F7", padding: 16 }}
                      />
                      <CFormFeedback invalid>
                        Mobile number must be 10 digit
                      </CFormFeedback>
                    </div>
                    <div className="mb-3" style={{ marginTop: 30 }}>
                      <CFormLabel htmlFor="ePass">Password</CFormLabel>
                      <CFormInput
                        name="ePass"
                        type="password"
                        id="ePass"
                        placeholder="eg. Test@123"
                        minLength={8}
                        required
                        size="lg"
                        style={{ backgroundColor: "#ECF2F7", padding: 16 }}
                      />
                      <CFormFeedback invalid>
                        Mobile number must be 10 digit
                      </CFormFeedback>
                    </div>
                    <div className="mb-3" style={{ marginTop: 30 }}>
                      <CRow className="justify-content-between align-items-center">
                        <CCol>
                          <CFormCheck id="cRemMe" label="Remember me" />
                        </CCol>
                        <CCol className="align-self-end">
                          <CButton
                            color="primary"
                            variant="ghost"
                            onClick={(e) => alert("Forgot")}
                          >
                            Forgot Password
                            <CImage
                              className="me-2"
                              src={forgot_png}
                              width={16}
                              height={16}
                            />
                          </CButton>
                        </CCol>
                      </CRow>
                    </div>
                    <CRow
                      className="mb-3 ms-2 me-2 mt-4"
                      style={{ marginTop: 30 }}
                    >
                      <CButton
                        type="submit"
                        size="lg"
                        color="primary"
                        style={{ color: "white", padding: 16 }}
                      >
                        Log In
                      </CButton>
                    </CRow>
                    <CRow
                      className="mb-3 ms-2 me-2 mt-4"
                      style={{ marginTop: 30 }}
                    >
                      <CButton
                        type="submit"
                        size="lg"
                        color="primary"
                        variant="outline"
                        style={{ padding: 16 }}
                      >
                        Sign UP
                      </CButton>
                    </CRow>

                    <CRow
                      className="mb-3 ms-2 me-2 mt-4"
                      style={{ marginTop: 30 }}
                    >
                      <CButton
                        type="submit"
                        size="sm"
                        color="primary"
                        variant="ghost"
                        style={{ padding: 16 }}
                      >
                        Terms and Conditions
                      </CButton>
                    </CRow>
                  </CForm>
                </div>

                <CRow className="justify-content-center"></CRow>
              </CContainer>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default OtpVerifyView;
