import { Tabs } from "antd";
import type { TabsProps } from "antd";
import AddWorkSchedule from "./AddWorkSchedule/addWorkSchedule";
import ApplyWorkSchedule from "./ApplyWorkSchedule/applyWorkSchedule";
import "./workSchedule.scss";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Add Work Schedule`,
    children: <AddWorkSchedule />,
  },
  {
    key: "2",
    label: `Apply Work Schedule`,
    children: <ApplyWorkSchedule />,
  },
];

const WorkSchedule = () => {
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  return (
    <div className="work-shedule-main-wrapper">
      {role === "Admin" ? (
        <Tabs defaultActiveKey="1" items={items}  className="wrapper-tabs"/>
        ) : (
        <ApplyWorkSchedule />
        )}
    </div>
  );
};

export default WorkSchedule;
