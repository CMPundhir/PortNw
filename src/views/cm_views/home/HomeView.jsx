import { CCard, CRow, CCol } from "@coreui/react";
import {
  faBolt,
  faBroadcastTower,
  faBurn,
  faCarSide,
  faCreditCard,
  faGasPump,
  faGlobeAsia,
  faHandHoldingWater,
  faIdCard,
  faLandmark,
  faLightbulb,
  faMobile,
  faMoneyBill,
  faNetworkWired,
  faPhoneSquare,
  faPrescriptionBottle,
  faSatellite,
  faSatelliteDish,
  faTv,
  faWater,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import CategoryButton from "src/commons/buttons/CategoryButton";
import CommonCard from "src/commons/cards/CommonCard";
import TransparentCard from "src/commons/cards/TransparentCard";
import { ACTION } from "src/commons/Constants";
import RecentRecharges from "../dashboard/components/RecentRecharges";
import RechargeForm from "./components/MobileForm";
import DthForm from "./components/DthForm";
import FormContainer from "./components/FormContainer";
import ScrollCards from "./components/ScrollCards";
import RightSideComponent from "../custom/RightSideComponent";

const HomeView = ({ user }) => {
  const [action, setAction] = useState(ACTION.MOBILE_RECHARGE);
  const [isactive, setIsactive] = useState();
  const [title, setTitle] = useState("Mobile Recharge");

  return (
    <>
      <CRow>
        <CCol lg={12} md={12} className="px-5">
          <TransparentCard title={title} className="">
            <div style={{ width: "90%", margin: "0 auto" }}>
              <CRow className="d-flex justify-content-around p-5">
                <CategoryButton
                  isActive={action == ACTION.MOBILE_RECHARGE}
                  onClick={() => {
                    setAction(ACTION.MOBILE_RECHARGE);
                    setIsactive(true);
                    setTitle("Mobile Recharge");
                  }}
                  icon={faMobile}
                  text="Recharge"
                />
                <CategoryButton
                  isActive={action == ACTION.DTH}
                  onClick={() => {
                    setAction(ACTION.DTH);
                    setIsactive(true);
                    setTitle("DTH");
                  }}
                  icon={faTv}
                  text="DTH"
                />

                <CategoryButton
                  isActive={action == ACTION.ELECTRICITY}
                  onClick={() => {
                    setAction(ACTION.ELECTRICITY);
                    setIsactive(true);
                    setTitle("Electricity");
                  }}
                  icon={faLightbulb}
                  text="Electricity"
                />

                <CategoryButton
                  isActive={action == ACTION.BBPS}
                  onClick={() => {
                    setAction(ACTION.BBPS);
                    setIsactive(true);
                    setTitle("BBPS");
                  }}
                  icon={faBolt}
                  text="BBPS"
                />

                <CategoryButton
                  isActive={action == ACTION.BROADBAND}
                  onClick={() => {
                    setAction(ACTION.BROADBAND);
                    setIsactive(true);
                    setTitle("BroadBand");
                  }}
                  icon={faWifi}
                  text="BroadBand"
                />

                <CategoryButton
                  isActive={action == ACTION.LANDLINE}
                  onClick={() => {
                    setAction(ACTION.LANDLINE);
                    setIsactive(true);
                    setTitle("Landline");
                  }}
                  icon={faPhoneSquare}
                  text="Landline"
                />

                <CategoryButton
                  isActive={action == ACTION.GAS}
                  onClick={() => {
                    setAction(ACTION.GAS);
                    setIsactive(true);
                    setTitle("Piped Gass");
                  }}
                  icon={faBurn}
                  text="Piped Gass"
                />

                <CategoryButton
                  isActive={action == ACTION.WATER}
                  onClick={() => {
                    setAction(ACTION.WATER);
                    setIsactive(true);
                    setTitle("Water");
                  }}
                  icon={faHandHoldingWater}
                  text="Water"
                />
                {/* <CategoryButton
                isActive={action == ACTION.COUPON}
                onClick={() => {
                  setAction(ACTION.COUPON);
                  setIsactive(true);
                  setTitle("Coupon");
                }}
                icon={faIdCard}
                text="Coupon"
              /> */}
              </CRow>
            </div>

            <FormContainer action={action} />
            {/* <div
              style={{
                marginBottom: "none",
                // fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Repeat
            </div>
            <ScrollCards /> */}
          </TransparentCard>
        </CCol>
        {/* <RightSideComponent /> */}
        {/* <CRow className="mt-4">
          <div
            style={{
              marginBottom: "none",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Repeat
          </div>
          <ScrollCards />
        </CRow> */}
      </CRow>
    </>
  );
};

export default HomeView;
