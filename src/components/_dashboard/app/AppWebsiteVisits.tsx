import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import { BaseOptionChart } from "../../charts";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "저장탱크수위",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
  {
    name: "START 수위설정",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  },
  {
    name: "END 수위설정",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "gradient", "solid"] },
    labels: [
      "01/01/2021",
      "02/01/2021",
      "03/01/2021",
      "04/01/2021",
      "05/01/2021",
      "06/01/2021",
      "07/01/2021",
      "08/01/2021",
      "09/01/2021",
      "10/01/2021",
      "11/01/2021",
    ],
    xaxis: { type: "datetime" },
    colors: ["#2196f3", "#ffe700", "#2cd9c5"],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} %`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="저장탱크 수위"
        subheader="최근 12개월 저장탱크, START, END 수위가 보여집니다."
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          /* @ts-ignore */
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
