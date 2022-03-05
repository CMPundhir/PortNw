import React from "react";

import UsersView from "./UsersView";
import { UserType } from "src/commons/Constants";

const OnBoardingView = ({ user }) => {
  return (
    <>
      <UsersView
        title="On Boarding Users"
        user={user}
        userType={UserType.ON_BOARDING}
      />
    </>
  );
};

export default OnBoardingView;
