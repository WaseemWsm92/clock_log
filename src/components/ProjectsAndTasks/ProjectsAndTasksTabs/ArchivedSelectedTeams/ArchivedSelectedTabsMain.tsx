import React from 'react'
import ArchivedMembersTabContent from './ArchivedMembersTabContent'
import { ArchivedTeamsTabContent } from './ArchivedTeamsTabContent'

export const ArchivedSelectedTabsMain = (props: any) => {
  return (
    <div>
        <div className="wrap-team-select-tasks">
      {(props.archivedSelectedTeams === "members" || props.archivedSelectedTeams === "") && 
      <ArchivedMembersTabContent/>
      }

      {
        props.archivedSelectedTeams === "teams" && <ArchivedTeamsTabContent/>
      }

      


    </div>
    </div>
  )
}
