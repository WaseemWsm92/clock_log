import { Input, Modal, Switch, Table } from "antd";
import React, { useState } from "react";
import addMember from "../../../../assets/icons/settings/projectandtasks/addMember.svg";
import deleteIcon from "../../../../assets/icons/settings/projectandtasks/delete.svg";
import deleteIcon1 from "../../../../assets/icons/settings/projectandtasks/delete1.svg";
import type { ColumnsType } from "antd/es/table";
import "./SelectedMembers.scss";
import { AddMember } from "./TeamSelectedForms/AddMember";
import deleteWhiteIcon from "../../../../assets/icons/settings/projectandtasks/deletewhite.svg";
import {
  memberDataType,
  selectedMemberData,
} from "../../../../mock/SettingProjectAndTasks";
import ProjectAndTaskDeleteModal from "../ProjectAndTasksModals/ProjectAndTaskDeleteModal";
import searchIconLow from "../../../../assets/icons/search.svg"
import { ArrowLeftOutlined } from "@ant-design/icons";

export const SelectedMembers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
          className={role == "Manager" ? 'projectmanager' : 'projectrole'}
        >
          <span className="fs-14 fw-400 line-height-21 grey-color" style={{ marginLeft: "10px" }}>
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
          disabled={role == "Manager" ? true : false}
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
    <div className="wrap-selected-members">
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
          <Input placeholder="Search Member" className="search-member card-bg-color card-bg-3-border-color  custom-input-field" prefix={<img src={searchIconLow} />} />
          {role === "Admin" && <button
            className="fs-16 fw-500 line-height-24 d-flex align-items-center justify-between ant-input-affix-wrapper btn-theme-color cursor-pointer"
            onClick={showModal}
          >
            <img src={addMember} alt="addMember" />
            Add Member
          </button>}

          <Modal
            title={<><ArrowLeftOutlined className="white-img-theme-class" onClick={handleCancel} /> Add Member</>}
            // title="Add Member"
            centered
            open={isModalOpen}
            onOk={handleOk}
            okText="Save"
            onCancel={handleCancel}
            className="modal-theme"
          >
            <AddMember />
          </Modal>
        </div>
      </div>
      <div>
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
  );
};
