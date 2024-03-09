import React, { useState } from "react";
import {
  PencilIcon,
  QuestionMarkCircleIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { Label } from "recharts";

type TTabItem = {
  label: string;
  revenue: string;
  percent: string;
  isActive: boolean;
  clickHandler: () => void;
};

export const TabItem = ({
  label,
  revenue,
  percent,
  isActive,
  clickHandler,
}: TTabItem) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-3">
      <div className="relative">
        <button
          className={`flex flex-col justify-between items-center bg-white rounded-lg shadow-md p-3 w-full cursor-default focus:outline-none ${
            isActive ? "tab-active bg-gray-200" : ""
          } hover:bg-gray-200`}
          onClick={clickHandler}
        >
          <div className="flex items-center">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="text-md font-semibold mr-4 hover:cursor-default">
                {label}
              </span>
              <div
                className={`absolute top-full left-0 z-10 bg-white shadow-md rounded-lg justify-start mt-1 p-2 ${
                  isHovered ? "" : "hidden"
                }`} style={{minWidth:"300px"}}
              >
                {/* Dropdown content */}
                <h4 style={{fontWeight:"bold"}}>{label}</h4>
                <p>Some Random text which visible here</p>
              </div>
            </div>

            <div className="p-1 hover:bg-gray-400 rounded-md cursor-pointer">
              <PencilIcon className="w-4 h-4" onClick={toggleDropdown} />
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <span className="text-md font-semibold mr-2">{revenue}</span>
            <div className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span className="text-md">{percent}</span>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-5 left-[95%] z-10 bg-white shadow-md rounded-lg mt-1">
            <div className="p-2 text-sm">
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg p-1 relative">
                <ArrowTrendingUpIcon className="w-5 h-5" />
                <span>Average Order Value</span>
                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500 absolute right-0" />
              </div>

              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg p-1 relative"
                style={{ minWidth: "200px" }}
              >
                <ArrowTrendingUpIcon className="w-5 h-5" />
                <span className="whitespace-nowrap">Conversion rate</span>
                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500 absolute right-0" />
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg p-1 relative"
                style={{ minWidth: "200px" }}
              >
                <ArrowTrendingUpIcon className="w-5 h-5" />
                <span className="whitespace-nowrap">Gross sales</span>
                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500 absolute right-0" />
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg p-1 relative"
                style={{ minWidth: "200px" }}
              >
                <ArrowTrendingUpIcon className="w-5 h-5" />
                <span className="whitespace-nowrap">Net return value</span>
                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500 absolute right-0" />
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg p-1 relative"
                style={{ minWidth: "210px" }}
              >
                <ArrowTrendingUpIcon className="w-5 h-5" />
                <span className="whitespace-nowrap">
                  Store search conversation
                </span>
                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500 absolute right-0" />
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 rounded-lg p-1 relative"
                style={{ minWidth: "200px" }}
              >
                <ArrowTrendingUpIcon className="w-5 h-5" />
                <span className="whitespace-nowrap">Return rate</span>
                <QuestionMarkCircleIcon className="w-4 h-4 text-gray-500 absolute right-0" />
              </div>

              {/* Add more dropdown items as needed */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
