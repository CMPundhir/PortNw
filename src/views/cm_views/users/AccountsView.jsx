import React from "react";
import { UserType } from "src/commons/Constants";

import UsersView from "./UsersView";

const AccountView = ({ user }) => {
  return (
    <>
      <UsersView
        title="Account Users"
        user={user}
        userType={UserType.ACCOUNTS}
      />
    </>
  );
};

export default AccountView;
