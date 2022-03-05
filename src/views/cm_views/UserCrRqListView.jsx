import React, { useEffect, useState } from "react";

import { CBadge } from "@coreui/react";
import wallet_png from "src/assets/images/icons/wallet.png";
import {
  getPage,
  getPaginateTable,
  getGhostBtn,
} from "src/views/cm_views/custom/cm_views";
import { loadWalletDialogBtn } from "src/views/cm_views/custom/cm_modals";

import ApiEndpoints from "src/networks/ApiEndpoints";
import { useAx } from "src/networks/ApiController";
import refresh_png from "src/assets/images/icons/refresh.png";
import { myDate } from "src/utils/DateTimeUtil";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import { getTxnIcon } from "./custom/cm_views";
import { getSearchInput } from "./custom/cm_views";
import { getGhostFABtn } from "./custom/cm_views";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { apiErrorToast } from "src/views/cm_views/custom/cm_toast";
import CommonPage from "src/commons/components/CommonPage";
import PaginateTable from "src/commons/components/PaginateTable";

const columns = [
  {
    name: "Mode",
    selector: (row) => getTxnIcon(row.mode),
    compact: true,
    center: true,
  },
  {
    name: "Ref",
    selector: (row) => row.ref_number,
    wrap: true,
  },
  {
    name: "Amount",
    selector: (row) => rupeeIn2Dec(row.amount),
    compact: true,
    width: 10,
    grow: 0.5,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    compact: true,
    center: true,

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
    name: "Action Remark",
    selector: (row) => (row.remark ? row.remark : "------"),
    wrap: true,
  },
  {
    name: "Txn ID",
    selector: (row) => row.txn_id,
  },

  {
    name: "Date & Time",
    selector: (row) => myDate(row.created_at),
    compact: true,
    wrap: 0.5,
  },
];

let lastPage = 1;
const UserCrRqListView = ({ user }) => {
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const getUrl = (page, per_page) => {
    return `${ApiEndpoints.GET_CREDITREQ}?api_token=${
      user ? user.api_token : ""
    }&page=${page}&per_page=${per_page}`;
  };

  const [{ data, loading, error }, refetch] = useAx(getUrl(1, perPage));
  useEffect(() => {
    if (data && data.data) {
      setList(data.data);
      setTotalRows(data.total);
    }
    return () => {};
  }, [data]);
  useEffect(() => {
    if (error) {
      apiErrorToast(error);
    }
    return () => {};
  }, [error]);
  const handlePageChange = (page) => {
    lastPage = page;
    refetch(getUrl(page, perPage));
  };

  const handlePerRowsChange = (newPerPage, page) => {
    lastPage = page;
    setPerPage(newPerPage);
    refetch(getUrl(page, newPerPage));
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

  return (
    <>
      {/* {getPage(
        "Wallet",
        wallet_png,
        [
          getSearchInput(data ? data.data : [], setList, filterFunc),
          getGhostFABtn("Refresh", faSync, (e) =>
            refetch(getUrl(lastPage, perPage))
          ),
          loadWalletDialogBtn(user, refetch),
        ],
        getPaginateTable(
          columns,
          list,
          setList,
          null,
          filterFunc,
          loading,
          totalRows,
          handlePerRowsChange,
          handlePageChange
        )
      )} */}
      <CommonPage
        title="Wallet"
        img={wallet_png}
        actions={[
          getSearchInput(data ? data.data : [], setList, filterFunc),
          getGhostFABtn("Refresh", faSync, (e) =>
            refetch(getUrl(lastPage, perPage))
          ),
          loadWalletDialogBtn(user, refetch),
        ]}
      >
        <PaginateTable
          columns={columns}
          list={list}
          setList={setList}
          //ExpandedComponent={ExpandedComponent}
          filterFunc={filterFunc}
          totalRows={totalRows}
          handlePerRowsChange={handlePerRowsChange}
          handlePageChange={handlePageChange}
          //customStyles={customStyles}
          //paginateServer={paginateServer}
          progressPending={loading}
        />
      </CommonPage>
    </>
  );
};

export default UserCrRqListView;
