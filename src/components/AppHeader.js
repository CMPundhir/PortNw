import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
  CCol,
  CRow,
  CBadge,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoney,
  cilWallet,
} from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
// import { logo } from "src/assets/images/logo.png";
import logo_png from "src/assets/images/logo.png";
import wallet_png from "src/assets/images/icons/wallet.png";
import bell_png from "src/assets/images/icons/bell.png";

import { CAvatar, CTooltip } from "@coreui/react";
import user_png from "src/assets/images/icons/user.png";
import { CM_Nav } from "src/commons/Constants";
import { useHistory, useLocation } from "react-router";
import "src/components/navbar/NavBar.css";
import {
  faArrowLeft,
  faBars,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppHeader = ({ user }) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <CHeader position="sticky" className="Navbar hvr-shadow-radial mb-4" style={{backgroundColor:"#0079b6"}}>
      <span
        className="nav-logo sideNav-toggle"
        onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
      >
        <FontAwesomeIcon icon={sidebarShow ? faArrowLeft : faBars} />
        {/* <div className="bar"></div> */}
        {/* <CImage src={logo_png} style={{ width: 120, height: "auto" }} /> */}
      </span>
      <div
        className={`nav-items d-md-flex align-items-center ${isOpen && "open"}`}
      >
        <CTooltip content="My Profile" placement="bottom">
          <span
            className="d-flex align-items-center"
            onClick={(e) => {
              history.push(CM_Nav.MY_PROFILE);
            }}
          >
            <CAvatar
              size="lg"
              src={user_png}
              style={{ backgroundColor: "#E5E5E5", padding: 5 }}
            />
            <span className="lato ms-2 text-white fw-bold fs-5">
              {user ? user.name : ""}
            </span>
          </span>
        </CTooltip>

        <a
          className="ms-5 text-center "
          onClick={(e) => {
            history.push(CM_Nav.LOG_IN);
          }}
        >
          Log Out
          <FontAwesomeIcon
            icon={faSignOutAlt}
            //size="lg"
            className="ms-1"
            // style={{
            //   backgroundColor: "white",
            //   width: "24px",
            //   height: "24px",
            //   borderRadius: "50%",
            //   padding: "4px",
            // }}
          />
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </CHeader>
  );
};

export default AppHeader;
