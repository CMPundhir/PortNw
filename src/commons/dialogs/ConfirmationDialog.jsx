import React, { useState } from 'react';
import { CModal, CModalBody, CModalFooter } from "@coreui/react";
import { SmOutlineButton } from "src/views/cm_views/custom/cm_views";
import DialogButton from '../buttons/DialogButton';
import { postJsonData } from 'src/networks/ApiController';
import { apiErrorToast, okSuccessToast } from 'src/views/cm_views/custom/cm_toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ConfirmationDialog = ({ user, btnTxt, btnFaIcon,
    btnColor = "dark", title = "", message = "",
    endpoint, data, refetch }) => {
    const [visible, setVisible] = useState(false);
    const [request, setRequest] = useState(false);

    const onClick = () => {
        postJsonData(endpoint, data, setRequest, data => {
            okSuccessToast("Success", JSON.stringify(data));
            setVisible(false);
            if (refetch) refetch();
        }, error => {
            apiErrorToast(error);
        });
    }

    return <>
        <SmOutlineButton
            txt={btnTxt}
            color={btnColor}
            faImg={btnFaIcon}
            onClick={() => setVisible(!visible)} />
        <CModal
            className="modal_wid"
            alignment="center"
            visible={visible}
            onDismiss={() => {
                if (request) {
                    alert("Please wait request is under progress");
                }
            }}
            scrollable>
            <CModalBody className='mt-2 mb-4 p-4 text-center'>
                <FontAwesomeIcon size="4x" icon={faInfoCircle} color="primary" className="me-1" />
                <h4 className='m-4'>{title}</h4>
                <h6>{message}</h6>
            </CModalBody>
            <CModalFooter>
                <DialogButton
                    txt="Confirm"
                    request={request}
                    setVisible={setVisible}
                    onClick={onClick} />
            </CModalFooter>
        </CModal>
    </>;
};

export default ConfirmationDialog;