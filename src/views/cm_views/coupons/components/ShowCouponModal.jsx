import { CButton, CCol, CForm, CRow } from "@coreui/react";
import {
  faCheck,
  faCross,
  faRupeeSign,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import IconTextButton from "src/commons/buttons/IconTextButton";
import CustomInput from "src/commons/inputs/CustomInput";
import CommonModal from "src/commons/modals/CommonModal";
import { portPay } from "src/iconsimport";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { myDate } from "src/utils/DateTimeUtil";
import { makeid } from "src/utils/RandomString";
import { apiErrorToast, okSuccessToast } from "../../custom/cm_toast";

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

const ShowCouponModal = ({ user, row }) => {
  const [request, setRequest] = useState(false);
  const [visible, setVisible] = useState(false);
  const [couponData, setCouponData] = useState();

  //   function addCoupons(amount) {
  //     if (!amount) {
  //       alert("empty amount");
  //     } else {
  //       postJsonData(
  //         ApiEndpoints.SHOW_COUPON,
  //         {
  //           api_token: user ? user.api_token : "",
  //           serialNumber: amount,
  //         },
  //         setRequest,
  //         (data) => {},
  //         (error) => {
  //           apiErrorToast(error);
  //         }
  //       );
  //     }
  //   }

  useEffect(() => {
    if (visible) {
      postJsonData(
        ApiEndpoints.SHOW_COUPON,
        {
          api_token: user ? user.api_token : "",
          serialNumber: row && row.id,
        },
        setRequest,
        (data) => {
          setCouponData(data.info);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    }
    return () => {};
  }, [visible]);

  return (
    <CommonModal
      btn={
        <CButton
          className="px-3 py-1"
          color="success"
          variant="outline"
          onClick={() => {
            setVisible(true);
          }}
        >
          View Coupon
        </CButton>
      }
      outDismiss={true}
      isVisible={visible}
      setIsVisible={setVisible}
    >
      <CRow className="px-2 py-3">
        <CCol sm={12} xs={12}>
          <CRow>
            <div
              className="text-center fw-bold mb-5"
              style={{ fontSize: "25px", color: "#0079B6" }}
            >
              Coupon Details
            </div>
          </CRow>
        </CCol>
        <CRow className="text-center">
          <CCol md={6}>Coupon Number:</CCol>
          <CCol md={6}>{couponData && couponData.couponNo}</CCol>
          <CCol md={6}>Coupon Expiry:</CCol>
          <CCol md={6}>{couponData && myDate(couponData.expiryDate)}</CCol>
        </CRow>

        <div className="d-flex justify-content-around mt-4">
          <CButton
            color="success"
            variant="outline"
            className="px-4 py-2"
            onClick={() => {
              setVisible(false);
            }}
          >
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            OK
          </CButton>
        </div>
      </CRow>
    </CommonModal>
  );
};

export default ShowCouponModal;
