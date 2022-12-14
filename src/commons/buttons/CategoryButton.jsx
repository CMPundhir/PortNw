import { CCol } from "@coreui/react";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blue } from "@material-ui/core/colors";
import React, { useState } from "react";

const CategoryButton = ({
  isActive = false,
  icon = faMobile,
  text = "Default",
  onClick,
}) => {
  const [hover, setHover] = useState(false);
  const [content, setContent] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <CCol btn-focus xs={4} sm={3} md={3} lg="auto">
      <div>
        <div
          className="d-flex flex-column align-items-center justify-content-between btn-container"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => {
            setHover(false);
          }}
          onClick={onClick}
        >
          <div
            className={
              isActive
                ? "d-flex flex-column align-items-center justify-content-center parent-div parent-div-active"
                : "d-flex flex-column align-items-center justify-content-center parent-div parent-div-hover"
            }
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ fontSize: "20px" }}
            >
              <FontAwesomeIcon
                color={hover || isActive ? "white" : "#CB6796"}
                icon={icon ? icon : faMobile}
              />
            </div>
          </div>
          <div
            className="pt-2 "
            style={{
              fontWeight: "",
              fontSize: "15px",
              fontFamily: "font-family: 'Lato', sans-serif",
              color: isActive || hover ? "#CB6796" : "black",
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
