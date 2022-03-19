import { CCol, CRow } from "@coreui/react";
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CommonCard from "src/commons/cards/CommonCard";
import CircleGrad from "src/commons/components/CircleGrad";
import { airtel, jio, transaction } from "src/iconsimport";
import Recent from "./Recent";

const ScrollCards = ({}) => {
  return (
    <div
      className="cm-scroll"
      style={{
        width: "97%",
        scroll,
      }}
    >
      <div className="d-flex">
        <Recent icon={jio} mob="+91-000000000" text="not found" />
        <Recent icon={jio} mob="+91-000000000" text="not found" />
        <Recent icon={airtel} mob="+91-000000000" text="not found" />
        <Recent icon={jio} mob="+91-000000000" text="not found" />
        <Recent icon={airtel} mob="+91-000000000" text="not found" />
        <Recent icon={jio} mob="+91-000000000" text="not found" />
        <Recent icon={airtel} mob="+91-000000000" text="not found" />
        <Recent icon={airtel} mob="+91-000000000" text="not found" />
        <Recent icon={airtel} mob="+91-000000000" text="not found" />
      </div>
    </div>
  );
};

export default ScrollCards;
