import { CCol, CRow } from "@coreui/react";
import React from "react";
import CommonCard from "src/commons/cards/CommonCard";
import CircleGrad from "src/commons/components/CircleGrad";

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
        <div
          class="card card-block text-center"
          style={{
            width: "200px",
            minWidth: "200px",
            padding: "16px",
            margin: "16px",
          }}
        >
          <CircleGrad width="150px" height="150px" radius="75px">
            Thanos
          </CircleGrad>
        </div>
        <div
          class="card card-block text-center"
          style={{
            width: "200px",
            minWidth: "200px",
            padding: "16px",
            margin: "16px",
          }}
        >
          Card
        </div>
        <div
          class="card card-block text-center"
          style={{
            width: "200px",
            minWidth: "200px",
            padding: "16px",
            margin: "16px",
          }}
        >
          Card
        </div>
        <div
          class="card card-block text-center"
          style={{
            width: "200px",
            minWidth: "200px",
            padding: "16px",
            margin: "16px",
          }}
        >
          Card
        </div>
        <div
          class="card card-block text-center"
          style={{
            width: "200px",
            minWidth: "200px",
            padding: "16px",
            margin: "16px",
          }}
        >
          Card
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
