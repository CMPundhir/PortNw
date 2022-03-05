import React, { useEffect, useMemo, useState } from "react";

import {
  CBadge,
  CButton,
  CCol,
  CRow,
  CFormLabel,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CFormInput,
  CForm,
  CModalHeader,
  CModalTitle,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import wallet_png from "src/assets/images/icons/wallet.png";
import csv_png from "src/assets/images/icons/csv.png";

import { cilSettings } from "@coreui/icons";
import { getPage, getPaginateTable } from "src/views/cm_views/custom/cm_views";
import { loadWalletDialogBtn } from "src/views/cm_views/custom/cm_modals";

import ApiEndpoints from "src/networks/ApiEndpoints";
import { get, useAx } from "src/networks/ApiController";
import { myDate, myDate4 } from "src/utils/DateTimeUtil";
import { CrRqType } from "src/commons/Constants";
import { confirmationDialog } from "../custom/cm_toast";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import { okErrorToast } from "../custom/cm_toast";
import { apiErrorToast } from "../custom/cm_toast";
import { getSearchInput } from "../custom/cm_views";
import { expandableCard } from "../custom/cm_views";
import { getGhostFABtn } from "../custom/cm_views";
import {
  faFileExport,
  faSync,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { getGhost24FAIconBtn } from "../custom/cm_views";
import { ActionOnRequest } from "../custom/cm_modals";
import { GhostFABtn } from "../custom/cm_views";
import { showDatePicker } from "../custom/cm_modals";
import { PortPayLogo } from "../custom/cm_views";
import CommonPage from "src/commons/components/CommonPage";
import PaginateTable from "src/commons/components/PaginateTable";
import { addBenDialogBtn } from "../custom/cm_modals";

const columns = [
  {
    name: "Date & Time",
    selector: (row) => myDate(row.created_at),
  },
  {
    name: "Status",
    selector: (row) => row.status,
    cell: (row) => (
      <CBadge
        color={
          row.status && row.status == "SUCCESS"
            ? "success"
            : row.status == "PENDING"
            ? "warning"
            : "danger"
        }
      >
        {row.status}
      </CBadge>
    ),
  },
  {
    name: "Name",
    selector: (row) => row.bname,
    wrap: true,
  },
  {
    name: "Bank",
    selector: (row) => row.bank,
  },
  {
    name: "Mode",
    selector: (row) => row.mode,
  },
  {
    name: "Remarks",
    selector: (row) => row.remark,
  },
  {
    name: "Ref",
    selector: (row) => row.ref_number,
  },
  {
    name: "Amount",
    selector: (row) => rupeeIn2Dec(row.amount),
  },
  {
    name: "Approved By",
    selector: (row) => row.approvedby,
  },
  {
    name: "Action",
    button: true,
    grow: 0,
    ignoreRowClick: true,
    cell: (row) => (
      <CRow
        xs={{ cols: 4, gutterX: 2 }}
        className="justify-content-start align-items-center "
      >
        <CCol className="align-items-center" style={{ marginRight: 8 }}>
          <ActionOnRequest
            user={currentUser}
            data={row}
            refresh={currentRefetch}
          />
          {/* {getGhost24FAIconBtn(faCheckCircle, "green", (e) => {
            confirmationDialog(
              "Are you sure to Approve Request?",
              `${row.bname} : ${rupeeIn2Dec(row.amount)}`,
              ApiEndpoints.APPROVE_REJECT_REQ,
              {
                api_token: currentUser ? currentUser.api_token : "",
                id: row.id,
                action: "APPROVE",
              },
              (msg) => {
                if (currentRefetch) currentRefetch();
              }
            );
          })} */}
        </CCol>
        <CCol className="align-items-center" style={{ marginLeft: 8 }}>
          {getGhost24FAIconBtn(faTimesCircle, "#cc1d1d", (e) => {
            confirmationDialog(
              "Are you sure to Reject Request?",
              `${row.bname} : ${rupeeIn2Dec(row.amount)}`,
              ApiEndpoints.APPROVE_REJECT_REQ,
              {
                api_token: currentUser ? currentUser.api_token : "",
                id: row.id,
                action: "REJECT",
              },
              (msg) => {
                if (currentRefetch) currentRefetch();
              }
            );
          })}
        </CCol>
      </CRow>
    ),
  },
];

const ExpandedComponent = ({ data }) => {
  if (data) {
    return (
      <CRow className="justify-content-center align-items-center">
        <CCol xs={12} md={6} lg={4}>
          Reference &emsp;&emsp;&emsp;: &emsp;<b>{data && data.ref_number}</b>
          <br />
          Business Name &ensp;: &emsp;<b>{data && data.bname}</b>
          <br />
          Mode &emsp;&emsp;&emsp;&emsp;&emsp;: &emsp;<b>{data && data.mode}</b>
          <br />
        </CCol>
        <CCol xs={12} md={6} lg={4}>
          Approved By &ensp;: &emsp;<b>{data && data.approvedby}</b>
          <br />
          Bank &emsp;&emsp;&emsp;&emsp;&nbsp;: &emsp;<b>{data && data.bank}</b>
          <br />
          Remark &emsp;&emsp;&emsp;: &emsp;<b>{data && data.remark}</b>
          <br />
        </CCol>
        <CCol xs={12} md={6} lg={4}>
          {/* {JSON.stringify(data)} */}
          Transaction ID &ensp;: &emsp;<b>{data && data.txn_id}</b>
          <br />
          Amount &emsp;&emsp;&emsp;&ensp;: &emsp;
          <b>{rupeeIn2Dec(data.amount)}</b>
          <br />
          Status &emsp;&emsp;&emsp;&emsp;&nbsp;: &emsp;
          <b>{data && data.status}</b>
          <br />
        </CCol>
      </CRow>
    );
  } else {
    return <p>No Data</p>;
  }
};

var currentUser;
var currentRefetch;

export const AdminCreditFilter = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [downloadType, setDownloadType] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (downloadType == "bPdf") {
      okErrorToast(
        "PDF Download Under development",
        "This feature will be available soon..."
      );
      event.stopPropagation();
      return;
    }
    get(
      `${ApiEndpoints.GET_ADMIN_CREDITS}?api_token=${
        user ? user.api_token : ""
      }&date=${
        startDate || endDate ? myDate4(startDate) + "_" + myDate4(endDate) : ""
      }&type=FILTER`,
      setRequest,
      (data) => {
        if (data && data.length > 0) {
          if (isDownload) {
            if (downloadType == "bExcel") {
              json2Excel(`Transactions`, data);
            } else if (downloadType == "bPdf") {
              okSuccessToast("Under Development", "Coming soon...");
              //json2Pdf(`Transactions_${myDate4(value)}`, data);
            } else {
              json2Csv(`Transactions`, data);
            }
          } else {
            setList(data, data.length);
          }
          setVisible(false);
        } else {
          okErrorToast("No Transaction Data available.");
        }
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };
  return (
    <>
      <GhostFABtn
        txt=" Export"
        img={faFileExport}
        onClick={() => setVisible(!visible)}
      />
      <CModal
        size="lg"
        //className="modal_wid"
        alignment="center"
        visible={visible}
        onDismiss={() => {
          if (request) {
            Swal.fire(
              "Warning!!",
              "Please wait request is under progress",
              "warning"
            );
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>Admin Credit Filters</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <CFormLabel htmlFor="sStartDate">Select Start Date</CFormLabel>
              <CInputGroup className="flex-sm-wrap" size="sm">
                <CFormInput
                  id="sStartDate"
                  placeholder="YYYY-MM-DD"
                  aria-label="Pick Date"
                  aria-describedby="addon-wrapping"
                  onChange={(e) => {}}
                  value={myDate4(startDate)}
                  style={{ borderRightWidth: 0 }}
                />
                {showDatePicker((startDate) => {
                  setStartDate(startDate);
                })}
              </CInputGroup>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="sEndDate">Select End Date</CFormLabel>
              <CInputGroup className="flex-sm-wrap" size="sm">
                <CFormInput
                  id="sEndDate"
                  placeholder="YYYY-MM-DD"
                  aria-label="Pick Date"
                  aria-describedby="addon-wrapping"
                  onChange={(e) => {}}
                  value={myDate4(endDate)}
                  style={{ borderRightWidth: 0 }}
                />
                {showDatePicker((endDate) => {
                  setEndDate(endDate);
                })}
              </CInputGroup>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100%" }}
          >
            <PortPayLogo />
            <div>
              <CButton
                variant="ghost"
                color="secondary"
                onClick={() => setVisible(false)}
                disabled={request}
              >
                Close
              </CButton>
              <span className="m-4">
                <CButton
                  id="bCSV"
                  form="MyForm"
                  className="m-2"
                  variant="outline"
                  color="primary"
                  type="submit"
                  disabled={request}
                  onClick={() => {
                    setDownloadType("bCSV");
                  }}
                >
                  {request && downloadType == "bCSV" ? (
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                  ) : (
                    ""
                  )}
                  Download CSV
                </CButton>
                <CButton
                  id="bExcel"
                  form="MyForm"
                  className="m-2"
                  variant="outline"
                  color="primary"
                  type="submit"
                  disabled={request}
                  onClick={() => {
                    setDownloadType("bExcel");
                  }}
                >
                  {request && downloadType == "bExcel" ? (
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                  ) : (
                    ""
                  )}
                  Download EXCEL
                </CButton>
                <CButton
                  id="bPdf"
                  form="MyForm"
                  className="m-2"
                  variant="outline"
                  color="primary"
                  type="submit"
                  disabled={request}
                  onClick={() => {
                    setDownloadType("bPdf");
                  }}
                >
                  {request && downloadType == "bPdf" ? (
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                  ) : (
                    ""
                  )}
                  Download PDF
                </CButton>
              </span>
            </div>
          </div>
        </CModalFooter>
      </CModal>
    </>
  );
};

let lastPage = 1;
const AdminCreditReqListView = ({ title, user, type, isAdminCr = false }) => {
  currentUser = user;
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const getUrl = (page, per_page) => {
    return `${
      isAdminCr
        ? ApiEndpoints.GET_ADMIN_CREDITS
        : ApiEndpoints.GET_CREDITREQ_ADMIN
    }?api_token=${
      user ? user.api_token : ""
    }&page=${page}&per_page=${per_page}&type=${type}`;
  };

  const [{ data, loading, error }, refetch] = useAx(getUrl(1, perPage));
  currentRefetch = refetch;
  useEffect(() => {
    if (data && data.data) {
      setList(data.data);
      setTotalRows(data.total);
    }
    return () => {};
  }, [data]);
  if (error) {
    apiErrorToast(error);
  }

  const handlePageChange = (page) => {
    //alert("Page: " + page);
    lastPage = page;
    currentRefetch(getUrl(page, perPage));
  };

  const handlePerRowsChange = (newPerPage, page) => {
    lastPage = page;
    setPerPage(newPerPage);
    currentRefetch(getUrl(page, newPerPage));
  };
  const filterFunc = (item, SearchInput = "") => {
    return (
      (item.ref_no &&
        item.ref_no.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.bank &&
        item.bank.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.mode_payment &&
        item.mode_payment.toLowerCase().includes(SearchInput.toLowerCase()))
    );
  };

  const filColumns = useMemo(() => {
    if (type == CrRqType.PENDING) {
      return columns.filter((value) => {
        return value.name != "Remarks" && value.name != "Approved By";
      });
    } else {
      return columns.filter((value) => {
        return value.name != "Action";
      });
    }
  }, [type]);

  return (
    <>
      <CommonPage
        title={title}
        img={wallet_png}
        actions={[
          getSearchInput(data ? data.data : [], setList, filterFunc),
          getGhostFABtn("Refresh", faSync, (e) =>
            refetch(getUrl(lastPage, perPage))
          ),
          isAdminCr ? <AdminCreditFilter user={user} /> : "",
        ]}
      >
        <PaginateTable
          columns={filColumns}
          list={list}
          setList={setList}
          ExpandedComponent={ExpandedComponent}
          filterFunc={filterFunc}
          progressPending={loading}
          totalRows={totalRows}
          handlePerRowsChange={handlePerRowsChange}
          handlePageChange={handlePageChange}
        />
      </CommonPage>
    </>
  );
};

export default AdminCreditReqListView;
