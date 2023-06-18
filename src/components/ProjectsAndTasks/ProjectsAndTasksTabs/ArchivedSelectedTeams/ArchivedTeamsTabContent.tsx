import { Avatar, Input, Table, Tooltip } from "antd";
import React, { useState } from "react";
import deleteIcon from "../../../../assets/icons/settings/projectandtasks/delete.svg";
import deleteIcon1 from "../../../../assets/icons/settings/projectandtasks/delete1.svg";
import managerImage from "../../../../assets/icons/settings/projectandtasks/managerImage.svg";
import type { ColumnsType } from "antd/es/table";
import "./ArchivedContentMain.scss";
import deleteWhiteIcon from "../../../../assets/icons/settings/projectandtasks/deletewhite.svg";
import { selectedTeamsData, teamsType } from "../../../../mock/SettingProjectAndTasks";
import ProjectAndTaskDeleteModal from "../ProjectAndTasksModals/ProjectAndTaskDeleteModal";
import searchIconLow from "../../../../assets/icons/search.svg"

export const ArchivedTeamsTabContent = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isDeleteTeamsOpen, setIsDeleteTeamsOpen] = useState<boolean>(false);

  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  console.log("role is ******************************", role)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 1;

  const columns: ColumnsType<teamsType> = [
    {
      title: "Team Name",
      dataIndex: "teamName",
      render: (teamName) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{teamName}</span>
      ),
    },
    {
      title: "Members",
      dataIndex: "members",
      render: (members) => (
        <div>
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#3F4059",
              backgroundColor: "#E5E5E5",
              cursor: "pointer",
              border: "2px solid #FFFFFF",
            }}
          >
            <Avatar src={managerImage} />
            <Avatar src={managerImage} />
            <Tooltip title="Ant User" placement="top">
              <Avatar style={{ backgroundColor: "#87d068" }} />
            </Tooltip>
            <Avatar style={{ backgroundColor: "#1890ff" }} />
          </Avatar.Group>
        </div>
      ),
    },
    {
      title: "Manager",
      dataIndex: "manager",
      render: (manager) => (
        <div className="d-flex align-items-center">
          <img
            src={managerImage}
            alt="managerImage"
            style={{
              height: "24px",
              width: "24px",
              borderRadius: "200px",
              marginRight: "8px",
            }}
          />
          <span className="fs-14 fw-400 line-height-21 grey-color">{manager}</span>
        </div>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div>
          {role == "Manager" ? <img src={deleteIcon1} alt="" onClick={() => setIsDeleteTeamsOpen(false)} /> : <img src={deleteIcon} alt="" onClick={() => setIsDeleteTeamsOpen(true)} />}

        </div>
      ),
    },
  ];
  return (
    <div className="wrap-archived-teams-content">
      <div className="selected-teams-filter d-flex justify-between">
        <div className="d-flex align-items-center">
          <h5 className="fs-16 fw-600 line-height-24 grey-color m-0">
            ClockLog
          </h5>
          {!!hasSelected && (
            <div
              className="d-flex justify-center align-items-center"
              style={{
                height: "30px",
                width: "30px",
                backgroundColor: "rgba(255, 77, 79, 0.8)",
                borderRadius: "50%",
                marginLeft: "15px",
              }}
              onClick={() => setIsDeleteTeamsOpen(true)}
            >
              <img src={deleteWhiteIcon} alt="deleteWhiteIcon" />
            </div>
          )}
        </div>

        <div className="wrap-teams d-flex align-items-center">
          <Input placeholder="Search Task" className="Search-team card-bg-color card-bg-3-border-color custom-input-field" prefix={<img src={searchIconLow} />} />
        </div>
      </div>
      <div style={{ boxShadow: "0px 0px 2px rgba(16, 24, 40, 0.25)" }}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          className="ant-table-content wrapper-table"
          dataSource={selectedTeamsData}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content", scrollToFirstRowOnChange: true }}
        />
      </div>
      <ProjectAndTaskDeleteModal isDeleteActiveOpen={isDeleteTeamsOpen} setIsDeleteActiveOpen={setIsDeleteTeamsOpen} />
    </div>
  )
}
