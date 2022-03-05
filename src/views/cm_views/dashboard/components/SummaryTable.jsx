import { CCard, CCardBody, CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import PaginateTable from "src/commons/components/PaginateTable";
import { ReportType } from "src/commons/Constants";
import { useAx } from "src/networks/ApiController";
import ApiEndpoints from "src/networks/ApiEndpoints";

const columns = [
  {
    name: "Name",
    selector: (row) => row.bname,
  },
  {
    name: "Admin Transfer",
    selector: (row) => rupeeIn2Dec(row.payin),
  },
  {
    name: "Payout",
    selector: (row) => rupeeIn2Dec(row.payout),
  },
];

let lastPage = 1;
let perPage = 10;
let title = "";

const SummaryTable = ({ user, type }) => {
  const [summaryData, setSummaryData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  const getUrl = (page = lastPage, per_page = perPage, type = "") => {
    return `${ApiEndpoints.ADMIN_SUMMARY}?api_token=${
      user ? user.api_token : ""
    }&page=${page}&per_page=${per_page}&type=${type}`;
  };

  const [{ data, loading, error }, refetch] = useAx(
    getUrl(lastPage, perPage, type)
  );

  const handlePageChange = (page) => {
    lastPage = page;
  };

  const handlePerRowsChange = (newPerPage, page) => {
    perPage = newPerPage;
    lastPage = page;
  };

  useEffect(() => {
    if (type == ReportType.TODAY) {
      title = "Today's";
      summaryData[0] = data;
    } else if (type == ReportType.THIS_MONTH) {
      title = "This Month's";
      summaryData[1] = data;
    } else if (type == ReportType.LAST_MONTH) {
      title = "Last Month's";
      summaryData[2] = data;
    }
    return () => {};
  }, [type]);

  return (
    <CCard>
      <CCardBody>
        <h4 className="text-center">
          <CSpinner size="sm" hidden={!loading} />
          &ensp;Admin {title} Summary
        </h4>
        <PaginateTable
          columns={columns}
          list={data}
          totalRows={totalRows}
          handlePerRowsChange={handlePerRowsChange}
          handlePageChange={handlePageChange}
          progressPending={loading}
        />
      </CCardBody>
    </CCard>
  );
};

export default SummaryTable;
