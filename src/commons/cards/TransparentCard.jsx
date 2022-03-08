import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TransparentCard = ({ user, title, img, actions, children }) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const col_buttons = actions
    ? actions.map((action) => {
        return action ? <CCol>{action}</CCol> : null;
      })
    : [];

  return (
    <>
      <CRow key={title}>
        <CCol className="transparent">
          <div>
            <CRow
              xs={{ cols: "auto" }}
              className="justify-content-between align-items-center"
            >
              <CRow
                xs={{ cols: "auto" }}
                className="align-items-center text-center me-4 mt-4 mb-4"
              >
                <div className="pt-2">
                  <h4
                    className="fw-bold"
                    onClick={(e) => {
                      dispatch({ type: "set", sidebarShow: !sidebarShow });
                    }}
                  >
                    {title}
                  </h4>
                </div>
              </CRow>

              <div>
                <CRow
                  xs={{ cols: "auto" }}
                  className="justify-content-sm-end align-items-center"
                >
                  {col_buttons}
                </CRow>
              </div>
            </CRow>
          </div>
          <CCard className="mt-4" style={{ border: "none", overflow: "none" }}>
            <div>{children}</div>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default TransparentCard;
