import React from "react";
import { ACTION } from "src/commons/Constants";
import RecentRecharges from "../../dashboard/components/RecentRecharges";
import DthForm from "./DthForm";
import ElectricityForm from "./ElectricityForm";
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
      <div hidden={action != ACTION.ELECTRICITY} className="ElectricityForm">
        <ElectricityForm />
      </div>
    </>
  );
};

export default FormContainer;
