// mockData.ts

export interface DailyData {
  date: string;
  value: number;
}

export interface MockData {
  dailyRevenue: DailyData[];
  dailyOrders: DailyData[];
  newCustomers: DailyData[];
  onlineStoreSessions: DailyData[];
}

const mockData: MockData = {
  dailyRevenue: [
    { date: "2023-03-01", value: 1200 },
    { date: "2023-03-02", value: 1400 },
    { date: "2023-03-03", value: 1000 },
    { date: "2023-03-04", value: 1300 },
    { date: "2022-03-05", value: 1700 },
    { date: "2022-03-01", value: 1600 },
    { date: "2022-03-01", value: 1000 },
    { date: "2022-03-02", value: 1200 },
    { date: "2024-03-03", value: 1300 },
    { date: "2024-03-04", value: 1100 },
    { date: "2024-03-05", value: 1500 },
    { date: "2024-03-01", value: 1000 },
  ],
  dailyOrders: [
    { date: "2024-03-01", value: 50 },
    { date: "2024-03-02", value: 60 },
    { date: "2024-03-03", value: 70 },
    { date: "2024-03-04", value: 55 },
    { date: "2024-03-05", value: 65 },
  ],
  newCustomers: [
    { date: "2024-03-01", value: 1000 },
    { date: "2024-03-02", value: 1200 },
    { date: "2024-03-03", value: 1500 },
    { date: "2024-03-04", value: 1100 },
    { date: "2024-03-05", value: 1800 },
    { date: "2023-03-01", value: 1200 },
    { date: "2023-04-02", value: 1400 },
    { date: "2023-04-03", value: 1000 },
    { date: "2023-04-04", value: 1300 },
    { date: "2022-03-05", value: 1700 },
  ],
  onlineStoreSessions: [
    { date: "2023-03-01", value: 1200 },
    { date: "2023-04-02", value: 1400 },
    { date: "2023-04-03", value: 1000 },
    { date: "2023-04-04", value: 1300 },
    { date: "2022-03-05", value: 1700 },
    { date: "2022-03-01", value: 1600 },
    { date: "2022-03-01", value: 1000 },
    { date: "2022-03-02", value: 1200 },
    { date: "2024-03-03", value: 1300 },
    { date: "2024-03-04", value: 1100 },
    { date: "2024-03-05", value: 1500 },
    { date: "2024-03-01", value: 1000 },
  ],
};

export default mockData;
