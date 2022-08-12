import React from "react";
import { ACTION } from "src/commons/Constants";
import CouponForm from "./CouponForm";
import DthForm from "./DthForm";
import ElectricityForm from "./ElectricityForm";
import MobileForm from "./MobileForm";

const FormContainer = ({ action }) => {
  return (
    <div className="p-3">
      <div
        className="mt-5"
        hidden={action != ACTION.MOBILE_RECHARGE && action != ACTION.DTH}
      >
        <DthForm action={action} />
      </div>
      <div
        hidden={action != ACTION.ELECTRICITY}
        className="ElectricityForm mt-5"
      >
        <ElectricityForm />
      </div>
      <div hidden={action != ACTION.BBPS} className="ElectricityForm mt-5">
        <MobileForm />
      </div>
      <div hidden={action != ACTION.BROADBAND} className="ElectricityForm mt-5">
        <MobileForm />
      </div>
      <div hidden={action != ACTION.LANDLINE} className="ElectricityForm mt-5">
        <MobileForm />
      </div>
      <div hidden={action != ACTION.GAS} className="ElectricityForm mt-5">
        <MobileForm />
      </div>
      <div hidden={action != ACTION.WATER} className="ElectricityForm mt-5 ">
        <MobileForm />
      </div>
      <div hidden={action != ACTION.COUPON} className="Coupon mt-5 ">
        <CouponForm />
      </div>
    </div>
  );
};

export default FormContainer;
