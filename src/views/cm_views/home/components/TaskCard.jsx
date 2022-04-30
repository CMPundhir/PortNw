import { CCallout, CFormCheck, CRow } from "@coreui/react";
import CommonCard from "src/commons/cards/CommonCard";
import React from "react";
import { fontSize } from "@mui/system";

const TaskCard = () => {
  return (
    <CommonCard>
      <CRow>
        <div style={{ marginLeft: "30px", fontSize: "15px" }}>Task</div>
        <CRow>
          <div
            style={{
              width: "80%",
              borderTop: "2px solid rgb(231, 224, 224)",
              marginLeft: "30px",
            }}
          >
            <CCallout color="primary p-3">
              <CFormCheck id="flexCheckDefault" label="Default checkbox" />
            </CCallout>
            <CCallout color="warning p-3">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
            <CCallout color="dark p-3">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
            <CCallout color="success p-3">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
            <CCallout color="danger p-3">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
          </div>
        </CRow>
      </CRow>
    </CommonCard>
  );
};

export default TaskCard;
