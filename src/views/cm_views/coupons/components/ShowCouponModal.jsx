import { CButton, CCol, CForm, CImage, CRow } from "@coreui/react";
import {
  faCheck,
  faClipboard,
  faClipboardCheck,
  faCopy,
  faCross,
  faRupeeSign,
  faTimes,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { logo_png, portPay } from "src/iconsimport";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { myDate, myDateMMyy } from "src/utils/DateTimeUtil";
import { makeid } from "src/utils/RandomString";
import { apiErrorToast, okSuccessToast } from "../../custom/cm_toast";
import ImageBgModel from "src/commons/modals/ImageBgModel";
import { formatCoupon, splitString } from "src/utils/SplitStringUtil";

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
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
  const parts =
    couponData && couponData.couponNo.split(/(.{4})/).filter((O) => O);
  // const data = parts.replace(",", " ");
  console.log(`parts=>${parts}.`);
  console.log(`amount=>${parseInt(couponData && couponData.amount)}`);

  return (
    <div>
      <ImageBgModel
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
        {/* <CCol className="d-flex justify-content-end mt-4">
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
      </CCol> */}
        <CRow className="m-4">
          <CCol md={6}>
            <div
              className="fw-bold"
              style={{ fontSize: "25px", color: "white" }}
            >
              Coupon
            </div>
          </CCol>
          <CCol md={6} className="d-flex justify-content-end">
            <CImage src={logo_png} style={{ width: 110, height: "auto" }} />
          </CCol>

          <div
            className="m-2"
            style={{
              backgroundColor: " rgb(192, 192, 194)",
              width: "50px",
              height: "40px",
              borderRadius: "10px",
            }}
          ></div>
          <div>
            <CCol md={12} style={{ fontSize: "40px", color: "white" }}>
              {couponData && formatCoupon(couponData.couponNo)}
            </CCol>
            <CRow md={12}>
              <CCol md={6}>
                <CRow className="d-flex justify-content-end">
                  <CCol md={2} className="d-flex justify-content-center">
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#a9a9aa",
                      }}
                    >
                      VALID
                      <br />
                      FROM
                    </div>
                  </CCol>
                  <CCol
                    md={4}
                    className="d-flex justify-content-center"
                    style={{ color: "rgb(192, 192, 194)" }}
                  >
                    {row && myDateMMyy(row.created_at)}
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CRow className=" d-flex justify-content-start">
                  <CCol md={2} className="d-flex justify-content-center ">
                    <div style={{ fontSize: "10px", color: "#a9a9aa" }}>
                      VALID
                      <br />
                      THRU
                    </div>
                  </CCol>
                  <CCol md={4} style={{ color: "rgb(192, 192, 194)" }}>
                    {couponData && myDateMMyy(couponData.expiryDate)}
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </div>

          <CRow md={6}>
            <CCol>
              <div style={{ color: "rgb(192, 192, 194)" }}>
                Rahul Verma
                <br />
                <span style={{ fontSize: "10px" }}>
                  Coupon Sno. {row && row.id}
                </span>
              </div>
            </CCol>
            <CCol className="d-flex justify-content-end mt-2">
              <div
                className="fw-bold text-center pt-2 "
                style={{
                  backgroundColor: "white",
                  opacity: "0.5",
                  width: "50%",
                  height: "40px",
                  fontSize: "18px",
                  borderRadius: "4px",
                }}
              >
                {parseInt(couponData && couponData.amount)}
                {"\u20B9"}
              </div>
            </CCol>
          </CRow>
          <CCol className="mt-3">
            <CButton
              color="info"
              variant="outline"
              className="px-2 py-1 "
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
        </CRow>
      </ImageBgModel>
    </div>
  );
};

export default ShowCouponModal;
