import { Input, Switch, Table } from "antd";
import React, { useState } from "react";
import deleteIcon from "../../../../assets/icons/settings/projectandtasks/delete.svg";
import deleteIcon1 from "../../../../assets/icons/settings/projectandtasks/delete1.svg";
import type { ColumnsType } from "antd/es/table";
import "./ArchivedContentMain.scss";
import deleteWhiteIcon from "../../../../assets/icons/settings/projectandtasks/deletewhite.svg";
import {
  memberDataType,
  selectedMemberData,
} from "../../../../mock/SettingProjectAndTasks";
import ProjectAndTaskDeleteModal from "../ProjectAndTasksModals/ProjectAndTaskDeleteModal";
import searchIconLow from "../../../../assets/icons/search.svg"


const ArchivedMembersTabContent = () => {
  const [isDeleteMemberOpen, setIsDeleteMemberOpen] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  console.log("role is ******************************", role)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 1;

  const switchOnChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };



  const columns: ColumnsType<memberDataType> = [
    {
      title: "Names",
      dataIndex: "name",
      render: (name) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{name}</span>
      ),
    },
    {
      title: "Project Role",
      dataIndex: "projectRole",
      render: (projectRole) => (
        <div
          className="projectmanager"
        >
          <span className="fs-14 fw-400 line-height-20" style={{ marginLeft: "10px" }}>
            {projectRole}
          </span>
        </div>
      ),
    },
    {
      title: "Manager",
      dataIndex: "manager",
      render: () =>
        <Switch onChange={switchOnChange}
          disabled={true}
        />,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <div>
          {role == "Manager" ? <img src={deleteIcon1} alt="" onClick={() => setIsDeleteMemberOpen(false)} /> : <img src={deleteIcon} alt="" onClick={() => setIsDeleteMemberOpen(true)} />}
          <ProjectAndTaskDeleteModal
            isDeleteActiveOpen={isDeleteMemberOpen}
            setIsDeleteActiveOpen={setIsDeleteMemberOpen}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="wrap-archived-content">
      <div className="selected-members-filter d-flex justify-between">
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
                cursor: "pointer",
              }}
              onClick={() => setIsDeleteMemberOpen(true)}
            >
              <img src={deleteWhiteIcon} alt="deleteWhiteIcon" />
            </div>
          )}
        </div>

        <div className="wrap-member d-flex align-items-center">
          <Input placeholder="Search Task" className="search-member  card-bg-color card-bg-3-border-color  custom-input-field" prefix={<img src={searchIconLow} />} />
        </div>
      </div>
      <div style={{ boxShadow: "0px 0px 2px rgba(16, 24, 40, 0.25)" }}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          className="ant-table-content wrapper-table"
          dataSource={selectedMemberData}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content", scrollToFirstRowOnChange: true }}
        />
      </div>
    </div>
  )
}

export default ArchivedMembersTabContent