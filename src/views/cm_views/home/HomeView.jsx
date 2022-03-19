import { CCard, CRow, CCol } from "@coreui/react";
import {
  faBroadcastTower,
  faCreditCard,
  faGasPump,
  faGlobeAsia,
  faHandHoldingWater,
  faLandmark,
  faMobile,
  faPhoneSquare,
  faSatellite,
  faSatelliteDish,
  faWater,
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
import DetailsCard from "./components/DetailsCard";
import ProgressCard from "./components/ProgressCard";
import TaskCard from "./components/TaskCard";
import ScrollCards from "./components/ScrollCards";

const HomeView = ({ user }) => {
  const [action, setAction] = useState(ACTION.MOBILE_RECHARGE);
  const [isactive, setIsactive] = useState();
  const [title, setTitle] = useState("Mobile Recharge");

  return (
    <>
      <CRow>
        <CCol lg={8} md={12}>
          <TransparentCard title={title}>
            <CRow className="d-flex align-items-center justify-content-center">
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
                icon={faSatelliteDish}
                text="DTH"
              />
              <CategoryButton
                isActive={action == ACTION.ELECTRICITY}
                onClick={() => {
                  setAction(ACTION.ELECTRICITY);
                  setIsactive(true);
                  setTitle("Electricity");
                }}
                icon={faSatellite}
                text="Electricity"
              />
              <CategoryButton
                isActive={action == ACTION.CREDIT_CARD}
                onClick={() => {
                  setAction(ACTION.CREDIT_CARD);
                  setIsactive(true);
                  setTitle("Credit Card");
                }}
                icon={faCreditCard}
                text="Credit card"
              />
              <CategoryButton
                isActive={action == ACTION.BROADBAND}
                onClick={() => {
                  setAction(ACTION.BROADBAND);
                  setIsactive(true);
                  setTitle("Broad Band");
                }}
                icon={faBroadcastTower}
                text="Broad Band"
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
                icon={faMobile}
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
            </CRow>
            <FormContainer action={action} />
            <ScrollCards />
          </TransparentCard>
        </CCol>

        <CCol lg={4} md={12}>
          <div className="RightCard ms-4">
            <CRow lg={4} md={12}>
              <DetailsCard />
            </CRow>
            <CRow lg={4} md={12}>
              <ProgressCard />
            </CRow>
            <CRow lg={4} md={12}>
              <TaskCard />
            </CRow>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default HomeView;
