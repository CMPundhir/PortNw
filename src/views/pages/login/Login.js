import React from "react";
import { Link } from "react-router-dom";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCarousel,
  CCarouselItem,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import logo_png from "./../../../assets/images/logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-row align-items-center"
      style={{
        // background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`,
        backgroundImage: `linear-gradient(to bottom, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7)), 
        url('https://mdbcdn.b-cdn.net/img/Photos/Others/architecture.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div
        class="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight"
        data-wow-delay="1s"
        style={{ marginLeft: 200, marginRight: -200 }}
      >
        <img
          src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
          alt=""
          class="img-fluid"
        />
      </div>
      <CContainer>
        {/* <div className="text-center" style={{ marginBottom: 100 }}>
          <CImage rounded src={logo_png} width={200} height={150} />
        </div> */}
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-5">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-black py-5" style={{ width: "44%" }}>
                <CCardBody className="text-center p-5">
                  {/* <div>
                    <h2>Welcome</h2>
                    <h5 mt="4">to</h5>
                    <CImage src={logo_png}/>
                  
                  </div> */}

                  <CCarousel controls>
                    <CCarouselItem>
                      <h3>Page 1</h3>
                      <CImage
                        className="d-block w-100"
                        src={logo_png}
                        alt="slide 1"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <h3>Page 2</h3>
                      <CImage
                        className="d-block w-100"
                        src={logo_png}
                        alt="slide 2"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <h3>Page 3</h3>
                      <CImage
                        className="d-block w-100"
                        src={logo_png}
                        alt="slide 3"
                      />
                    </CCarouselItem>
                  </CCarousel>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
