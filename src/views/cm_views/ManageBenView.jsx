import React, { useEffect, useState } from "react";

import team_png from "src/assets/images/icons/team.png";
import remove_png from "src/assets/images/icons/remove.png";
import { getPaginateTable, CMPage } from "src/views/cm_views/custom/cm_views";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { useAx } from "src/networks/ApiController";
import refresh_png from "src/assets/images/icons/refresh.png";
import { myDate } from "src/utils/DateTimeUtil";
import { getGhost24IconBtn } from "./custom/cm_views";
import { addBenDialogBtn } from "./custom/cm_modals";
import { confirmationDialog } from "./custom/cm_toast";
import { fundTransferDialog } from "./custom/cm_modals";
import { getSearchInput } from "./custom/cm_views";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { getGhostFABtn } from "./custom/cm_views";
import { apiErrorToast } from "src/views/cm_views/custom/cm_toast";
import CommonPage from "src/commons/components/CommonPage";
import PaginateTable from "src/commons/components/PaginateTable";

var currentRefetch;
var currentUser;

const columns = [
  {
    name: "Action",
    button: true,
    grow: 0,
    cell: (row) =>
      getGhost24IconBtn(remove_png, "danger", (e) => {
        confirmationDialog(
          `Delete Beneficiary`,
          `Do you want to delete : ${row.name} ?`,
          ApiEndpoints.DELETE_BENEFICIARY,
          {
            api_token: currentUser.api_token,
            id: row.id,
          },
          currentRefetch,
          false
        );
      }),
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Account No",
    selector: (row) => row.accountNo,
  },
  {
    name: "IFSC Code",
    selector: (row) => row.ifsc,
  },
  {
    name: "Bank",
    selector: (row) => row.bank,
  },
  {
    name: "Created At",
    selector: (row) => myDate(row.created_at),
  },

  {
    name: "Transfer",
    button: true,
    cell: (row) => fundTransferDialog(currentUser, row),
  },
];

let lastPage = 1;
const ManageBenView = ({ user }) => {
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const getUrl = (page, per_page) => {
    return `${ApiEndpoints.GET_BENEFICIERIES}?api_token=${
      user ? user.api_token : ""
    }&page=${page}&per_page=${per_page}`;
  };

  const [{ data, loading, error }, refetch] = useAx(getUrl(lastPage, perPage));
  currentRefetch = refetch;
  currentUser = user;
  const handlePageChange = (page) => {
    lastPage = page;
    refetch(getUrl(page, perPage));
  };

  const handlePerRowsChange = (newPerPage, page) => {
    lastPage = page;
    setPerPage(newPerPage);
    refetch(getUrl(page, newPerPage));
  };

  useEffect(() => {
    if (data && data.data) {
      setList(data.data);
    }
    return () => {};
  }, [data]);
  useEffect(() => {
    setTotalRows(list.length);
    return () => {};
  }, [list]);
  useEffect(() => {
    if (error) {
      apiErrorToast(error);
    }
    return () => {};
  }, [error]);

  const filterFunc = (item, SearchInput = "") => {
    if (!SearchInput && SearchInput == "") return true;
    return (
      (item.name &&
        item.name.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.acc_no &&
        item.acc_no.toLowerCase().includes(SearchInput.toLowerCase()))
    );
  };
  return (
    <>
      {/* <CMPage
        title="Manage Beneficiaries"
        img={team_png}
        actions={[
          getSearchInput(data ? data.data : [], setList, filterFunc),
          getGhostFABtn("Refresh", faSync, (e) =>
            refetch(getUrl(lastPage, perPage))
          ),
          addBenDialogBtn(user, refetch),
        ]}
      >
        {getPaginateTable(
          columns,
          list,
          setList,
          null,
          filterFunc,
          loading,
          totalRows,
          handlePerRowsChange,
          handlePageChange
        )}
      </CMPage> */}
      <CommonPage
        title="Manage Beneficiaries"
        img={team_png}
        actions={[
          getSearchInput(data ? data.data : [], setList, filterFunc),
          getGhostFABtn("Refresh", faSync, (e) =>
            refetch(getUrl(lastPage, perPage))
          ),
          addBenDialogBtn(user, refetch),
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

export default ManageBenView;
