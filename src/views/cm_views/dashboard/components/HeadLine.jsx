import React, { useEffect, useState } from "react";
import { CCol, CRow, CSpinner } from "@coreui/react";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDataBtn } from "../../custom/cm_views";
import ApiEndpoints from "src/networks/ApiEndpoints";
import RefreshButton from "src/commons/buttons/RefreshButton";
import { get } from "src/networks/ApiController";
import { apiErrorToast } from "../../custom/cm_toast";

const HeadLine = ({ user, onRefresh, loading = false }) => {
  const [walletBalance, setWalletBalance] = useState("NA");
  const [progress, setProgress] = useState(false);

  function fetchWalletBalance() {
    get(
      ApiEndpoints.GET_FLOAT + "?api_token=" + (user ? user.api_token : ""),
      setProgress,
      (float) => {
        setWalletBalance(float);
      },
      (error) => {
        setWalletBalance(0);
        apiErrorToast(error);
      }
    );
  }
  useEffect(() => {
    if (walletBalance == "NA") fetchWalletBalance();
    return () => {};
  }, [walletBalance]);

  return (
    <CRow
      xs={{ cols: "auto" }}
      className="justify-content-md-between align-items-center d-flex"
    >
      <CCol className="pt-2">
        <h4 className="fw-bold text-black">Dashboard</h4>
      </CCol>

      <CCol>
        <span className=" me-5 fw-bold">
          Pool Balance:
          {progress ? (
            ""
          ) : (
            <FontAwesomeIcon className="ms-4 me-2" icon={faRupeeSign} />
          )}
          <CSpinner
            component="span"
            size="sm"
            aria-hidden="true"
            hidden={!progress}
            className="ms-4 me-2"
          />
          {walletBalance}
        </span>
        {/* <span className="fw-bold me-5">
          API Balance:
          <FontAwesomeIcon className="ms-4 me-2" icon={faRupeeSign} />
          {apiBalance}
        </span> */}
        <RefreshButton
          loading={loading}
          onClick={() => {
            if (onRefresh) onRefresh();
            fetchWalletBalance();
          }}
        />
        {getDataBtn(
          user,
          "Yes Bank",
          ApiEndpoints.GET_WALLET_YESBANK,
          user && user.role == "Admin",
          (bal) => {}
        )}
      </CCol>
    </CRow>
  );
};

export default HeadLine;
