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
              height: "80%",
              borderTop: "2px solid rgb(231, 224, 224)",
              marginLeft: "30px",
            }}
          >
            <CCallout color="primary">
              <CFormCheck id="flexCheckDefault" label="Default checkbox" />
            </CCallout>
            <CCallout color="warning">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
            <CCallout color="dark">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
            <CCallout color="success">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
            <CCallout color="danger">
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" />
            </CCallout>
          </div>
        </CRow>
      </CRow>
    </CommonCard>
  );
};

export default TaskCard;
