import  { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Dropdown, Space, Table } from "antd";
import deleteIcon from "../../../assets/icons/settings/projectandtasks/delete.svg";
import deleteIcon1 from "../../../assets/icons/settings/projectandtasks/delete1.svg";
import active from "../../../assets/icons/settings/projectandtasks/active.svg";
import active1 from "../../../assets/icons/settings/projectandtasks/active1.svg";
import managerImage from "../../../assets/icons/settings/projectandtasks/managerImage.svg";
import { activeProjectdata } from "../../../mock/SettingProjectAndTasks";
import ProjectAndTaskDeleteModal from "./ProjectAndTasksModals/ProjectAndTaskDeleteModal";
import CreateProjectModal from "./CreateProjectModal/CreateProjectModal";
import ProjectAndTaskActiveModal from "./ProjectAndTasksModals/ProjectAndTaskActiveModal";
import Dots from "../../../assets/icons/dots.png"
import "./ProjectAndTasksTable.scss";


export const ArchivedProjectTable = (props: any) => {
  const { archivedSelection, archivedhasSelected } = props;
  const [isDeleteActiveOpen, setIsDeleteActiveOpen] = useState<boolean>(false);
  const [isArchivedActiveOpen, setIsArchivedActiveOpen] = useState<boolean>(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");
  console.log("role is ******************************", archivedSelection);

  const items: any = [
    {
      label: (
        <Space
          onClick={() =>
            role == "Manager"
              ? setIsDeleteActiveOpen(false)
              : setIsDeleteActiveOpen(true)
          }
        >
          {role == "Manager" ? (
            <img src={deleteIcon1} alt="deleteIcon" />
          ) : (
            <img src={deleteIcon} alt="deleteIcon" />
          )}
          <p className={role == "Manager" ? "opacity-4" : ""}>Delete</p>
        </Space>
      ),
      key: "1",
    },
    {
      label: (
        <Space
          onClick={() =>
            role == "Manager"
              ? setIsArchivedActiveOpen(false)
              : setIsArchivedActiveOpen(true)
          }
        >
          {role == "Manager" ? (
            <img src={active1} alt="archeive1" />
          ) : (
            <img src={active} alt="archeive1" />
          )}
          <p className={role == "Manager" ? "opacity-4" : ""}>Active</p>
        </Space>
      ),
      key: "2",
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: "Project Name",
      dataIndex: "projectname",
      render: (projectname) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{projectname}</span>
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
      title: "Created Date",
      dataIndex: "createdDate",
      render: (createdDate) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{createdDate}</span>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      render: (dueDate) => (
        <span className="fs-14 fw-400 line-height-21 grey-color">{dueDate}</span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          trigger={["click"]}
          className="actionDropDown"
        >
          <Space>
            <div className="border-color cursor-pointer">
              <img src={Dots} alt="menu" />
            </div>
          </Space>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="project-and-task-table">
          {/* {archivedhasSelected && 
          <>
          <div className="d-flex wrap-selected-icons">
              <div className="bgError-color d-flex align-items-center justify-center selected-icons">
                <img
                  src={deleteWhiteIcon}
                  onClick={() => setIsDeleteActiveOpen(true)}
                />
              </div>
              <div
                className="d-flex align-items-center justify-center selected-icons archieve-modal"
                style={{ backgroundColor: "#f0f8ff" }}
                onClick={() => setIsArchivedActiveOpen(true)}
              >
                <img src={active} />
              </div>
            </div>
          </>

          } */}

      <Table
        rowSelection={archivedSelection}
        columns={columns}
        className="wrapper-table"
        dataSource={activeProjectdata}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content", scrollToFirstRowOnChange: true }}
      />

      {/* modals start here */}
      <CreateProjectModal
        isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
      <ProjectAndTaskDeleteModal
        isDeleteActiveOpen={isDeleteActiveOpen}
        setIsDeleteActiveOpen={setIsDeleteActiveOpen}
      />
      <ProjectAndTaskActiveModal
      isArchivedActiveOpen={isArchivedActiveOpen}
      setIsArchivedActiveOpen={setIsArchivedActiveOpen}
      />

    </div>
  );
};
