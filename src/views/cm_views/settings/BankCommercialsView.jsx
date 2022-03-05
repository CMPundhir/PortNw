import React, { useEffect, useState } from "react";
import { CCol, CRow, CImage } from "@coreui/react";
import { CMPage } from "../custom/cm_views";
import {
  getPage,
  getPaginateTable,
  getSearchInput,
  expandableCard,
  getGhostFABtn,
} from "../custom/cm_views";
import { useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { myDate } from "src/utils/DateTimeUtil";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import {
  faBackward,
  faCheckCircle,
  faEdit,
  faRecycle,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { UserType } from "src/commons/Constants";
import { CMIconButton } from "../custom/cm_views";
import { showTxnCSVDialog } from "../custom/cm_modals";
import { EditBankCommercials } from "../custom/cm_modals";
import CommonPage from "src/commons/components/CommonPage";
import SearchInput from "src/commons/inputs/SearchInput";
import { SmOutlineButton } from "../custom/cm_views";
import PaginateTable from "src/commons/components/PaginateTable";
//import { getPaginateTable, CMIconButton } from '../custom/cm_views';

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
    name: "  Edit",
    button: true,
    grow: 0,
    compact: true,
    cell: (row) => (
      <EditBankCommercials
        user={currentUser}
        row={row}
        refetch={currentRefetch}
      />
    ),
  },
  {
    name: "Status",
    selector: (row) => row.status,
    grow: 0,
    compact: true,
    center: true,
    cell: (row) => (
      <span style={{ color: getStatusColor(row.status) }}>{row.status}</span>
    ),
  },
  {
    name: "Bank",
    selector: (row) => row.bank,
  },
  {
    name: (
      <div style={{ textAlign: "center" }}>
        IMPS
        <br />
        <span style={{ fontSize: 12 }}>{"(\u20b9 1 to \u20b9 1000)"}</span>
      </div>
    ),
    selector: (row) => rupeeIn2Dec(row.imps_slab1),
    center: true,
  },
  {
    name: (
      <div style={{ textAlign: "center" }}>
        IMPS
        <br />
        <span style={{ fontSize: 12 }}>{"(\u20b9 1001 to \u20b9 25000)"}</span>
      </div>
    ),
    selector: (row) => rupeeIn2Dec(row.imps_slab2),
    center: true,
  },
  {
    name: (
      <div style={{ textAlign: "center" }}>
        IMPS
        <br />
        <span style={{ fontSize: 10 }}>
          {"(\u20b9 25001 to \u20b9 200000)"}
        </span>
      </div>
    ),
    selector: (row) => rupeeIn2Dec(row.imps_slab3),
    center: true,
  },
  {
    name: "NEFT",
    selector: (row) => rupeeIn2Dec(row.neft_slab1),
    center: true,
  },
  {
    name: "RTGS",
    selector: (row) => rupeeIn2Dec(row.rtgs_slab1),
    center: true,
  },
  {
    name: "UPI",
    selector: (row) => rupeeIn2Dec(row.upi_slab1),
    center: true,
  },
];

let lastPage = 1;
const BankCommercialsView = ({ user }) => {
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
    setPerPage(newPerPage);
    refetch(getUrl(page, newPerPage));
  };

  const ExpandedComponent = ({ data }) => {
    if (data) {
      return expandableCard(
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
                  <b>{rupeeIn2Dec(data.amount)}</b>
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
          {user.role === UserType.ADMIN || user.role === UserType.SUB_ADMIN ? (
            <CRow className="mt-4 mb-4 me-2 ms-0">
              <div
                className="d-lg-flex justify-content-start align-items-center"
                style={{ marginTop: 10 }}
              >
                {/* <span style={{fontFamily: "monospace", color: "gray"}}><b>ACTIONS</b> &emsp;</span> */}
                <SmOutlineButton
                  txt="Success"
                  color="success"
                  faImg={faCheckCircle}
                  onClick={() => {}}
                />
                <SmOutlineButton
                  txt="&nbsp;Refund"
                  color="warning"
                  faImg={faRecycle}
                  onClick={() => {}}
                />
                <SmOutlineButton
                  txt="&nbsp; Check &nbsp;"
                  color="primary"
                  faImg={faSync}
                  onClick={() => {}}
                />
                <SmOutlineButton
                  txt="Rollback"
                  color="danger"
                  faImg={faBackward}
                  onClick={() => {}}
                />
              </div>
            </CRow>
          ) : (
            ""
          )}
        </>
      );
    } else {
      return <p>No Data</p>;
    }
  };

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
      title="Bank Commercials Settings"
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
        <EditBankCommercials user={user} refetch={refetch} />,
      ]}
    >
      <PaginateTable
        columns={columns}
        list={list}
        setList={setList}
        // ExpandedComponent={ExpandedComponent}
        filterFunc={filterFunc}
        progressPending={loading}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
      />
    </CommonPage>
  );
};

export default BankCommercialsView;
