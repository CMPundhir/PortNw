import React from "react";
import { CrRqType, UserType } from "src/commons/Constants";
import AdminCreditReqListView from "./AdminCreditReqListView";

const MasterCrRequestView = ({ user }) => {
  return (
    <>
      <AdminCreditReqListView
        title="Admin Credits"
        user={user}
        type={CrRqType.SUCCESS}
        isAdminCr = {true}
      />
    </>
  );
};

export default MasterCrRequestView;
