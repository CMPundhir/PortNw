import React, { useRef, useState, useEffect } from "react";
import { getGhostFABtn, SimpleCard } from "src/views/cm_views/custom/cm_views";
import analysis_png from "src/assets/images/icons/analysis.png";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CFormCheck,
  CFormLabel,
  CRow,
  CSpinner,
} from "@coreui/react";
import { rupeeIn2Dec } from "src/utils/RupeeUtil";
import {
  CChartBar,
  CChartLine,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import { get, useAx } from "src/networks/ApiController";
import { Constants, ReportType, UserType } from "src/commons/Constants";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { apiErrorToast } from "./custom/cm_toast";
import { getDataBtn } from "./custom/cm_views";
import { useHistory } from "react-router";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { myDate5 } from "../../utils/DateTimeUtil";
import { CMPaginateTable } from "./custom/cm_views";
import { getPaginateTable } from "./custom/cm_views";
import { customStyles2 } from "./custom/cm_table_styles";
import { CMPage } from "./custom/cm_views";
import CommonPage from "src/commons/components/CommonPage";

var currentUser;
var todayReport,
  thisMonthReport,
  lastMonthReport = null;
var todaySummaryData, thisSummaryData, lastSummaryData;
var type = ReportType.THIS_MONTH;

function setType(tp) {
  type = tp;
}

function calPer(total, num) {
  return total && num ? parseFloat((num / total) * 100).toFixed(1) : 0;
}

const onEscape = function (action) {
  window &&
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        action();
      }
    });
};

const apiBalancesArr = [0, 0, 0, 0];

function getBarChartData(range) {
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  const currentDate = new Date();
  const dateArr = [];
  const txnArr = [];
  const profitsArr = [];

  for (let index = 0; index < range; index++) {
    dateArr.push(myDate5(currentDate.addDays(index - range)));
    txnArr.push(Math.floor(Math.random() * 100000) + 1);
    profitsArr.push(Math.floor(Math.random() * 20000) + 1);
  }
  return [dateArr, txnArr, profitsArr];
}

const TxnRow = ({ num, per, title, color1, color2, isLoading }) => {
  return (
    <div>
      <div style={{ float: "left" }}>
        {isLoading ? (
          <div>
            <CSpinner size="sm" />
          </div>
        ) : (
          <h3 style={{ marginBottom: -6 }}>{num ? num : "0"}</h3>
        )}
        <span className="dot" style={{ backgroundColor: color1 }} />
        <span className="ms-2" style={{ fontSize: 10 }}>
          {title}
        </span>
      </div>
      <div
        className="round-corner"
        style={{
          float: "right",
          backgroundColor: color2,
          color: color1,
        }}
      >
        <span>{per} %</span>
      </div>
    </div>
  );
};

const Body = ({
  reports,
  checkRef,
  reportsLoading,
  float,
  totalApiBal,
  getReports,
  setReports,
  onFloatLoading,
  summaryData,
  setSummaryData,
  summaryLoading,
}) => {
  const [newType, setNewType] = useState();
  const changeType = (type) => {
    if (type == ReportType.TODAY && todayReport != null) {
      setReports(todayReport);
      setSummaryData(todaySummaryData);
    } else if (type == ReportType.THIS_MONTH && thisMonthReport != null) {
      setReports(thisMonthReport);
      setSummaryData(thisSummaryData);
    } else if (type == ReportType.LAST_MONTH && lastMonthReport != null) {
      setReports(lastMonthReport);
      setSummaryData(lastSummaryData);
    } else {
      getReports();
    }
    console.log(type);
    setNewType(type);
  };
  return (
    <div>
      <CCol className="ms-4 me-4 mb-4">
        <CRow
          xs={{ cols: "auto" }}
          className="justify-content-between align-items-center ps-4"
          style={{ backgroundColor: "red" }}
        >
          <CCol>
            <CRow xs={{ cols: "auto" }} className="text-center">
              <CCol>Wallet Balance : </CCol>
              <CCol>
                <CSpinner hidden={!onFloatLoading} size="sm" />
                &ensp;<strong>{rupeeIn2Dec(float ? float : "")}</strong>
              </CCol>
              {currentUser &&
              (currentUser.role === UserType.ADMIN ||
                currentUser.role === UserType.SUB_ADMIN) ? (
                <>
                  <CCol>API Balance : </CCol>
                  <CCol>
                    <strong>
                      {rupeeIn2Dec(totalApiBal ? totalApiBal : "")}
                    </strong>
                  </CCol>
                </>
              ) : (
                ""
              )}
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
            </CRow>
          </CCol>
        </CRow>
        <hr />
        <CRow className="ms-4">
          <CCol sm={12} lg={9} md={6}>
            <CChartBar
              height={4}
              width={10}
              data={{
                labels: reports && reports.dates ? reports.dates : [],
                datasets:
                  currentUser &&
                  (currentUser.role == UserType.ADMIN ||
                    currentUser.role == UserType.SUB_ADMIN)
                    ? [
                        {
                          label: "Volume (in \u20b9)",
                          backgroundColor: "#4093f7",
                          data: reports && reports.vol ? reports.vol : [],
                        },
                        {
                          label: "Profits (in \u20b9)",
                          backgroundColor: "#FF6384",
                          data:
                            reports && reports.profits ? reports.profits : [],
                        },
                      ]
                    : [
                        {
                          label: "Volume (in Crores)",
                          backgroundColor: "#4093f7",
                          data: reports && reports.vol ? reports.vol : [],
                        },
                      ],
              }}
              options={{
                plugins: {
                  tooltip: {
                    // Disable the on-canvas tooltip
                    enabled: false,

                    external: function (context) {
                      // Tooltip Element
                      let tooltipEl =
                        document.getElementById("chartjs-tooltip");

                      // Create element on first render
                      if (!tooltipEl) {
                        tooltipEl = document.createElement("div");
                        tooltipEl.id = "chartjs-tooltip";
                        tooltipEl.innerHTML =
                          '<div style="background-color: #FFCE56AA; padding: 10px"><table></table></div>';
                        document.body.appendChild(tooltipEl);
                      }
                      const hint = <p>Testing</p>;
                      // Hide if no tooltip
                      const tooltipModel = context.tooltip;
                      if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                      }

                      // Set caret Position
                      tooltipEl.classList.remove(
                        "above",
                        "below",
                        "no-transform"
                      );
                      if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                      } else {
                        tooltipEl.classList.add("no-transform");
                      }

                      function getBody(bodyItem) {
                        return bodyItem.lines;
                      }

                      // Set Text
                      if (tooltipModel.body) {
                        const titleLines = tooltipModel.title || [];
                        const bodyLines = tooltipModel.body.map(getBody);

                        let innerHtml = "<thead>";

                        titleLines.forEach(function (title) {
                          innerHtml += "<tr><th>Date : " + title + "</th></tr>";
                        });
                        innerHtml += "</thead><tbody>";

                        bodyLines.forEach(function (body, i) {
                          const colors = tooltipModel.labelColors[i];
                          let style = "background:" + colors.backgroundColor;
                          style += "; border-color:" + colors.borderColor;
                          style += "; border-width: 2px";
                          const span = "<span" + style + '"></span>';
                          if (i === 0) {
                            body =
                              "Volume : \u20b9 " + String(body).split(":")[1];
                          } else {
                            body =
                              " Profit &emsp;: \u20b9 " +
                              String(body).split(":")[1];
                          }
                          innerHtml += "<tr><td>" + span + body + "</td></tr>";
                        });
                        innerHtml += "</tbody>";

                        let tableRoot = tooltipEl.querySelector("table");
                        tableRoot.innerHTML = innerHtml;
                      }

                      const position =
                        context.chart.canvas.getBoundingClientRect();
                      //const bodyFont = context.chart.helpers.toFont(tooltipModel.options.bodyFont);

                      // Display, position, and set styles for font
                      tooltipEl.style.opacity = 1;
                      tooltipEl.style.position = "absolute";
                      tooltipEl.style.left =
                        position.left +
                        window.pageXOffset +
                        tooltipModel.caretX +
                        "px";
                      tooltipEl.style.top =
                        position.top +
                        window.pageYOffset +
                        tooltipModel.caretY +
                        "px";
                      //tooltipEl.style.font = bodyFont.string;
                      tooltipEl.style.padding =
                        tooltipModel.padding +
                        "px " +
                        tooltipModel.padding +
                        "px";
                      tooltipEl.style.pointerEvents = "none";
                    },
                  },
                },
              }}
              labels="months"
            />
          </CCol>

          {/* <CCol sm={12} lg={1} md={0}>
          </CCol> */}
          <CCol sm={12} lg={3} md={6}>
            <CContainer
              className="p-4"
              style={{ backgroundColor: "#f5f7fb", borderRadius: 5 }}
            >
              <CCol>
                <CRow>
                  <TxnRow
                    title="Transactions"
                    num={reports && reports.total_count}
                    per={100}
                    color1="#327FF2"
                    color2="#D5E6FA"
                    isLoading={reportsLoading}
                  />
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
                <CRow>
                  <TxnRow
                    title="Success"
                    num={reports && reports.success_count}
                    per={
                      reports
                        ? calPer(reports.total_count, reports.success_count)
                        : 0
                    }
                    color1="#6BD58F"
                    color2="#DEF2EB"
                    isLoading={reportsLoading}
                  />
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
                <CRow>
                  <TxnRow
                    title="Failed"
                    num={reports && reports.failed_count}
                    per={
                      reports
                        ? calPer(reports.total_count, reports.failed_count)
                        : 0
                    }
                    color1="#EF5350"
                    color2="#EEDEE5"
                    isLoading={reportsLoading}
                  />
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
                <CRow>
                  <TxnRow
                    title="Pending"
                    num={reports && reports.pnding_count}
                    per={
                      reports
                        ? calPer(reports.total_count, reports.pending_count)
                        : 0
                    }
                    color1="#F3AA3C"
                    color2="#F4ECDA"
                    isLoading={reportsLoading}
                  />
                </CRow>
                <hr style={{ backgroundColor: "lightgray" }} />
              </CCol>
            </CContainer>
          </CCol>
        </CRow>
        <CRow
          xs={{ cols: "auto" }}
          className="justify-content-between align-items-center ps-4 mt-4"
        >
          <CCol sm={12} lg={9} md={9} style={{ marginTop: 24 }}>
            {currentUser && currentUser.role == UserType.ADMIN ? (
              <TxnTypeChartView user={currentUser} type={newType} />
            ) : (
              ""
            )}
          </CCol>
          <CCol sm={12} lg={3} md={3} style={{ marginTop: 24 }}>
            <CChartPie
              data={{
                labels: ["Success", "Failed", "Pending"],
                datasets: [
                  {
                    data: reports
                      ? [
                          reports.success_count,
                          reports.failed_count,
                          reports.pending_count,
                        ]
                      : [0, 0, 0],
                    backgroundColor: ["#66BB6A", "#EF5350", "#FFCE56"],
                    hoverBackgroundColor: ["#49BD63", "#FF1744", "#4093f7"],
                  },
                ],
              }}
            />
          </CCol>
        </CRow>
        {currentUser && currentUser.role == UserType.ADMIN ? (
          <CRow className="m-4">
            <div className="m-4">
              <AdminPayoutView
                user={currentUser}
                data={summaryData}
                summaryLoading={summaryLoading}
                setSummaryData={setSummaryData}
              />
            </div>
          </CRow>
        ) : (
          ""
        )}
      </CCol>
    </div>
  );
};

const TxnTypeChartView = ({ user, type }) => {
  const getUrl = () => {
    return `${ApiEndpoints.TYPE_WISE_BANK_DATA}?api_token=${
      user ? user.api_token : ""
    }&type=${type ? type : ReportType.THIS_MONTH}`;
  };
  const [{ data, loading, error }, refetch] = useAx(getUrl());
  const [cache, setCache] = useState({ TODAY: null, THIS: null, LAST: null });

  // useEffect(() => {
  //   if (type == ReportType.TODAY) {
  //     cache.TODAY = data;
  //   } else if (type == ReportType.THIS_MONTH) {
  //     cache.THIS = data;
  //   } else if (type == ReportType.LAST_MONTH) {
  //     cache.LAST = data;
  //   }
  //   return () => {}
  // }, [data])

  // let showData;
  // if (type == ReportType.TODAY && !cache.TODAY) {
  //   showData = cache.TODAY;
  // } else if (type == ReportType.THIS_MONTH && !cache.THIS) {
  //   showData = cache.THIS;
  // } else if (type == ReportType.LAST_MONTH && !cache.LAST) {
  //   showData = cache.LAST;
  // }else{
  //   if(data==null) refetch()
  // }
  return (
    <div>
      <CRow>
        <CCol sm={12} lg={4} md={4} style={{ marginTop: 8 }}>
          <CChartPie
            data={{
              labels: ["ImpsGuru", "Yes Bank", "iMoneyPay", "RBL"],
              datasets: [
                {
                  //data: reports ? [reports.imps, reports.neft, reports.rtgs, reports.upi] : [0, 0, 0, 0],
                  data: data
                    ? [
                        data.IMGURU
                          ? data.IMGURU.IMPS +
                            data.IMGURU.NEFT +
                            data.IMGURU.RTGS +
                            data.IMGURU.UPI
                          : [0, 0, 0, 0],
                        data.YES
                          ? data.YES.IMPS +
                            data.YES.NEFT +
                            data.YES.RTGS +
                            data.YES.UPI
                          : [0, 0, 0, 0],
                        data.IMONEY
                          ? data.IMONEY.IMPS +
                            data.IMONEY.NEFT +
                            data.IMONEY.RTGS +
                            data.IMONEY.UPI
                          : [0, 0, 0, 0],
                        data.PAYTM
                          ? data.PAYTM.IMPS +
                            data.PAYTM.NEFT +
                            data.PAYTM.RTGS +
                            data.PAYTM.UPI
                          : [0, 0, 0, 0],
                      ]
                    : [],
                  backgroundColor: ["#EF6C00", "#2B61AB", "#F01000", "#1B2F7D"],
                },
              ],
            }}
          />
        </CCol>
        <CCol sm={12} lg={8} md={8}>
          <CChartBar
            height={5}
            width={10}
            data={{
              labels: ["ImpsGuru", "Yes Bank", "iMoneyPay", "RBL"],
              datasets: [
                {
                  label: "IMPS",
                  backgroundColor: "#36A2EB",
                  data: data
                    ? [
                        data.IMGURU.IMPS,
                        data.YES.IMPS,
                        data.IMONEY.IMPS,
                        data.PAYTM.IMPS,
                      ]
                    : [],
                },
                {
                  label: "NEFT",
                  backgroundColor: "#4BC0C0",
                  data: data
                    ? [
                        data.IMGURU.NEFT,
                        data.YES.NEFT,
                        data.IMONEY.NEFT,
                        data.PAYTM.NEFT,
                      ]
                    : [],
                },
                {
                  label: "RTGS",
                  backgroundColor: "#7E57C2",
                  data: data
                    ? [
                        data.IMGURU.RTGS,
                        data.YES.RTGS,
                        data.IMONEY.RTGS,
                        data.PAYTM.RTGS,
                      ]
                    : [],
                },
                {
                  label: "UPI",
                  backgroundColor: "#FFCE56",
                  data: data
                    ? [
                        data.IMGURU.UPI,
                        data.YES.UPI,
                        data.IMONEY.UPI,
                        data.PAYTM.UPI,
                      ]
                    : [],
                },
              ],
            }}
            labels="Banks"
          />
        </CCol>
      </CRow>
    </div>
  );
};

const AdminPayoutView = ({ user, data, setSummaryData, summaryLoading }) => {
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const handlePageChange = (page) => {
    //alert("Page: " + page);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    setPerPage(newPerPage);
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.bname,
    },
    {
      name: "Admin Transfer",
      selector: (row) => rupeeIn2Dec(row.payin),
    },
    {
      name: "Payout",
      selector: (row) => rupeeIn2Dec(row.payout),
    },
  ];
  var title = "";
  if (type == ReportType.TODAY) {
    title = "Today's";
    if (todaySummaryData) setSummaryData(todaySummaryData);
  } else if (type == ReportType.THIS_MONTH) {
    title = "This Month's";
  } else if (type == ReportType.LAST_MONTH) {
    title = "Last Month's";
    if (lastSummaryData) setSummaryData(lastSummaryData);
  }
  return (
    <CCard>
      <CCardBody>
        <h4 className="text-center">
          <CSpinner size="sm" hidden={!summaryLoading} />
          &ensp;Admin {title} Summary
        </h4>
        {getPaginateTable(
          columns,
          data,
          null,
          null,
          null,
          null,
          totalRows,
          handlePerRowsChange,
          handlePageChange,
          customStyles2,
          false
        )}
      </CCardBody>
    </CCard>
  );
};

const DashboardView = ({ user, isNewLogin }) => {
  //const [type, setType] = useState(ReportType.TODAY);
  const [isReportFetchedOnce, setIsRecordFetched] = useState(false);
  const [reports, setReports] = useState();
  const [reportsLoading, setReportsLoading] = useState(false);
  const [barChartData, setBarChartData] = useState(getBarChartData(30));
  const [summaryData, setSummaryData] = useState();
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [float, setFloat] = useState(0);
  const [loadFloat, setLoadFloat] = useState(true);
  const [totalApiBal, setTotalApiBal] = useState(0);
  const checkRef = useRef();

  if (isNewLogin) {
  }

  currentUser = user;
  onEscape(() => {
    checkRef.current.blur();
  });
  const history = useHistory();
  const getUrl = () => {
    return `${ApiEndpoints.ADMIN_DASH_DATA}?api_token=${
      user ? user.api_token : ""
    }&type=${type}`;
  };

  function getReports() {
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
    // fetching float
    get(
      ApiEndpoints.GET_FLOAT + "?api_token=" + (user ? user.api_token : ""),
      setLoadFloat,
      (float) => {
        setFloat(float);
      },
      (error) => {
        apiErrorToast(error);
      }
    );
    // admin summary
    get(
      ApiEndpoints.ADMIN_SUMMARY +
        "?api_token=" +
        (user ? user.api_token : "") +
        "&type=" +
        type,
      setSummaryLoading,
      (data) => {
        if (type == ReportType.TODAY) {
          todaySummaryData = data;
        } else if (type == ReportType.THIS_MONTH) {
          thisSummaryData = data;
        } else if (type == ReportType.LAST_MONTH) {
          lastSummaryData = data;
        }
        setSummaryData(data);
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  }
  const getTopActions = (user) => {
    return user && user.role == UserType.ADMIN
      ? [
          getGhostFABtn("Refresh", faSync, (e) => {
            getReports();
          }),
          getDataBtn(
            user,
            "Float",
            ApiEndpoints.GET_FLOAT,
            false,
            (float) => {
              setFloat(float);
            },
            true
          ),
          getDataBtn(
            user,
            "IMPSGuru",
            ApiEndpoints.GET_WALLET_IMPSGURU,
            user && user.role == "Admin",
            (bal) => {
              apiBalancesArr[0] = bal;
              let total = apiBalancesArr.reduce((a, b) => a + b, 0);
              if (total != totalApiBal) {
                setTotalApiBal(total);
              } else {
              }
            }
          ),
        ]
      : [
          getGhostFABtn("Refresh", faSync, (e) => {
            getReports();
          }),
        ];
  };
  if (user && !reportsLoading && !isReportFetchedOnce) {
    setIsRecordFetched(true);
    getReports();
  }

  return (
    <div key="Dashboard1">
      <CommonPage
        title="Dashboard"
        img={analysis_png}
        actions={getTopActions(user)}
      >
        <Body
          reports={reports}
          reportsLoading={reportsLoading}
          checkRef={checkRef}
          float={float}
          totalApiBal={totalApiBal}
          getReports={getReports}
          setReports={setReports}
          onFloatLoading={loadFloat}
          summaryData={summaryData}
          summaryLoading={summaryLoading}
          setSummaryData={setSummaryData}
        />
      </CommonPage>
    </div>
  );
};

export default DashboardView;
