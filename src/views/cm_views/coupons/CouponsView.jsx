import { faSync } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CommonPage from "src/commons/components/CommonPage";
import ApiPaginate from "src/commons/tables/ApiPaginate";
import SearchInput from "src/commons/inputs/SearchInput";
import { useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { SmOutlineButton } from "../custom/cm_views";
import UsersView from "../users/UsersView";
import ApiPaginateTable from "src/commons/tables/ApiPaginate";

let currentUser;
let lastPage;
let currentRefetch;

const getUrl = (page, per_page) => {
  return `${ApiEndpoints.GET_USERS}?api_token=${
    currentUser ? currentUser.api_token : ""
  }&page=${page}&per_page=${per_page}`;
};

const filterFunc = (item, SearchInput) => {
  const st =
    item.amount &&
    item.amount.toLowerCase().includes(SearchInput.toLowerCase());
  return st;
};

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    wrap: true,
  },
  {
    name: "User",
    selector: (row) => row.user_id,
  },
  {
    name: "Coupon",
    selector: (row) => row.coupon_number,
  },
  {
    name: "Amount",
    selector: (row) => "\u20b9 " + parseFloat(row.amount).toFixed(2),
  },
  {
    name: "Status",
    button: true,
    // grow: 0,
    cell: (row) => row.status,
  },
  {
    name: "Created",
    button: true,
    cell: (row) => row.created_at,
  },
  {
    name: "Expiry",
    button: true,
    cell: (row) => row.expire_at,
  },
];

const couponsView = ({ user }) => {
  currentUser = user;
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  return (
    <div>
      <CommonPage
        title="Coupons"
        actions={[
          <SearchInput setList={setList} filterFunc={filterFunc} />,
          <SmOutlineButton
            txt="Refresh"
            variant="outline"
            faImg={faSync}
            size="md"
            onClick={currentRefetch}
          />,
        ]}
      >
        <ApiPaginateTable
          user={user}
          columns={columns}
          apiEnd={ApiEndpoints.GET_TRANSACTIONS}
          filterFunc={filterFunc}
          ExpandedComponent={null}
          returnRefetch={(refetch) => {
            currentRefetch = refetch;
          }}
        />
      </CommonPage>
    </div>
  );
};

export default couponsView;
