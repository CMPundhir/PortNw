import React, { useEffect, useState } from "react";
import { CCol, CRow, CImage } from "@coreui/react";
import rupee_tnx_png from "src/assets/images/icons/rupee_txn.png";
import neft_png from "src/assets/images/icons/neft_1.png";
import imps_png from "src/assets/images/icons/imps.png";
import rupee_png from "src/assets/images/icons/rupee.png";
import warning_png from "src/assets/images/icons/warning.png";
import {
  getPage,
  getPaginateTable,
  getSearchInput,
  expandableCard,
  getGhostFABtn,
  SmOutlineButton,
} from "./custom/cm_views";
import { postJsonData, useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { myDate } from "src/utils/DateTimeUtil";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import { showTxnCSVDialog, showTxnFiltersDialog } from "./custom/cm_modals";
import {
  faBackward,
  faCheckCircle,
  faRecycle,
  faSync,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { UserType } from "src/commons/Constants";
import { okSuccessToast } from "./custom/cm_toast";
import { okErrorToast } from "./custom/cm_toast";
import { CheckTxnStatus } from "./custom/cm_modals";
import { apiErrorToast } from "./custom/cm_toast";
import { confirmationDialog } from "./custom/cm_toast";
import { customStyles } from "./custom/cm_table_styles";
import { TxnFiltersHeaders } from "./custom/cm_views";
import { CMTable } from "./custom/cm_views";
import CommonPage from "src/commons/components/CommonPage";
import PaginateTable from "src/commons/components/PaginateTable";
import TransactionTable from "src/commons/components/TransactionTable";
import TransactionDataCard from "src/commons/cards/TransactionsDataCard";
import ConfirmationDialog from "src/commons/dialogs/ConfirmationDialog";

let isFetchError = false;
let lastPage = 1;
let paginateServer = true;
let txnId = "",
  clientId = "",
  rrn = "";
function getStatusColor(status) {
  if (status == "SUCCESS") {
    return "green";
  } else if (status == "PENDING") {
    return "#e8d60e";
  } else {
    return "red";
  }
}
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
const columns = [
  {
    name: "Time",
    selector: (row) => myDate(row.created_at) + "\n" + myDate(row.updated_at),
    wrap: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    grow: 0,
    center: true,
    cell: (row) => (
      <span style={{ color: getStatusColor(row.status) }}>{row.status}</span>
    ),
  },
  {
    name: "User",
    selector: (row) => row.bname,
  },
  {
    name: "Route",
    selector: (row) => row.route,
  },
  {
    name: "Client ID",
    selector: (row) => row.client_id,
    wrap: true,
  },
  {
    name: "TXN ID",
    selector: (row) => row.txn_id,
    wrap: true,
  },
  {
    name: "Ref No",
    selector: (row) => row.ref_number,
    wrap: true,
  },
  {
    name: "Amount",
    selector: (row) => rupeeIn2Dec(row.amount),
  },
  {
    name: "Wallet",
    selector: (row) =>
      row.wallet ? "\u20b9 " + parseFloat(row.wallet).toFixed(2) : "",
  },
  // {
  //   name: "Action",
  //   button: true,
  //   cell: (row) => (
  //     <CButton
  //       className="m-1"
  //       color="danger"
  //       variant="ghost"
  //       onClick={(e) => {
  //         alert("Delete Item : " + row.id + ". " + row.name);
  //       }}
  //     >
  //       <CIcon icon={cilSettings} />
  //     </CButton>
  //   ),
  // },
];

let currentUser;
const getUrl = (page, per_page) => {
  return `${ApiEndpoints.GET_TRANSACTIONS}?api_token=${
    currentUser ? currentUser.api_token : ""
  }&page=${page}&per_page=${per_page}&txn_id=${txnId ? txnId : ""}&client_id=${
    clientId ? clientId : ""
  }&rrn=${rrn ? rrn : ""}`;
};

const TransactionHisView = ({ user }) => {
  currentUser = user;
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [{ data, loading, error }, refetch] = useAx(getUrl(1, 10));

  useEffect(() => {
    if (data && data.data) {
      setUiData(data.data, data.total);
    }
    return () => {};
  }, [data]);

  useEffect(() => {
    if (error) {
      isFetchError = true;
      apiErrorToast(error);
    }
    return () => {};
  }, [error]);

  const setUiData = (data, total) => {
    setTotalRows(total);
    setList(data);
    console.log("setting ui data : " + data.total);
  };
  const handlePageChange = (page) => {
    lastPage = page;
    if (paginateServer) {
      refetch(getUrl(page, perPage));
    }
  };

  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
    lastPage = page;
    if (paginateServer) refetch(getUrl(page, newPerPage));
  };

  // const ExpandedComponent = ({ data }) =>
  //   expandableCard(
  //     <>
  //       <CRow
  //         xs={{ cols: "auto" }}
  //         className="justify-content-start align-items-top"
  //         style={{ fontFamily: "monospace" }}
  //       >
  //         <CCol xs={12} md={6} lg={3}>
  //           <p className="d-lg-flex justify-content-center align-items-center mt-2" style={{ fontFamily: "monospace", color: "gray" }}><b>Business Details</b></p>
  //           <div className="d-lg-flex justify-content-center align-items-center">
  //             <span>
  //               Name &emsp;&emsp;&ensp;: &emsp; <b>{data.bname}</b>
  //               <br />
  //               Mobile &emsp;&emsp;: &emsp;<b>{data.mobile}</b>
  //               <br />
  //               Reference &ensp;: &emsp;<b>{data.ref_number}</b>
  //               <br />
  //             </span>
  //           </div>

  //         </CCol>
  //         <CCol xs={12} md={6} lg={3} >
  //           <p className="d-lg-flex justify-content-center align-items-center mt-2" style={{ fontFamily: "monospace", color: "gray" }}><b>Beneficiary Details</b></p>
  //           <div className="d-lg-flex justify-content-center align-items-center">
  //             <span>
  //               Name &emsp;&emsp;&nbsp;: &emsp;
  //               <b>{data.bene_name}</b>
  //               <br />
  //               Account &emsp;: &emsp;<b>{data.bene_account}</b>
  //               <br />
  //               IFSC &emsp;&emsp;&ensp;&nbsp;: &emsp;
  //               <b>{data.ifsc}</b>
  //               <br />
  //             </span>
  //           </div>
  //         </CCol>
  //         <CCol xs={12} md={6} lg={3}>
  //           <p className="d-lg-flex justify-content-center align-items-center mt-2" style={{ fontFamily: "monospace", color: "gray" }}><b>Transaction Details</b></p>
  //           <div className="d-lg-flex justify-content-center align-items-center">
  //             <span>
  //               Txn ID &nbsp;&emsp;: &emsp;
  //               <b>{data.txn_id}</b>
  //               <br />
  //               Amount &ensp;: &emsp;
  //               <b>{rupeeIn2Dec(data.amount)}</b>  &ensp;{getTypeImg(data)}
  //               <br />
  //               Status &emsp;&nbsp;: &emsp;<b>{data.status}</b>
  //               <br />

  //             </span>
  //           </div>
  //         </CCol>
  //         <CCol xs={12} md={6} lg={3}>
  //           <p className="d-lg-flex justify-content-center align-items-center mt-2" style={{ fontFamily: "monospace", color: "gray" }}><b>Charges Details</b></p>
  //           <div className="d-lg-flex justify-content-center align-items-center">
  //             <span>
  //               Charge &emsp;&ensp;: &emsp;
  //               <b>{rupeeIn2Dec(data.charge)}</b>
  //               <br />
  //               GST &emsp;&emsp;&ensp;&nbsp;: &emsp;
  //               <b>{rupeeIn2Dec(data.gst)}</b>
  //               <br />
  //               Wallet &emsp;&emsp;: &emsp;
  //               <b>{rupeeIn2Dec(data.wallet)}</b>
  //               <br />
  //             </span>
  //           </div>
  //         </CCol>
  //       </CRow>
  //       {user.role === UserType.ADMIN || user.role === UserType.SUB_ADMIN ?
  //         (<CRow className="mt-4 mb-4 me-2 ms-0">
  //           {
  //             data && data.status != "A REFUND" ? <div className="d-lg-flex justify-content-start align-items-center" style={{ marginTop: 10 }}>
  //               {/* <span style={{fontFamily: "monospace", color: "gray"}}><b>ACTIONS</b> &emsp;</span> */}
  //               {data && data.status != "SUCCESS" ? <SmOutlineButton txt="Success" color="success" faImg={faCheckCircle} onClick={() => {
  //                 confirmationDialog(
  //                   "Do you want to Success?",
  //                   `Name: ${data.bene_name},\nAmount: ${rupeeIn2Dec(data.amount)},\nTxn ID: ${data.txn_id}`,
  //                   ApiEndpoints.SUCCESS_TXN,
  //                   { api_token: user ? user.api_token : "", id: data.id },
  //                   () => { refetch(); }
  //                 );
  //               }} /> : ""}
  //               {data && (data.status == "REFUND" || data.status == "REFUNDED") ? <SmOutlineButton txt="Rollback" color="danger" faImg={faBackward} onClick={() => {
  //                 confirmationDialog(
  //                   "Do you want to Rollback?",
  //                   `Name: ${data.bene_name},\nAmount: ${rupeeIn2Dec(data.amount)},\nTxn ID: ${data.txn_id}`,
  //                   ApiEndpoints.ROLLBACK_TXN,
  //                   { api_token: user ? user.api_token : "", id: data.id },
  //                   () => { refetch(); }
  //                 );
  //               }} /> : ""}
  //               {data && (data.status != "REFUND" && data.status != "REFUNDED" && data.status != "A REFUND") ? <SmOutlineButton txt="&nbsp;Refund" color="warning" faImg={faRecycle} onClick={() => {
  //                 confirmationDialog(
  //                   "Do you want to Refund?",
  //                   `Name: ${data.bene_name},\nAmount: ${rupeeIn2Dec(data.amount)},\nTxn ID: ${data.txn_id}`,
  //                   ApiEndpoints.REFUND_TXN,
  //                   { api_token: user ? user.api_token : "", id: data.id },
  //                   () => { refetch(); }
  //                 );
  //               }} /> : ""}
  //               <CheckTxnStatus user={user} data={data} />
  //               {user && user.role == UserType.ADMIN ? <SmOutlineButton txt="&nbsp; Check API Response &nbsp;" color="primary" faImg={faUniversity} onClick={() => {
  //                 okSuccessToast("Response", JSON.stringify(data.api_response));
  //               }} /> : ""}
  //             </div>
  //               : ""}

  //         </CRow>)
  //         : ""}
  //     </>
  //   );

  const ExpandedComponent = ({ data }) => {
    if (data) {
      return (
        <div>
          <p
            className="d-lg-flex justify-content-center align-items-center mt-3"
            style={{ fontFamily: "monospace", color: "gray" }}
          >
            <b>Business Details</b>
          </p>
          <TransactionDataCard
            txt1="Name"
            txt1Value={data && data.bname}
            txt2="Mobile"
            txt2Value={data && data.mobile}
            txt3="Reference"
            txt3Value={data && data.ref_number}
          />
          <p
            className="d-lg-flex justify-content-center align-items-center mt-3"
            style={{ fontFamily: "monospace", color: "gray" }}
          >
            <b>Beneficiary Details</b>
          </p>
          <TransactionDataCard
            txt1="Name"
            txt1Value={data && data.bene_name}
            txt2="Account"
            txt2Value={data && data.bene_account}
            txt3="IFSC"
            txt3Value={data && data.ifsc}
          />
          <p
            className="d-lg-flex justify-content-center align-items-center mt-3"
            style={{ fontFamily: "monospace", color: "gray" }}
          >
            <b>Transaction Details</b>
          </p>
          <TransactionDataCard
            txt1="Txn ID"
            txt1Value={data && data.txn_id}
            txt2="Amount"
            txt2Value={
              <div className="d-flex align-items-center justify-content-between">
                <span>{data && rupeeIn2Dec(data.amount)} &ensp;</span>
                <span className="ms-2">{data && getTypeImg(data)}</span>
              </div>
            }
            txt3="Status"
            txt3Value={data && data.status}
          />
          <p
            className="d-lg-flex justify-content-center align-items-center mt-3"
            style={{ fontFamily: "monospace", color: "gray" }}
          >
            <b>Charges Details</b>
          </p>
          <TransactionDataCard
            txt1="Name"
            txt1Value={data && rupeeIn2Dec(data.charge)}
            txt2="GST"
            txt2Value={data && rupeeIn2Dec(data.gst)}
            txt3="Wallet"
            txt3Value={data && rupeeIn2Dec(data.wallet)}
          />
          <div
            hidden={
              !(
                user.role === UserType.ADMIN || user.role === UserType.SUB_ADMIN
              ) || !(data && data.status != "A REFUND")
            }
          >
            <CRow className="mt-4 text-center" xs={{ cols: "auto" }}>
              <CCol hidden={!(data && data.status != "SUCCESS")} xs={6}>
                <SmOutlineButton
                  txt="Success"
                  color="success"
                  faImg={faCheckCircle}
                  onClick={() => {
                    confirmationDialog(
                      "Do you want to Success?",
                      `Name: ${data.bene_name},\nAmount: ${rupeeIn2Dec(
                        data.amount
                      )},\nTxn ID: ${data.txn_id}`,
                      ApiEndpoints.SUCCESS_TXN,
                      { api_token: user ? user.api_token : "", id: data.id },
                      () => {
                        refetch();
                      }
                    );
                  }}
                />
              </CCol>
              <CCol
                hidden={
                  !(
                    data &&
                    (data.status == "REFUND" || data.status == "REFUNDED")
                  )
                }
                xs={6}
              >
                <SmOutlineButton
                  txt="Rollback"
                  color="danger"
                  faImg={faBackward}
                  onClick={() => {
                    confirmationDialog(
                      "Do you want to Rollback?",
                      `Name: ${data.bene_name},\nAmount: ${rupeeIn2Dec(
                        data.amount
                      )},\nTxn ID: ${data.txn_id}`,
                      ApiEndpoints.ROLLBACK_TXN,
                      { api_token: user ? user.api_token : "", id: data.id },
                      () => {
                        refetch();
                      }
                    );
                  }}
                />
              </CCol>
              <CCol
                hidden={
                  !(
                    data &&
                    data.status != "REFUND" &&
                    data.status != "REFUNDED" &&
                    data.status != "A REFUND"
                  )
                }
                xs={6}
              >
                <SmOutlineButton
                  txt="&nbsp;Refund"
                  color="warning"
                  faImg={faRecycle}
                  onClick={() => {
                    confirmationDialog(
                      "Do you want to Refund?",
                      `Name: ${data.bene_name},\nAmount: ${rupeeIn2Dec(
                        data.amount
                      )},\nTxn ID: ${data.txn_id}`,
                      ApiEndpoints.REFUND_TXN,
                      { api_token: user ? user.api_token : "", id: data.id },
                      () => {
                        refetch();
                      }
                    );
                  }}
                />
              </CCol>
              <CCol xs={6}>
                <CheckTxnStatus user={user} data={data} />
              </CCol>
              <CCol xs={12} hidden={!(user && user.role == UserType.ADMIN)}>
                <SmOutlineButton
                  txt="&nbsp; Check API Response &nbsp;"
                  color="primary"
                  faImg={faUniversity}
                  onClick={() => {
                    okSuccessToast(
                      "Response",
                      JSON.stringify(data.api_response)
                    );
                  }}
                />
              </CCol>
            </CRow>
          </div>
        </div>
      );
    } else {
      return <p>No Data</p>;
    }
  };

  const filterFunc = (item, SearchInput = "") => {
    return (
      (item.bene_name &&
        item.bene_name.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.bene_account &&
        item.bene_account.toLowerCase().includes(SearchInput.toLowerCase()))
    );
  };
  return (
    <>
      <CommonPage
        title="Transactions"
        img={rupee_tnx_png}
        actions={[
          <TxnFiltersHeaders
            filterFunc={(txnId1, clientId1, rrn1) => {
              txnId = txnId1;
              clientId = clientId1;
              rrn = rrn1;
              refetch(getUrl(lastPage, perPage));
            }}
          />,
          getGhostFABtn("Refresh", faSync, (e) => {
            paginateServer = true;
            txnId = "";
            clientId = "";
            refetch(getUrl(lastPage, perPage));
          }),
          showTxnFiltersDialog(
            user,
            (data, total) => {
              paginateServer = false;
              setUiData(data, total);
            },
            false,
            error
          ),
          showTxnFiltersDialog(
            user,
            (data, total) => {
              paginateServer = false;
              setUiData(data, total);
            },
            true,
            error
          ),
        ]}
      >
        <PaginateTable
          columns={columns}
          list={list}
          setList={setList}
          ExpandedComponent={ExpandedComponent}
          filterFunc={filterFunc}
          totalRows={totalRows}
          handlePerRowsChange={handlePerRowsChange}
          handlePageChange={handlePageChange}
          customStyles={customStyles}
          paginateServer={paginateServer}
          progressPending={loading}
        />
      </CommonPage>
    </>
  );
};

export default TransactionHisView;
