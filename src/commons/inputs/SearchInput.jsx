import { CButton, CFormInput, CInputGroup } from "@coreui/react";
import React, { useEffect, useState } from "react";

const SearchInput = ({ list, setList, filterFunc }) => {
  const [SearchInput, setSearchInput] = useState();
  useEffect(() => {
    console.log(SearchInput);
    if (SearchInput) {
      const filterData = list.filter((item) => filterFunc(item, SearchInput));
      setList(filterData);
    } else {
      setList(list);
    }
    return () => {};
  }, [SearchInput]);

  return (
    <div className="d-flex text-center">
      <CInputGroup className="d-flex p-3" size="sm">
        <CFormInput
          className="py-2"
          id="src"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="addon-wrapping"
          value={SearchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <CButton
          style={{ backgroundColor: "#af3b71", color: "#fff" }}
          // color="info"
          // variant="outline"
          onClick={(e) => {
            setSearchInput("");
            setList(list);
          }}
        >
          Clear
        </CButton>
      </CInputGroup>
    </div>
  );
};

export default SearchInput;
