import { CButton, CCol, COffcanvas, COffcanvasBody } from "@coreui/react";
import {
  faChevronCircleLeft,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { customStyles } from "src/views/cm_views/custom/cm_table_styles";

const PaginateTable = ({
  columns,
  user,
  list,
  setList,
  ExpandedComponent,
  filterFunc,
  progressPending = false,
  totalRows,
  handlePerRowsChange,
  handlePageChange,
  tableStyle = customStyles,
  paginateServer = true,
  expandVisible,
  setExpandVisible,
}) => {
  const [visible, setVisible] = useState(false);
  const [expandData, setExpandData] = useState();
  return (
    <CCol>
      <DataTable
        columns={columns}
        data={list}
        // subHeader
        // subHeaderComponent={filterInput}
        // expandableRowsComponent={ExpandedComponent}
        // expandOnRowClicked={ExpandedComponent ? true : false}
        // expandableRows={ExpandedComponent ? true : false}
        pagination={paginateServer}
        paginationServer={paginateServer}
        striped
        customStyles={tableStyle}
        highlightOnHover
        pointerOnHover
        paginationTotalRows={totalRows}
        progressPending={progressPending}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        dense={false}
        onRowClicked={(data, e) => {
          if (ExpandedComponent) {
            setVisible(true);
            setExpandData(data);
          }
        }}
      />

      <COffcanvas
        closeOnOverlayClick={false}
        placement="end"
        visible={visible}
        scroll
        onDismiss={() => setVisible(false)}
      >
        <COffcanvasBody className="p-0">
          <div
            className="text-primary fw-bold pt-3 px-3 pb-3"
            style={{
              backgroundColor: "#E1609C",
            }}
          >
            <div className="d-flex justify-content-between">
              <span>
                <FontAwesomeIcon
                  icon={faChevronCircleLeft}
                  className="text-reset hover-zoom"
                  onClick={() => setVisible(false)}
                  size="lg"
                />
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="text-reset hover-zoom"
                  onClick={() => setVisible(false)}
                  size="lg"
                />
              </span>
            </div>
          </div>
          <div style={{ backgroundColor: "#fff" }}>
            {ExpandedComponent ? <ExpandedComponent data={expandData} /> : ""}
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </CCol>
  );
};

export default PaginateTable;
