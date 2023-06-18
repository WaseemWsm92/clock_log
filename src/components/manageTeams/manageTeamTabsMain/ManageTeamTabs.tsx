import { Tabs } from "antd";
import ActiveTab from "./ActiveTab/ActiveTab";
import ArchivedTab from "./ArchiveTabs/ArchivedTab";

const tabsData: any = [
  { key: "activeTeams", label: `Active Teams`, children: <ActiveTab /> },
  { key: "archivedTeams", label: `Archived Teams`, children: <ArchivedTab /> },
];
const ManageTeamTabsMain = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      <Tabs className="wrapper-tabs"
        defaultActiveKey="activeTeams"
        items={tabsData}
        onChange={onChange}
       
      />
    </div>
  );
};

export default ManageTeamTabsMain;
