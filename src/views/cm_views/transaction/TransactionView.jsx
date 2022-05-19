import { faAirFreshener, faSync } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CommonPage from "src/commons/components/CommonPage";
import ApiPaginate from "src/commons/tables/ApiPaginate";
import SearchInput from "src/commons/inputs/SearchInput";
import { useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { SmOutlineButton } from "../custom/cm_views";
import UsersView from "../users/UsersView";
import ApiPaginateTable from "src/commons/tables/ApiPaginate";
import CommonModal from "src/commons/modals/CommonModal";
import { CButton, CImage } from "@coreui/react";
import { myDate } from "src/utils/DateTimeUtil";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import { jio } from "src/iconsimport";

let currentUser;
let lastPage;
let currentRefetch;
const copy = () => {
  var copyText;
};
// const dummyCoupons = [

//   {
//     id: 1,
//     user_id: 45,
//     coupon_number: "kbdcjbwcuyvbeuycfwe7h823bdy873tvc766rf763t",
//     amount: 10000,
//     status: "Active",
//     created_at: "24-3-2022 13:21:01",
//     updated_at: "20-4-2022 12:30:06",
//   },
//   {
//     id: 2,
//     user_id: 145,
//     coupon_number:
//       "sdkhicuwehoihe87y8437y973yn847ry48n09mn4u65456cf316541tf767348yp",
//     amount: 20000,
//     status: "Active",
//     created_at: "24-3-2022 13:21:01",
//     updated_at: "20-4-2022 12:30:06",
//   },
// ];

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
    name: "Date",
    // selector: (row) => <span>{row.id}</span>,
    cell: (row) => myDate(row.created_at),
    width: "100px",
  },
  {
    name: "Operator",
    // selector: (row) => <span>{rupeeIn2Dec(row.amount)}</span>,
    cell: (row) => (
      <div>
        <CImage src={jio} width="40px" style={{ borderRadius: "50%" }} />
      </div>
    ),

    // width: "200px",
  },
  {
    name: "Number ",
    // cell: (row) => myDate(row.created_at),
    cell: (row) => <span>9999999999</span>,

    // width: "250px",
  },

  {
    name: "Amount",
    // cell: (row) => myDate(row.updated_at),
    cell: (row) => <span>550</span>,

    // width: "250px",
  },
  {
    name: "Order ID",
    // cell: (row) => myDate(row.updated_at),
    cell: (row) => <span>abc123xd4</span>,

    // width: "250px",
  },

  {
    name: "Balance",
    // cell: (row) => myDate(row.updated_at),
    cell: (row) => <span>5000</span>,

    // width: "250px",
  },

  {
    name: "Status",
    cell: (row) => (
      <span className="  p-1 bg-success" style={{ borderRadius: "10%" }}>
        Success
      </span>
    ),
    // width: "250px",
  },
  // {
  //   name: "Get Coupon",
  //   selector: (row) => <ShowCouponModal user={currentUser} row={row} />,
  //   grow: 3,
  // },
];

const TransactionView = ({ user }) => {
  currentUser = user;
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [isCouponModalVisible, setIsCouponModalVisible] = useState(false);

  return (
    <div>
      <CommonPage
        title="Transactions"
        actions={[
          // <SmOutlineButton
          //   txt="Purchase Coupon"
          //   variant="outline"
          //   faImg={faAirFreshener}
          //   size="md"
          //   onClick={(e) => {
          //     setIsCouponModalVisible(true);
          //   }}
          // />,
          <SearchInput setList={setList} filterFunc={filterFunc} />,

          <SmOutlineButton
            txt="Refresh"
            variant="outline"
            faImg={faSync}
            size="md"
            onClick={() => {
              currentRefetch();
            }}
          />,
        ]}
      >
        <ApiPaginateTable
          user={user}
          columns={columns}
          apiEnd={ApiEndpoints.LIST_COUPON}
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

export default TransactionView;
