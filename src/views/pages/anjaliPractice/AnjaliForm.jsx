import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
  CCol,
  CSpinner,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { dummyImg } from "src/iconsimport";
import { get, postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import {
  apiErrorToast,
  okSuccessToast,
} from "src/views/cm_views/custom/cm_toast";
import "./AnjaliForm.css";

const AnjaliForm = () => {
  const [request, setRequest] = useState(false);
  const [userData, setUserData] = useState();
  const [followers, setFollowers] = useState([]);
  const [followersView, setFollowersView] = useState([]);
  const [repositary, setRepositary] = useState([]);
  const [repositaryView, setRepositaryView] = useState([]);

  useEffect(() => {
    if (followers && followers.length > 0) {
      const myViews = followers.map((follower) => {
        return (
          <CCard className="FolowerTable mb-3" style={{ maxWidth: "400px" }}>
            <CRow className="text-center">
              <CCol md={4}>
                <CCardImage
                  className="fImg"
                  src={
                    follower && follower.avatar_url
                      ? follower.avatar_url
                      : dummyImg
                  }
                />
              </CCol>
              <CCol md={8}>
                <CCardBody>
                  <CCardText>{follower.login}</CCardText>
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        );
      });
      setFollowersView(myViews);
    }
    return () => {};
  }, [followers]);

  useEffect(() => {
    if (repositary && repositary.length > 0) {
      const myRepo = repositary.map((repositary) => {
        return (
          <CCard className="FolowerTable mb-3" style={{ maxWidth: "400px" }}>
            <CRow className="text-center">
              <CCardBody>
                <div>{repositary && repositary.name}</div>
              </CCardBody>
            </CRow>
          </CCard>
        );
      });
      setRepositaryView(myRepo);
    }
    return () => {};
  }, [repositary]);

  useEffect(() => {
    if (userData) {
      get(
        ApiEndpoints.GET_USER_GITHUB + `${userData.login}/followers`,
        setRequest,
        (data) => {
          setFollowers(data);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
      get(
        ApiEndpoints.GET_USER_GITHUB + `${userData.login}/repos`,
        setRequest,
        (data) => {
          setRepositary(data);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    }

    return () => {};
  }, [userData]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const nameForm = form.name.value;
    if (nameForm != "") {
      get(
        ApiEndpoints.GET_USER_GITHUB + `${nameForm}`,
        setRequest,
        (data) => {
          setUserData(data);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    } else {
      alert("empty name");
    }
  };
  return (
    <>
      <CRow className="mt-5 d-flex justify content center">
        <CCol lg={4} md={4} sm={12} className="px-5 py-5 ">
          <div className="mt-1 ml-5 formContainer imgView">
            <div className="  text-center mb-5">
              <CImage
                className="img"
                src={
                  userData && userData.avatar_url
                    ? userData.avatar_url
                    : dummyImg
                }
                width="100%"
              />
              <div
                className=""
                style={{ fontSize: "15px", fontWeight: "normal" }}
              >
                {userData && userData.bio}
              </div>
            </div>

            <CForm
              id="form"
              noValidate
              //validated={validated}
              onSubmit={handleSubmit}
            >
              <CFormLabel htmlFor="name">Enter Person Name</CFormLabel>

              <CFormInput
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
              />
            </CForm>
            <div className="text-center mt-5">
              <CButton
                className=" text-center "
                form="form"
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
                Submit
              </CButton>
            </div>
          </div>
        </CCol>
        <CCol lg={4} md={8} sm={12}>
          <div> {followersView}</div>
        </CCol>
        <CCol lg={4} md={8} sm={12}>
          <div>{repositaryView}</div>
        </CCol>
      </CRow>
    </>
  );
};

export default AnjaliForm;
