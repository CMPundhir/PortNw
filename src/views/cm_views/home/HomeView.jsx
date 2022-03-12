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
import dthForm from "./components/dthForm";

const HomeView = ({ user }) => {
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
            ]}
          ></TransparentCard>
        </CCol>
        <CCol lg={4} md={12}>
          dfgd
        </CCol>
      </CRow>
    </>
  );
};

export default HomeView;
