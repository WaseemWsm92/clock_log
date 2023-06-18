import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { TeamSelectedMain } from "./TeamSelectedMain";
import { SelectedTasks } from "./SelectedTasks";


const selectedTeamsData: TabsProps["items"] = [
  {
    key: "tasks",
    label: `Tasks`,
  },
  {
    key: "members",
    label: `Members`,
  },
  {
    key: "teams",
    label: `Teams`,
  },
];

export const TeamSelectTasksMain = () => {
  const [selectedTeamsTask, setSelectedTeamsTask] = useState<any>("");
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  
  const onChange = (key: string) => {
    setSelectedTeamsTask(key)
  };

  
  return (
    <div>
       {role === "Admin" || role === "Manager" ?
          <Tabs
            defaultActiveKey="activeProjects"
            items={selectedTeamsData.map((item: any) => {
              return {
                key: item.key,
                label: item.label,
                children: (
                  <TeamSelectedMain
                    key={selectedTeamsTask}
                    selectedTeamsTask={selectedTeamsTask}
                  />
                ),
              };
            })}
            onChange={onChange}
          /> : <SelectedTasks />
      }
    </div>
  );
};
