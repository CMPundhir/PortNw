import React from "react";
import { ACTION } from "src/commons/Constants";
import DthForm from "./DthForm";
import ElectricityForm from "./ElectricityForm";
import MobileForm from "./MobileForm";

const FormContainer = ({ action }) => {
  return (
    <>
      <div
        hidden={action != ACTION.MOBILE_RECHARGE && action != ACTION.DTH}
        className="dth-form-container"
      >
        <DthForm action={action} />
      </div>

      <div hidden={action != ACTION.ELECTRICITY} className="ElectricityForm">
        <ElectricityForm />
      </div>
      <div hidden={action != ACTION.CREDIT_CARD} className="ElectricityForm">
        <MobileForm />
      </div>
    </>
  );
};

export default FormContainer;
