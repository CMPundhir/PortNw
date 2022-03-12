import { CCol } from "@coreui/react";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blue } from "@material-ui/core/colors";
import React, { useState } from "react";

const CategoryButton = ({ icon = faMobile, text = "Default" }) => {
  const [hover, setHover] = useState(false);
  return (
    <CCol btn-focus xs={4} sm={3} md={3} lg="auto">
      <div className="btns">
        <div
          className=" d-flex flex-column align-items-center justify-content-between"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => {
            setHover(false);
          }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              backgroundColor: hover ? "purple" : "white",
              height: "40px",
              width: "40px",
              borderRadius: "50px",
              boxShadow: "0 0 5px 1px #d3d3d3",
              padding: "10px",
            }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                color={hover ? "white" : "purple"}
                icon={icon ? icon : faMobile}
                size="lg"
              />
            </div>
          </div>
          <div
            className="pt-2"
            style={{
              fontSize: "12px",
              color: hover ? "purple" : "black",
            }}
          >
            {text ? text : "Default"}
          </div>
        </div>
      </div>
    </CCol>
  );
};

export default CategoryButton;
