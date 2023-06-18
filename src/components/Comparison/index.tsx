import { FC, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import DynamicTab from "./tabs/DynamicTab";
import "./comparison.scss";
import { selectTeamBg, selectUserBg } from "../../assets/export";

const ComparisonModule: FC = () => {
  const [selectedTab, setSelected] = useState("teams");
  // const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  const items: TabsProps["items"] = [
    {
      key: "teams",
      label: `Teams`,
      children: <DynamicTab selectedTab={selectedTab} bgImage={selectTeamBg} tabLabel={"team"} />,
    },
    {
      key: "users",
      label: `Users`,
      children: <DynamicTab selectedTab={selectedTab} bgImage={selectUserBg} tabLabel={"User"} />,
    },
  ];
  const onChange = (key: string) => setSelected(key);
  return (
    <div className="comparison">
      <Tabs className="tabs wrapper-tabs" tabBarStyle={{ fontSize: 14, lineHeight: "21px" }} defaultActiveKey="teams" activeKey={selectedTab} items={items} onChange={onChange} />
    </div>
  );
};

export default ComparisonModule;
