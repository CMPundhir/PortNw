import { CButton, CCol, CForm, CRow } from "@coreui/react";
import {
  faCross,
  faRupeeSign,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import IconTextButton from "src/commons/buttons/IconTextButton";
import CustomInput from "src/commons/inputs/CustomInput";
import CommonModal from "src/commons/modals/CommonModal";
import { portPay } from "src/iconsimport";
import { postJsonData } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";
import { makeid } from "src/utils/RandomString";
import { apiErrorToast, okSuccessToast } from "../../custom/cm_toast";
import { PortPayLogo } from "../../custom/cm_views";

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

const BuyCouponModal = ({
  user,
  isCouponModalVisible,
  setIsCouponModalVisible,
}) => {
  const [amount, setAmount] = useState();
  const [request, setRequest] = useState(false);

  function addCoupons(amount) {
    const current = new Date();
    const time = current.toLocaleString("en-GB");
    const newtime = time.substring(12, 22);
    const date = `${current.getDate()}-${
      current.getMonth() + 1
    }-${current.getFullYear()} ${newtime}`;
    const expiryDate = `${current.getDate()}-${
      current.getMonth() + 2
    }-${current.getFullYear()} ${newtime}`;

    if (!amount) {
      alert("empty amount");
    } else {
      postJsonData(
        ApiEndpoints.CREATE_COUPON,
        {
          api_token: user ? user.api_token : "",
          amount: amount,
        },
        setRequest,
        (data) => {
          okSuccessToast(
            "Congratulations, Purchase Successfull",
            JSON.stringify(data)
          );
          setIsCouponModalVisible(false);
        },
        (error) => {
          apiErrorToast(error);
        }
      );
    }
  }

  return (
    <CommonModal
      btn={""}
      outDismiss={true}
      isVisible={isCouponModalVisible}
      setIsVisible={setIsCouponModalVisible}
    >
      <CRow className="px-4 py-5">
        <CCol sm={2} xs={0}></CCol>
        <CCol sm={8} xs={12}>
          <CRow>
            <div
              className="text-center fw-bold mb-5"
              style={{ fontSize: "25px" }}
            >
              Purchase your Coupon
            </div>
            <CForm id="CouponForm">
              <CCol xs={12}>
                <CustomInput
                  icon={faRupeeSign}
                  className="bordernew p-2"
                  label="Enter amount"
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter Amount"
                  setInput={(amt) => {
                    setAmount(amt);
                  }}
                />
              </CCol>
            </CForm>
          </CRow>
        </CCol>

        <CCol sm={2} xs={0}></CCol>
        <div className="d-flex justify-content-around mt-4">
          <CButton
            className="formbtnCss px-4 py-1"
            onClick={() => {
              addCoupons(amount);
            }}
          >
            Submit
          </CButton>
          <CButton
            color="danger"
            variant="outline"
            className=" px-4 py-2"
            onClick={() => {
              setIsCouponModalVisible(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} className="me-1" />
            Close
          </CButton>
        </div>
      </CRow>
    </CommonModal>
  );
};

export default BuyCouponModal;
