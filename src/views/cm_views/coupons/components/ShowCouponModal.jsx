import { CButton, CCol, CForm, CImage, CRow } from "@coreui/react";
import {
  faCheck,
  faClipboard,
  faClipboardCheck,
  faCopy,
  faCross,
  faRupeeSign,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { logo_png, portPay } from "src/iconsimport";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { myDate } from "src/utils/DateTimeUtil";
import { makeid } from "src/utils/RandomString";
import { apiErrorToast, okSuccessToast } from "../../custom/cm_toast";
import ColourModal from "src/commons/modals/ColourModal";
import { splitString } from "src/utils/SplitStringUtil";

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};
const copyToClipboard = (e) => {
  const text = document.getElementById("copy");
};

const ShowCouponModal = ({ user, row }) => {
  const [request, setRequest] = useState(false);
  const [visible, setVisible] = useState(false);
  const [couponData, setCouponData] = useState();
  let coupon_number;

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
          coupon_number = data && data.info && data.info.couponNo;
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    }
    return () => {};
  }, [visible]);

  useEffect(() => {
    console.log("coupon data: ", coupon_number);
    return () => {};
  }, [couponData]);

  return (
    <ColourModal
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
      <CRow className="mt-3 mb-4 mx-3">
        <CRow className="">
          <CCol>
            <CImage
              className=""
              src={logo_png}
              style={{ width: 100, height: "auto" }}
            />
          </CCol>
        </CRow>
        <CRow className="p-1 mb-4">
          <CCol sm={12} xs={12}>
            <CRow>
              <div
                className="text-center fw-bold mb-4"
                style={{ fontSize: "25px" }}
              >
                Coupon Details
              </div>
            </CRow>
          </CCol>
          <CRow className="text-center fw-bold">
            <CCol md={6}>Coupon Number :</CCol>
            <CCol md={6}>{couponData && couponData.couponNo}</CCol>
            <CCol md={6}>Expiry Date :</CCol>
            <CCol md={6}>{couponData && myDate(couponData.expiryDate)}</CCol>
            <CCol md={6}>Amount :</CCol>
            <CCol md={6}>{couponData && couponData.amount}</CCol>
          </CRow>
        </CRow>
        <CRow>
          <CCol className="d-flex justify-content-center mt-4">
            <CButton
              color="info"
              variant="outline"
              className="px-3 py-1 "
              onClick={() => {
                navigator.clipboard.writeText(
                  couponData && couponData.couponNo
                );
                okSuccessToast(
                  "Token Copied Successfully",
                  couponData && couponData.couponNo
                );
              }}
            >
              <FontAwesomeIcon icon={faCopy} className="me-2" />
              Copy
            </CButton>
          </CCol>
          <CCol className="d-flex justify-content-center mt-4">
            <CButton
              className="fw-bold"
              color="dark"
              variant="ghost"
              onClick={() => {
                setVisible(false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} className="me-2" />
              Close
            </CButton>
          </CCol>
        </CRow>
      </CRow>
    </ColourModal>
  );
};

export default ShowCouponModal;
