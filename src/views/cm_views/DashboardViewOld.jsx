import React, { useEffect, useMemo, useRef, useState } from "react";
import { getGhostFABtn, CMPage } from "src/views/cm_views/custom/cm_views";
import analysis_png from "src/assets/images/icons/analysis.png";
import refresh_png from "src/assets/images/icons/refresh.png";
import bell_png from "src/assets/images/icons/bell.png";
import {
  CButton,
  CCol,
  CContainer,
  CFormCheck,
  CRow,
  CSpinner,
} from "@coreui/react";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import { useAx, get } from "src/networks/ApiController";
import { ReportType, UserType } from "src/commons/Constants";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { apiErrorToast } from "./custom/cm_toast";
import { getFloatValue } from "./custom/cm_views";
import { getDataBtn } from "./custom/cm_views";
import { useHistory } from "react-router";
import { faSync } from "@fortawesome/free-solid-svg-icons";

var todayReport,
  thisMonthReport,
  lastMonthReport = null;
var type = ReportType.TODAY;

function setType(tp) {
  type = tp;
}

const onEscape = function (action) {
  window &&
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        action();
      }
    });
};

const DashboardView = ({ user }) => {
  //const [type, setType] = useState(ReportType.TODAY);
  const [isReportFetchedOnce, setIsRecordFetched] = useState(false);
  const [reports, setReports] = useState();
  const [reportsLoading, setReportsLoading] = useState(false);
  const checkRef = useRef();
  onEscape(() => {
    checkRef.current.blur();
  });
  const history = useHistory();
  const getUrl = () => {
    return `${ApiEndpoints.TRANSACTION_REPORT}?api_token=${user ? user.api_token : ""
      }&type=${type}`;
  };

  function getReports() {
    console.log("mydash getReports called");
    get(
      getUrl(),
      setReportsLoading,
      (data) => {
        console.log("mydash getReports result");
        if (type == ReportType.TODAY) {
          todayReport = data;
        } else if (type == ReportType.THIS_MONTH) {
          thisMonthReport = data;
        } else if (type == ReportType.LAST_MONTH) {
          lastMonthReport = data;
        }
        setReports(data);
      },
      (error) => {
        console.log("mydash getReports error");
        apiErrorToast(error, history);
      }
    );
  }
  const getTopActions = (user) => {
    return [
      getGhostFABtn("Refresh", faSync, (e) => {
        getReports();
      }),
      getDataBtn(
        user,
        "IMPSGuru",
        ApiEndpoints.GET_WALLET_IMPSGURU,
        user && user.role == "Admin"
      ),
      getDataBtn(
        user,
        "Paytm",
        ApiEndpoints.GET_WALLET_PAYTM,
        user && user.role == "Admin"
      ),
      getDataBtn(
        user,
        "Yes Bank",
        ApiEndpoints.GET_WALLET_YESBANK,
        user && user.role == "Admin"
      ),
      getDataBtn(
        user,
        "iMoney",
        ApiEndpoints.GET_WALLET_IMONEY,
        user && user.role == "Admin"
      ),
    ];
  };
  if (user && !reportsLoading && !isReportFetchedOnce) {
    setIsRecordFetched(true);
    console.log("mydash isReportFetchedOnce: " + isReportFetchedOnce);
    getReports();
  } else {
    console.log("mydash user: " + user + ", is: " + isReportFetchedOnce);
  }

  const changeType = (type) => {
    if (type == ReportType.TODAY && todayReport != null) {
      setReports(todayReport);
    } else if (type == ReportType.THIS_MONTH && thisMonthReport != null) {
      setReports(thisMonthReport);
    } else if (type == ReportType.LAST_MONTH && lastMonthReport != null) {
      setReports(lastMonthReport);
    } else {
      getReports();
    }
    console.log(type);
  };

  const body = (
    <div>
      <CCol className="ms-4 me-4 mb-4">
        <CRow
          xs={{ cols: "auto" }}
          className="justify-content-between align-items-center ps-4 "
        >
          <CCol>
            <CRow xs={{ cols: "auto" }} className="text-center">
              <CCol>Wallet Balance : </CCol>
              <CCol>
                <strong>{rupeeIn2Dec(user ? user.wallet : "")}</strong>
              </CCol>
            </CRow>
          </CCol>
          <CCol>
            <CRow xs={{ cols: "auto", gutter: 1 }} className="text-center">
              <CButton
                ref={checkRef}
                id="b1"
                size="sm"
                className={
                  type == ReportType.TODAY
                    ? "my_btn_checked"
                    : "my_btn_unchecked"
                }
                color="transparent"
                variant="ghost"
                onClick={(e) => {
                  setType(ReportType.TODAY);
                  changeType(ReportType.TODAY);
                }}
                disabled={reportsLoading}
              >
                Today
              </CButton>
              <CButton
                ref={checkRef}
                id="b2"
                size="sm"
                className={
                  type == ReportType.THIS_MONTH
                    ? "my_btn_checked"
                    : "my_btn_unchecked"
                }
                color="transparent"
                variant="ghost"
                onClick={(e) => {
                  setType(ReportType.THIS_MONTH);
                  changeType(ReportType.THIS_MONTH);
                }}
                disabled={reportsLoading}
              >
                This Month
              </CButton>
              <CButton
                ref={checkRef}
                id="b3"
                size="sm"
                className={
                  type == ReportType.LAST_MONTH
                    ? "my_btn_checked"
                    : "my_btn_unchecked"
                }
                color="transparent"
                variant="ghost"
                onClick={(e) => {
                  setType(ReportType.LAST_MONTH);
                  changeType(ReportType.LAST_MONTH);
                }}
                disabled={reportsLoading}
              >
                Last Month
              </CButton>
              {/* <CCol>
              
                <CFormCheck
                  button={{ color: "primary", variant: "ghost", shape: "rounded-3"}}
                  className="my_btn_2"
                  type="radio"
                  name="options-outlined"
                  id="today"
                  autoComplete="off"
                  label="Today"
                  defaultChecked
                  onClick={(e) => {
                    setType(ReportType.TODAY);
                    changeType(ReportType.TODAY);
                  }}
                  disabled={reportsLoading}
                />
              </CCol>
              <CCol>
                <CFormCheck
                  //button={{ color: "primary", variant: "ghost" }}
                  className="my_btn_2"
                  type="radio"
                  name="options-outlined"
                  id="this_month"
                  autoComplete="off"
                  label="This Month"
                  onClick={(e) => {
                    setType(ReportType.THIS_MONTH);
                    changeType(ReportType.THIS_MONTH);
                  }}
                  disabled={reportsLoading}
                />
              </CCol>
              <CCol>
                <CFormCheck
                  //button={{ color: "primary", variant: "ghost" }}
                  className="my_btn_2"
                  type="radio"
                  name="options-outlined"
                  id="last_month"
                  autoComplete="off"
                  label="Last Month"
                  onClick={(e) => {
                    setType(ReportType.LAST_MONTH);
                    changeType(ReportType.LAST_MONTH);
                  }}
                  disabled={reportsLoading}
                />
              </CCol> */}
            </CRow>
          </CCol>
        </CRow>

        <hr />
        <CRow className="ms-4">
          <CCol sm={12} md={9}>
            <CChartLine
              style={{ height: "300px", marginTop: "40px" }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                datasets: [
                  {
                    label: "Sales",
                    backgroundColor: "transparent", //hexToRgba("#4093f7", 10),
                    borderColor: "#327FF2",
                    pointHoverBackgroundColor: getStyle("--cui-info"),
                    borderWidth: 2,
                    data: [
                      0, 0, 170000, 340000, 370000, 420000, 510000, 650000,
                      470000,
                    ],
                  },
                  {
                    label: "Transactions",
                    backgroundColor: "transparent",
                    borderColor: "#E93F98",
                    pointHoverBackgroundColor: getStyle("--cui-success"),
                    borderWidth: 2,
                    data: [
                      0, 0, 34000, 80000, 75000, 90000, 100000, 135000, 90000,
                    ],
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      drawOnChartArea: true,
                      lineWidth: 30,
                      color: "#FBFAFF",
                    },
                  },
                  y: {
                    grid: {
                      drawOnChartArea: false,
                      color: "#327FF2",
                    },
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      stepSize: Math.ceil(100 / 5),
                      max: 500,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.1,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                  },
                },
              }}
            />
          </CCol>

          <CCol
            sm={12}
            md={3}
            style={{
              border: "solid lightgray",
              borderLeftWidth: 1,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              paddingLeft: 20,
            }}
          >
            <CContainer
              className="p-4"
              style={{ backgroundColor: "#f5f7fb", borderRadius: 5 }}
            >
              <CCol>
                <CRow>
                  <div>
                    <div style={{ float: "left" }}>
                      {reportsLoading ? (
                        <div>
                          <CSpinner size="sm" />
                        </div>
                      ) : (
                        <h3 style={{ marginBottom: -6 }}>
                          {reports ? reports.total : "0"}
                        </h3>
                      )}
                      <span
                        className="dot"
                        style={{ backgroundColor: "#327FF2" }}
                      />
                      <span className="ms-2" style={{ fontSize: 10 }}>
                        Transactions
                      </span>
                    </div>
                    <div
                      className="round-corner"
                      style={{
                        float: "right",
                        backgroundColor: "#D5E6FA",
                        color: "#327FF2",
                      }}
                    >
                      <span>100%</span>
                    </div>
                  </div>
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
                <CRow>
                  <div>
                    <div style={{ float: "left" }}>
                      {reportsLoading ? (
                        <div>
                          <CSpinner size="sm" />
                        </div>
                      ) : (
                        <h3 style={{ marginBottom: -6 }}>
                          {reports ? reports.totalSuccess : "0"}
                        </h3>
                      )}

                      <span
                        className="dot"
                        style={{ backgroundColor: "#6BD58F" }}
                      />
                      <span className="ms-2" style={{ fontSize: 10 }}>
                        Success
                      </span>
                    </div>
                    <div
                      className="round-corner"
                      style={{
                        float: "right",
                        backgroundColor: "#DEF2EB",
                        color: "#6BD58F",
                      }}
                    >
                      <span>
                        {reports
                          ? parseFloat(
                            (reports.totalSuccess / reports.total) * 100
                          ).toFixed(1)
                          : "0"}
                        %
                      </span>
                    </div>
                  </div>
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
                <CRow>
                  <div>
                    <div style={{ float: "left" }}>
                      {reportsLoading ? (
                        <div>
                          <CSpinner size="sm" />
                        </div>
                      ) : (
                        <h3 style={{ marginBottom: -6 }}>
                          {reports ? reports.totalFailed : "0"}
                        </h3>
                      )}
                      <span
                        className="dot"
                        style={{ backgroundColor: "#CC4D61" }}
                      />
                      <span className="ms-2" style={{ fontSize: 10 }}>
                        Failed
                      </span>
                    </div>
                    <div
                      className="round-corner"
                      style={{
                        float: "right",
                        backgroundColor: "#EEDEE5",
                        color: "#CC4D61",
                      }}
                    >
                      <span>
                        {reports
                          ? parseFloat(
                            (reports.totalFailed / reports.total) * 100
                          ).toFixed(1)
                          : "0"}
                        %
                      </span>
                    </div>
                  </div>
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
                <CRow>
                  <div>
                    <div style={{ float: "left" }}>
                      {reportsLoading ? (
                        <div>
                          <CSpinner size="sm" />
                        </div>
                      ) : (
                        <h3 style={{ marginBottom: -6 }}>
                          {reports ? reports.totalPending : "0"}
                        </h3>
                      )}
                      <span
                        className="dot"
                        style={{ backgroundColor: "#F3AA3C" }}
                      />
                      <span className="ms-2" style={{ fontSize: 10 }}>
                        Pending
                      </span>
                    </div>
                    <div
                      className="round-corner"
                      style={{
                        float: "right",
                        backgroundColor: "#F4ECDA",
                        color: "#F3AA3C",
                      }}
                    >
                      <span>
                        {" "}
                        {reports
                          ? parseFloat(
                            (reports.totalPending / reports.total) * 100
                          ).toFixed(1)
                          : "0"}
                        %
                      </span>
                    </div>
                  </div>
                </CRow>
              </CCol>
            </CContainer>
          </CCol>
        </CRow>
      </CCol>
    </div>
  );

  return (
    <div key="Dashboard1">
      <CMPage
        title="Dashboard"
        img={analysis_png}
        actions={getTopActions(user)}
      >
        {body}
      </CMPage>
    </div>
  );
};

export default DashboardView;
