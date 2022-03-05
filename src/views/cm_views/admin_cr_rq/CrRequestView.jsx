import React from "react";
import { CrRqType, UserType } from "src/commons/Constants";
import AdminCreditReqListView from "./AdminCreditReqListView";

const CrRequestView = ({ user }) => {
  return (
    <>
      <AdminCreditReqListView
        title="Load Money Request"
        user={user}
        type={CrRqType.PENDING}
      />
    </>
  );
};

export default CrRequestView;
