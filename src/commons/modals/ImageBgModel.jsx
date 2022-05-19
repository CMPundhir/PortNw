import { CButton, CCard, CCol, CModal, CModalBody, CRow } from "@coreui/react";
import { faCopy, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { coupon_bg } from "src/iconsimport";
import { postJsonData } from "src/networks/ApiController";

import ApiEndpoints from "src/networks/ApiEndpoints";
import {
  apiErrorToast,
  okSuccessToast,
} from "src/views/cm_views/custom/cm_toast";
import Swal from "sweetalert2";
import IconTextButton from "../buttons/IconTextButton";

const ImageBgModel = ({
  btn,
  btnTxt,
  btnIcon,
  btnVariant = "outline",
  isVisible = false,
  setIsVisible,
  outDismiss = true,
  color,
  children,
  size,
  classs,
  user,
  row,
}) => {
  const [visible, setVisible] = useState(false);
  const [request, setRequest] = useState(false);
  const [couponData, setCouponData] = useState();
  let coupon_number;
  console.log(couponData && couponData.couponNo);
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
          alert(couponData);
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

  useEffect(() => {
    setVisible(isVisible);
    return () => {};
  }, [isVisible]);

  return (
    <div>
      {btn ? (
        btn
      ) : (
        <IconTextButton
          hidden={!btnTxt}
          txt={btnTxt}
          faImg={btnIcon}
          variant={btnVariant}
          color={color}
          onClick={() => {
            setIsVisible(!visible);
            setVisible(!visible);
          }}
        />
      )}
      <CModal
        backdropOpacity={0.3}
        backdrop={true}
        className="modal_wid"
        alignment="center"
        visible={visible}
        size={size ? size : ""}
        onDismiss={() => {
          if (request) {
            Swal.fire(
              "Warning!!",
              "Please wait request is under progress",
              "warning"
            );
          } else {
            if (outDismiss) {
              setIsVisible(false);
              setVisible(false);
            }
          }
        }}
        scrollable
      >
        <CModalBody className="px-4 py-4">
          <div>{children}</div>
        </CModalBody>
        {/* <div
            style={{
              backgroundImage: `url(${coupon_bg})`,
            }}
          >
            
          </div> */}
      </CModal>
    </div>
  );
};

export default ImageBgModel;
