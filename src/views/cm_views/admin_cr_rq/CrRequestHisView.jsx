import React from "react";
import { CrRqType, UserType } from "src/commons/Constants";
import AdminCreditReqListView from "./AdminCreditReqListView";
import TransparentCard from "src/commons/cards/TransparentCard";

const CrRequestHisView = ({ user }) => {
  return (
    <>
      <TransparentCard>
        <AdminCreditReqListView
          title="Load Money History"
          user={user}
          type={CrRqType.SUCCESS}
        />
      </TransparentCard>
    </>
  );
};

export default CrRequestHisView;
