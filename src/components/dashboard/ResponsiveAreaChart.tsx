import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { ChartTooltip } from "../../components/dashboard/ChartTooltip";
import { DailyData } from "../../pages/dashboard/mockData";

type TResponsiveAreaChartProps = {
  kpi: string;
  data1: DailyData[];
  data2: DailyData[];
  colors: {
    stroke1: string;
    stroke2: string;
  };
};

const ResponsiveAreaChart = ({
  kpi,
  data1,
  data2,
  colors,
}: TResponsiveAreaChartProps) => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 0 0" />
        <XAxis
          dataKey="date"
          tickCount={data1?.length ?? 0}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
        />
        <YAxis
          tickCount={13}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
          interval="preserveStartEnd"
          domain={[0, "dataMax + 10"]}
        />
        <Tooltip
          content={<ChartTooltip kpi={kpi} colors={colors} />}
          wrapperStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            border: "0 solid #000",
            borderRadius: "10px",
          }}
        />
        <Line
          type="monotone"
          data={data1}
          dataKey="value"
          stroke={colors.stroke1}
          strokeWidth={3}
          dot={{ stroke: colors.stroke1, strokeWidth: 3 }}
        />
        <Line
          type="monotone"
          data={data2}
          dataKey="value"
          stroke={colors.stroke2}
          strokeWidth={3}
          dot={{ stroke: colors.stroke2, strokeWidth: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResponsiveAreaChart;
