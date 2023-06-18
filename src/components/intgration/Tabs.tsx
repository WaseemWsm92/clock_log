import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { CardsDataType } from "../../mock/integrationData";
import CardsList from "./cardsList";
import { useState } from "react";

const items: TabsProps["items"] = [
  {
    key: "All",
    label: `All`,
  },
  {
    key: "Project Management",
    label: `Project Management`,
  },
  {
    key: "Payment & Invoicing",
    label: `Payment & Invoicing`,
  },
  {
    key: "Help Desk",
    label: `Help Desk`,
  },
  {
    key: "Communication",
    label: `Communication`,
  },
  {
    key: "CRM",
    label: `CRM`,
  },
];

function IntegrationTabs({cardsData}:any) {
  const [filteredCards, setFilteredCards] = useState<CardsDataType[]>(cardsData);

  const onChange = (key: string) => {
    if (key === "All") setFilteredCards(cardsData);
    else {
      let filteredData = cardsData.filter((item: CardsDataType) => item.type === key);
      setFilteredCards(filteredData);
    }
  };

  return (
    <div className="tabs">
      <Tabs
        className="wrapper-tabs"
        defaultActiveKey="All"
        items={items?.map((item: any) => {
          return {
            label: item.label,
            key: item.key,
            children: <CardsList cardItems={filteredCards} />,
          };
        })}
        onChange={onChange}
      />
    </div>
  );
}

export default IntegrationTabs;