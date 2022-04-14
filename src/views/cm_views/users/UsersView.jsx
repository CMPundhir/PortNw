import React, { useState, useEffect } from "react";
import user_png from "src/assets/images/icons/user.png";
import { getRequest, postJsonData, useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { CCol, CImage, CRow } from "@coreui/react";
import { UserType } from "src/commons/Constants";
import Swal from "sweetalert2";
import { MySwal } from "../custom/cm_toast";
import { adminUpdateWalletDialogBtn } from "../custom/cm_modals";
import {
  faLock,
  faLockOpen,
  faSync,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getGhost24FAIconBtn } from "../custom/cm_views";
import { showUserDialog } from "../custom/cm_modals";
import { EditWebHook } from "../custom/cm_modals";
import { EditCharges } from "../custom/cm_modals";
import { ShowWhiteListIps } from "../custom/cm_modals";
import { EditRoutes } from "src/views/cm_views/custom/cm_modals";
import { ExportUsers } from "../custom/cm_modals";
import VaDialog from "./dialogs/VaDialog";
import yesbank from "src/assets/images/icons/yesbank.png";
import VaSettingDialog from "./dialogs/VaSettingDialog";
import ConfirmationDialog from "src/commons/dialogs/ConfirmationDialog";
import { apiErrorToast } from "src/views/cm_views/custom/cm_toast";
import CommonPage from "src/commons/components/CommonPage";
import PaginateTable from "src/commons/components/PaginateTable";
import SearchInput from "src/commons/inputs/SearchInput";
import { SmOutlineButton } from "../custom/cm_views";
import AddNewUserModal from "src/commons/modals/AddNewUserModal";
import UserDataCard from "src/commons/cards/UserDataCard";

let lastPage = 1;

const UsersView = ({ user, title, userType }) => {
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [request, setRequest] = useState(false);
  const [floatValue, setFloatValue] = useState("0");
  const [routeData, setRoutes] = useState();
  //const [{ routeData, routeLoading, routeError }, refetchRoutes] = useAx(`${ApiEndpoints.GET_BANK_COMMERCIALS}?api_token=${user ? user.api_token : ""}`);

  if (!routeData) {
    getRequest(
      ApiEndpoints.GET_BANK_COMMERCIALS,
      user ? user.api_token : "",
      null,
      (data) => {
        setRoutes(data);
      },
      (error) => {}
    );
  }
  const role = userType == UserType.USER ? "User" : "Admin";
  const getUrl = (page, per_page) => {
    return `${ApiEndpoints.GET_USERS}?api_token=${
      user ? user.api_token : ""
    }&page=${page}&per_page=${per_page}&role=${role}&sub_role=${userType}`;
  };

  const [{ data, loading, error }, refetch] = useAx(getUrl(lastPage, perPage));

  function resolveRouteName(routes, code) {
    console.log("routes resolve => " + code);
    if (routeData && routeData.length > 0) {
      for (let index = 0; index < routeData.length; index++) {
        const element = routeData[index];
        console.log("routes resolve => " + element.route_code + " , " + code);
        if (element.route_code == code) {
          return element.bank;
        }
      }
    } else {
      console.log("routes not matched=> " + routeData);
    }
    return code;
  }

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
      setTotalRows(data.total);
      setList(data.data);
    }
    return () => {};
  }, [data]);

  useEffect(() => {
    if (error) {
      apiErrorToast(error);
    }
    return () => {};
  }, [error]);

  const ExpandedComponent = ({ data }) => {
    if (data) {
      return (
        // <p>{JSON.stringify(data)}</p>
        <>
          <UserDataCard
            txt1="Minimum Charges"
            txt1Value={data && data.min_size}
            txt2="% Charges"
            txt2Value={data && data.charge + ` %`}
            txt3="Person Name"
            txt3Value={data && data.name}
          />
          <UserDataCard
            txt1="NEFT"
            txt1Value={data && data.neft_route}
            txt2="RTGS"
            txt2Value={data && data.rtgs_route}
            txt3="UPI"
            txt3Value={data && data.upi_route}
          />
          <UserDataCard
            txt1="IMPS(₹ 2 to ₹ 1000)"
            txt1Value={data && data.route}
            txt2="IMPS(₹ 1001 to ₹ 25000)"
            txt2Value={data && data.route1}
            txt3="IMPS (₹ 25001 to ₹ 200000)"
            txt3Value={data && data.route2}
          />
          <div
            hidden={data && data.va_ybl}
            className="transparent-card mt-3 p-2 px-4"
          >
            <CRow className="d-flex align-items-center">
              <div>
                <CImage
                  className="pt-1"
                  rounded
                  src={yesbank}
                  width={70}
                  height={28}
                />
              </div>
              <CCol
                xs={7}
                className="d-flex flex-wrap align-items-center justify-content-between"
              >
                <small className="fw-bold">PortPay A/c No.</small>
                <span>:</span>
              </CCol>
              <CCol xs={5} className="d-flex">
                {data && data.va_ybl ? data.va_ybl : ""}
              </CCol>
              <CCol
                xs={7}
                className="d-flex flex-wrap align-items-center justify-content-between"
              >
                <small className="fw-bold">IFSC</small>
                <span>:</span>
              </CCol>
              <CCol xs={5} className="d-flex">
                YESB0CMSNOC
              </CCol>
            </CRow>
          </div>

          <CRow className="d-flex align-items-center text-center mt-4">
            <CCol xs={6}>
              <EditWebHook
                isNew={false}
                user={data}
                row={data}
                refetch={refetch}
              />
            </CCol>
            <CCol xs={6}>
              <EditCharges user={user} row={data} refetch={refetch} />
            </CCol>
            <CCol xs={6}>
              <ShowWhiteListIps user={user} data={data} refetch={refetch} />
            </CCol>
            <CCol xs={6}>
              <EditRoutes
                user={user}
                row={data}
                refetch={refetch}
                data={routeData}
              />
            </CCol>
            <CCol xs={6}>
              <VaSettingDialog user={user} data={data} refetch={refetch} />
            </CCol>
            <CCol xs={6}>
              <ConfirmationDialog
                user={user}
                btnTxt={
                  data && data.sync && data.sync == "1" ? "Sync" : "Async"
                }
                btnFaIcon={faSyncAlt}
                title="Change API Calls Type!!"
                message={
                  data && data.sync && data.sync == "1"
                    ? "Do want to make API Calls Async?"
                    : "Do want to make API Calls Sync?"
                }
                endpoint={ApiEndpoints.CHANGE_API_MODE}
                data={{
                  api_token: user ? user.api_token : "",
                  userId: data ? data.id : "",
                }}
                refetch={refetch}
              />
            </CCol>
            <CCol
              xs={12}
              className="d-flex flex-wrap align-items-center justify-content-center"
            >
              <VaDialog user={user} data={data} refetch={refetch} />
            </CCol>
          </CRow>
        </>
      );
    } else {
      return <p>No Data</p>;
    }
  };

  const filterFunc = (item, SearchInput) => {
    const st =
      (item.name &&
        item.name.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.acc_no &&
        item.acc_no.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.bname &&
        item.bname.toLowerCase().includes(SearchInput.toLowerCase())) ||
      (item.username && (item.username + "").includes(SearchInput));
    return st;
  };

  const columns = [
    {
      name: "Business Name",
      selector: (row) => row.bname,
      wrap: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Mobile",
      selector: (row) => row.username,
    },
    {
      name: "Wallet",
      selector: (row) =>
        row.wallet
          ? "\u20b9 " +
            parseFloat(row.wallet).toFixed(2) +
            " / " +
            parseFloat(row.hold).toFixed(2)
          : "",
    },
    {
      name: "Holding",
      selector: (row) =>
        row.wallet ? "\u20b9 " + parseFloat(row.hold).toFixed(2) : "",
    },
    {
      name: "Edit",
      button: true,
      // grow: 0,
      cell: (row) => showUserDialog(false, user, row, refetch),
    },
    // {
    //   name: "Password",
    //   button: true,
    //   grow: 0,
    //   cell: (row) =>
    //   adminChangeMpinPass(user, row)
    // },
    {
      name: "Status",
      button: true,
      // grow: 0,
      cell: (row) =>
        getGhost24FAIconBtn(
          row.status && row.status == "1" ? faLockOpen : faLock,
          row.status && row.status == "1" ? "#6EC72D" : "#B4161B",
          (e) => {
            MySwal.fire({
              title: "Are you sure?",
              text: "Do you want to change status of " + row.bname,
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: `Yes, ${
                row.status && row.status == "1" ? "Block" : "Unblock"
              } it!`,
            }).then((result) => {
              if (result.isConfirmed) {
                postJsonData(
                  ApiEndpoints.BLOCK_UNBLOCK,
                  {
                    api_token: user.api_token,
                    userId: row.id,
                  },
                  setRequest,
                  (data) => {
                    Swal.fire("Success!", data, "success");
                    refetch();
                  },
                  (error) => {
                    Swal.fire("Error", error, "error");
                  }
                );
              }
            });
          }
        ),
    },
    {
      name: "Transfer",
      button: true,
      cell: (row) => adminUpdateWalletDialogBtn(user, title, row, refetch),
    },
  ];
  return (
    <>
      <CommonPage
        title={title}
        img={user_png}
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
          <AddNewUserModal
            isNew={true}
            user={user}
            row={null}
            refetch={refetch}
          />,
          <ExportUsers
            title={title}
            user={user}
            role={role}
            userType={userType}
            refetch={refetch}
          />,
        ]}
      >
        <PaginateTable
          user={user}
          columns={columns}
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

export default UsersView;
