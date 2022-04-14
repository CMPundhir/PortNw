import React from "react";
import { CrRqType, UserType } from "src/commons/Constants";
import AdminCreditReqListView from "./AdminCreditReqListView";
import TransparentCard from "src/commons/cards/TransparentCard";

const MasterCrRequestView = ({ user }) => {
  return (
    <>
      <TransparentCard>
        <AdminCreditReqListView
          title="Admin Credits"
          user={user}
          type={CrRqType.SUCCESS}
          isAdminCr={true}
        />
      </TransparentCard>
    </>
  );
};

export default MasterCrRequestView;
