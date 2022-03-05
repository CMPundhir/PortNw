import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      {/* <div>
        <a
          href="https://biggbrains.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright
        </a>
        <span className="ms-1">&copy; 2021 iMoney.</span>
      </div> */}
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://www.biggbrains.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BiggBrains
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
