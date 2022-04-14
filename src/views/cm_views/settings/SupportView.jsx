import React from "react";
import CommonPage from "src/commons/components/CommonPage";
import { CMPage } from "../custom/cm_views";
import TransparentCard from "src/commons/cards/TransparentCard";

const SupportView = ({ user }) => {
  return (
    <CommonPage title="Support" user={user}>
      <h5 className="m-4">Coming soon . . .</h5>
    </CommonPage>
  );
};

export default SupportView;
