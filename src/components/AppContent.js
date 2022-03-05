import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";

const AppContent = ({ user }) => {
  return (
    <CContainer
      fluid
      style={{
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      }}
    >
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} user={user} key={idx} />
                    </>
                  )}
                />
              )
            );  
          })}
          <Redirect
            from="/"
            to={{
              pathname: "/dashboard",
              user: user,
              key: 1,
            }}
          />
        </Switch>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
