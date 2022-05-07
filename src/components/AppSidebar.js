import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CButton,
  CCol,
  CImage,
  CRow,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import {
  _nav,
  nav_admin,
  nav_technical,
  nav_accounts,
  nav_onboarding,
  nav_merchants,
} from "../_nav";
import { useHistory } from "react-router";
import { CM_Nav, UserType } from "src/commons/Constants";
import { getGhostBtn } from "src/views/cm_views/custom/cm_views";
import logo_png from "src/assets/images/logo_2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronCircleLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const AppSidebar = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  var sideMenus = nav_admin;

  if (user) {
    // if(user.sub_role == "Admin" || user.sub_role == "Sub Admin"){
    //   sideMenus = navigation.filter((value) => {
    //     //console.log(value.name);
    //     return value.name != "Wallet" && value.name != "Beneficiaries";
    //   });
    //   sideMenus = nav_technical;
    // }else if(user.sub_role == UserType.ON_BOARDING || user.sub_role == UserType.TECHNICAL || user.sub_role == UserType.ACCOUNTS){
    //   sideMenus = navigation.filter((value) => {
    //     //console.log(value.name);
    //     return value.name != "Wallet" && value.name != "Beneficiaries" && value.name != "Bulk";
    //   });
    // }else{
    //   sideMenus = navigation.filter((value) => {
    //     //console.log(value.name);
    //     return value.name != "Users" && value.name != "Load Money"  && value.name != "Settings";
    //   });
    // }
    if (
      user.sub_role == UserType.ADMIN ||
      user.sub_role == UserType.SUB_ADMIN
    ) {
      sideMenus = nav_admin;
    } else if (user.sub_role == UserType.ON_BOARDING) {
      sideMenus = nav_onboarding;
    } else if (user.sub_role == UserType.TECHNICAL) {
      sideMenus = nav_technical;
    } else if (user.sub_role == UserType.ACCOUNTS) {
      sideMenus = nav_accounts;
    } else if (user.sub_role == UserType.USER) {
      sideMenus = nav_merchants;
    }
  }

  return (
    <CSidebar
      className="hvr-shadow-radial sidebar-apex"
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      visible={sidebarShow}
      // style={{ marginTop: "70px" }}
      onHide={() => {
        dispatch({ type: "set", sidebarShow: false });
      }}
    >
      <span
        className="text-center"
        onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
      >     
        <CImage
          className="m-3"
          src={logo_png}
          style={{ width: 100, height: "auto" }}
        />
      </span>
      <CSidebarNav
        className="ms-4 me-4 mt-3"
        style={{ marginTop: "auto", marginBottom: "auto" }}
      >
        <SimpleBar>
          <AppSidebarNav items={sideMenus} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
