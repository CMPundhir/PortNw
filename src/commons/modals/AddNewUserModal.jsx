import {
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { faEdit, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { postJsonData } from "src/networks/ApiController";
import { apiErrorToast } from "src/views/cm_views/custom/cm_toast";
import { okSuccessToast } from "src/views/cm_views/custom/cm_toast";
import { getGhost24FAIconBtn } from "src/views/cm_views/custom/cm_views";
import { getGhostFABtn } from "src/views/cm_views/custom/cm_views";
import { UserType } from "src/commons/Constants";
import { SubmitFormBtn } from "src/views/cm_views/custom/cm_views";
import ApiEndpoints from "src/networks/ApiEndpoints";

const AddNewUserModal = ({ isNew, user, row, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [chargeType, setChargeType] = useState("PERCENTAGE");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    const data = isNew
      ? {
          api_token: user ? user.api_token : "",
          userId: row ? row.id : "",
          commercial_type: form.sType.value,
          name: form.eName.value,
          bname: form.eBName.value,
          email: form.eEmail.value,
          username: form.eMob.value,
          gstin: form.eGst.value,
          role:
            user && user.role == UserType.ADMIN && form.sUserType
              ? form.sUserType.value
              : UserType.USER,
          sub_role: form.sUserSubType.value,
        }
      : {
          api_token: user ? user.api_token : "",
          userId: row ? row.id : "",
          commercial_type: form.sType.value,
          name: form.eName.value,
          bname: form.eBName.value,
          email: form.eEmail.value,
          username: form.eMob.value,
          gstin: form.eGst.value,
        };
    postJsonData(
      isNew ? ApiEndpoints.ADD_USER : ApiEndpoints.EDIT_USER,
      data,
      setRequest,
      (data) => {
        setVisible(false);
        okSuccessToast("Success", data);
        if (refetch) refetch();
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };

  return (
    <>
      {isNew
        ? getGhostFABtn("Add New", faUser, (e) => {
            setVisible(!visible);
          })
        : getGhost24FAIconBtn(faEdit, "transparent", (e) => {
            setVisible(!visible);
          })}
      <CModal
        size="xl"
        className="modal_wid"
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
        <CModalHeader>
          <CModalTitle>{isNew ? "Add New User" : "Edit User"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={6}>
                <div className="mb-3">
                  <CFormLabel htmlFor="eName">Name</CFormLabel>
                  <CFormInput
                    name="name"
                    type="text"
                    id="eName"
                    placeholder="Name"
                    disabled={request || (row && row.name)}
                    defaultValue={row != null ? row.name : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eBName">Business Name</CFormLabel>
                  <CFormInput
                    name="bname"
                    type="text"
                    id="eBName"
                    placeholder="Business Name"
                    disabled={request || (row && row.bname)}
                    defaultValue={row != null ? row.bname : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eEmail">Email ID</CFormLabel>
                  <CFormInput
                    name="email"
                    type="email"
                    id="eEmail"
                    placeholder="Email ID"
                    disabled={request || (row && row.email)}
                    defaultValue={row != null ? row.email : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eMob">Mobile Number</CFormLabel>
                  <CFormInput
                    name="mob"
                    type="number"
                    id="eMob"
                    placeholder="Mobile Number"
                    disabled={!isNew}
                    defaultValue={row != null ? row.username : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eGst">GSTIN</CFormLabel>
                  <CFormInput
                    name="gst"
                    type="text"
                    id="eGst"
                    placeholder="GSTIN"
                    disabled={request || (row && row.gst)}
                    defaultValue={row != null ? row.gst : ""}
                  />
                </div>
              </CCol>
              <CCol xs={12} md={12} lg={6}>
                {isNew &&
                user &&
                user.role == UserType.ADMIN &&
                user.sub_role == UserType.ADMIN ? (
                  <div className="mb-3">
                    <CFormLabel htmlFor="sUserType">User Type</CFormLabel>
                    <CFormSelect
                      aria-label="Select User Type"
                      id="sUserType"
                      required
                      disabled={request}
                    >
                      <option value="User">USER</option>
                      <option value="Admin">ADMIN</option>
                    </CFormSelect>
                    <CFormFeedback invalid>
                      Please select User Type
                    </CFormFeedback>
                  </div>
                ) : (
                  ""
                )}
                {isNew ? (
                  <div className="mb-3">
                    <CFormLabel htmlFor="sUserSubType">
                      User Sub Type
                    </CFormLabel>
                    <CFormSelect
                      aria-label="Select User Sub Type"
                      id="sUserSubType"
                      required
                      disabled={request}
                    >
                      <option value={UserType.USER}>MERCHANT</option>
                      <option value={UserType.SUB_ADMIN}>SUB ADMIN</option>
                      <option value={UserType.ACCOUNTS}>ACCOUNT</option>
                      <option value={UserType.ON_BOARDING}>ON BOARDING</option>
                      <option value={UserType.TECHNICAL}>TECHNICAL</option>
                    </CFormSelect>
                    <CFormFeedback invalid>
                      Please select User Sub Type
                    </CFormFeedback>
                  </div>
                ) : (
                  ""
                )}
                <div className="mb-3">
                  <CFormLabel htmlFor="sType">Charge Type</CFormLabel>
                  <CFormSelect
                    aria-label="Select Charge Type"
                    id="sType"
                    required
                    disabled={request}
                    onChange={(e) => {
                      setChargeType(e.target.value);
                    }}
                    defaultValue={row ? row.commercial_type : ""}
                  >
                    <option value="PERCENTAGE">PERCENTAGE</option>
                    <option value="FIXED">FIXED</option>
                  </CFormSelect>
                  <CFormFeedback invalid>
                    Please select Charge Type
                  </CFormFeedback>
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AddNewUserModal;
