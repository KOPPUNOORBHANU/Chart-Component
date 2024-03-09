import React from "react";
import { KpiCard } from "./KpiCard";
import { IChartDatum } from "../../interfaces";
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { GetListResponse } from "@refinedev/core";

type TStats = {
  dailyRevenue?: GetListResponse<IChartDatum>;
  dailyOrders?: GetListResponse<IChartDatum>;
  newCustomers?: GetListResponse<IChartDatum>;
  isGraphVisible: boolean;
  toggleGraphVisibility: () => void;
};

const Stats = ({
  dailyRevenue,
  dailyOrders,
  newCustomers,
  isGraphVisible,
  toggleGraphVisibility,
}: TStats) => {
  return (
    <>
      <button onClick={toggleGraphVisibility} className="mt-4 mb-2">
        {isGraphVisible ? (
          <ChevronUpIcon className="h-5 w-5 mr-1 inline-block" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 mr-1 inline-block" />
        )}
        Stats
      </button>
      {isGraphVisible && (
        <div className="w-full mx-auto mb-4 flex flex-col justify-center items-stretch md:flex-row md:justify-between drop-shadow-md">
          <div className="bg-white flex flex-col shadow-md">
          <div className="w-full mx-auto md:flex-1 md:mr-2">
            <KpiCard
              title="Weekly Revenue"
              data={dailyRevenue}
              formatTotal={(value: number | string) => `$ ${value}`}
              icon={<CurrencyDollarIcon className="h-32 w-32" />}
              colors={{
                stroke: "rgb(54, 162, 235)",
                fill: "rgba(54, 162, 235, 0.2)",
              }}
            />
          </div>
          <div className="w-full mx-auto md:flex-1">
            <KpiCard
              title="Weekly Orders"
              data={dailyOrders}
              icon={<ShoppingCartIcon className="h-32 w-32" />}
              colors={{
                stroke: "rgb(255, 159, 64)",
                fill: "rgba(255, 159, 64, 0.2)",
              }}
            />
          </div>
          <div className="w-full mx-auto md:flex-1 md:ml-2">
            <KpiCard
              title="New Customers"
              data={newCustomers}
              icon={<UserGroupIcon className="h-32 w-32" />}
              colors={{
                stroke: "rgb(76, 175, 80)",
                fill: "rgba(76, 175, 80, 0.2)",
              }}
            />
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stats;
