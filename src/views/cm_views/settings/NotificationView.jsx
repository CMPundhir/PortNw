import React, { useEffect, useState } from "react";
import {
  CCol,
  CRow,
  CButton,
  CFormLabel,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormFeedback,
  CForm,
  CImage,
} from "@coreui/react";
import {
  getPage,
  getPaginateTable,
  getSearchInput,
  expandableCard,
  getGhostFABtn,
  CMPage,
  GhostFABtn,
  Ghost24FAIconBtn,
  SubmitButton,
} from "../custom/cm_views";
import { useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { myDate } from "src/utils/DateTimeUtil";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import {
  faEdit,
  faPlusCircle,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { EditBankCommercials } from "../custom/cm_modals";
import logo_png from "src/assets/images/logo.png";
import { SubmitFormBtn } from "../custom/cm_views";
import CommonPage from "src/commons/components/CommonPage";
import SearchInput from "src/commons/inputs/SearchInput";
import { SmOutlineButton } from "../custom/cm_views";
import PaginateTable from "src/commons/components/PaginateTable";

let currentUser, currentRefetch;
function getStatusColor(status) {
  if (status == "ACTIVE") {
    return "green";
  } else {
    return "red";
  }
}

const columns = [
  {
    name: "Time",
    selector: (row) => myDate(row.created_at) + "\n" + myDate(row.updated_at),
    wrap: true,
  },
  {
    name: "Status",
    selector: (row) => rupeeIn2Dec(row.upi_slab1),
    grow: 0,
    center: true,
    cell: (row) => (
      <span style={{ color: getStatusColor(row.status) }}>{row.status}</span>
    ),
  },
  {
    name: "Title",
    selector: (row) => "Notification to ALL",
    grow: 1,
    wrap: true,
  },
  {
    name: "Description",
    selector: (row) => "I am a Notification Description",
    wrap: true,
    grow: 3,
    compact: false,
  },
  {
    name: "  Edit",
    button: true,
    grow: 0,
    compact: true,
    cell: (row) => (
      <NotificationDialog
        user={currentUser}
        data={row}
        refetch={currentRefetch}
      />
    ),
  },
];

const NotificationDialog = ({ user, data, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(false);
    return () => {};
  }, [visible]);

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
      id: data ? data.id : "",
      accNumber: form.eAccNo.value,
      type: data ? "UPDATE" : "ADD",
    };
    postJsonData(
      ApiEndpoints.RISK_ACCOUNTS,
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
  return (
    <>
      {!data ? (
        <GhostFABtn
          txt="Add New"
          img={faPlusCircle}
          onClick={() => setVisible(true)}
          hide={data}
        />
      ) : (
        <Ghost24FAIconBtn
          img={faEdit}
          color="transparent"
          onClick={() => setVisible(true)}
        />
      )}
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
            <h4>{data ? `Edit Account Number` : `Add Account Number`}</h4>
            <br />
            <div className="mb-3">
              <CFormLabel htmlFor="eAccNo"></CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  name="acc_no"
                  type="text"
                  id="eAccNo"
                  required
                  placeholder="Enter Account Number"
                  disabled={request}
                  defaultValue={data ? data.accNumber : ""}
                  onChange={() => {
                    if (validated) setValidated(false);
                  }}
                />
                <CFormFeedback invalid>Account Number Required</CFormFeedback>
              </CInputGroup>
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

const ChangeStatusDialog = ({ user, data, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(false);
    return () => {};
  }, [visible]);

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
      id: data ? data.id : "",
      accNumber: form.eAccNo.value,
      type: data ? "UPDATE" : "ADD",
    };
    postJsonData(
      ApiEndpoints.RISK_ACCOUNTS,
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
  return (
    <>
      {!data ? (
        <GhostFABtn
          txt="Add New"
          img={faPlusCircle}
          onClick={() => setVisible(true)}
          hide={data}
        />
      ) : (
        <Ghost24FAIconBtn
          img={faEdit}
          color="transparent"
          onClick={() => setVisible(true)}
        />
      )}
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
            <h4>{data ? `Edit Account Number` : `Add Account Number`}</h4>
            <br />
            <div className="mb-3">
              <CFormLabel htmlFor="eAccNo"></CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  name="acc_no"
                  type="text"
                  id="eAccNo"
                  required
                  placeholder="Enter Account Number"
                  disabled={request}
                  defaultValue={data ? data.accNumber : ""}
                  onChange={() => {
                    if (validated) setValidated(false);
                  }}
                />
                <CFormFeedback invalid>Account Number Required</CFormFeedback>
              </CInputGroup>
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
          <SubmitButton request={request} />
        </CModalFooter>
      </CModal>
    </>
  );
};

let lastPage = 1;
const NotificationView = ({ user }) => {
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(30);
  currentUser = user;
  const getUrl = (page, per_page) => {
    return `${ApiEndpoints.GET_BANK_COMMERCIALS}?api_token=${
      user ? user.api_token : "NA"
    }&page=${page}&per_page=${per_page}`;
  };

  const [{ data, loading, error }, refetch] = useAx(getUrl(lastPage, perPage));
  currentRefetch = refetch;
  useEffect(() => {
    if (data) {
      setTotalRows(data.length);
      setList(data);
    }
    return () => {};
  }, [data]);

  const handlePageChange = (page) => {
    lastPage = page;
    refetch(getUrl(page, perPage));
  };

  const handlePerRowsChange = (newPerPage, page) => {
    lastPage = page;
    setPerPage(newPerPage);
    refetch(getUrl(page, newPerPage));
  };

  const ExpandedComponent = ({ data }) =>
    expandableCard(
      <>
        <CRow
          xs={{ cols: "auto" }}
          className="justify-content-start align-items-top"
          style={{ fontFamily: "monospace" }}
        >
          <CCol xs={12} md={6} lg={3}>
            <p
              className="d-lg-flex justify-content-center align-items-center mt-2"
              style={{ fontFamily: "monospace", color: "gray" }}
            >
              <b>Business Details</b>
            </p>
            <div className="d-lg-flex justify-content-center align-items-center">
              <span>
                Name &emsp;&emsp;&ensp;: &emsp; <b>{data.bname}</b>
                <br />
                Mobile &emsp;&emsp;: &emsp;<b>{data.mobile}</b>
                <br />
                Reference &ensp;: &emsp;<b>{data.ref_number}</b>
                <br />
              </span>
            </div>
          </CCol>
          <CCol xs={12} md={6} lg={3}>
            <p
              className="d-lg-flex justify-content-center align-items-center mt-2"
              style={{ fontFamily: "monospace", color: "gray" }}
            >
              <b>Beneficiary Details</b>
            </p>
            <div className="d-lg-flex justify-content-center align-items-center">
              <span>
                Name &emsp;&emsp;&nbsp;: &emsp;
                <b>{data.bene_name}</b>
                <br />
                Account &emsp;: &emsp;<b>{data.bene_account}</b>
                <br />
                IFSC &emsp;&emsp;&ensp;&nbsp;: &emsp;
                <b>{data.ifsc}</b>
                <br />
              </span>
            </div>
          </CCol>
          <CCol xs={12} md={6} lg={3}>
            <p
              className="d-lg-flex justify-content-center align-items-center mt-2"
              style={{ fontFamily: "monospace", color: "gray" }}
            >
              <b>Transaction Details</b>
            </p>
            <div className="d-lg-flex justify-content-center align-items-center">
              <span>
                Txn ID &nbsp;&emsp;: &emsp;
                <b>{data.txn_id}</b>
                <br />
                Amount &ensp;: &emsp;
                <b>{rupeeIn2Dec(data.amount)}</b> &ensp;{getTypeImg(data)}
                <br />
                Status &emsp;&nbsp;: &emsp;<b>{data.status}</b>
                <br />
              </span>
            </div>
          </CCol>
          <CCol xs={12} md={6} lg={3}>
            <p
              className="d-lg-flex justify-content-center align-items-center mt-2"
              style={{ fontFamily: "monospace", color: "gray" }}
            >
              <b>Charges Details</b>
            </p>
            <div className="d-lg-flex justify-content-center align-items-center">
              <span>
                Charge &emsp;&ensp;: &emsp;
                <b>{rupeeIn2Dec(data.charge)}</b>
                <br />
                GST &emsp;&emsp;&ensp;&nbsp;: &emsp;
                <b>{rupeeIn2Dec(data.gst)}</b>
                <br />
                Wallet &emsp;&emsp;: &emsp;
                <b>{rupeeIn2Dec(data.wallet)}</b>
                <br />
              </span>
            </div>
          </CCol>
        </CRow>
      </>
    );

  const filterFunc = (item, SearchInput = "") => {
    return (
      (item.bank &&
        item.bank.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.route_code &&
        item.route_code.toLowerCase().includes(SearchInput.toLowerCase()))
    );
  };
  if (error) {
    alert(error);
  }
  return (
    <CommonPage
      title="Notifications"
      actions={[
        <SearchInput
          list={data ? data.data : []}
          setList={setList}
          filterFunc={filterFunc}
        />,
        <SmOutlineButton
          txt="Refresh"
          variant="outline"
          faImg={faSync}
          size="md"
          onClick={refetch}
        />,
        <NotificationDialog user={user} refetch={refetch} />,
      ]}
    >
      <PaginateTable
        columns={columns}
        list={list}
        setList={setList}
        ExpandedComponent="false"
        filterFunc={filterFunc}
        loading={loading}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
      />
    </CommonPage>
  );
};

export default NotificationView;
