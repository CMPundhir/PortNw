import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../routes";
import CircleGrad from "src/commons/components/CircleGrad";

const AppContent = ({ user }) => {
  return (
    <div >
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
            console.log(`${route.path} ${route.exact} ${route.name}`)
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
    </div>
  );
};

export default React.memo(AppContent);
