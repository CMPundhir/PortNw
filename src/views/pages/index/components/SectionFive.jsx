import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import {
  faBullhorn,
  faRupeeSign,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SectionFive = () => {
  return (
    <CContainer>
      <h1 className="mt-5 mb-5 fw-bold">
        Refer<span className="underline">& </span> Earn
      </h1>

      <CRow className="my-5 py-5">
        <CCol md={4} sm={12} className="my-5">
          <div className="offerCard m-2">
            <FontAwesomeIcon icon={faBullhorn} color="#BA457B" size="2x" />
            <h5 className="fw-bold my-4">You Refer Friend</h5>
            <p>
              You Refer Friends Share your referral link with friends. They get
              ₹10.
            </p>
          </div>
        </CCol>
        <CCol md={4} sm={12} className="my-5">
          <div className="offerCard m-2">
            <FontAwesomeIcon icon={faSignInAlt} color="#BA457B" size="2x" />
            <h5 className="fw-bold my-4">Your Friends Register</h5>
            <p>Your friends Register with using your referral link.</p>
          </div>
        </CCol>
        <CCol md={4} sm={12} className="my-5">
          <div className="offerCard m-2">
            <FontAwesomeIcon icon={faRupeeSign} color="#BA457B" size="2x" />
            <h5 className="fw-bold my-4">Earn You</h5>
            <p>You get ₹20. You can use these credits to take recharge.</p>
          </div>
        </CCol>{" "}
      </CRow>
    </CContainer>
  );
};
