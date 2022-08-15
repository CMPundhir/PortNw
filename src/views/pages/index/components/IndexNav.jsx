import { CButton, CCol, CImage, CRow } from "@coreui/react";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { CM_Nav, UserType } from "src/commons/Constants";
import { logo_png, portPay } from "src/iconsimport";
import SectionOne from "./SectionOne";
import CircleLightPurple from "src/commons/components/CircleLightPurple";
import CircleSmallPurple from "src/commons/components/CircleSmallPurple";
import ContactUs from "src/views/cm_views/footerContent/ContactUs";
import Support from "src/views/cm_views/footerContent/Support";
import LoginView from "../../auth/LoginView";

export const IndexNav = () => {
  const history = useHistory();
  const [visible, setVisible] = useState();
  return (
    <>
      <div>
        {/* <Navbar className="navHeader" position="fixed" expand="lg"> */}
        <span className="d-flex align-items-center justify-content-between px-5 py-2">
          <CImage src={logo_png} width="200px" height="auto" />
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Home{" "}
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Contact Us
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-support-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-support"
                type="button"
                role="tab"
                aria-controls="pills-support"
                aria-selected="false"
              >
                Support
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link "
                id="pills-login-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-login"
                type="button"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
                onClick={() => {
                  history.push(CM_Nav.LOG_IN);
                }}
              >
                Login/Register
              </button>
            </li>
          </ul>
        </span>
        {/* content page */}
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div
              style={{
                zIndex: -10,
                width: "100%",
                height: "100vh",
                clipPath: "polygon(50% 0%, 100% 0, 100% 75%, 0 91%, 0 0)",
                background:
                  "transparent linear-gradient(180deg, #FFFFFF70 0%, #ff8989 100%) 0% 0% no-repeat padding-box  ",
              }}
            >
              <div className="position-absolute margin-top-70">
                <SectionOne />
              </div>
              {/* circle 1 */}
              <div
                style={{
                  position: "relative",
                  zIndex: -2,
                  left: "60%",
                  marginTop: "3%",
                  marginLeft: "5%",
                }}
              >
                <CircleLightPurple
                  width="25rem"
                  height="25rem"
                  radius="19rem"
                />
              </div>
              {/* circle 2 */}
              <div
                style={{
                  position: "relative",
                  zIndex: -2,
                  marginLeft: "50%",
                }}
              >
                <CircleSmallPurple width="8rem" height="8rem" radius="19rem" />
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <ContactUs />
          </div>
          <div
            class="tab-pane fade"
            id="pills-support"
            role="tabpanel"
            aria-labelledby="pills-support-tab"
          >
            <Support />
          </div>
        </div>
      </div>
    </>
  );
};
