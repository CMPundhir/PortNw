import React from "react";
import { CrRqType, UserType } from "src/commons/Constants";
import AdminCreditReqListView from "./AdminCreditReqListView";
import TransparentCard from "src/commons/cards/TransparentCard";

const CrRequestView = ({ user }) => {
  return (
    <>
      <TransparentCard>
        <AdminCreditReqListView
          title="Load Money Request"
          user={user}
          type={CrRqType.PENDING}
        />
      </TransparentCard>
    </>
  );
};

export default CrRequestView;
