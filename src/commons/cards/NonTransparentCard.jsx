import { CCard, CCardBody, CCardText, CCardTitle } from "@coreui/react";
import React from "react";

const NonTransparentCard = () => {
  return (
    <CCard className="nonTransparent mt-4">
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
      </CCardBody>
    </CCard>
  );
};

export default NonTransparentCard;
