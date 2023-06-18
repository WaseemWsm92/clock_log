import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { ArchivedSelectedTabsMain } from "./ArchivedSelectedTabsMain";


const archivedselectedTeamsData: TabsProps["items"] = [
  {
    key: "members",
    label: `Members`,
  },
  {
    key: "teams",
    label: `Teams`,
  },
];


  

export const ArchivedSelectedTeamsMain = (props:any) => {
    const [archivedSelectedTeams, setArchivedSelectedTeams] = useState<any>("");

  const onChange = (key: string) => {
    setArchivedSelectedTeams(key)
  };
  return (
    <div>
          <Tabs
        defaultActiveKey="activeProjects"
        items={archivedselectedTeamsData.map((item: any) => {
          return {
            key: item.key,
            label: item.label,
            children: (
              <ArchivedSelectedTabsMain
                key={archivedSelectedTeams}
                archivedSelectedTeams={archivedSelectedTeams}
              />
            ),
          };
        })}
        onChange={onChange}
      />
    </div>
  )
}
