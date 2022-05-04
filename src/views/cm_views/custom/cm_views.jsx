import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilDelete } from "@coreui/icons";
import DataTable from "react-data-table-component";
import { customStyles } from "./cm_table_styles";
import { get } from "../../../networks/ApiController";
import { json2Csv } from "src/utils/CsvFIleUtils";
import Swal from "sweetalert2";
import rupee_png from "src/assets/images/icons/rupee.png";
import neft_png from "src/assets/images/icons/neft_1.png";
import imps_png from "src/assets/images/icons/imps.png";
import warning_png from "src/assets/images/icons/warning.png";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faRemoveFormat,
  faRupeeSign,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { apiErrorToast } from "./cm_toast";
import logo_png from "src/assets/images/logo.png";
import BrandLogo from "src/commons/components/BrandLogo";

export const getButton = (txt, img, onClick) => {
  return (
    <CButton
      size="sm"
      className="m-1"
      color="primary"
      variant="outline"
      onClick={(e) => onClick(e)}
    >
      <CImage className="me-2 mb-1" src={img} width={16} height={16} />
      {txt}
    </CButton>
  );
};

export const SmOutlineButton = ({
  txt,
  color,
  onClick,
  faImg,
  size,
  variant = "",
  txtColor = "",
}) => {
  return (
    <CButton
      size={size ? size : "sm"}
      className="m-1 px-4 py-2"
      color={color}
      variant={variant ? variant : ""}
      onClick={onClick}
    >
      <FontAwesomeIcon
        size="sm"
        icon={faImg}
        color={txtColor}
        className="me-2"
      />
      <span className="fw-bold" style={{ color: txtColor }}>
        {txt}
      </span>
    </CButton>
  );
};

export const CMIconButton = ({ faImg, color, onClick }) => {
  return (
    <CButton
      size="sm"
      className="m-1 my_btn_2"
      color="transparent"
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <FontAwesomeIcon
        icon={faImg}
        color={color ? color : "#4093f7"}
        className="me-2"
      />
    </CButton>
  );
};

export const getExportButton = (
  fileName,
  endpoint,
  txt = "Export",
  icon = faFileExport
) => {
  const [request, setRequest] = useState(false);
  const onClick = (e) => {
    get(
      endpoint,
      setRequest,
      (data) => {
        json2Csv(fileName, data);
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  };

  return (
    <CButton
      key={fileName}
      size="sm"
      className="m-1 my_btn"
      color="primary"
      variant="ghost"
      onClick={onClick}
      disabled={request}
    >
      {request ? (
        <CSpinner
          component="span"
          size="sm"
          aria-hidden="true"
          className="me-2"
        />
      ) : (
        ""
      )}
      <FontAwesomeIcon icon={icon} color="white" className="me-2" />
      <span style={{ color: "white" }}>{txt}</span>
    </CButton>
  );
};

export const UploadFile = ({}) => {
  return <div></div>;
};

export const getFloatValue = (user, title, endpoint) => {
  const [request, setRequest] = useState(false);
  const [value, setValue] = useState(title);
  const onClick = (e) => {
    if (value == title) {
      get(
        endpoint + "?api_token=" + (user ? user.api_token : ""),
        setRequest,
        (data) => {
          setValue(data);
        },
        (error) => {
          Swal.fire("Error", error, "error");
        }
      );
    } else {
      setValue(title);
    }
  };

  return (
    <CButton
      key={title}
      size="sm"
      className="m-1"
      color="primary"
      variant="ghost"
      onClick={onClick}
      disabled={request}
    >
      {request ? (
        <CSpinner
          component="span"
          size="sm"
          aria-hidden="true"
          className="me-2"
        />
      ) : (
        ""
      )}
      <CImage className="me-2 mb-1" src={rupee_png} width={16} height={16} />
      {value && !isNaN(value) ? parseFloat(value).toFixed(2) : title}
    </CButton>
  );
};

export const getDataBtn = (
  user,
  title,
  endpoint,
  isVisible = true,
  onDataSetListener,
  isFetchOnly = false
) => {
  const [request, setRequest] = useState(false);
  const [firstFetch, setFirstFetch] = useState(false);
  const [value, setValue] = useState(title);
  const onClick = (e) => {
    get(
      endpoint + "?api_token=" + (user ? user.api_token : ""),
      setRequest,
      (data) => {
        setValue(data);
        if (onDataSetListener != null) onDataSetListener(data);
      },
      (error) => {
        Swal.fire("Error", error, "error");
      }
    );
    // if (value == title) {

    // } else {
    //   setValue(title);
    // }
  };
  if (!firstFetch && (isVisible || isFetchOnly)) {
    setFirstFetch(true);
    setTimeout(() => {
      onClick(null);
    }, 100);
  }
  return isVisible ? (
    <CButton
      key={title}
      size="md"
      className="m-1 px-4 py-2"
      color="primary"
      variant="outline"
      onClick={onClick}
      disabled={request}
    >
      {request ? (
        <CSpinner
          component="span"
          size="sm"
          aria-hidden="true"
          className="me-2"
        />
      ) : (
        ""
      )}

      <span className="fw-bold">
        {title}
        <br />
        <FontAwesomeIcon icon={faRupeeSign} className="me-2" />
        {value && !isNaN(value) ? (
          <span> {parseFloat(value).toFixed(2)}</span>
        ) : (
          "NA"
        )}
      </span>
    </CButton>
  ) : null;
};

export const getSpinnerButton = (txt, img, req, onClick) => {
  return (
    <CButton
      key={txt}
      size="sm"
      className="m-1"
      color="primary"
      variant="outline"
      onClick={onClick}
      disabled={req}
    >
      {req ? (
        <CSpinner
          component="span"
          size="sm"
          aria-hidden="true"
          className="me-2"
        />
      ) : (
        ""
      )}
      <CImage className="me-2 mb-1" src={img} width={16} height={16} />
      Export CSV
    </CButton>
  );
};

export const getGhostBtn = (txt, img, onClick) => {
  return (
    <CButton
      key={txt}
      className="m-1"
      color="primary"
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <CImage className="me-2 mb-1" src={img} width={16} height={16} />
      {txt}
    </CButton>
  );
};

export const getGhostFABtn = (txt, img, onClick) => {
  return (
    <CButton
      key={txt}
      className="m-1"
      // color="primary"
      variant="outline"
      onClick={(e) => onClick(e)}
    >
      <FontAwesomeIcon icon={img} className="me-2" />
      <span>{txt}</span>
    </CButton>
  );
};

export const GhostFABtn = ({ txt, img, onClick, hide = false }) => {
  return (
    <CButton
      hidden={hide}
      key={txt}
      className="m-1 my_btn"
      color="primary"
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <FontAwesomeIcon icon={img} color="white" className="me-2" />
      <span style={{ color: "white" }}>{txt}</span>
    </CButton>
  );
};

export const SubmitButton = ({ txt = "Submit", request }) => {
  return (
    <CButton
      form="MyForm"
      variant="outline"
      color="success"
      type="submit"
      disabled={request}
    >
      {request ? (
        <CSpinner component="span" size="sm" aria-hidden="true" />
      ) : (
        ""
      )}
      {txt}
    </CButton>
  );
};

export const PortPayLogo = () => {
  return <CImage src={logo_png} width={114} height={40} onClick={(e) => {}} />;
};

export const SubmitFormBtn = ({ txt, request, setVisible }) => {
  return (
    <div className="d-flex justify-content-between" style={{ width: "100%" }}>
      <BrandLogo />
      <div>
        <CButton
          className="me-2"
          variant="ghost"
          color="secondary"
          onClick={() => setVisible(false)}
          disabled={request}
        >
          Close
        </CButton>
        <SubmitButton txt={txt} request={request} />
      </div>
    </div>
  );
};

export const CloseFormBtn = ({ txt = "Close", setVisible }) => {
  return (
    <div className="d-flex justify-content-between" style={{ width: "100%" }}>
      <CImage src={logo_png} width={114} height={40} onClick={(e) => {}} />
      <div>
        <CButton
          className="me-2"
          variant="ghost"
          color="secondary"
          onClick={() => setVisible(false)}
        >
          {txt}
        </CButton>
      </div>
    </div>
  );
};

export const getGhost24IconBtn = (img, color, onClick) => {
  return (
    <CButton
      size="sm"
      className="m-1 my_btn_2"
      color="transparent"
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <CImage src={img} width={28} height={28} />
    </CButton>
  );
};

export const getGhost24FAIconBtn = (img, color, onClick, hide = false) => {
  return (
    <CButton
      hidden={hide}
      size="sm"
      className="m-1 my_btn_2"
      color="transparent"
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <FontAwesomeIcon
        icon={img}
        color={color == "transparent" ? "#4093f7" : color}
        size="lg"
      />
    </CButton>
  );
};

export const Ghost24FAIconBtn = ({ img, color, onClick }) => {
  return (
    <CButton
      size="sm"
      className="m-1 my_btn_2"
      color="transparent"
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <FontAwesomeIcon
        icon={img}
        color={color == "transparent" ? "#4093f7" : color}
        size="lg"
      />
    </CButton>
  );
};

export const getGhost24Btn = (txt, img, color, onClick) => {
  return (
    <CButton
      size="sm"
      className="m-1"
      color={color}
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <CImage className="me-1 mb-1" src={img} width={24} height={24} />
      {txt}
    </CButton>
  );
};

export const getGhost28Btn = (txt, img, color, onClick) => {
  return (
    <CButton
      size="sm"
      className="m-1"
      color={color}
      variant="ghost"
      onClick={(e) => onClick(e)}
    >
      <CImage className="me-2 mb-1" src={img} width={28} height={28} />
      {txt}
    </CButton>
  );
};

export const getTxnIcon = (type) => {
  if (type) {
    if (type == "IMPS" || type == "NEFT") {
      return (
        <CImage
          className="me-2 mb-1"
          src={type == "IMPS" ? imps_png : type == "NEFT" ? neft_png : null}
          rounded
          width={90}
          height={30}
        />
      );
    }
    return (
      <i>
        <h4 style={{ color: "gray" }}>
          <b>{type}</b>
        </h4>
      </i>
    );
  }
  return (
    <CImage
      className="me-2 mb-1"
      src={warning_png}
      rounded
      width={20}
      height={20}
    />
  );
};

export const getPage = (title, img, actions, body) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const col_buttons = actions
    ? actions.map((action) => {
        return action ? <CCol>{action}</CCol> : null;
      })
    : [];
  return (
    <>
      <CRow key={title}>
        <CCol>
          <CCard>
            <CCardHeader style={{ backgroundColor: "#1692ff", color: "white" }}>
              <CRow
                xs={{ cols: "auto" }}
                className="justify-content-between align-items-center ps-4"
              >
                <CCol>
                  <CRow
                    xs={{ cols: "auto" }}
                    className=" align-items-center text-center ms-1 me-1 mt-4 mb-4"
                  >
                    {/* <CCol className="pb-1">
                      <CImage
                        rounded
                        src={img}
                        width={36}
                        height={36}
                        onClick={(e) => {
                          dispatch({ type: "set", sidebarShow: !sidebarShow });
                        }}
                      />
                    </CCol> */}
                    <CCol className="pt-2">
                      <h4
                        onClick={(e) => {
                          dispatch({ type: "set", sidebarShow: !sidebarShow });
                        }}
                      >
                        {title}
                      </h4>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol>
                  <CRow
                    xs={{ cols: "auto" }}
                    className="justify-content-end align-items-center g-2"
                  >
                    {col_buttons}
                  </CRow>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>{body}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export const CMPage = ({ title, actions, children }) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const col_buttons = actions
    ? actions.map((action) => {
        return action ? <CCol>{action}</CCol> : null;
      })
    : [];
  return (
    <>
      <CRow key={title}>
        <CCol>
          <CCard>
            <CCardHeader style={{ backgroundColor: "#1692ff", color: "white" }}>
              <CRow
                xs={{ cols: "auto" }}
                className="justify-content-between align-items-center ps-4 "
              >
                <CCol>
                  <CRow
                    xs={{ cols: "auto" }}
                    className=" align-items-center text-center ms-1 me-4 mt-4 mb-4"
                  >
                    {/* <CCol className="pb-1">
                      <CImage
                        rounded
                        src={img}
                        width={36}
                        height={36}
                        onClick={(e) => {
                          dispatch({ type: "set", sidebarShow: !sidebarShow });
                        }}
                      />
                    </CCol> */}
                    <CCol className="pt-2">
                      <h4
                        onClick={(e) => {
                          dispatch({ type: "set", sidebarShow: !sidebarShow });
                        }}
                      >
                        {title}
                      </h4>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol>
                  <CRow
                    xs={{ cols: "auto" }}
                    className="justify-content-end align-items-center"
                  >
                    {col_buttons}
                  </CRow>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>{children}</CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export const SimpleCard = ({ title, actions, children }) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const col_buttons = actions
    ? actions.map((action) => {
        return action ? <CCol>{action}</CCol> : null;
      })
    : [];
  return (
    <>
      <CRow key={title} className="p-4">
        <CCol>
          <CCard style={{ backgroundColor: "transparent", border: "none" }}>
            {children}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export const getTable = (
  columns,
  list,
  setList,
  ExpandedComponent,
  filterFunc,
  progressPending = false
) => {
  const [SearchInput, setSearchInput] = useState();

  useEffect(() => {
    console.log(SearchInput);
    if (SearchInput) {
      const filterData = list.filter((item) => filterFunc(item, SearchInput));
      setList(filterData);
    }
    //alert("search set list : " + SearchInput);
    return () => {};
  }, [SearchInput]);

  const filterInput = (
    <CInputGroup className="flex-sm-wrap mb-2" size="sm">
      <CInputGroupText id="addon-wrapping">Search</CInputGroupText>
      <CFormInput
        placeholder="..."
        aria-label="Search"
        aria-describedby="addon-wrapping"
        value={SearchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <CButton
        className="m-1"
        color="danger"
        variant="ghost"
        onClick={(e) => {
          setSearchInput("");
        }}
      >
        <CIcon className="me-2" icon={cilDelete} size="l" />
      </CButton>
    </CInputGroup>
  );
  return (
    <CCol className="m-3">
      <DataTable
        columns={columns}
        data={list}
        subHeader
        subHeaderComponent={filterInput}
        expandableRowsComponent={ExpandedComponent}
        expandOnRowClicked={ExpandedComponent ? true : false}
        expandableRows={ExpandedComponent ? true : false}
        pagination
        striped
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        progressPending={progressPending}
      />
    </CCol>
  );
};

export const getSearchInput = (list, setList, filterFunc) => {
  const [SearchInput, setSearchInput] = useState();
  useEffect(() => {
    console.log(SearchInput);
    if (SearchInput) {
      const filterData = list.filter((item) => filterFunc(item, SearchInput));
      setList(filterData);
    } else {
      setList(list);
    }
    return () => {};
  }, [SearchInput]);
  const filterInput = (
    <div className="d-flex text-center">
      <CInputGroup className="d-flex" size="sm">
        <CFormInput
          id="src"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="addon-wrapping"
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <CButton
          style={{ backgroundColor: "white" }}
          color="danger"
          variant="outline"
          onClick={(e) => {
            setSearchInput("");
            setList(list);
          }}
        >
          Clear
        </CButton>
      </CInputGroup>
    </div>
  );
  return filterInput;
};

export const TxnFiltersHeaders = ({ filterFunc }) => {
  const [txnId, setTxnId] = useState();
  const [clientId, setClientId] = useState();
  const [rrn, setRrn] = useState();

  const onApplyClicked = () => {
    filterFunc(txnId, clientId, rrn);
  };

  const filterInput = (
    <div className="d-flex text-center m-1">
      <CRow className="g-2">
        <CCol xs="auto">
          <CFormInput
            id="txnId"
            size="sm"
            placeholder="Txn ID"
            aria-label="Txn ID"
            aria-describedby="addon-wrapping"
            value={txnId}
            onChange={(e) => {
              setTxnId(e.target.value);
            }}
          />
        </CCol>
        <CCol xs="auto">
          <CFormInput
            id="cId"
            size="sm"
            placeholder="Client ID"
            aria-label="Client ID"
            aria-describedby="addon-wrapping"
            value={clientId}
            onChange={(e) => {
              setClientId(e.target.value);
            }}
          />
        </CCol>
        <CCol xs="auto">
          <CFormInput
            id="rrn"
            size="sm"
            placeholder="RRN"
            aria-label="RRN"
            aria-describedby="addon-wrapping"
            value={rrn}
            onChange={(e) => {
              setRrn(e.target.value);
            }}
          />
        </CCol>
        <CCol xs="auto">
          <CButton
            size="sm"
            className="ms-1"
            style={{ backgroundColor: "white" }}
            color="success"
            variant="outline"
            onClick={(e) => onApplyClicked()}
          >
            Apply
          </CButton>
        </CCol>
        <CCol xs="auto">
          <CButton
            size="sm"
            className="ms-1"
            style={{ backgroundColor: "white" }}
            color="danger"
            variant="outline"
            onClick={(e) => {
              setTxnId("");
              setClientId("");
              setRrn("");
              setTimeout(() => {
                filterFunc("", "", "");
              }, 100);
            }}
          >
            X
          </CButton>
        </CCol>
      </CRow>
    </div>
  );
  return filterInput;
};

export const getPaginateTable = (
  columns,
  list,
  setList,
  ExpandedComponent,
  filterFunc,
  progressPending = false,
  totalRows,
  handlePerRowsChange,
  handlePageChange,
  tableStyle = customStyles,
  isPaginateReq = true
) => {
  return (
    <CCol className="ms-3 me-3">
      <DataTable
        columns={columns}
        data={list}
        // subHeader
        // subHeaderComponent={filterInput}
        expandableRowsComponent={ExpandedComponent}
        expandOnRowClicked={ExpandedComponent ? true : false}
        expandableRows={ExpandedComponent ? true : false}
        pagination
        paginationServer={isPaginateReq}
        striped
        customStyles={tableStyle}
        highlightOnHover
        pointerOnHover
        paginationTotalRows={totalRows}
        progressPending={progressPending}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        dense={false}
      />
    </CCol>
  );
};

export const CMPaginateTable = (
  columns,
  list,
  ExpandedComponent,
  progressPending = false,
  totalRows,
  handlePerRowsChange,
  handlePageChange
) => {
  return (
    <CCol className="ms-3 me-3">
      <DataTable
        columns={columns}
        data={list}
        // subHeader
        // subHeaderComponent={filterInput}
        expandableRowsComponent={ExpandedComponent}
        expandOnRowClicked={ExpandedComponent ? true : false}
        expandableRows={ExpandedComponent ? true : false}
        pagination
        paginationServer
        striped
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        paginationTotalRows={totalRows}
        progressPending={progressPending}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        dense={false}
      />
    </CCol>
  );
};

export const CMTable = ({ columns, list, progressPending = false }) => {
  return (
    <CCol className="ms-3 me-3">
      <DataTable
        columns={columns}
        data={list}
        striped
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        progressPending={progressPending}
        dense={false}
      />
    </CCol>
  );
};

export const expandableCard = (body) => {
  return (
    <CCard
      style={{
        marginBottom: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontSize: 14,
        backgroundColor: "rgb(237, 250, 255)", //"#d9f5ff55",//"#d9f5ff",
        color: "#2d2e2e",
      }}
    >
      <CCardBody>{body}</CCardBody>
    </CCard>
  );
};

export const IconPng = ({
  img,
  height = "20px",
  width = "20px",
  className = { className },
}) => {
  return (
    <CImage src={img} height={height} width={width} className={className} />
  );
};
