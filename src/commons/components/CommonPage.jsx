import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TransparentCard from "src/commons/cards/TransparentCard";

const CommonPage = ({ user, title, img, actions, children }) => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const col_buttons = actions
    ? actions.map((action) => {
        return action ? <CCol>{action}</CCol> : null;
      })
    : [];

  return (
    <>
      <TransparentCard>
        <CRow key={title}>
          <CCol>
            <div style={{ backgroundColor: "none", border: "none" }}>
              <CRow
                xs={{ cols: "auto" }}
                className="justify-content-between align-items-center"
              >
                <CCol>
                  <CRow
                    xs={{ cols: "auto" }}
                    className=" align-items-center text-center me-4 mt-4 mb-4"
                  >
                    <CCol className="pt-2">
                      <h4
                        className="fw-bold"
                        onClick={(e) => {
                          dispatch({ type: "set", sidebarShow: !sidebarShow });
                        }}
                      >
                        {title}
                      </h4>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol>
                  <CRow
                    xs={{ cols: "auto" }}
                    className="justify-content-sm-end align-items-center"
                  >
                    {col_buttons}
                  </CRow>
                </CCol>
              </CRow>
            </div>
            <CCard
              className="common-card mt-4"
              style={{ border: "none", overflow: "auto" }}
            >
              <div>{children}</div>
            </CCard>
          </CCol>
        </CRow>
      </TransparentCard>
    </>
  );
};

export default CommonPage;
