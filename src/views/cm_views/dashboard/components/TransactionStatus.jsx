import { CCol } from "@coreui/react";
import React from "react";

const TransactionStatus = ({
  txt,
  color,
  count = "0",
  perc,
  txtColor = "black",
}) => {
  return (
    <div
      className="transparent-card d-flex justify-content-between align-items-center mt-4 p-3"
      style={{ width: "250px" }}
    >
      <div style={{ float: "left" }}>
        {/* <div>
                            <CSpinner size="sm" />
                        </div> */}
        <h3 style={{ marginBottom: -6 }}>{count}</h3>
        <span className="dot" style={{ backgroundColor: color }} />
        <span className="ms-2" style={{ fontSize: 10 }}>
          {txt}
        </span>
      </div>
      <div
        className="round-corner"
        style={{
          float: "right",
          backgroundColor: color,
          color: txtColor,
        }}
      >
        <span>{perc} %</span>
      </div>
    </div>
  );
};

export default TransactionStatus;
