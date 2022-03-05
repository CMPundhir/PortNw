import { CAvatar, CHeader, CTooltip } from "@coreui/react";
import React, { useState } from "react";
import user_png from "src/assets/images/icons/user.png";
import { CM_Nav } from "src/commons/Constants";
import { useHistory, useLocation } from "react-router";

import "./NavBar.css";
const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <div className="Navbar">
      <span className="nav-logo">PortPay</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        {/* first item start */}
        <CTooltip content="My Profile" placement="bottom">
          <a
            className="d-flex align-items-center"
            onClick={(e) => {
              history.push(CM_Nav.MY_PROFILE);
            }}
          >
            <a href="#">
              <CAvatar
                size="lg"
                src={user_png}
                style={{ backgroundColor: "#E5E5E5", padding: 5 }}
              />
            </a>
            <span className="lato ms-2 text-white fw-bold fs-5">
              {user ? user.name : ""}
            </span>
          </a>
        </CTooltip>
        {/* first item end */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
