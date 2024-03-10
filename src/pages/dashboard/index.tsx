import React, { useMemo } from "react";
import Stats from "../../components/dashboard/Stats";
import ResponsiveAreaChart from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { DailyData } from "./mockData"; // Importing DailyData interface from mockData
import mockData from "./mockData"; // Importing mockData
import { TTab } from "../../interfaces";

const Dashboard: React.FC = () => {
  const useMemoizedChartData = (d: DailyData[]) => {
    return useMemo(() => {
      return d.map((item) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(mockData.dailyRevenue);
  const memoizedOrdersData = useMemoizedChartData(mockData.dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(mockData.newCustomers);
  const memoizedOnlineStoreSessions = useMemoizedChartData(
    mockData.onlineStoreSessions
  );

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Online store sessions",
      revenue: "255,581",
      percent: "9%",
      content: (
        <ResponsiveAreaChart
          kpi="Online store sessions"
          data1={memoizedOnlineStoreSessions}
          data2={memoizedNewCustomersData}
          colors={{
            stroke1: "rgb(54, 162, 235)",
            stroke2: "rgb(255, 99, 132)", // Add a second stroke color for comparison
          }}
        />
      ),
    },
    {
      id: 2,
      label: "Net return value",
      revenue: "-$15,07.44",
      percent: "9%",
      content: (
        <ResponsiveAreaChart
          kpi="Daily orders"
          data1={memoizedOrdersData}
          data2={memoizedNewCustomersData}
          colors={{
            stroke1: "rgb(54, 162, 235)",
            stroke2: "rgb(255, 99, 132)", 
          }}
        />
      ),
    },
    {
      id: 3,
      label: "Total orders",
      revenue: "10,511",
      percent: "9%",
      content: (
        <ResponsiveAreaChart
          kpi="New customers"
          data1={memoizedRevenueData}
          data2={memoizedNewCustomersData}
          colors={{
            stroke1: "rgb(54, 162, 235)",
            stroke2: "rgb(255, 99, 132)", 
          }}
        />
      ),
    },
    {
      id: 4,
      label: "Conversion rate",
      revenue: "3.18%",
      percent: "9%",
      content: (
        <ResponsiveAreaChart
          kpi="Online Store Sessions"
          data1={memoizedOrdersData}
          data2={memoizedNewCustomersData}
          colors={{
            stroke1: "rgb(54, 162, 235)",
            stroke2: "rgb(255, 99, 132)", 
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

export default Dashboard;
