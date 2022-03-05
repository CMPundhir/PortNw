import { CCol, CImage, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { StoreKey } from "src/commons/Constants";
import { getValue, store } from "src/utils/CMLocalStorage";
import { ShowWelcomeDialog } from "src/views/cm_views/custom/cm_modals";
import logo_png from "src/assets/images/logo.png";
import {
  AppContent,
  AppFooter,
  AppHeader,
  AppSidebar,
} from "../components/index";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";

var isLoginMsgVisible = false;
const DefaultLayout = () => {
  const [user, setUser] = useState();
  const location = useLocation();
  const history = useHistory();
  const [isWelcomeShown, setIsWelcomeShown] = useState(
    location && location.state && location.state.isNewLogin
  );
  if (!user) {
    if (location && location.state && location.state.user) {
      setUser(location.state.user);
    } else {
      getValue(
        StoreKey.USER,
        (user) => {
          setUser(user);
          console.log(JSON.stringify(user));
          postJsonData(
            ApiEndpoints.Val_Tk,
            {
              api_token: user ? user.api_token : "",
            },
            null,
            () => {},
            (error) => {
              if (!isLoginMsgVisible) {
                isLoginMsgVisible = true;
                history.push("/login");
              }
            }
          );
        },
        (err) => {
          localStorage.clear();
          store.clear().then((v) => {
            if (!isLoginMsgVisible) {
              isLoginMsgVisible = true;
              history.push("/login");
            }
          });
        }
      );
    }
  }

  return user ? (
    <div>
      <AppSidebar user={user} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 mt-4 ms-2 me-2">
          <AppHeader user={user} />
          <AppContent user={user} />
        </div>
        {/* <AppFooter user={user} /> */}
      </div>
      {/* {isWelcomeShown ? <ShowWelcomeDialog user={user} /> : ""} */}
    </div>
  ) : (
    <div className="min-vh-100 text-center">
      <CImage
        rounded
        src={logo_png}
        width={120}
        height={40}
        onClick={(e) => {
          dispatch({ type: "set", sidebarShow: !sidebarShow });
        }}
      />
      <h6 className="m-2">&emsp;Loading...</h6>
    </div>
  );
};

export default DefaultLayout;
