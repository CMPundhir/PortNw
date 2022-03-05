import React, { useEffect, useState } from "react";
import { CMPage, getGhostFABtn } from "../custom/cm_views";
import {
  faBackspace,
  faDownload,
  faSync,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { getExportButton } from "../custom/cm_views";
import {
  CFormLabel,
  CCol,
  CFormInput,
  CRow,
  CButton,
  CSpinner,
  CModal,
  CModalBody,
  CInputGroup,
  CImage,
  CModalFooter,
  CForm,
} from "@coreui/react";
import XLSX from "xlsx";
import { CMTable } from "../custom/cm_views";
import { okSuccessToast } from "../custom/cm_toast";
import { useAx } from "src/networks/ApiController";
import { json2Excel } from "src/utils/CsvFIleUtils";
import { numIn2Dec } from "src/utils/RupeeUtil";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import { customStyles } from "../custom/cm_table_styles";
import { getPaginateTable } from "../custom/cm_views";
import { postJsonData } from "src/networks/ApiController";
import { confirmationDialog } from "../custom/cm_toast";
import { SmOutlineButton } from "../custom/cm_views";
import eye_png from "src/assets/images/icons/eye.png";
import hidden_png from "src/assets/images/icons/hidden.png";
import { apiErrorToast } from "../custom/cm_toast";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import CommonPage from "src/commons/components/CommonPage";

export const File2ServerModal = ({ user, data }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [valid1, setValid1] = useState(false);

  const checkInputValidation = (input) => {
    return input.length == 4;
  };

  const errMsg = "MPin must be 4 digit long";

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (valid1) {
        postJsonData(
          ApiEndpoints.UPLOAD_BULK_FILE +
            `?api_token=${user ? user.api_token : "NA"}`,
          data,
          setRequest,
          (data) => {
            setVisible(false);
            okSuccessToast("Success", JSON.stringify(data));
          },
          (error) => {
            apiErrorToast(error);
          }
        );
      } else {
        alert("invalid");
      }
    }
  };
  useEffect(() => {
    if (!visible) {
      setValid1(false);
    }
    return () => {};
  }, [visible]);
  return (
    <>
      <SmOutlineButton
        txt="Start Bulk Transfer"
        color="primary"
        faImg={faUpload}
        onClick={() => setVisible(!visible)}
      />
      <CModal
        alignment="center"
        visible={visible}
        onDismiss={() => {
          if (request) {
            Swal.fire(
              "Warning!!",
              "Please wait request is under progress",
              "warning"
            );
          }
        }}
        scrollable
      >
        <CModalBody className="m-4">
          <h4>Start Bulk Transfer</h4>
          <h6 className="mt-2 mb-2">
            Total Transactions : {data ? data.length : 0}
          </h6>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            //noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eMpin">MPIN</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eMpin"
                  type={toggle1 ? "text" : "password"}
                  id="eMpin"
                  required
                  size="sm"
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    setValid1(checkInputValidation(e.target.value));
                  }}
                  invalid={!valid1}
                  valid={false}
                  autoComplete="nope"
                  autoCorrect={false}
                />
                <CButton
                  color="#ecf2f7"
                  className="toggle-btn"
                  variant="ghost"
                  onClick={(e) => {
                    setToggle1(!toggle1);
                  }}
                >
                  <CImage
                    src={toggle1 ? eye_png : hidden_png}
                    style={{ width: 16, height: 16 }}
                  />
                </CButton>
              </CInputGroup>
              {validated && !valid1 ? (
                <p style={{ color: "#d93737", fontSize: 14 }}>{errMsg}</p>
              ) : (
                ""
              )}
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
          <CButton
            form="MyForm"
            variant="outline"
            color="primary"
            type="submit"
            //onClick={handleSubmit}
            disabled={request || !valid1}
          >
            {request ? (
              <CSpinner component="span" size="sm" aria-hidden="true" />
            ) : (
              ""
            )}
            Start Bulk Transfer
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export const UploadTxnFile = ({ user }) => {
  const [excelFile, setExcelFile] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.bene_name,
    },
    {
      name: "Account",
      selector: (row) => row.bene_account,
    },
    {
      name: "Amount",
      selector: (row) => rupeeIn2Dec(row.amount),
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
  ];
  const handlePageChange = (page) => {};

  const handlePerRowsChange = (newPerPage, page) => {};

  const readFileToJsonPromise = (e) => {
    return new Promise((resolve, reject) => {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: "array" });
      console.log("workbook", workbook);
      const wsname = workbook.SheetNames[0];
      console.log("worksheet name", wsname);
      const ws = workbook.Sheets[wsname];
      console.log("worksheet", ws);
      /* Convert array of arrays */
      const jsonData = XLSX.utils.sheet_to_json(ws);
      /* Update state */
      console.log("Data>>>", jsonData);
      setData(jsonData);
      /* DO SOMETHING WITH workbook HERE */
      okSuccessToast("File Imported successfully");
      setLoading(false);
      resolve(
        true
      ); /* return result here or you can use reject for execute catch block*/
    });
  };

  useEffect(() => {
    if (excelFile) {
      setLoading(true);
      //console.log(excelFile);
      var reader = new FileReader();
      reader.onload = function (e) {
        Promise.resolve(readFileToJsonPromise(e))
          .then(
            (result) => {
              /*your result come here*/
              console.log("Progress finished=>", result);
            },
            (error) => {
              console.log(error);
            }
          )
          .catch(console.log);
      };
      reader.readAsArrayBuffer(excelFile);
    }
    return () => {};
  }, [excelFile]);
  return (
    <div>
      <div className="d-flex text-center m-4">
        <CRow className="g-2 align-items-center justify-content-center">
          <CCol xs="auto">
            <CFormInput
              size="sm"
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              id="excel_file"
              name="excel_file"
              onChange={(e) => {
                const file = e.target.files[0];
                setExcelFile(file);
              }}
            />
          </CCol>
          {loading ? (
            <CCol xs="auto align-items-center justify-content-center">
              <CSpinner size="sm" />
              &ensp;Loading File
            </CCol>
          ) : (
            ""
          )}
          <CCol xs="auto">
            <SmOutlineButton
              txt="Clear"
              color="danger"
              faImg={faBackspace}
              onClick={() => {
                setData([]);
                setExcelFile(null);
              }}
            />
            <File2ServerModal user={user} data={data} />
          </CCol>
        </CRow>
      </div>

      <div>
        {getPaginateTable(
          columns,
          data,
          null,
          null,
          null,
          loading,
          data ? data.length : 0,
          handlePerRowsChange,
          handlePageChange,
          customStyles,
          false
        )}
      </div>
    </div>
  );
};

const BulkTransactionView = ({ user }) => {
  const [excelFile, setExcelFile] = useState(null);
  const [{ data, loading, error }, refetch] = useAx(
    ApiEndpoints.GET_BULK_TXN_TEMPLATE +
      `?api_token=${user ? user.api_token : "NA"}`
  );
  if (error) {
    alert(error);
  }

  return (
    <div>
      <CommonPage
        title="Bulk Transaction"
        actions={[
          getGhostFABtn("Refresh", faSync, (e) => refetch()),
          getGhostFABtn("Download Template", faDownload, (e) => {
            if (data && data[0] && data[0].data) {
              json2Excel("BulkTransactionTemplate", [data[0].data]);
            }
          }),
          // getExportButton("BulkTransactionTemplate", ApiEndpoints.GET_BULK_TXN_TEMPLATE+`?api_token=${user?user.api_token:"NA"}`, "Download Template", faDownload),
        ]}
      >
        {loading ? (
          <CRow
            className="mt-4 ms-4 mb-4 me-1 align-items-center justify-content-center"
            xs={{ cols: "auto" }}
          >
            <CSpinner size="lg" />
          </CRow>
        ) : (
          <UploadTxnFile user={user} />
        )}
      </CommonPage>
    </div>
  );
};

export default BulkTransactionView;
