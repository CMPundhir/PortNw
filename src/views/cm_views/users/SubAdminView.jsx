import React from "react";

import UsersView from "./UsersView";
import { UserType } from "src/commons/Constants";
import TransparentCard from "src/commons/cards/TransparentCard";

const SubAdminsView = ({ user }) => {
  return (
    <>
      <UsersView title="Sub Admins" user={user} userType={UserType.SUB_ADMIN} />
    </>
  );
};

export default SubAdminsView;
