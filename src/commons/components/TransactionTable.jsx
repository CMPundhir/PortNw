import { CCloseButton, CCol, CImage, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle, CRow } from '@coreui/react';
import { faArrowLeft, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { customStyles } from 'src/views/cm_views/custom/cm_table_styles';
import yesbank from "src/assets/images/icons/yesbank.png";
import { EditWebHook } from 'src/views/cm_views/custom/cm_modals';
import { EditCharges } from 'src/views/cm_views/custom/cm_modals';
import { ShowWhiteListIps } from 'src/views/cm_views/custom/cm_modals';
import { EditRoutes } from 'src/views/cm_views/custom/cm_modals';
import VaDialog from 'src/views/cm_views/users/dialogs/VaDialog';
import VaSettingDialog from 'src/views/cm_views/users/dialogs/VaSettingDialog';
import ConfirmationDialog from '../dialogs/ConfirmationDialog';
import { Checkbox } from '@material-ui/core';
import { rupeeIn2Dec } from 'src/utils/RupeeUtil';
import rupee_png from "src/assets/images/icons/rupee.png";
import warning_png from "src/assets/images/icons/warning.png";
import TransactionDataCard from '../cards/TransactionsDataCard';


const PaginateTableCss = {
    rows: {
        style: {
            fontWeight: 'bold',
            fontSize: '13px',
            minHeight: '80px',
            letterSpacing: '0.02em',
            borderRadius: "16px"
        }
    },
    headCells: {
        style: {
            fontWeight: '600',
            textTransform: 'uppercase',
            fontSize: '16px',
            color: "#fff",
            backgroundColor: "#2f9eff",
        },
    },
    cells: {
        style: {
            backgroundColor: "#e6fdfffb",
            backdropFilter: blur("80px"),
        },
    },
};

function getTypeImg(data) {
    if (data && data.service) {
        if (data.service == "PAYOUT") {
            if (data.type == "IMPS" || data.type == "NEFT") {
                return (
                    <CImage
                        className="me-2 mb-1"
                        src={
                            data.type == "IMPS"
                                ? imps_png
                                : data.type == "NEFT"
                                    ? neft_png
                                    : null
                        }
                        rounded
                        width={60}
                        height={20}
                    />
                );
            }
            return (
                <i>
                    <h4 style={{ color: "gray" }}>
                        <b>{data.type}</b>
                    </h4>
                </i>
            );
        } else {
            return (
                <CImage
                    className="me-2 mb-1"
                    src={rupee_png}
                    rounded
                    width={20}
                    height={20}
                />
            );
        }
    }
    return (
        <CImage
            className="me-2 mb-1"
            src={warning_png}
            rounded
            width={20}
            height={20}
        />
    );
}

const TransactionTable = ({
    columns,
    user,
    list,
    setList,
    ExpandedComponent,
    filterFunc,
    progressPending = false,
    totalRows,
    handlePerRowsChange,
    handlePageChange,
    tableStyle = customStyles,
    isPaginateReq = true }) => {

    const [visible, setVisible] = useState(false);
    const [expandData, setExpandData] = useState()
    return (
        <CCol className="ms-3 me-3">
            <DataTable
                columns={columns}
                data={list}
                pagination
                paginationServer={isPaginateReq}
                striped
                customStyles={tableStyle}
                highlightOnHover
                pointerOnHover
                paginationTotalRows={totalRows}
                progressPending={progressPending}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
                selectableRows
                selectableRowsComponent={Checkbox} // Pass the function only
                dense={false}
                onRowClicked={(data, e) => {
                    setVisible(true)
                    setExpandData(data);
                }}
                customStyles={PaginateTableCss}

            />
            <COffcanvas placement="end" visible={visible} onDismiss={() => setVisible(false)}>
                <COffcanvasHeader style={{ backgroundColor: "#1692ff", color: "#fff" }}>
                    <COffcanvasTitle>
                        <FontAwesomeIcon className='me-2' icon={faArrowLeft}
                            onClick={() => setVisible(false)} />
                        {expandData && expandData.bname}
                    </COffcanvasTitle>
                </COffcanvasHeader>
                <COffcanvasBody style={{ backgroundColor: "#d5ebff" }}>
                    <div>
                        <ExpandedComponent data={expandData} />
                        <p className="d-lg-flex justify-content-center align-items-center mt-3"
                            style={{ fontFamily: "monospace", color: "gray" }}>
                            <b>Business Details</b>
                        </p>
                        <TransactionDataCard txt1="Name"
                            txt1Value={expandData && expandData.bname}
                            txt2="Mobile"
                            txt2Value={expandData && expandData.mobile}
                            txt3="Reference"
                            txt3Value={expandData && expandData.ref_number}
                        />
                        <p className="d-lg-flex justify-content-center align-items-center mt-3"
                            style={{ fontFamily: "monospace", color: "gray" }}>
                            <b>Beneficiary Details</b>
                        </p>
                        <TransactionDataCard txt1="Name"
                            txt1Value={expandData && expandData.bene_name}
                            txt2="Account"
                            txt2Value={expandData && expandData.bene_account}
                            txt3="IFSC"
                            txt3Value={expandData && expandData.ifsc}
                        />
                        <p className="d-lg-flex justify-content-center align-items-center mt-3"
                            style={{ fontFamily: "monospace", color: "gray" }}>
                            <b>Transaction Details</b>
                        </p>
                        <TransactionDataCard txt1="Txn ID"
                            txt1Value={expandData && expandData.txn_id}
                            txt2="Amount"
                            txt2Value={
                                <div className="d-flex align-items-center justify-content-between">
                                    <span>
                                        {expandData && rupeeIn2Dec(expandData.amount)} &ensp;
                                    </span>
                                    <span className='ms-2'>
                                        {expandData && getTypeImg(expandData)}
                                    </span>
                                </div>}
                            txt3="Status"
                            txt3Value={expandData && expandData.status}
                        />
                        <p className="d-lg-flex justify-content-center align-items-center mt-3"
                            style={{ fontFamily: "monospace", color: "gray" }}>
                            <b>Charges Details</b>
                        </p>
                        <TransactionDataCard txt1="Name"
                            txt1Value={expandData && rupeeIn2Dec(expandData.charge)}
                            txt2="GST"
                            txt2Value={expandData && rupeeIn2Dec(expandData.gst)}
                            txt3="Wallet"
                            txt3Value={expandData && rupeeIn2Dec(expandData.wallet)}
                        />

                    </div>
                </COffcanvasBody>
            </COffcanvas>
        </CCol>

    );
};

export default TransactionTable;