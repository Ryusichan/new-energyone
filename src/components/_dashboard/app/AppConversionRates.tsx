// material
import { Box, Card, CardHeader } from "@mui/material";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// utils
import { fNumber } from "../../../utils/formatNumber";
//
import { BaseOptionChart } from "../../charts";

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [84, 68, 56, 46, 44, 40, 32, 24, 14, 8] }];

export default function AppConversionRates() {
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName: any) => fNumber(seriesName),
        title: {
          // formatter: (seriesName: any) => `#${seriesName}`,
          formatter: (seriesName: any) => "Time",
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories: [
        "고액분리기 자동운전",
        "A 고액 분리기",
        "A 흡입 PUMP",
        "A 배수 PUMP",
        "B 고액 분리기",
        "B 흡입 PUMP",
        "B 배수 PUMP",
        "발효건조기 자동운전",
        "발효건조기 교반기",
        "발효건조기 배출",
      ],
    },
  });

  return (
    <Card>
      <CardHeader
        title="누적시간"
        subheader="누석시간이 높은 10종류 장치를 보여줍니다."
      />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          // @ts-ignore
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
