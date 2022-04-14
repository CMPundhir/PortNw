import React from "react";
import TransparentCard from "src/commons/cards/TransparentCard";
import UsersView from "./UsersView";
import { UserType } from "src/commons/Constants";

const MerchantView = ({ user }) => {
  return (
    <>
      <UsersView user={user} title="Merchants" userType={UserType.USER} />
    </>
  );
};

export default MerchantView;
