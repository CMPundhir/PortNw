import React from "react";

import UsersView from "./UsersView";
import { UserType } from "src/commons/Constants";

const SubAdminsView = ({ user }) => {
  return (
    <>
      <UsersView
        title="Sub Admins"
        user={user}
        title="Sub Admins"
        userType={UserType.SUB_ADMIN}
      />
    </>
  );
};

export default SubAdminsView;
