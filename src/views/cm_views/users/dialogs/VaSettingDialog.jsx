import React, {useState, useEffect} from 'react';
import { CButton, CFormLabel, CInputGroup, CModal, CModalBody, CModalFooter, CFormSelect, CFormFeedback, CForm } from "@coreui/react";
import { SmOutlineButton, SubmitFormBtn } from "../../custom/cm_views";
import { faLink, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ApiEndpoints from 'src/networks/ApiEndpoints';
import { postJsonData } from 'src/networks/ApiController';
import { okSuccessToast } from '../../custom/cm_toast';
import { apiErrorToast } from '../../custom/cm_toast';

const VaSettingDialog = ({user, data, refetch,}) => {
    const [visible, setVisible] = useState(false);
    const [request, setRequest] = useState(false);
    const [validated, setValidated] = useState(false);
  
    useEffect(() => {
      setValidated(false);
      return () => { }
    }, [visible])
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
        return;
      }
      const dt = {
        api_token: user ? user.api_token : "",
        userId: data ? data.id : "",
        type: form.sBank.value,
      };
      postJsonData(
        ApiEndpoints.SHOW_VIRTUAL_ACCOUNTS,
        dt,
        setRequest,
        (data) => {
          setVisible(false);
          okSuccessToast("Success", data);
          refetch();
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    };
    return <>
      <SmOutlineButton txt="VA Setting" color="dark" faImg={faUserCircle} onClick={()=>setVisible(!visible)}/>
      <CModal
        className="modal_wid"
        alignment="center"
        visible={visible}
        onDismiss={() => {
          if (request) {
            alert("Please wait request is under progress");
          }
        }}
        scrollable
      >
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <h4>Virtual Account Visibility</h4>
            <br/>
            <div className="mb-3">
                <CFormLabel htmlFor="sBank"></CFormLabel>
                <CInputGroup className="mb-3">
                    <CFormSelect
                        aria-label="Select Bank"
                        id="sBank"
                        required
                        disabled={request}
                        placeholder="Select Bank"
                    >
                        <option value="none">None</option>
                        <option value="va_ybl">Yes Bank Ltd.</option>
                        <option value="va_rbl">Ratnakar Bank Ltd.</option>
                        <option value="all">ALL</option>
                    </CFormSelect>
                    <CFormFeedback invalid>
                        Please Select A Bank
                    </CFormFeedback>
              </CInputGroup>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
            <SubmitFormBtn request={request} setVisible={setVisible}/>
        </CModalFooter>
      </CModal>
    </>;
}


export default VaSettingDialog;