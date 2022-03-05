import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CImage,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CSpinner,
} from "@coreui/react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import rupee_2_png from "src/assets/images/icons/rupee_2.png";
import { getGhost24IconBtn, Ghost24FAIconBtn } from "./cm_views";
import eye_png from "src/assets/images/icons/eye.png";
import hidden_png from "src/assets/images/icons/hidden.png";
import edit_user_png from "src/assets/images/icons/edit_user.png";
import welcome_jpg from "src/assets/images/welcome.jpg";
import logo_png from "src/assets/images/logo.png";
import { get, postJsonData, useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { okSuccessToast } from "./cm_toast";
import { okErrorToast } from "./cm_toast";
import { apiErrorToast } from "./cm_toast";
import "src/views/pages/auth/LoginView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCheckCircle,
  faEdit,
  faFileExport,
  faFilter,
  faKey,
  faLink,
  faLock,
  faNetworkWired,
  faPlus,
  faRupeeSign,
  faSync,
  faTimesCircle,
  faTrashAlt,
  faUniversity,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { getGhostBtn } from "./cm_views";
import { json2Csv, json2Excel, json2Pdf } from "src/utils/CsvFIleUtils";
import { myDate4 } from "src/utils/DateTimeUtil";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import password_png from "src/assets/images/icons/password.png";
import calender_png from "src/assets/images/icons/calendar.png";
import { isValidPass } from "src/utils/ValidationUtil";
import { showCopyDialog } from "./cm_toast";
import { getGhostFABtn } from "./cm_views";
import { getGhost24FAIconBtn } from "./cm_views";
import { numIn2Dec, rupeeIn2Dec } from "src/utils/RupeeUtil";
import { SmOutlineButton } from "./cm_views";
import { CMPaginateTable } from "./cm_views";
import { CMTable } from "./cm_views";
import { SmIconOutlineButton } from "./cm_views";
import { CMIconButton } from "./cm_views";
import { confirmationDialog } from "./cm_toast";
import { UserType } from "src/commons/Constants";
import { SubmitFormBtn } from "./cm_views";
import { CloseFormBtn } from "./cm_views";
import { PortPayLogo } from "./cm_views";
import forgot_png from "src/assets/images/icons/forgot.png";

export const showDialog = (title, msg) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {/* <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton> */}
      <CModal visible={visible} onDismiss={() => setVisible(false)}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{msg}</CModalBody>
        <CModalFooter>
          <CButton
            variant="ghost"
            color="primary"
            onClick={() => setVisible(false)}
          >
            Ok
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export const showModal = (btn_text, btn_img, body) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {getGhostBtn(btn_text, btn_img, (e) => {
        setVisible(!visible);
      })}
      <CModal
        alignment="center"
        visible={visible}
        onDismiss={() => {
          if (request) {
            alert("Please wait request is under progress");
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>Load Wallet Request</CModalTitle>
        </CModalHeader>
        <CModalBody>{body}</CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const loadWalletDialogBtn = (user, OnRefresh) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      postJsonData(
        ApiEndpoints.LOAD_MONEY_REQ,
        {
          api_token: user.api_token,
          bank: form.sBank.value,
          method: form.sMode.value,
          amount: form.eAmt.value,
          rfid: form.eRefId.value,
        },
        setRequest,
        (data) => {
          setVisible(false);
          okSuccessToast("Success", JSON.stringify(data));
          OnRefresh();
        },
        (error) => {
          okErrorToast("Error", JSON.stringify(error.response.data));
        }
      );
    }
  };

  return (
    <>
      {getGhostFABtn(" Load Wallet", faWallet, (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>Load Wallet Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <CFormLabel htmlFor="eAmt">Request to</CFormLabel>
              <CFormSelect
                aria-label="Select Bank"
                id="sBank"
                required
                disabled={request}
                placeholder="Select Bank"
              >
                <option></option>
                <option value="SBI">SBI</option>
                <option value="RBL">RBL</option>
              </CFormSelect>
              <CFormFeedback invalid>Please Select Bank</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="sMode">Select Mode of Payment</CFormLabel>
              <CFormSelect
                aria-label="Select Mode of Payment"
                id="sMode"
                required
                disabled={request}
              >
                <option></option>
                <option value="NEFT">NEFT</option>
                <option value="IMPS">IMPS</option>
                <option value="RTGS">RTGS</option>
                <option value="UPI">UPI</option>
                <option value="FT">Fund Transfer</option>
              </CFormSelect>
              <CFormFeedback invalid>Please Select Payment Mode</CFormFeedback>
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="eAmt">Amount</CFormLabel>
              <CFormInput
                name="amt"
                type="number"
                id="eAmt"
                placeholder="0"
                min={100}
                step="0.01"
                required
                disabled={request}
              />
              <CFormFeedback invalid>
                Minimum amount {"\u20b9"} 100 required.
              </CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="eRefId">Reference ID</CFormLabel>
              <CFormInput
                type="text"
                id="eRefId"
                placeholder="Reference ID"
                required
                minLength={5}
                disabled={request}
              />
              <CFormFeedback invalid>Valid Reference Id Required</CFormFeedback>
            </div>

            <div className="mb-3"></div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const adminUpdateWalletDialogBtn = (user, title, data, refetch) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [validMPin, setValidMPin] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      const amt = form.eAmt.value;
      if (validMPin) {
        postJsonData(
          ApiEndpoints.UPDATE_WALLET_ADMIN,
          {
            api_token: user.api_token,
            userId: data.id,
            amount: amt,
            type: form.sType.value,
            mPin: form.eMpin.value,
          },
          setRequest,
          (data) => {
            setVisible(false);
            okSuccessToast("Success", JSON.stringify(data));
            if (refetch) refetch();
          },
          (error) => {
            apiErrorToast(error);
          }
        );
      }
    }
  };

  return (
    <>
      {getGhost24IconBtn(rupee_2_png, "primary", (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>Load Wallet Request</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <CFormLabel htmlFor="eTitle">{title}</CFormLabel>
              <CFormInput
                type="number"
                id="eTitle"
                placeholder={data ? data.bname : ""}
                disabled
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="sType">Payment Type</CFormLabel>
              <CFormSelect
                aria-label="Select Payment Type"
                id="sType"
                required
                disabled={request}
              >
                <option value="credit">CREDIT</option>
                <option value="debit">DEBIT</option>
                <option value="hold">HOLD</option>
              </CFormSelect>
              <CFormFeedback invalid>Please Select Type</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="eAmt">Amount</CFormLabel>
              <CFormInput
                name="amt"
                type="number"
                id="eAmt"
                placeholder="0"
                min={1000.0}
                max={100000000.0}
                step="0.01"
                required
                disabled={request}
                autoComplete="off"
                autoCorrect={false}
              />
              <CFormFeedback invalid>
                Minimum amount {"\u20b9"} 1000 required.
              </CFormFeedback>
            </div>
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eMpin">MPIN</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eMpin"
                  type={toggle ? "text" : "password"}
                  id="eMpin"
                  required
                  size="sm"
                  min={1000}
                  max={9999}
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    var p = e.target.value;
                    setValidMPin(p.length >= 4);
                  }}
                  invalid={validated && !validMPin}
                  valid={validated && validMPin}
                  autoComplete="off"
                  autoCorrect={false}
                />
                <CButton
                  color="#ecf2f7"
                  className="toggle-btn"
                  variant="ghost"
                  onClick={(e) => {
                    setToggle(!toggle);
                  }}
                >
                  <CImage
                    src={toggle ? eye_png : hidden_png}
                    style={{ width: 16, height: 16 }}
                  />
                </CButton>
              </CInputGroup>
              {validated && !validMPin ? (
                <p style={{ color: "#d93737", fontSize: 14 }}>
                  MPin must be at least 4 digit long
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3"></div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const addBenDialogBtn = (user, refetch, oldBen) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      postJsonData(
        oldBen ? ApiEndpoints.UPDATE_BENEFICIARY : ApiEndpoints.ADD_BENEFICIARY,
        {
          api_token: user.api_token,
          name: form.name.value,
          bank: form.bank.value,
          accountNo: form.accno.value,
          ifsc: form.ifsc.value,
        },
        setRequest,
        (data) => {
          setVisible(false);
          okSuccessToast("Success", JSON.stringify(data));
          refetch();
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    }
  };

  return (
    <>
      {oldBen
        ? getGhost24IconBtn(edit_user_png, "success", (e) => {
            setVisible(!visible);
          })
        : getGhostFABtn(" Add New", faUser, (e) => {
            setVisible(!visible);
          })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>
            {oldBen ? "Update Beneficiary" : "Add New Beneficiary"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <CFormLabel htmlFor="eName">Name</CFormLabel>
              <CFormInput
                name="name"
                type="text"
                id="eName"
                placeholder="Enter Name"
                defaultValue={oldBen ? oldBen.name : ""}
                minLength="3"
                required
                disabled={request}
              />
              <CFormFeedback invalid>Please enter a valid Name</CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="eBank">Bank</CFormLabel>
              <CFormInput
                name="bank"
                type="text"
                id="eBank"
                placeholder="Enter Bank"
                defaultValue={oldBen ? oldBen.bank : ""}
                minLength="3"
                required
                disabled={request}
              />
              <CFormFeedback invalid>
                Please enter a valid Bank name
              </CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="eAccNo">Account Number</CFormLabel>
              <CFormInput
                name="accno"
                type="text"
                id="eAccNo"
                placeholder="Enter Account Number"
                defaultValue={oldBen ? oldBen.accountNo : ""}
                minLength="8"
                required
                disabled={request}
              />
              <CFormFeedback invalid>
                Account number must be valid
              </CFormFeedback>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="eIfsc">IFSC Code</CFormLabel>
              <CFormInput
                name="ifsc"
                type="text"
                id="eIfsc"
                placeholder="Enter IFSC Code"
                defaultValue={oldBen ? oldBen.ifsc : ""}
                required
                disabled={request}
              />
              <CFormFeedback invalid>
                Please enter valid IFSC Code
              </CFormFeedback>
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

export const fundTransferDialog = (user, ben, refetch) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [validMPin, setValidMPin] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (validMPin) {
        postJsonData(
          ApiEndpoints.FUND_TRANSFER,
          {
            api_token: user.api_token,
            MobileNumber: user ? user.username : "",
            BeneficiaryName: ben ? ben.name : "",
            IFSCCode: ben ? ben.ifsc : "",
            RemittanceAmount: form.eAmt.value,
            AccountNumber: ben ? ben.accountNo : "",
            type: form.sMode.value,
            mPin: form.eMpin.value,
          },
          setRequest,
          (data) => {
            setVisible(false);
            okSuccessToast("Success", JSON.stringify(data));
            if (refetch) refetch();
          },
          (error) => {
            apiErrorToast(error);
          }
        );
      }
    }
  };

  return (
    <>
      {getGhost24IconBtn(rupee_2_png, "primary", (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>Fund Transfer</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5 className="m-2">Beneficiary Name: {ben ? ben.name : ""}</h5>
          <h6 className="m-2">Bank Account: {ben ? ben.accountNo : ""}</h6>
          <h6 className="m-2">Bank IFSC: {ben ? ben.ifsc : ""}</h6>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <CFormLabel htmlFor="sMode">Select Mode of Payment</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CInputGroupText id="addon-wrapping">
                  <FontAwesomeIcon icon={faUniversity} />
                </CInputGroupText>
                <CFormSelect
                  aria-label="Select Mode of Payment"
                  id="sMode"
                  required
                  disabled={request}
                >
                  <option value="IMPS">IMPS</option>
                  <option value="NEFT">NEFT</option>
                  <option value="RTGS">RTGS</option>
                </CFormSelect>
                <CFormFeedback invalid>
                  Please select valid Options
                </CFormFeedback>
              </CInputGroup>
            </div>

            <div className="mb-3">
              <CFormLabel htmlFor="eAmt">Amount</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CInputGroupText id="addon-wrapping">
                  <FontAwesomeIcon icon={faRupeeSign} />
                </CInputGroupText>
                <CFormInput
                  name="amt"
                  type="number"
                  id="eAmt"
                  placeholder="0"
                  min={1}
                  max={100000000}
                  step="0.01"
                  required
                  autoComplete="nope"
                  autoCorrect="nope"
                  disabled={request}
                />
                <CFormFeedback invalid>
                  Minimum amount {"\u20b9"} 1 required.
                </CFormFeedback>
              </CInputGroup>
            </div>
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eMpin">MPIN</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CInputGroupText id="addon-wrapping">
                  <FontAwesomeIcon icon={faLock} />
                </CInputGroupText>
                <CFormInput
                  name="eMpin"
                  type={toggle ? "text" : "password"}
                  id="eMpin"
                  required
                  size="sm"
                  min={1000}
                  max={9999}
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    var p = e.target.value;
                    setValidMPin(p.length == 4);
                  }}
                  invalid={validated && !validMPin}
                  valid={validated && validMPin}
                  autoComplete="nope"
                  autoCorrect={false}
                />
                <CButton
                  color="#ecf2f7"
                  className="toggle-btn"
                  variant="ghost"
                  onClick={(e) => {
                    setToggle(!toggle);
                  }}
                >
                  <CImage
                    src={toggle ? eye_png : hidden_png}
                    style={{ width: 16, height: 16 }}
                  />
                </CButton>
              </CInputGroup>
              {validated && !validMPin ? (
                <p style={{ color: "#d93737", fontSize: 14 }}>
                  MPin must be at least 4 digit long
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3"></div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

// export const selectDateRange = (user, refetch) => {
//   const [visible, setVisible] = useState(false);
//   const [request, setRequest] = useState(false);
//   const [state, setState] = useState([
//     {
//       startDate: addDays(new Date(), -7),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const selectionRange = {
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   };

//   const handleSubmit = (event) => {
//     // console.log(state);
//     // okSuccessToast("Date Range", JSON.stringify(state));
//     if (state.length == 0) {
//       okErrorToast("Error", "No Date Range set");
//       return;
//     }
//     const start = state[0].startDate;
//     const end = state[0].endDate;
//     console.log(state);
//     console.log(start);
//     console.log(end);
//     // okSuccessToast("Date Range", `Transactions_${start}_to_${end}`);
//     // return;
//     postJsonData(
//       ApiEndpoints.GET_TRANSACTIONS,
//       {
//         api_token: user ? user.api_token : "",
//         start: start,
//         end: end,
//         type: "EXPORT",
//       },
//       setRequest,
//       (data) => {
//         setVisible(false);
//         if (data && data.length > 0) {
//           okSuccessToast("Success", "Download Successful");
//           json2Csv(`Transactions_${myDate2(start)}_to_${myDate2(end)}`, data);
//         } else {
//           okErrorToast("No Transaction Data available.");
//         }
//       },
//       (error) => {
//         apiErrorToast(error);
//       }
//     );
//   };

//   return (
//     <>
//       {getGhostBtn(" Export", csv_png, (e) => {
//         setVisible(!visible);
//       })}
//       <CModal
//         size="lg"
//         className="modal_wid"
//         alignment="center"
//         visible={visible}
//         onDismiss={() => {
//           if (request) {
//             Swal.fire(
//               "Warning!!",
//               "Please wait request is under progress",
//               "warning"
//             );
//           } else {
//             //setVisible(false);
//           }
//         }}
//         scrollable
//       >
//         <CModalHeader>
//           <CModalTitle>Export Transactions</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <div>
//             <DateRangePicker
//               minDate={addDays(new Date(), -7)}
//               maxDate={new Date()}
//               color="#4093f7"
//               rangeColors={["#4093f7", "#118ebb"]}
//               ranges={[selectionRange]}
//               onChange={(item) => setState([item.selection])}
//               showSelectionPreview={true}
//               moveRangeOnFirstSelection={false}
//               months={1}
//               ranges={state}
//               preventSnapRefocus={true}
//               direction="horizontal"
//               calendarFocus="backwards"
//             />
//           </div>
//         </CModalBody>
//         <CModalFooter>
//           <CButton
//             variant="ghost"
//             color="secondary"
//             onClick={() => setVisible(false)}
//             disabled={request}
//           >
//             Close
//           </CButton>
//           <CButton
//             variant="outline"
//             color="success"
//             type="button"
//             onClick={handleSubmit}
//             disabled={request}
//           >
//             {request ? (
//               <CSpinner component="span" size="sm" aria-hidden="true" />
//             ) : (
//               ""
//             )}
//             Download CSV
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };

export const showTxnCSVDialog = (user, refetch) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleSubmit = (event) => {
    // okSuccessToast("Date Range", `Transactions_${myDate4(value)}`);
    // return;
    const buttonId = event.target.id;
    if (buttonId == "bPdf") {
      okSuccessToast("Under Development", "Coming soon...");
      return;
    }
    postJsonData(
      ApiEndpoints.GET_TRANSACTIONS,
      {
        api_token: user ? user.api_token : "",
        date: myDate4(value) + "_" + myDate4(value),
        //date: "2021-11-01_2021-11-25",
        type: "EXPORT",
      },
      setRequest,
      (data) => {
        setVisible(false);
        if (data && data.length > 0) {
          okSuccessToast("Success", "Download Successful");
          if (buttonId == "bExcel") {
            json2Excel(`Transactions_${myDate4(value)}`, data);
          } else if (buttonId == "bPdf") {
            okSuccessToast("Under Development", "Coming soon...");
            //json2Pdf(`Transactions_${myDate4(value)}`, data);
          } else {
            json2Csv(`Transactions_${myDate4(value)}`, data);
          }
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
      {getGhostFABtn(" Export", faFileExport, (e) => {
        setVisible(!visible);
      })}
      <CModal
        size="lg"
        className="modal_wid"
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
        <CModalBody>
          <div className="text-center m-4">
            <h4 className="m-2">Export Transactions</h4>
            <div className="d-flex justify-content-center m-4">
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="m-4">
              <CButton
                id="bCSV"
                className="m-2"
                variant="outline"
                color="primary"
                type="button"
                onClick={handleSubmit}
                disabled={request}
              >
                {request ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                ) : (
                  ""
                )}
                Download CSV
              </CButton>
              <CButton
                id="bExcel"
                className="m-2"
                variant="outline"
                color="primary"
                type="button"
                onClick={handleSubmit}
                disabled={request}
              >
                {request ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                ) : (
                  ""
                )}
                Download EXCEL
              </CButton>
              <CButton
                id="bPdf"
                className="m-2"
                variant="outline"
                color="primary"
                type="button"
                onClick={handleSubmit}
                disabled={request}
              >
                {request ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                ) : (
                  ""
                )}
                Download PDF
              </CButton>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CloseFormBtn setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const ExportUsers = ({ title, user, role, userType, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [selectedButton, setSelectedButton] = useState();

  const handleSubmit = (event) => {
    const buttonId = event.target.id;
    setSelectedButton(buttonId);
    if (buttonId == "bPdf") {
      okSuccessToast("Under Development", "Coming soon...");
      return;
    }
    get(
      `${ApiEndpoints.GET_USERS}?api_token=${
        user ? user.api_token : ""
      }&role=${role}&sub_role=${userType}`,
      setRequest,
      (data) => {
        setVisible(false);
        if (data && data.length > 0) {
          okSuccessToast("Success", "Download Successful");
          if (buttonId == "bExcel") {
            json2Excel(title, data);
          } else if (buttonId == "bPdf") {
            okSuccessToast("Under Development", "Coming soon...");
            //json2Pdf(`Transactions_${myDate4(value)}`, data);
          } else {
            json2Csv(title, data);
          }
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
      {getGhostFABtn(" Export", faFileExport, (e) => {
        setVisible(!visible);
      })}
      <CModal
        size="lg"
        className="modal_wid text-center"
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
        <CModalBody>
          <div className="m-4">
            <h4>Export {title}</h4>
            <div className="mt-4">
              <CButton
                className="m-2"
                id="bCSV"
                variant="outline"
                color="primary"
                type="button"
                onClick={handleSubmit}
                disabled={request}
              >
                {request && selectedButton == "bCSV" ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                ) : (
                  ""
                )}
                Download CSV
              </CButton>
              <CButton
                lassName="m-2"
                id="bExcel"
                variant="outline"
                color="primary"
                type="button"
                onClick={handleSubmit}
                disabled={request}
              >
                {request && selectedButton == "bExcel" ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                ) : (
                  ""
                )}
                Download EXCEL
              </CButton>
              <CButton
                className="m-2"
                id="bPdf"
                variant="outline"
                color="primary"
                type="button"
                onClick={handleSubmit}
                disabled={request}
              >
                {request && selectedButton == "bPdf" ? (
                  <CSpinner component="span" size="sm" aria-hidden="true" />
                ) : (
                  ""
                )}
                Download PDF
              </CButton>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CloseFormBtn setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const showDatePicker = (onChange) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleSubmit = (event) => {
    setVisible(false);
    onChange(date);
  };
  return (
    <>
      {/* {getGhostBtn("", calender_png, (e) => {
        setVisible(!visible);
      })} */}
      <CButton
        size="sm"
        className="input-inside"
        color="primary"
        variant="ghost"
        onClick={(e) => setVisible(!visible)}
        style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
      >
        <CImage
          className="me-1 mb-1"
          src={calender_png}
          width={24}
          height={24}
        />
        {" Pick Date"}
      </CButton>
      <CModal
        className="modal_wid"
        alignment="center"
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>Export Transactions</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="d-flex justify-content-center">
            <Calendar onChange={setDate} value={date} />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton
            variant="ghost"
            color="secondary"
            onClick={() => setVisible(false)}
          >
            Close
          </CButton>
          <CButton
            variant="outline"
            color="success"
            type="button"
            onClick={handleSubmit}
          >
            Done
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export const changeMpinPass = (user, type) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [valid1, setValid1] = useState(false);
  const [valid2, setValid2] = useState(false);
  const [valid3, setValid3] = useState(false);
  const [npss, setNpss] = useState(null);

  const checkInputValidation = (input) => {
    if (type == "MPIN") {
      return input.length == 4;
    } else {
      return isValidPass(input);
    }
  };

  const errMsg =
    type == "MPIN"
      ? "MPin must be 4 digit long"
      : " Password Must be at least 8 digit long and contains Caps, Small case, Numeric and Special symbols";

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (valid1 && valid2 && valid3) {
        var data;
        if (type == "MPIN") {
          data = {
            api_token: user.api_token,
            old_mpin: form.eOld.value,
            new_mpin: form.eNew.value,
          };
        } else {
          data = {
            api_token: user.api_token,
            old_password: form.eOld.value,
            password: form.eNew.value,
            password_confirmation: form.eConfirm.value,
          };
        }
        postJsonData(
          type == "MPIN"
            ? ApiEndpoints.CHANGE_MPIN
            : ApiEndpoints.CHANGE_PASSWORD,
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

  return (
    <>
      {getGhostFABtn("Change " + type, faLock, (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>{"Change " + type}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="ms-2">{errMsg}</p>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            //noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eOld">Old {type}</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eOld"
                  type={toggle1 ? "text" : "password"}
                  id="eOld"
                  required
                  size="sm"
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    setValid1(checkInputValidation(e.target.value));
                  }}
                  invalid={!valid1}
                  valid={false}
                  autoComplete={false}
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
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eNew">New {type}</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eNew"
                  type={toggle2 ? "text" : "password"}
                  id="eNew"
                  required
                  size="sm"
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    const isVal = checkInputValidation(e.target.value);
                    setValid2(isVal);
                    if (isVal) setNpss(e.target.value);
                  }}
                  invalid={!valid2}
                  valid={false}
                  autoComplete={false}
                  autoCorrect={false}
                />
                <CButton
                  color="#ecf2f7"
                  className="toggle-btn"
                  variant="ghost"
                  onClick={(e) => {
                    setToggle2(!toggle2);
                  }}
                >
                  <CImage
                    src={toggle2 ? eye_png : hidden_png}
                    style={{ width: 16, height: 16 }}
                  />
                </CButton>
              </CInputGroup>
              {validated && !valid2 ? (
                <p style={{ color: "#d93737", fontSize: 14 }}>{errMsg}</p>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eConfirm">Confirm {type}</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eConfirm"
                  type={toggle3 ? "text" : "password"}
                  id="eConfirm"
                  required
                  size="sm"
                  style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                  disabled={request}
                  onChange={(e) => {
                    const isVal = checkInputValidation(e.target.value);
                    setValid3(isVal && e.target.value == npss);
                  }}
                  invalid={!valid3}
                  valid={false}
                  autoComplete={false}
                  autoCorrect={false}
                />
                <CButton
                  color="#ecf2f7"
                  className="toggle-btn"
                  variant="ghost"
                  onClick={(e) => {
                    setToggle3(!toggle3);
                  }}
                >
                  <CImage
                    src={toggle3 ? eye_png : hidden_png}
                    style={{ width: 16, height: 16 }}
                  />
                </CButton>
              </CInputGroup>
              {validated && !valid3 ? (
                <p style={{ color: "#d93737", fontSize: 14 }}>{errMsg}</p>
              ) : (
                ""
              )}
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

export const adminChangeMpinPass = (user, row) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [valid1, setValid1] = useState(false);
  const [type, setType] = useState("MPIN");
  const [npss, setNpss] = useState(null);

  const checkInputValidation = (input) => {
    if (type == "MPIN") {
      return input.length == 4;
    } else {
      return isValidPass(input);
    }
  };

  const errMsg =
    type == "MPIN"
      ? "MPin must be 4 digit long"
      : " Password Must be at least 8 digit long and contains Caps, Small case, Numeric and Special symbols\ne.g.: Test@123";

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setValid1(checkInputValidation(e.target.value));
      if (valid1) {
        var data;
        if (type == "MPIN") {
          data = {
            api_token: user.api_token,
            mpin: form.eNew.value,
            userId: row.id,
          };
        } else {
          data = {
            api_token: user.api_token,
            password: form.eNew.value,
            userId: row.id,
          };
        }
        postJsonData(
          ApiEndpoints.CHANGE_PASS_VIA_ADMIN,
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

  return (
    <>
      {getGhost24FAIconBtn(faKey, "transparent", (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>{"Change " + type}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 needs-validation"
            //noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="radios" style={{ marginRight: 16 }}>
                Change
              </CFormLabel>
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="mpin"
                value="MPIN"
                label="MPIN"
                onChange={(e) => {
                  setType("MPIN");
                }}
                defaultChecked
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="password"
                value="PASSWoRD"
                label="Password"
                onChange={(e) => {
                  setType("Password");
                }}
              />
            </div>
            <p
              className="me-2"
              style={{
                color: "gray",
                backgroundColor: "whitesmoke",
                padding: 16,
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              {type == "MPIN"
                ? "MPin must be 4 digit long"
                : " Password Must be at least 8 digit long and contains Caps, Small case, Numeric and Special symbols. \n e.g. Test@123"}
            </p>
            <div className="mb-3" style={{ marginTop: 8 }}>
              <CFormLabel htmlFor="eNew">New {type}</CFormLabel>
              <CInputGroup className="flex-sm-wrap mb-2">
                <CFormInput
                  name="eNew"
                  type={toggle1 ? "text" : "password"}
                  id="eNew"
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
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const showTxnFiltersDialog = (
  user,
  setList,
  isDownload = false,
  error
) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [merchantOps, setMerchantOps] = useState(null);
  const [bankOps, setBankOps] = useState(null);
  const [isFetchMerReq, setFetchMerReq] = useState(true);
  const [downloadType, setDownloadType] = useState();

  useEffect(() => {
    if (user && isFetchMerReq && !error) {
      setFetchMerReq(false);
      get(
        `${ApiEndpoints.GET_USERS}?api_token=${
          user ? user.api_token : ""
        }&role=User&sub_role=User`,
        setRequest,
        (data) => {
          if (data) {
            setMerchantOps(
              data.map((item) => {
                return <option value={item.id}>{item.bname}</option>;
              })
            );
          }
        },
        (error) => {
          apiErrorToast(error);
          setFetchMerReq(true);
        }
      );
      get(
        `${ApiEndpoints.GET_BANK_COMMERCIALS}?api_token=${
          user ? user.api_token : ""
        }`,
        setRequest,
        (data) => {
          if (data) {
            setBankOps(
              data.map((item) => {
                return <option value={item.route_code}>{item.bank}</option>;
              })
            );
          }
        },
        (error) => {
          apiErrorToast(error);
          setFetchMerReq(true);
        }
      );
    }
    return () => {};
  }, [true, error]);
  //let downloadType;
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
    postJsonData(
      ApiEndpoints.GET_TRANSACTIONS,
      {
        api_token: user ? user.api_token : "",
        client_id: form.eClientId.value,
        txn_id: form.txn_id.value,
        bene_account: form.eAccNo.value,
        userId: user && user.sub_role != "User" ? form.sMerchant.value : "",
        route: user && user.sub_role != "User" ? form.sRoute.value : "",
        status: form.sStatus.value,
        type: form.sTxnType.value,
        date:
          startDate || endDate
            ? myDate4(startDate) + "_" + myDate4(endDate)
            : "",
        rrn: form.rrn.value,
        //type: "FILTER",
      },
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
      {isDownload
        ? getGhostFABtn(" Export", faFileExport, (e) => {
            setVisible(!visible);
          })
        : getGhostFABtn(" Filter", faFilter, (e) => {
            setVisible(!visible);
          })}
      <CModal
        size="xl"
        className="modal_wid"
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
          <CModalTitle>Transaction Filters</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={6}>
                <div className="mb-3">
                  <CFormLabel htmlFor="eClientId">Client ID</CFormLabel>
                  <CFormInput
                    name="client_id"
                    type="text"
                    id="eClientId"
                    placeholder="Client ID"
                    disabled={request}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="txn_id">Transaction ID</CFormLabel>
                  <CFormInput
                    name="txn_id"
                    type="text"
                    id="txn_id"
                    placeholder="PortPay ID"
                    disabled={request}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eAccNo">Account No</CFormLabel>
                  <CFormInput
                    name="acc_no"
                    type="text"
                    id="eAccNo"
                    placeholder="Account No"
                    disabled={request}
                  />
                </div>
                {user && user.sub_role != "User" ? (
                  <div className="mb-3">
                    <CFormLabel htmlFor="sMerchant">Select Merchant</CFormLabel>
                    <CFormSelect
                      name="merchant"
                      aria-label="Select Merchant"
                      id="sMerchant"
                      disabled={request}
                    >
                      <option></option>
                      {merchantOps}
                    </CFormSelect>
                  </div>
                ) : (
                  ""
                )}

                <div className="mb-3">
                  <CFormLabel htmlFor="sTxnType">Transaction Type</CFormLabel>
                  <CFormSelect
                    name="txntype"
                    aria-label="Select Merchant"
                    id="sTxnType"
                    disabled={request}
                  >
                    <option></option>
                    <option value="IMPS">IMPS</option>
                    <option value="NEFT">NEFT</option>
                    <option value="RTGS">RTGS</option>
                    <option value="UPI">UPI</option>
                  </CFormSelect>
                </div>
              </CCol>
              <CCol xs={12} md={12} lg={6}>
                {user && user.sub_role != "User" ? (
                  <div className="mb-3">
                    <CFormLabel htmlFor="sRoute">Select Route</CFormLabel>
                    <CFormSelect
                      name="route"
                      aria-label="Select Route"
                      id="sRoute"
                      disabled={request}
                    >
                      <option></option>
                      {bankOps}
                    </CFormSelect>
                  </div>
                ) : (
                  ""
                )}
                <div className="mb-3">
                  <CFormLabel htmlFor="sStatus">Select Status</CFormLabel>
                  <CFormSelect
                    name="status"
                    aria-label="Select Status"
                    id="sStatus"
                    disabled={request}
                  >
                    <option></option>
                    <option value="SUCCESS">SUCCESS</option>
                    <option value="PENDING">PENDING</option>
                    <option value="FAILED">FAILED</option>
                    <option value="HOLD">HOLD</option>
                    <option value="REFUND">REFUND</option>
                    <option value="A REFUND">A REFUND</option>
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="sStartDate">
                    Select Start Date
                  </CFormLabel>
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
                <div className="mb-3">
                  <CFormLabel htmlFor="rrn">RRN</CFormLabel>
                  <CFormInput
                    name="rrn"
                    type="text"
                    id="rrn"
                    placeholder="Enter RRN"
                    disabled={request}
                  />
                </div>
              </CCol>
            </CRow>
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
              {isDownload ? (
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
              ) : (
                <CButton
                  form="MyForm"
                  variant="outline"
                  color="success"
                  type="submit"
                  //onClick={handleSubmit}
                  disabled={request}
                >
                  {request ? (
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                  ) : (
                    ""
                  )}
                  Apply Filters
                </CButton>
              )}
            </div>
          </div>
        </CModalFooter>
      </CModal>
    </>
  );
};

export const showMpinDialog = (
  user,
  action,
  title,
  endpoint,
  isShowCopy = false
) => {
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
          endpoint,
          {
            api_token: user.api_token,
            mPin: form.eMpin.value,
          },
          setRequest,
          (data) => {
            setVisible(false);
            if (isShowCopy) {
              showCopyDialog(title, data);
            } else {
              okSuccessToast("Success", JSON.stringify(data));
            }
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

  return (
    <>
      {getGhostBtn(action + " " + title, password_png, (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>{action + " " + title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="ms-2">{errMsg}</p>
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
          <SubmitFormBtn
            txt={action + " " + title}
            request={request}
            setVisible={setVisible}
          />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const showHKeyDialog = (user, title) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [valid1, setValid1] = useState(false);

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
          title == "API TOKEN" ? ApiEndpoints.API_TOKEN : ApiEndpoints.HASH_KEY,
          {
            api_token: user.api_token,
            mPin: form.eMpin.value,
          },
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

  return (
    <>
      {getGhostFABtn(title, faLock, (e) => {
        setVisible(!visible);
      })}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalHeader>
          <CModalTitle>{title} Settings</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="text-center">
            {showMpinDialog(
              user,
              "Show",
              title,
              title == "API TOKEN"
                ? ApiEndpoints.API_TOKEN
                : ApiEndpoints.HASH_KEY,
              true
            )}
            <div className="m-1">OR</div>
            {showMpinDialog(
              user,
              "Change",
              title,
              title == "API TOKEN"
                ? ApiEndpoints.CHANGE_TOKEN
                : ApiEndpoints.CHANGE_KEY
            )}
          </div>
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
        </CModalFooter>
      </CModal>
    </>
  );
};

export const showUserDialog = (isNew, user, row, refetch) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [chargeType, setChargeType] = useState("PERCENTAGE");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    const data = isNew
      ? {
          api_token: user ? user.api_token : "",
          userId: row ? row.id : "",
          commercial_type: form.sType.value,
          name: form.eName.value,
          bname: form.eBName.value,
          email: form.eEmail.value,
          username: form.eMob.value,
          gstin: form.eGst.value,
          role:
            user && user.role == UserType.ADMIN && form.sUserType
              ? form.sUserType.value
              : UserType.USER,
          sub_role: form.sUserSubType.value,
        }
      : {
          api_token: user ? user.api_token : "",
          userId: row ? row.id : "",
          commercial_type: form.sType.value,
          name: form.eName.value,
          bname: form.eBName.value,
          email: form.eEmail.value,
          username: form.eMob.value,
          gstin: form.eGst.value,
        };
    postJsonData(
      isNew ? ApiEndpoints.ADD_USER : ApiEndpoints.EDIT_USER,
      data,
      setRequest,
      (data) => {
        setVisible(false);
        okSuccessToast("Success", data);
        if (refetch) refetch();
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };

  return (
    <>
      {isNew
        ? getGhostFABtn("Add New", faUser, (e) => {
            setVisible(!visible);
          })
        : getGhost24FAIconBtn(faEdit, "transparent", (e) => {
            setVisible(!visible);
          })}
      <CModal
        size="xl"
        className="modal_wid"
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
        <CModalHeader>
          <CModalTitle>{isNew ? "Add New User" : "Edit User"}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={6}>
                <div className="mb-3">
                  <CFormLabel htmlFor="eName">Name</CFormLabel>
                  <CFormInput
                    name="name"
                    type="text"
                    id="eName"
                    placeholder="Name"
                    disabled={request || (row && row.name)}
                    defaultValue={row != null ? row.name : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eBName">Business Name</CFormLabel>
                  <CFormInput
                    name="bname"
                    type="text"
                    id="eBName"
                    placeholder="Business Name"
                    disabled={request || (row && row.bname)}
                    defaultValue={row != null ? row.bname : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eEmail">Email ID</CFormLabel>
                  <CFormInput
                    name="email"
                    type="email"
                    id="eEmail"
                    placeholder="Email ID"
                    disabled={request || (row && row.email)}
                    defaultValue={row != null ? row.email : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eMob">Mobile Number</CFormLabel>
                  <CFormInput
                    name="mob"
                    type="number"
                    id="eMob"
                    placeholder="Mobile Number"
                    disabled={!isNew}
                    defaultValue={row != null ? row.username : ""}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="eGst">GSTIN</CFormLabel>
                  <CFormInput
                    name="gst"
                    type="text"
                    id="eGst"
                    placeholder="GSTIN"
                    disabled={request || (row && row.gst)}
                    defaultValue={row != null ? row.gst : ""}
                  />
                </div>
              </CCol>
              <CCol xs={12} md={12} lg={6}>
                {isNew &&
                user &&
                user.role == UserType.ADMIN &&
                user.sub_role == UserType.ADMIN ? (
                  <div className="mb-3">
                    <CFormLabel htmlFor="sUserType">User Type</CFormLabel>
                    <CFormSelect
                      aria-label="Select User Type"
                      id="sUserType"
                      required
                      disabled={request}
                    >
                      <option value="User">USER</option>
                      <option value="Admin">ADMIN</option>
                    </CFormSelect>
                    <CFormFeedback invalid>
                      Please select User Type
                    </CFormFeedback>
                  </div>
                ) : (
                  ""
                )}
                {isNew ? (
                  <div className="mb-3">
                    <CFormLabel htmlFor="sUserSubType">
                      User Sub Type
                    </CFormLabel>
                    <CFormSelect
                      aria-label="Select User Sub Type"
                      id="sUserSubType"
                      required
                      disabled={request}
                    >
                      <option value={UserType.USER}>MERCHANT</option>
                      <option value={UserType.SUB_ADMIN}>SUB ADMIN</option>
                      <option value={UserType.ACCOUNTS}>ACCOUNT</option>
                      <option value={UserType.ON_BOARDING}>ON BOARDING</option>
                      <option value={UserType.TECHNICAL}>TECHNICAL</option>
                    </CFormSelect>
                    <CFormFeedback invalid>
                      Please select User Sub Type
                    </CFormFeedback>
                  </div>
                ) : (
                  ""
                )}
                <div className="mb-3">
                  <CFormLabel htmlFor="sType">Charge Type</CFormLabel>
                  <CFormSelect
                    aria-label="Select Charge Type"
                    id="sType"
                    required
                    disabled={request}
                    onChange={(e) => {
                      setChargeType(e.target.value);
                    }}
                    defaultValue={row ? row.commercial_type : ""}
                  >
                    <option value="PERCENTAGE">PERCENTAGE</option>
                    <option value="FIXED">FIXED</option>
                  </CFormSelect>
                  <CFormFeedback invalid>
                    Please select Charge Type
                  </CFormFeedback>
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const EditCharges = ({ user, row, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [chargeType, setChargeType] = useState(
    row ? row.commercial_type : "PERCENTAGE"
  );
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    const dt =
      chargeType == "PERCENTAGE"
        ? {
            api_token: user ? user.api_token : "",
            userId: row ? row.id : "",
            min_size: form.eMinCharge.value,
            charge: form.ePerCharge.value,
          }
        : {
            api_token: user ? user.api_token : "",
            userId: row ? row.id : "",
            imps_slab1: form.eSlab1.value,
            imps_slab2: form.eSlab2.value,
            imps_slab3: form.eSlab3.value,
            neft_slab1: form.eSlab4.value,
            rtgs_slab1: form.eSlab5.value,
            upi_slab1: form.eSlab6.value,
          };
    postJsonData(
      ApiEndpoints.UPDATE_CHARGES,
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
      <SmOutlineButton
        txt="Charges"
        color="primary"
        faImg={faRupeeSign}
        onClick={() => setVisible(!visible)}
      />
      <CModal
        //size="lg"
        className="modal_wid"
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
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={12}>
                <h4>{chargeType} Charges</h4>
                <br />
                {chargeType == "PERCENTAGE" ? (
                  <>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eMinCharge">
                        Minimum Charge
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="min_charge"
                          type="number"
                          step="0.01"
                          id="eMinCharge"
                          placeholder="Minimum Charge"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.min_size : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="ePerCharge">
                        Percentage Charge
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          name="per_charge"
                          type="number"
                          step="0.01"
                          id="ePerCharge"
                          placeholder="Percentage Charge"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.charge : ""
                          )}
                        />
                        <CInputGroupText id="basic-addon1">%</CInputGroupText>
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                  </>
                ) : chargeType == "FIXED" ? (
                  <>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eSlab1">
                        {"IMPS (\u20b9 1 to \u20b9 1000) Charges"}
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="slab1"
                          type="number"
                          id="eSlab1"
                          placeholder="Slab 1"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.imps_slab1 : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eSlab2">
                        {"IMPS (\u20b9 1001 to \u20b9 25000) Charges"}
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="slab2"
                          type="number"
                          id="eSlab2"
                          placeholder="Slab 2"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.imps_slab2 : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eSlab3">
                        {"IMPS (\u20b9 25001 to \u20b9 200000) Charges"}
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="slab3"
                          type="number"
                          id="eSlab3"
                          placeholder="Slab 3"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.imps_slab3 : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eSlab4">NEFT Charges</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="slab4"
                          type="number"
                          id="eSlab4"
                          placeholder="Slab 4"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.neft_slab1 : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eSlab5">RTGS Charges</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="slab5"
                          type="number"
                          id="eSlab5"
                          placeholder="Slab 5"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.rtgs_slab1 : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="eSlab5">UPI Charges</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          {"\u20b9"}
                        </CInputGroupText>
                        <CFormInput
                          name="slab6"
                          type="number"
                          id="eSlab6"
                          placeholder="Slab 6"
                          disabled={request}
                          defaultValue={numIn2Dec(
                            row != null ? row.upi_slab1 : ""
                          )}
                        />
                        <CFormFeedback invalid>
                          Charges cannot be less then 0
                        </CFormFeedback>
                      </CInputGroup>
                    </div>
                  </>
                ) : (
                  <>No Commericial Found</>
                )}
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const EditWebHook = ({ user, row, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    postJsonData(
      ApiEndpoints.EDIT_WEBHOOK,
      {
        api_token: user ? user.api_token : "",
        userId: row ? row.id : "",
        url: form.eWeb.value,
      },
      setRequest,
      (data) => {
        setVisible(false);
        okSuccessToast("Success", data);
        if (refetch) refetch();
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };

  return (
    <>
      <SmOutlineButton
        txt="Webhook"
        color="success"
        faImg={faLink}
        onClick={() => setVisible(!visible)}
      />
      <CModal
        size="xl"
        className="modal_wid"
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
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={12}>
                <h4>Webhook</h4>
                <br />
                <div className="mb-3">
                  <CFormLabel htmlFor="eWeb">Webhook url</CFormLabel>
                  <CFormInput
                    name="web"
                    type="text"
                    id="eWeb"
                    placeholder="Webhook url"
                    disabled={request}
                    defaultValue={row != null ? row.url : ""}
                  />
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const ActionOnRequest = ({ user, title, data, refresh }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [validMPin, setValidMPin] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      if (validMPin) {
        postJsonData(
          ApiEndpoints.APPROVE_REJECT_REQ,
          {
            api_token: user.api_token,
            id: data.id,
            remark: form.remark.value,
            mpin: form.mpin.value,
            action: "APPROVE",
          },
          setRequest,
          (data) => {
            setVisible(false);
            okSuccessToast("Success", JSON.stringify(data));
            refresh();
          },
          (error) => {
            apiErrorToast(error);
            //okErrorToast("Error", error);
          }
        );
      }
    }
  };
  return (
    <>
      <Ghost24FAIconBtn
        img={faCheckCircle}
        color="green"
        onClick={(_) => setVisible(!visible)}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        {/* <CModalHeader>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader> */}
        <CModalBody>
          <div className="m-4">
            <div className="text-center">
              <CImage
                className="m-2"
                rounded
                src={logo_png}
                width={230}
                height={80}
                onClick={(e) => {
                  dispatch({ type: "set", sidebarShow: !sidebarShow });
                }}
              />
              <div className="m-4">
                <h4>
                  <b>Are you sure to Approve Request?</b>
                </h4>
                <h5>{`${data.bname} : ${rupeeIn2Dec(data.amount)}`}</h5>
              </div>
            </div>

            <CForm
              id="MyForm"
              className="row g-1 m-2 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <CFormLabel htmlFor="eRemark">Remark</CFormLabel>
                <CFormInput
                  name="remark"
                  type="text"
                  id="eRemark"
                  placeholder="Enter Remarks"
                  disabled={request}
                  required={false}
                />
              </div>
              <div className="mb-3" style={{ marginTop: 8 }}>
                <CFormLabel htmlFor="eMpin">MPIN</CFormLabel>
                <CInputGroup className="flex-sm-wrap mb-2">
                  <CFormInput
                    name="mpin"
                    type={toggle ? "number" : "password"}
                    id="eMpin"
                    required
                    size="sm"
                    min={1000}
                    max={9999}
                    placeholder="Enter MPIN"
                    style={{ backgroundColor: "#ECF2F7", padding: 8 }}
                    disabled={request}
                    onChange={(e) => {
                      var p = e.target.value;
                      setValidMPin(p.length >= 4);
                    }}
                    invalid={validated && !validMPin}
                    valid={validated && validMPin}
                    autoComplete={false}
                    autoCorrect={false}
                  />
                  <CButton
                    color="#ecf2f7"
                    className="toggle-btn"
                    variant="ghost"
                    onClick={(e) => {
                      setToggle(!toggle);
                    }}
                  >
                    <CImage
                      src={toggle ? eye_png : hidden_png}
                      style={{ width: 16, height: 16 }}
                    />
                  </CButton>
                </CInputGroup>
                {validated && !validMPin ? (
                  <p style={{ color: "#d93737", fontSize: 14 }}>
                    MPin must be at least 4 digit long
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3"></div>
            </CForm>
            <div className="d-flex justify-content-end m-2">
              <SubmitFormBtn request={request} setVisible={setVisible} />
            </div>
          </div>
        </CModalBody>
      </CModal>
    </>
  );
};

export const ShowWhiteListIps = ({ user, data, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [request, setRequest] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    postJsonData(
      ApiEndpoints.ADD_NEW_IP,
      {
        api_token: user ? user.api_token : "",
        userId: data ? data.id : "",
        ip: form.eIp.value,
      },
      setRequest,
      (data) => {
        setVisible(false);
        setVisibleAdd(false);
        okSuccessToast("Success", data);
        refetch();
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };
  const list = data && data.ip ? data.ip.split(",") : [];
  const columns = [
    {
      name: "  IP",
      button: true,
      grow: 4,
      minWidth: "70%",
      cell: (row) => row,
    },
    {
      name: "Delete",
      button: true,
      grow: 0,
      cell: (row) => (
        <CMIconButton
          faImg={faTrashAlt}
          color="#ff0000"
          onClick={(e) =>
            confirmationDialog(
              "Delete IP!!",
              `Do you want to delete\nIP : ${row}?`,
              ApiEndpoints.DELETE_IP,
              {
                api_token: user ? user.api_token : "",
                userId: data ? data.id : "",
                ip: row,
              },
              () => {
                setVisibleAdd(false);
                refetch();
              },
              false
            )
          }
        />
      ),
    },
  ];

  return (
    <>
      <SmOutlineButton
        txt="IP Whitelist"
        color="danger"
        faImg={faAddressBook}
        onClick={() => setVisible(!visible)}
      />
      <CModal
        //size="lg"
        className="modal_wid"
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
        <CModalBody>
          <CRow className="m-4">
            <CCol xs={12} md={12} lg={12}>
              <h4>Whitelist IPs</h4>
              <br />
              <div className="mb-3">
                <CMTable
                  columns={columns}
                  list={list}
                  progressPending={request}
                />
              </div>
            </CCol>
          </CRow>
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
          <SmOutlineButton
            txt="Add New IP"
            color="success"
            faImg={faLink}
            onClick={(e) => {
              setVisibleAdd(true);
              setVisible(false);
            }}
          />
        </CModalFooter>
      </CModal>
      <CModal
        //size="xl"
        className="modal_wid"
        alignment="center"
        visible={visibleAdd}
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
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={12}>
                <h4>Add New Whitelist IP</h4>
                <br />
                <div className="mb-3">
                  <CFormLabel htmlFor="eIp">New IP Address</CFormLabel>
                  <CFormInput
                    name="ip"
                    type="text"
                    id="eIp"
                    placeholder="Enter IP"
                    disabled={request}
                  />
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const EditRoutes = ({ user, row, refetch, data }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
  const [defaultValues, setDefaultValues] = useState([
    "",
    row.route,
    row.route1,
    row.route2,
    row.neft_route,
    row.rtgs_route,
    row.upi_route,
  ]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    postJsonData(
      ApiEndpoints.UPDATE_ROUTES,
      {
        api_token: user ? user.api_token : "",
        userId: row ? row.id : "",
        route: form.route1.value,
        route1: form.route2.value,
        route2: form.route3.value,
        neft_route: form.neft_route.value,
        rtgs_route: form.rtgs_route.value,
        upi_route: form.upi_route.value,
      },
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
  //const list = data && data.ip ? data.ip.split(",") : [];
  const RouteSelector = ({ id, defaultValue, index }) => {
    let ops = [];
    if (data) {
      ops = data.map((item) => {
        return (
          <option value={item ? item.route_code : ""}>
            {item ? item.bank : ""}
          </option>
        );
      });
    }
    return (
      <>
        <CFormSelect
          aria-label="Select Route"
          id={id}
          required
          disabled={request}
          defaultValue={defaultValues[index]}
          onChange={(e) => {
            if (index) defaultValues[index] = e.target.value;
          }}
        >
          <option></option>
          {ops}
        </CFormSelect>
        <CFormFeedback invalid>Please select route</CFormFeedback>
      </>
    );
  };
  return (
    <>
      <SmOutlineButton
        txt="Routes"
        color="warning"
        faImg={faNetworkWired}
        onClick={() => setVisible(!visible)}
      />
      <CModal
        //size="lg"
        className="modal_wid"
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
        <CModalBody>
          <div className="m-4">
            <h4>Routes</h4>
            <br />
            <CForm
              id="MyForm"
              className="row g-1 m-2 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="mb-1">
                <CFormLabel htmlFor="eSlab1">
                  {"IMPS (\u20b9 1 to \u20b9 1000) Route"}
                </CFormLabel>
                <CInputGroup className="mb-3">
                  <RouteSelector
                    id="route1"
                    defaultValue={row ? row.route : ""}
                    index={1}
                  />
                </CInputGroup>
              </div>
              <div className="mb-1">
                <CFormLabel htmlFor="eSlab2">
                  {"IMPS (\u20b9 1001 to \u20b9 25000) Route"}
                </CFormLabel>
                <CInputGroup className="mb-3">
                  <RouteSelector
                    id="route2"
                    defaultValue={row ? row.route1 : ""}
                    index={2}
                  />
                </CInputGroup>
              </div>
              <div className="mb-1">
                <CFormLabel htmlFor="eSlab3">
                  {"IMPS (\u20b9 25001 to \u20b9 200000) Route"}
                </CFormLabel>
                <CInputGroup className="mb-3">
                  <RouteSelector
                    id="route3"
                    defaultValue={row ? row.route2 : ""}
                    index={3}
                  />
                </CInputGroup>
              </div>
              <div className="mb-1">
                <CFormLabel htmlFor="eSlab4">NEFT Route</CFormLabel>
                <CInputGroup className="mb-3">
                  <RouteSelector
                    id="neft_route"
                    defaultValue={row ? row.neft_route : ""}
                    index={4}
                  />
                </CInputGroup>
              </div>
              <div className="mb-1">
                <CFormLabel htmlFor="eSlab5">RTGS Route</CFormLabel>
                <CInputGroup className="mb-3">
                  <RouteSelector
                    id="rtgs_route"
                    defaultValue={row ? row.rtgs_route : ""}
                    index={5}
                  />
                </CInputGroup>
              </div>
              <div className="mb-1">
                <CFormLabel htmlFor="eSlab5">UPI Route</CFormLabel>
                <CInputGroup className="mb-3">
                  <RouteSelector
                    id="upi_route"
                    defaultValue={row ? row.upi_route : ""}
                    index={6}
                  />
                </CInputGroup>
              </div>
            </CForm>
          </div>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const EditBankCommercials = ({ user, row, refetch }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [validated, setValidated] = useState(false);
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
      id: row ? row.id : "",
      bank: form.eBankName.value,
      route_code: form.eBankCode.value,
      imps_slab1: form.eSlab1.value,
      imps_slab2: form.eSlab2.value,
      imps_slab3: form.eSlab3.value,
      neft_slab1: form.eSlab4.value,
      rtgs_slab1: form.eSlab5.value,
      upi_slab1: form.eSlab6.value,
    };
    postJsonData(
      !row ? ApiEndpoints.NEW_BANK : ApiEndpoints.EDIT_BANK_COMMERCIALS,
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
      {!row ? (
        getGhostFABtn(" Add Bank", faPlus, (e) => setVisible(!visible))
      ) : (
        <CMIconButton faImg={faEdit} onClick={() => setVisible(!visible)} />
      )}
      <CModal
        //size="lg"
        className="modal_wid"
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
        <CModalBody>
          <CForm
            id="MyForm"
            className="row g-1 m-2 mt-4 needs-validation"
            noValidate
            //validated={validated}
            onSubmit={handleSubmit}
          >
            <CRow className="m-2">
              <CCol xs={12} md={12} lg={12}>
                <h4>
                  {row
                    ? `Edit Bank \u0026 Commercials`
                    : `Add New Bank \u0026 Commercials`}
                </h4>
                <br />
                <>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eBankName">Bank Name</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="bank_name"
                        type="text"
                        id="eBankName"
                        required
                        placeholder="Enter Bank Name"
                        disabled={request}
                        defaultValue={row ? row.bank : ""}
                      />
                      <CFormFeedback invalid>Bank Name Required</CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eBankCode">Bank Code</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        name="bank_code"
                        type="text"
                        id="eBankCode"
                        required
                        placeholder="Enter Bank Code"
                        disabled={request}
                        defaultValue={row ? row.route_code : ""}
                      />
                      <CFormFeedback invalid>Bank Code Required</CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eSlab1">
                      {"IMPS (\u20b9 1 to \u20b9 1000) Charges"}
                    </CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">
                        {"\u20b9"}
                      </CInputGroupText>
                      <CFormInput
                        name="slab1"
                        type="number"
                        step="0.01"
                        id="eSlab1"
                        placeholder="Slab 1"
                        disabled={request}
                        defaultValue={numIn2Dec(
                          row != null ? row.imps_slab1 : ""
                        )}
                      />
                      <CFormFeedback invalid>
                        Charges cannot be less then 0
                      </CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eSlab2">
                      {"IMPS (\u20b9 1001 to \u20b9 25000) Charges"}
                    </CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">
                        {"\u20b9"}
                      </CInputGroupText>
                      <CFormInput
                        name="slab2"
                        type="number"
                        step="0.01"
                        id="eSlab2"
                        placeholder="Slab 2"
                        disabled={request}
                        defaultValue={numIn2Dec(
                          row != null ? row.imps_slab2 : ""
                        )}
                      />
                      <CFormFeedback invalid>
                        Charges cannot be less then 0
                      </CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eSlab3">
                      {"IMPS (\u20b9 25001 to \u20b9 200000) Charges"}
                    </CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">
                        {"\u20b9"}
                      </CInputGroupText>
                      <CFormInput
                        name="slab3"
                        type="number"
                        step="0.01"
                        id="eSlab3"
                        placeholder="Slab 3"
                        disabled={request}
                        defaultValue={numIn2Dec(
                          row != null ? row.imps_slab3 : ""
                        )}
                      />
                      <CFormFeedback invalid>
                        Charges cannot be less then 0
                      </CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eSlab4">NEFT Charges</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">
                        {"\u20b9"}
                      </CInputGroupText>
                      <CFormInput
                        name="slab4"
                        type="number"
                        step="0.01"
                        id="eSlab4"
                        placeholder="Slab 4"
                        disabled={request}
                        defaultValue={numIn2Dec(
                          row != null ? row.neft_slab1 : ""
                        )}
                      />
                      <CFormFeedback invalid>
                        Charges cannot be less then 0
                      </CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eSlab5">RTGS Charges</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">
                        {"\u20b9"}
                      </CInputGroupText>
                      <CFormInput
                        name="slab5"
                        type="number"
                        step="0.01"
                        id="eSlab5"
                        placeholder="Slab 5"
                        disabled={request}
                        defaultValue={numIn2Dec(
                          row != null ? row.rtgs_slab1 : ""
                        )}
                      />
                      <CFormFeedback invalid>
                        Charges cannot be less then 0
                      </CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor="eSlab5">UPI Charges</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">
                        {"\u20b9"}
                      </CInputGroupText>
                      <CFormInput
                        name="slab6"
                        type="number"
                        step="0.01"
                        id="eSlab6"
                        placeholder="Slab 6"
                        disabled={request}
                        defaultValue={numIn2Dec(
                          row != null ? row.upi_slab1 : ""
                        )}
                      />
                      <CFormFeedback invalid>
                        Charges cannot be less then 0
                      </CFormFeedback>
                    </CInputGroup>
                  </div>
                </>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <SubmitFormBtn request={request} setVisible={setVisible} />
        </CModalFooter>
      </CModal>
    </>
  );
};

export const CheckTxnStatus = ({ user, data }) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [res, setRes] = useState();
  useEffect(() => {
    if (visible) {
      postJsonData(
        ApiEndpoints.CHECK_TXN_STATUS,
        {
          api_token: user ? user.api_token : "NA",
          id: data ? data.id : "NA",
        },
        setRequest,
        (data) => {
          setRes(data);
        },
        (error) => {
          setVisible(false);
          apiErrorToast(error);
        }
      );
    }
    return () => {};
  }, [visible]);

  return (
    <>
      <SmOutlineButton
        txt="&nbsp; Check Status &nbsp;"
        color="primary"
        faImg={faSync}
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
          } else {
            //setVisible(false);
          }
        }}
        scrollable
      >
        <CModalBody className="m-2">
          <div className="text-center m-4">
            <h3 className="m-4">Check Status</h3>
            <div className="m-4">
              {request ? (
                <CSpinner component="span" size="lg" aria-hidden="true" />
              ) : (
                <p>{JSON.stringify(res)}</p>
              )}
            </div>
            <CButton
              className="mt-2"
              color="primary"
              onClick={() => setVisible(false)}
              disabled={request}
            >
              <h6>
                <span style={{ color: "white" }}>&emsp;Ok&emsp;</span>
              </h6>
            </CButton>
          </div>
        </CModalBody>
      </CModal>
    </>
  );
};

export const ShowWelcomeDialog = ({ user }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <CModal
        size="lg"
        //className="modal_2"
        alignment="center"
        visible={visible}
        scrollable
        onDismiss={() => {
          setVisible(false);
        }}
      >
        <CModalBody style={{ padding: 0 }}>
          <CImage rounded src={welcome_jpg} width="100%" height="431px" />
        </CModalBody>
        {/* <CModalFooter>
          <CButton
            variant="ghost"
            color="secondary"
            onClick={() => setVisible(false)}
          >
            Close
          </CButton>
        </CModalFooter> */}
      </CModal>
    </>
  );
};

export const ForgotPasswordModal = () => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [mob, setMob] = useState();
  const [isMobValid, setIsMobValid] = useState();

  useEffect(() => {
    if (!visible) {
      setMob("");
      setIsMobValid(false);
    }
    return () => {};
  }, [visible]);

  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    postJsonData(
      ApiEndpoints.FORGOT_PASSWORD,
      {
        username: mob,
      },
      setRequest,
      (data) => {
        setVisible(false);
        okSuccessToast("Success", data);
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };

  return (
    <>
      <CButton
        size="sm"
        color="primary"
        variant="ghost"
        onClick={(e) => setVisible(!visible)}
        disabled={request}
      >
        <CImage className="me-2" src={forgot_png} width={16} height={16} />
        Forgot Password
      </CButton>
      <CModal
        className="modal_wid"
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
        <CModalBody className="p-4">
          <div>
            <h3 className="text-center mb-4">Forgot Password?</h3>

            <div className="mb-3">
              <CFormLabel htmlFor="eMob">Mobile Number</CFormLabel>
              <CFormInput
                name="mob"
                type="number"
                id="eMob"
                placeholder="Enter Mobile Number"
                defaultValue={mob}
                minLength={10}
                maxLength={10}
                onChange={(e) => {
                  const m = e.target.value;
                  setIsMobValid(m.length == 10);
                  setMob(m);
                }}
                valid={isMobValid}
                invalid={!isMobValid}
              />
              <CFormFeedback invalid>
                Please enter Valid Mobile Number
              </CFormFeedback>
            </div>
          </div>
        </CModalBody>
        <CModalFooter className="px-3">
          <CButton
            variant="ghost"
            color="secondary"
            onClick={() => setVisible(false)}
            disabled={request}
          >
            Close
          </CButton>
          <CButton
            variant="outline"
            color="success"
            type="button"
            onClick={handleSubmit1}
            disabled={request}
          >
            {request ? (
              <CSpinner component="span" size="sm" aria-hidden="true" />
            ) : (
              ""
            )}
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
