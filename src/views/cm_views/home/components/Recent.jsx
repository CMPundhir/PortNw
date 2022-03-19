import { CImage } from "@coreui/react";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Recent = ({ icon, text, mob, btn }) => {
  return (
    <div
      class="card card-block text-center"
      style={{
        width: "200px",
        minWidth: "200px",
        padding: "16px",
        margin: "16px",
        border: "0.5px solid #E3E3E3",
        borderRadius: "10px",
        opacity: "1",
      }}
    >
      <div className="text-center">
        {/* <FontAwesomeIcon icon={icon ? icon : faAmbulance} /> */}
        <CImage
          style={{ padding: "10px", width: "55px", borderRadius: "15px" }}
          src={icon ? icon : ""}
        />
        <div>{mob ? mob : "+91-1234567890"}</div>
        <div>
          <small>{text ? text : "Last recharge on :"}</small>
        </div>
      </div>
    </div>
  );
};

export default Recent;
