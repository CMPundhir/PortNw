import React, { useEffect, useState } from "react";
import { useAx } from "src/networks/ApiController";
import { apiErrorToast } from "src/views/cm_views/custom/cm_toast";
import PaginateTable from "./PaginateTable";

let lastPage = 1;
const ApiPaginateTable = ({
  user,
  columns = [],
  apiEnd,
  filterFunc,
  ExpandedComponent,
  paginateServer = true,
  returnRefetch,
  expandVisible,
  setExpandVisible,
  search,
  queryParam,
}) => {
  const [list, setList] = useState([]);
  const [filteresList, setFilteredList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const getUrl = (page, per_page) => {
    return `${apiEnd}?api_token=${
      user && user.api_token
    }&page=${page}&per_page=${per_page}&${queryParam}`;
  };
  const [{ data, loading, error }, refetch] = useAx(getUrl(lastPage, perPage));
  if (returnRefetch) returnRefetch(refetch);
  useEffect(() => {
    if (data) {
      console.log("Type of Data => " + data.length);
      if (data.data) {
        setUiData(data.data, data.total);
      } else if (data) {
        setUiData(data, data.length);
      }
    }
    return () => {};
  }, [data]);

  useEffect(() => {
    if (error) {
      apiErrorToast(error);
    }
    return () => {};
  }, [error]);

  useEffect(() => {
    if (search) {
      setFilteredList(
        list.filter((item) => {
          return filterFunc && filterFunc(item, search);
        })
      );
    } else {
      setFilteredList(list);
    }

    return () => {};
  }, [search, list]);

  // for setting data in UI
  const setUiData = (data, total) => {
    setTotalRows(total);
    setList(data);
  };
  const handlePageChange = (page) => {
    lastPage = page;
    if (paginateServer) {
      refetch(getUrl(page, perPage));
    }
  };

  const handlePerRowsChange = (newPerPage, page) => {
    lastPage = page;
    setPerPage(newPerPage);
    if (paginateServer) refetch(getUrl(page, newPerPage));
  };
  return (
    <div
      className="table-shadow"
      style={{ overflow: "auto", border: "none", borderRadius: "8px" }}
    >
      <PaginateTable
        columns={columns}
        list={filteresList}
        setList={setFilteredList}
        ExpandedComponent={ExpandedComponent}
        filterFunc={filterFunc}
        progressPending={loading}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
        paginateServer={paginateServer}
        expandVisible={expandVisible}
        setExpandVisible={setExpandVisible}
      />
    </div>
  );
};

export default ApiPaginateTable;
