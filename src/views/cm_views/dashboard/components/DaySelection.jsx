import { CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { ReportType } from "src/commons/Constants";

const DaySelection = ({ onTypeSelect }) => {
  const [activekey, setActiveKey] = useState(3);
  useEffect(() => {
    const selection =
      activekey == 3 ? "LAST" : activekey == 2 ? "THIS" : "TODAY";
    if (onTypeSelect) {
      onTypeSelect(selection);
    }
    return () => {};
  }, [activekey]);

  return (
    <>
      <CRow
        className="daysbtnCard-bg d-md-flex justify-content-center text-center justify-content-md-around mt-4 fw-bold"
        style={{ letterSpacing: "1px" }}
      >
        <CCol
          className={
            activekey === 1
              ? "py-2 borderBottom-blue borderBottom-blue-hover"
              : "py-2 inactiveDefault-border borderBottom-blue-hover"
          }
          onClick={() => {
            setActiveKey(1);
          }}
          style={{ width: "33%" }}
        >
          Today
        </CCol>
        <CCol
          className={
            activekey === 2
              ? "py-2 borderBottom-blue borderBottom-blue-hover"
              : "py-2 inactiveDefault-border borderBottom-blue-hover"
          }
          onClick={() => {
            setActiveKey(2);
          }}
          style={{ width: "33%" }}
        >
          This Month
        </CCol>
        <CCol
          className={
            activekey === 3
              ? "py-2 borderBottom-blue borderBottom-blue-hover"
              : "py-2 inactiveDefault-border borderBottom-blue-hover"
          }
          onClick={() => {
            setActiveKey(3);
          }}
          style={{ width: "33%" }}
        >
          Last Month
        </CCol>
      </CRow>
    </>
  );
};

export default DaySelection;
