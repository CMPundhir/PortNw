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
import React from "react";
import CategoryButton from "src/commons/buttons/CategoryButton";
import NonTransparentCard from "src/commons/cards/NonTransparentCard";
import TransparentCard from "src/commons/cards/TransparentCard";
import RechargeForm from "../home/components/MobileForm";
import RecentRecharges from "./components/RecentRecharges";
import UserDataCard from "src/commons/cards/UserDataCard";
import DthForm from "../home/components/DthForm";

const DashboardNew = ({ user }) => {
  return (
    <>
      <CRow>
        <CCol lg={8} md={12}>
          <TransparentCard
            title="Mobile Recharge"
            children={[
              <CRow className="d-flex align-items-center justify-content-center">
                <CategoryButton icon={faMobile} text="Recharge" />
                <CategoryButton icon={faSatelliteDish} text="DTH" />
                <CategoryButton icon={faSatellite} text="Electricity" />
                <CategoryButton icon={faCreditCard} text="Credit bill" />
                <CategoryButton icon={faBroadcastTower} text="Broad Band" />
                <CategoryButton icon={faPhoneSquare} text="Landline" />
                <CategoryButton icon={faMobile} text="Piped Gass" />
                <CategoryButton icon={faHandHoldingWater} text="Water" />
              </CRow>,

              <RechargeForm />,
              <RecentRecharges />,
              <DthForm />,
            ]}
          ></TransparentCard>
        </CCol>

        <CCol lg={4} md={12}>
          <div className="RightCard ms-4">
            <CRow lg={4} md={12}>
              <TransparentCard>duhdiuhdiu</TransparentCard>
            </CRow>
            <CRow lg={4} md={12}>
              <NonTransparentCard></NonTransparentCard>
            </CRow>
            <CRow lg={4} md={12}>
              <NonTransparentCard></NonTransparentCard>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default DashboardNew;
