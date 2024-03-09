import React, { useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../interfaces";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type TTabViewProps = {
  tabs: TTab[];
};

export const TabView = ({ tabs }: TTabViewProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  const togglePanelVisibility = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  return (
    <div className="mx-auto py-4 bg-slate-50 border rounded-lg drop-shadow-md mt-12" style={{ width: "70%", height: "60%" }}>
      <div className="tabs flex justify-between">
        {tabs?.map((tab: TTab, index: number) => (
          <TabItem
            key={tab?.id}
            label={tab?.label}
            revenue={tab?.revenue}
            percent={tab?.percent}
            isActive={index === activeTab}
            clickHandler={() => setActiveTab(index)} />
        ))}
        <ChevronDownIcon className={`w-10 h-10 p-2 mb-3 mr-2 cursor-pointer ${isPanelVisible ? '' : 'rotate-180'}`} onClick={togglePanelVisibility} />
      </div>
      <div className="mx-auto">
        {isPanelVisible && tabs?.map((tab: TTab, index: number) => (
          <TabPanel key={tab?.id} isActive={index === activeTab}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

