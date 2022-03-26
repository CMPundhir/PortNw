import { CCol, CRow } from "@coreui/react";
import React from "react";
import TransparentCard from "src/commons/cards/TransparentCard";
import RightSideComponent from "../custom/RightSideComponent";
import RadioBtn from "../../../commons/inputs/RadioBtn";
// import RadioBtn from "./RadioBtn";

const MyAeps = ({ user }) => {
  return (
    <CRow>
      <CCol lg={8} md={12}>
        <TransparentCard title="AEPS">
          <RadioBtn />
          <RadioBtn />
          <RadioBtn />
          <CRow>
            <CCol lg={8} md={12}>
              frg
            </CCol>
            <CCol>frg</CCol>
          </CRow>
        </TransparentCard>
      </CCol>
      <RightSideComponent />
    </CRow>
  );
};

export default MyAeps;
