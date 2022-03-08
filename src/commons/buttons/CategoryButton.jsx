import { CCol } from "@coreui/react";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CategoryButton = ({ icon = faMobile, text = "Default" }) => {
  return (
    <CCol xs={4} sm={3} md={3} lg="auto">
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          backgroundColor: "#fff",
          width: "40px",
          height: "40px",
          borderRadius: "50px",
          boxShadow: "0 0 5px 1px #d3d3d3",
          padding: "10px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            style={{ color: "red" }}
            icon={icon ? icon : faMobile}
            size="md"
          />
        </div>
      </div>
      <div className="text-center">{text ? text : "Default"}</div>
    </CCol>
  );
};

export default CategoryButton;
