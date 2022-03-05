import React from "react";
import TransactionStatus from "./TransactionStatus";

function calPer(total, num) {
  return total && num ? parseFloat((num / total) * 100).toFixed(1) : 0;
}

const TransactionTiles = ({ user, reports }) => {
  return (
    <div className="d-md-flex justify-content-md-between">
      <TransactionStatus
        txt="Transactions"
        color="#4093f7"
        count={reports && reports.total_count}
        perc="100"
      />
      <TransactionStatus
        txt="Success"
        color="#6BD58F"
        count={reports && reports.success_count}
        perc={reports ? calPer(reports.total_count, reports.success_count) : 0}
      />
      <TransactionStatus
        txt="Failed"
        color="#EF5350"
        count={reports && reports.failed_count}
        perc={reports ? calPer(reports.total_count, reports.failed_count) : 0}
      />
      <TransactionStatus
        txt="Pending"
        color="#F3AA3C"
        count={reports && reports.pnding_count}
        perc={reports ? calPer(reports.total_count, reports.pending_count) : 0}
      />
    </div>
  );
};

export default TransactionTiles;
