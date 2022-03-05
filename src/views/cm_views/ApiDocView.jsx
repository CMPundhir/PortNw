import { CSidebarNav, CSidebar, CRow, CCol, CListGroup, CListGroupItem, } from "@coreui/react";
import React from "react";
import { AppSidebarNav } from "src/components/AppSidebarNav";
import { CMPage } from "./custom/cm_views";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { _nav } from "../../_nav";
import { useSelector } from "react-redux";
import { AppContent } from "src/components";
import ApiPageView from "./ApiPageView";
import { BASE_URL } from "src/networks/ApiEndpoints";
import CommonPage from "src/commons/components/CommonPage";

const ApiDocSideBar = ({ user, sideMenus }) => {
  return (
    <div id="menu" >
      <ul>
        <li onClick={() => {
          open("https://api.qikpay.co.in/public/API.pdf#page=1")
        }}>Payout API</li>
        <li onClick={() => {
          open("https://api.qikpay.co.in/public/API.pdf#page=5")
        }}>Status Check API</li>
        <li onClick={() => {
          open("https://api.qikpay.co.in/public/API.pdf#page=7")
        }}>Balance Check API</li>
      </ul>
    </div>

  )
}

const SideItem = ({ title }) => {
  return (
    <h6 className="side_item" onClick={() => { }} style={{ padding: 16 }}>
      <i>{title}</i>
    </h6>
  )
}


const ApiDocBody = ({ user }) => {
  var sideMenus = _nav;
  return (
    <div className="min-vh-100">
      <CRow>
        <object className="min-vh-100" data={BASE_URL + "public/API.pdf"} width="100%" height="90%">
          <p>API Doc Link : <a href={BASE_URL + "public/API.pdf"}>Open API Doc</a></p>
        </object>
        {/* <CCol xs={3}>
          <ApiDocSideBar user={user} sideMenus={sideMenus}/>
        </CCol>
        <CCol xs={9}>
          <ApiPageView user={user}/>
        </CCol> */}
      </CRow>


    </div>
  )
}


const ApiDocView = ({ user }) => {
  return (
    <CommonPage title="API Doc v1.0.1" actions={[]}>
      <ApiDocBody user={user} />
    </CommonPage>

  );
};

export default ApiDocView;
