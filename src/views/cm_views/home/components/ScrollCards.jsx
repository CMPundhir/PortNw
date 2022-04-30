import React from "react";
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
      <div className="d-flex justify-content-center">
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
