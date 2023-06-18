import React, { useState } from "react";
import "./TeamSelectedMain.scss";
import { SelectedMembers } from "./SelectedMembers";
import { SelectedTeams } from "./SelectedTeams";
import { SelectedTasks } from "./SelectedTasks";

export const TeamSelectedMain = (props: any) => {
 
  return (
    <div className="wrap-team-select-tasks">
      {(props.selectedTeamsTask === "tasks" || props.selectedTeamsTask === "") && 
      <SelectedTasks/>
      }

      {
        props.selectedTeamsTask === "members" && <SelectedMembers/>
      }

      {
        props.selectedTeamsTask === "teams" && <SelectedTeams/>
      }


    </div>
  );
};
