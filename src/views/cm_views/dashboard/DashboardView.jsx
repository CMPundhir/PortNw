import { CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { ReportType } from "src/commons/Constants";
import { get } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { apiErrorToast } from "../custom/cm_toast";
import { SimpleCard } from "../custom/cm_views";
import BarChart from "./components/BarChart";
import DaySelection from "./components/DaySelection";
import HeadLine from "./components/HeadLine";
import PieChart from "./components/PieChart";
import SummaryTable from "./components/SummaryTable";
import TransactionStatus from "./components/TransactionStatus";
import TransactionTiles from "./components/TransactionTiles";

const DashboardView = ({ user }) => {
  const [type, setType] = useState();
  const [loading, setLoading] = useState(false);
  const [currentDashData, setCurrentDashData] = useState();
  const [allDashData, setAllDashData] = useState(
    (ReportType.TODAY = {}),
    (ReportType.THIS_MONTH = {}),
    (ReportType.LAST_MONTH = {})
  );
  function fetchDashData(type) {
    let url = `${ApiEndpoints.ADMIN_DASH_DATA}?api_token=${
      user ? user.api_token : ""
    }&type=${type}`;
    get(
      url,
      setLoading,
      (data) => {
        allDashData[type] = data;
        setCurrentDashData(data);
        // setAllDashData(allDashData);
        console.log(JSON.stringify(allDashData));
      },
      (error) => {
        apiErrorToast(error);
      }
    );
  }

  // useEffect(() => {
  //   fetchDashData(type);
  //   return () => {};
  // }, [type]);

  return (
    <SimpleCard>
      <HeadLine
        user={user}
        onRefresh={() => fetchDashData(type)}
        loading={loading}
      />
      <DaySelection
        onTypeSelect={(t) => {
          //setType(t);
          fetchDashData(t);
        }}
      />
      <CRow className="mt-4 p-4">
        <BarChart user={user} reports={currentDashData} />
      </CRow>
      <CRow>
        <TransactionTiles user={user} reports={currentDashData} />
      </CRow>
      {/* <CRow xs={{ gutter: 2 }} className="m-2">
        <CCol sm={12} lg={3} md={6}>
          <div style={{ height: "100%" }}>
            <PieChart />
          </div>
        </CCol>
        <CCol sm={12} lg={9} md={6}>
          <div style={{ height: "100%" }}>
            <BarChart />
          </div>
        </CCol>
      </CRow> */}
      {/* <CRow>
        <CCol className="mt-4 p-3 text-center daysbtnCard-bg">
          <SummaryTable user={user} type={type} />
        </CCol>
      </CRow> */}
    </SimpleCard>
  );
};

export default DashboardView;
