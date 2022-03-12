import React from "react";
import { ACTION } from "src/commons/Constants";
import RecentRecharges from "../../dashboard/components/RecentRecharges";
import DthForm from "./DthForm";
import MobileForm from "./MobileForm";

const FormContainer = ({ action }) => {
  return (
    <>
      <div
        hidden={action != ACTION.MOBILE_RECHARGE}
        className="mobile-form-container"
      >
        <MobileForm />
      </div>
      <div hidden={action != ACTION.DTH} className="dth-form-container">
        <DthForm />
      </div>
    </>
  );
};

export default FormContainer;
