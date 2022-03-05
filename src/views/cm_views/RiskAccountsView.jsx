import React, { useState, useEffect } from "react";

import user_png from "src/assets/images/icons/user.png";
import { postJsonData, useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { getPaginateTable, getPage } from "src/views/cm_views/custom/cm_views";
import {
  faEdit,
  faPlusCircle,
  faSync,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  getGhostFABtn,
  getGhost24FAIconBtn,
  getSearchInput,
} from "./custom/cm_views";
import {
  confirmationDialog,
  apiErrorToast,
  okSuccessToast,
} from "./custom/cm_toast";
import { myDate } from "src/utils/DateTimeUtil";
import {
  CButton,
  CFormLabel,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormFeedback,
  CForm,
} from "@coreui/react";
import { GhostFABtn, Ghost24FAIconBtn, SubmitButton } from "./custom/cm_views";
import { SubmitFormBtn } from "./custom/cm_views";
import CommonPage from "src/commons/components/CommonPage";
import SearchInput from "src/commons/inputs/SearchInput";
import { SmOutlineButton } from "./custom/cm_views";
import PaginateTable from "src/commons/components/PaginateTable";

const EditBlockBankAcc = ({ user, data, refetch }) => {
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

let lastPage = 1;
const RiskAccountsView = ({ user }) => {
  const [list, setList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [request, setRequest] = useState(false);

  const getUrl = (
    page = lastPage,
    per_page = perPage,
    action = "LIST",
    accNo = "0"
  ) => {
    return `${ApiEndpoints.RISK_ACCOUNTS}?api_token=${
      user ? user.api_token : ""
    }&page=${page}&per_page=${per_page}&type=${action}&accNumber=${accNo}`;
  };

  const [{ data, loading, error }, refetch] = useAx(getUrl(lastPage, perPage));

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

  const filterFunc = (item, SearchInput) => {
    const st =
      item.accNumber &&
      item.accNumber.toLowerCase().includes(SearchInput.toLowerCase());
    return st;
  };

  const columns = [
    {
      name: "Time",
      selector: (row) =>
        myDate(row.created_at) + " \n " + myDate(row.updated_at),
      wrap: true,
    },

    {
      name: "Account Number",
      selector: (row) => row.accNumber,
      wrap: true,
      grow: 2,
    },
    // {
    //   name: "  Edit",
    //   button: true,
    //   grow: 0,
    //   wrap: true,
    //   cell: (row) => <EditBlockBankAcc user={user} refetch={refetch} data={row}/>,
    // },
    {
      name: "Delete",
      button: true,
      grow: 0,
      wrap: true,
      selector: (row) =>
        getGhost24FAIconBtn(faTrashAlt, "#cc1d1d", (e) => {
          confirmationDialog(
            "Are you sure to Remove Account From Block List?",
            `Acc Number : ${row.accNumber}`,
            ApiEndpoints.RISK_ACCOUNTS,
            {
              api_token: user ? user.api_token : "",
              id: row.id,
              type: "DELETE",
            },
            (msg) => {
              if (refetch) refetch();
            },
            false
          );
        }),
    },
  ];

  return (
    <CommonPage
      title="Block Accounts"
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
        <EditBlockBankAcc user={user} refetch={refetch} />,
      ]}
    >
      <PaginateTable
        columns={columns}
        list={list}
        setList={setList}
        ExpandedComponent="false"
        filterFunc={filterFunc}
        progressPending={loading}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
      />
    </CommonPage>
  );
};

export default RiskAccountsView;
