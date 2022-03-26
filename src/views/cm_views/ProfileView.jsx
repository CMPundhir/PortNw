import React from "react";

import user_png from "src/assets/images/icons/user.png";
import phone_png from "src/assets/images/icons/phone.png";
import email_png from "src/assets/images/icons/email.png";
import aadhar_png from "src/assets/images/png/aadhaar.png";
import gst_png from "src/assets/images/icons/gst.png";
import idcard_png from "src/assets/images/icons/idcard.png";
import www_png from "src/assets/images/icons/www.png";
import edit_user_png from "src/assets/images/icons/edit_user.png";
import { getButton, getPage } from "./custom/cm_views";
import { CCol, CImage, CRow } from "@coreui/react";
import { changeMpinPass, showHKeyDialog } from "./custom/cm_modals";
import { CMPage } from "./custom/cm_views";
import CommonPage from "src/commons/components/CommonPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faDatabase,
  faHandMiddleFinger,
  faIdCard,
  faMailBulk,
  faMobile,
  faProjectDiagram,
  faSearch,
  faSearchLocation,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fundTransferDialog } from "./custom/cm_modals";

const ProfileView = ({ user }) => {
  const changePassword = (e) => {};

  const actions =
    user && user.role == "User"
      ? [
          showHKeyDialog(user, "API TOKEN"),
          showHKeyDialog(user, "HASH KEY"),
          changeMpinPass(user, "MPIN"),
          changeMpinPass(user, "Password"),
        ]
      : [changeMpinPass(user, "MPIN"), changeMpinPass(user, "PASSWORD")];
  return (
    <>
      <CommonPage title="Profile" img={user_png} actions={actions}>
        <CCol sm={12} md={6}>
          <CRow className="mt-4 ms-4 mb-4 me-1 d-md-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon className="" icon={faUserAlt} />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Name</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.name : ""}
            </CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon className="" icon={faMailBulk} />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Email</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.email : ""}
            </CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon className="" icon={faMobile} />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Mobile</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.username : ""}
            </CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon className="" icon={faIdCard} />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">PAN</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.pan : ""}
            </CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <CImage
                  className="me-2 mb-1"
                  src={aadhar_png}
                  width={24}
                  height={24}
                />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Aadhaar</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.aadhar : ""}
            </CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">GST</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.gst : ""}
            </CCol>
          </CRow>

          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon icon={faSearchLocation} />
              </span>
            </CCol>
            <CCol
              xs={4}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Callback</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex"></CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </CCol>
            <CCol
              xs={5}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Whitelisted IP</small>
              <span>:</span>
            </CCol>
            <CCol xs={4} sm={5} className="d-flex">
              {user ? user.ip : ""}
            </CCol>
          </CRow>
          <CRow className="ms-4 mb-4 me-1 d-flex align-items-center">
            <CCol xs={1} sm={1}>
              <span>
                <FontAwesomeIcon icon={faProjectDiagram} />
              </span>
            </CCol>
            <CCol
              xs={5}
              sm={4}
              className="d-flex flex-wrap align-items-center justify-content-sm-between"
            >
              <small className="text-left fw-bold">Virtual Acc. No.</small>
              <span>:</span>
            </CCol>
            <CCol xs={5} sm={5} className="d-flex">
              {user ? user.url : ""}
            </CCol>
          </CRow>
        </CCol>
      </CommonPage>
    </>
  );
};

export default ProfileView;
