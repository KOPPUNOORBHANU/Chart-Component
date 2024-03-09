import React, { useMemo, useState } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

export const Dashboard: React.FC = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });
  const { data: onlineStoreSessions } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);
  const memoizedOnlineStoreSessions = useMemoizedChartData(onlineStoreSessions);
  

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Online store sessions",
      revenue:"255,581",
      percent:"9%",
      content: (
        // <ResponsiveAreaChart
        //   kpi="Online store sessions"
        //   data={memoizedOnlineStoreSessions}
        //   colors={{
        //     stroke: "rgb(54, 162, 235)",
        //     fill: "rgba(54, 162, 235, 0.2)",
        //   }}
        // />
        
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={memoizedOnlineStoreSessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          name="Timeline 1"
          stroke="blue"
          dot={false} // Disable dots for solid line
        />
        <Line
          type="monotone"
          dataKey="value2"
          name="Timeline 2"
          stroke="red"
          strokeDasharray="5 5" // Make the line dashed for the second timeline
          dot={false} // Disable dots for dashed line
        />
      </LineChart>
    </ResponsiveContainer>

      ),
    },
    {
      id: 2,
      label: "Net return value",
      revenue:"-$15,07.44",
      percent:"9%",
      content: (
        <ResponsiveBarChart
          kpi="Daily orders"
          data={memoizedOrdersData}
          colors={{
            stroke: "rgb(255, 159, 64)",
            fill: "rgba(255, 159, 64, 0.7)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "Total orders",
      revenue:"10,511",
      percent:"9%",
      content: (
        <ResponsiveAreaChart
          kpi="New customers"
          data={memoizedNewCustomersData}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 4,
      label: "Conversion rate",
      revenue:"3.18%",
      percent:"9%",
      content: (
        <ResponsiveAreaChart
          kpi="Online Store Sessions"
          data={memoizedOnlineStoreSessions}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <TabView tabs={tabs} />
    </>
  );
};
