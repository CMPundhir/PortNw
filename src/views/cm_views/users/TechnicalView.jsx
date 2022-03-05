import React from "react";

import UsersView from "./UsersView";
import { UserType } from "src/commons/Constants";

const TechnicalView = ({ user }) => {
  return (
    <>
      <UsersView
        title="Technical Users"
        user={user}
        userType={UserType.TECHNICAL}
      />
    </>
  );
};

export default TechnicalView;
