import {
  CCol,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
  isPaginateReq = true,
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
        pagination
        paginationServer={isPaginateReq}
        striped
        customStyles={tableStyle}
        highlightOnHover
        pointerOnHover
        paginationTotalRows={totalRows}
        progressPending={progressPending}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        // selectableRows
        // selectableRowsComponent={Checkbox}
        dense={false}
        onRowClicked={(data, e) => {
          if (ExpandedComponent) {
            setVisible(true);
            setExpandData(data);
          }
        }}
      />
      <COffcanvas
        placement="end"
        visible={visible}
        onDismiss={() => setVisible(false)}
      >
        <COffcanvasHeader style={{ backgroundColor: "#1692ff", color: "#fff" }}>
          <COffcanvasTitle>
            <FontAwesomeIcon
              className="me-2"
              icon={faArrowLeft}
              onClick={() => setVisible(false)}
            />
            {expandData && expandData.bname}
          </COffcanvasTitle>
        </COffcanvasHeader>
        <COffcanvasBody style={{ backgroundColor: "#d5ebff" }}>
          <div>
            {ExpandedComponent ? <ExpandedComponent data={expandData} /> : ""}
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </CCol>
  );
};

export default PaginateTable;
