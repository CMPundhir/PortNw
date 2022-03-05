import { CCol, CImage, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow, CSpinner } from '@coreui/react'
import React, { useState } from 'react'
import { CMPage } from '../custom/cm_views'
import settings_png from 'src/assets/images/icons/settings.png';
import marketing_png from 'src/assets/images/icons/marketing.png';
import { SmOutlineButton, getGhostFABtn } from '../custom/cm_views';
import ApiEndpoints from 'src/networks/ApiEndpoints';
import { useAx } from 'src/networks/ApiController';
import { faCogs, faEdit, faEnvelope, faInbox, faSlidersH, faSync } from '@fortawesome/free-solid-svg-icons';
import eye_png from "src/assets/images/icons/eye.png";
import hidden_png from "src/assets/images/icons/hidden.png";
import { CForm, CFormLabel, CButton } from '@coreui/react';
import { CFormInput } from '@coreui/react';
import { postJsonData } from 'src/networks/ApiController';
import { okSuccessToast } from '../custom/cm_toast';
import { apiErrorToast } from '../custom/cm_toast';
import { useEffect } from 'react';
import CommonPage from 'src/commons/components/CommonPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function getStatusColor(status) {
  if (status == "LIVE") {
    return "green";
  } if (status == "MAINTENANCE") {
    return "green";
  } else {
    return "red";
  }
}

export const ChangeServerStatus = ({ user, status, msg }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [valid1, setValid1] = useState(false);

  const checkInputValidation = (input) => {
    return input.length == 4;
  };

  const errMsg = "MPin must be 4 digit long";

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (valid1) {
        postJsonData(ApiEndpoints.CHANGE_SERVICE_STATUS,
          {
            api_token: user.api_token,
            mPin: form.eMpin.value,
            type: status == "LIVE" ? "MAINTENANCE" : "LIVE",
          },
          setRequest,
          (data) => {
            setVisible(false);
            okSuccessToast("Success", JSON.stringify(data));
          },
          (error) => {
            apiErrorToast(error);
          }
        );
      } else {
        alert("invalid");
      }
    }
  };
  useEffect(() => {
    if (!visible) {
      setValid1(false);
    }
    return () => { }
  }, [visible])
  return (
    <>
      <SmOutlineButton faImg={faEdit} txtColor="black" txt="Change Status" color="warning" onClick={() => setVisible(!visible)} />
      <CModal
        alignment="center"
        visible={visible}
        onDismiss={() => {
          if (request) {
            Swal.fire(
              "Warning!!",
              "Please wait request is under progress",
              "warning"
            );
          }
        }}
        scrollable
      >
        <CModalBody className='m-4'>
          <h4>{`Do you want to make server ${status == "LIVE" ? "under Maintenance" : "Live"} ?`}</h4>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            //noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eMpin">MPIN</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eMpin"
                  type={toggle1 ? "text" : "password"}
                  id="eMpin"
                  required
                  size="sm"
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    setValid1(checkInputValidation(e.target.value));
                  }}
                  invalid={!valid1}
                  valid={false}
                  autoComplete="nope"
                  autoCorrect={false}
                />
                <CButton
                  color="#ecf2f7"
                  className="toggle-btn"
                  variant="ghost"
                  onClick={(e) => {
                    setToggle1(!toggle1);
                  }}
                >
                  <CImage
                    src={toggle1 ? eye_png : hidden_png}
                    style={{ width: 16, height: 16 }}
                  />
                </CButton>
              </CInputGroup>
              {validated && !valid1 ? (
                <p style={{ color: "#d93737", fontSize: 14 }}>{errMsg}</p>
              ) : (
                ""
              )}
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            variant="ghost"
            color="secondary"
            onClick={() => setVisible(false)}
            disabled={request}
          >
            Close
          </CButton>
          <CButton
            form="MyForm"
            variant="outline"
            color={status == "LIVE" ? "danger" : "success"}
            type="submit"
            //onClick={handleSubmit}
            disabled={request || !valid1}
          >
            {request ? (
              <CSpinner component="span" size="sm" aria-hidden="true" />
            ) : (
              ""
            )}
            {status == "LIVE" ? `Mark under Maintenance` : `Make Live`}
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

const Body = ({ user, status, msg }) => {
  return (
    <div>
      <CCol>
        <CRow className="mt-4 ms-4 mb-4 me-1 align-items-center" xs={{ cols: "auto" }}>
          <CCol>
            {/* <CImage
              className="me-2 mb-1"
              src={settings_png}
              width={16}
              height={16}
            /> */}
            <FontAwesomeIcon
              className="me-2 text-warning"
              icon={faCogs} />
          </CCol>
          <CCol className='fw-bold'>Service Status &emsp;&emsp;: </CCol>
          <CCol>{<span className='fw-bold' style={{ color: getStatusColor(status) }}>{status}</span>}</CCol>
          <CCol><ChangeServerStatus user={user} status={status} msg={msg} /></CCol>
        </CRow>
        <CRow className="mt-4 ms-4 mb-4 me-1 align-items-center" xs={{ cols: "auto" }}>
          <CCol>
            {/* <CImage
              className="me-2 mb-1"
              src={marketing_png}
              width={16}
              height={16}
            /> */}
            <FontAwesomeIcon
              className="me-2 text-warning"
              icon={faEnvelope} />
          </CCol>
          <CCol className='fw-bold'>Service Message &emsp;: </CCol>
          <CCol>{msg}</CCol>
        </CRow>
      </CCol>
    </div>
  )
}

const ServicesView = ({ user }) => {

  const [{ data, loading, error }, refetch] = useAx(`${ApiEndpoints.SERVICE_STATUS}?api_token=${user ? user.api_token : ""}`);

  if (error) {
    alert(error);
  }
  return (
    <CommonPage title="Admin Services"
      actions={[
        <SmOutlineButton txt="Refresh" variant="outline" faImg={faSync} size="md" onClick={refetch} />,
      ]}>
      {
        loading
          ? <CRow className="mt-4 ms-4 mb-4 me-1 align-items-center justify-content-center" xs={{ cols: "auto" }}><CSpinner size='lg' /></CRow>
          : <Body user={user} status={data ? data.STATUS : "NA"} msg={data ? data.MSG : "NA"} />
      }
    </CommonPage>
  )
}

export default ServicesView
