import { useState } from "react";

// Ant Design
import { Tabs } from "antd";

// Components
import ChildTab from "../ChildTabs/ChildTab";

// Interfaces and Interface
import { IAttendanceTabsData } from "../../../types/reports/AttendanceInterface";
import { AttendanceTabsData } from "../../../mock/reports/AttendanceMockData";


// SCSS
import "./Tabs.scss";

const AttendanceTabs = () => {

  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  const [childTabName, setChildTabName] = useState<IAttendanceTabsData[] | IAttendanceTabsData | undefined>(AttendanceTabsData);
  const onChange = (key: string) => {
    let filteredData = AttendanceTabsData.find((item: IAttendanceTabsData) => item.label === key);
    setChildTabName(filteredData);
  };

  return (
    <div >
      {(role === "Admin" || role === "Manager") ? (
        <Tabs className="wrapper-tabs" defaultActiveKey="My" tabBarStyle={{ paddingLeft: "1rem" }} items={AttendanceTabsData.map((item: IAttendanceTabsData) => {
          return {
            label: item.label,
            key: item.key,
            children: <ChildTab renderChild={childTabName} />,
          };
        })} onChange={onChange} />
      ) : <ChildTab renderChild={"My"} />}
    </div>
  );
};

export default AttendanceTabs;
