import React from "react";
import { CrRqType, UserType } from "src/commons/Constants";
import AdminCreditReqListView from "./AdminCreditReqListView";

const CrRequestHisView = ({ user }) => {
  return (
    <>
      <AdminCreditReqListView
        title="Load Money History"
        user={user}
        type={CrRqType.SUCCESS}
      />
    </>
  );
};

export default CrRequestHisView;
