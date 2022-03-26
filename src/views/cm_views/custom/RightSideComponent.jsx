import { CCol, CRow } from "@coreui/react";
import React from "react";
import DetailsCard from "../home/components/DetailsCard";
import ProgressCard from "../home/components/ProgressCard";
import TaskCard from "../home/components/TaskCard";

const RightSideComponent = () => {
  return (
    <CCol lg={4} md={12}>
      <div className="RightCard ms-4">
        <CRow lg={4} md={8}>
          <DetailsCard />
        </CRow>
        <CRow lg={4} md={8}>
          <ProgressCard />
        </CRow>
        <CRow lg={4} md={8}>
          <TaskCard />
        </CRow>
      </div>
    </CCol>
  );
};

export default RightSideComponent;
