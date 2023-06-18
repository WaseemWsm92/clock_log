import React, { useState } from "react";
import {Tabs } from "antd";
import type { TabsProps } from "antd";
import UsersTable from "../../components/usersManagement/usersTable";
import InviteUser from "../../components/usersManagement/invite-users-modal/invite-users";
import Screencasts from "../Screencasts/Screencasts"
import UsersSetting from "../../components/usersManagement/activeEdit/edit-users/users-setting";
import EditInfo from "../../components/usersManagement/activeEdit/edit-users/edit-info";
import UnderConstructionPage from "../UnderConstruction/UnderConstructionPage";
import DeactivateModal from "../../components/usersManagement/Modals/DeactivateModal";
import "../../sass/common.scss";
import "./Users.scss";
import ReportsLayout from "../../layout/ReportsLayout";
import UsersManagementLayout from "../../layout/UsersManagementLayout";

const UsersTabs: React.FC = () => {
  const [tabKey, setTabKey] = useState<string>("1");
  const [isShowAddModal, setIsShowModal] = useState<any>(false);
  const [isEditPage, setIsEditPage] = useState(false);
  const [deactivateModal, setDeactivateModal] = useState<boolean>(false);

  const Table = <UsersTable tabsKey={tabKey} setIsEditPage={setIsEditPage} />;
  const simpleTabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Active`,
      children: Table,
    },
    {
      key: "2",
      label: `Inactive`,
      children: Table,
    },
    {
      key: "3",
      label: `Deleted`,
      children: Table,
    },
    {
      key: "4",
      label: `Pending Invites`,
      children: Table,
    },
  ];
  const editTabItems: TabsProps["items"] = [
    {
      key: "1",
      label: `Info`,
      children: <EditInfo setIsEditPage={setIsEditPage} setDeactivateModal={setDeactivateModal} setTabKey={setTabKey} />,
    },
    {
      key: "2",
      label: `Screencast`,
      children: <Screencasts showCheckBoxes />,
    },
    {
      key: "3",
      label: `Reports`,
      children: <UsersManagementLayout />,
    },
    {
      key: "4",
      label: `Settings`,
      children: <UsersSetting setIsEditPage={setIsEditPage} />,
    },
  ];
  return (
    <div className="users">
      <Tabs
        className="wrapper-tabs"
        items={isEditPage ? editTabItems : simpleTabItems}
        onChange={(key: string) => setTabKey(key)}
      />
      <InviteUser
        isShowAddModal={isShowAddModal}
        setIsShowModal={setIsShowModal}
      />
      {deactivateModal && (
        <DeactivateModal
          deactivateModal={deactivateModal}
          setDeactivateModal={setDeactivateModal}
          tabKey={tabKey}
        />
      )}
    </div>
  );
};

export default UsersTabs;
