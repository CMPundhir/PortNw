import { CRow } from "@coreui/react";
import { CChart } from "@coreui/react-chartjs";
import React from "react";
import { UserType } from "src/commons/Constants";

const BarChart = ({ user, reports }) => {
  return (
    <CChart
      type="bar"
      height={4}
      width={10}
      // data={{
      //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      //     datasets: [
      //         {
      //             label: 'GitHub Commits',
      //             backgroundColor: '#f87979',
      //             data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      //         },
      //     ],
      // }}
      data={{
        labels: reports && reports.dates ? reports.dates : [],
        datasets:
          user &&
          (user.role == UserType.ADMIN || user.role == UserType.SUB_ADMIN)
            ? [
                {
                  label: "Volume (in \u20b9)",
                  backgroundColor: "#f87979",
                  data: reports && reports.vol ? reports.vol : [],
                },
                {
                  label: "Profits (in \u20b9)",
                  backgroundColor: "#4093f7",
                  data: reports && reports.profits ? reports.profits : [],
                },
              ]
            : [
                {
                  label: "Volume (in Crores)",
                  backgroundColor: "#4093f7",
                  data: reports && reports.vol ? reports.vol : [],
                },
              ],
      }}
      labels="months"
    />
  );
};

export default BarChart;
