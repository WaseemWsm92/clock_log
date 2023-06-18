import React, { useState, useEffect } from "react";
import { Button, Col, Input, Row } from "antd";
import createProject from "../../../assets/icons/createproject.svg";
import selectProject from "../../../assets/icons/selectProject.svg";
import archeivedProject from "../../../assets/icons/settings/archived.svg";
import choiceAvatar from "../../../assets/images/settings/choice-avatar.svg";
import { ProjectsAndTasksTable } from "./ProjectsAndTasksTable";
import { TeamSelectTasksMain } from "./Project&TasksSelectedTeams/TeamSelectTasksMain";
import CreateProjectModal from "./CreateProjectModal/CreateProjectModal";
import { ArchivedProjectTable } from "./ArchivedProjectTable";
import { ArchivedSelectedTeamsMain } from "./ArchivedSelectedTeams/ArchivedSelectedTeamsMain";
import searchIconLow from "../../../assets/icons/search.svg"
import deleteWhiteIcon from "../../../assets/icons/settings/projectandtasks/deletewhite.svg";
import archeive from "../../../assets/icons/settings/projectandtasks/archeive.svg";
import ProjectAndTaskDeleteModal from "./ProjectAndTasksModals/ProjectAndTaskDeleteModal";
import ProjectAndTaskArchive from "./ProjectAndTasksModals/ProjectAndTaskArchive";
import active from "../../../assets/icons/settings/projectandtasks/active.svg";
import ProjectAndTaskActiveModal from "./ProjectAndTasksModals/ProjectAndTaskActiveModal";
import "./ProjectsAndTasksTabs.scss";

export const ProjectsAndTasksTabs = (props: any) => {
  const [IsShowImage, setIsShowImage] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [archivedRowKeys, setArchivedRowKeys] = useState<React.Key[]>([]);
  const [isDeleteActiveOpen, setIsDeleteActiveOpen] = useState(false)
  const [isArchiveActiveOpen, setIsArchiveActiveOpen] = useState(false)
  const [isArchivedActiveOpen, setIsArchivedActiveOpen] = useState(false)
  const [isShowSelectedUser, setIsShowSelectedUser] = useState(false)
  const [employe, setEmployee] = useState("")

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    selectedRowKeys && setIsShowImage(!IsShowImage);
    setArchivedRowKeys([])
  };
  const onArchivedSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setArchivedRowKeys(newSelectedRowKeys);
    archivedRowKeys && setIsShowImage(!IsShowImage);
    setSelectedRowKeys([])
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const archivedSelection = {
    archivedRowKeys,
    onChange: onArchivedSelectChange,

  };
  const hasSelected = selectedRowKeys.length > 1;
  const archivedhasSelected = archivedRowKeys.length > 1;

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  var seleeteee: any;
  useEffect(() => {
    const absc = setInterval(() => {
      setEmployee(JSON.parse(localStorage.getItem("selectedEmployeeTasks") || "{}"))
    }, 100)
    return () => clearInterval(absc);
  }, [employe])

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" xs={24} md={24} lg={11} xl={11}>
        <div className="wrap-projects-and-tasks-tabs without-gradient-bg-2 card-bg-3-border-color">
          <div className="d-flex search-and-icons-flex project-task-search" style={{ marginBottom: '10px' }}>
            <div>
              <div className="d-flex wrap-selected-icons">
                {hasSelected &&
                  <>
                    <div className="bgError-color d-flex align-items-center justify-center selected-icons">
                      <img
                        src={deleteWhiteIcon}
                        onClick={() => setIsDeleteActiveOpen(true)}
                      />
                    </div>
                    <div
                      className="d-flex align-items-center justify-center selected-icons archieve-modal"
                      style={{ backgroundColor: "#E9C46A" }}
                      onClick={() => setIsArchiveActiveOpen(true)}

                    >
                      <img src={archeive} />
                    </div>
                  </>
                }
                {archivedhasSelected &&
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
                }
              </div>
            </div>

            <div className="search-create-project">

              <Input
                className="where ant-input-affix-wrapper card-bg-color card-bg-3-border-color title-color res-width-100"
                placeholder="Search Project"
                type="search"
                prefix={<img src={searchIconLow} alt="search_icon" />}
              />

              {props.selectedTabs != "archivedProjects" && role != "Manager" && role != "Employee" && (
                <Button
                  // style={{ display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}
                  className="fs-16 fw-500 line-height-24 bg-create-project btn-theme-color"
                  onClick={() => {
                    setIsCreateModalOpen(true);
                  }}
                >
                  <img src={createProject} alt="create Project Img" className="title-color" style={{ paddingRight: "10px" }} />
                  Create Project
                </Button>
              )}

            </div>
          </div>

          <CreateProjectModal
            isCreateModalOpen={isCreateModalOpen}
            setIsCreateModalOpen={setIsCreateModalOpen}
          />



          {props.selectedTabs != "archivedProjects" ?
            <ProjectsAndTasksTable
              rowSelection={rowSelection}
              hasSelected={hasSelected}
              isDeleteActiveOpen={isDeleteActiveOpen}
              isArchiveActiveOpen={isArchiveActiveOpen}
              isArchivedActivedOpen={isArchivedActiveOpen}
              setIsShowSelectedUser={setIsShowSelectedUser}
              isShowSelectedUser={isShowSelectedUser}
            /> :
            <ArchivedProjectTable
              archivedSelection={archivedSelection}
              archivedhasSelected={archivedhasSelected}
            />
          }

          <ProjectAndTaskDeleteModal isDeleteActiveOpen={isDeleteActiveOpen} setIsDeleteActiveOpen={setIsDeleteActiveOpen} />
          <ProjectAndTaskArchive isArchiveActiveOpen={isArchiveActiveOpen} setIsArchiveActiveOpen={setIsArchiveActiveOpen} />
          <ProjectAndTaskActiveModal
            isArchivedActiveOpen={isArchivedActiveOpen}
            setIsArchivedActiveOpen={setIsArchivedActiveOpen}
          />

        </div>
      </Col>
      <Col className="gutter-row" xs={24} md={24} lg={13} xl={13}>
        <div className="select-project  without-gradient-bg-2 card-bg-3-border-color">
          {role === "Employee" && isShowSelectedUser &&
            <TeamSelectTasksMain />
          }
          {hasSelected && archivedhasSelected &&
            (
              <div className="flex--images-center"><img src={archeivedProject} style={{ maxWidth: "100%" }} /></div>
            )
          }


          {(selectedRowKeys.length === 0 && archivedRowKeys.length === 0 && !employe) &&
            (
              <div className="flex--images-center"><img src={selectProject} style={{ maxWidth: "100%" }} /></div>
            )
          }
          {selectedRowKeys.length > 1 && (
            <div className="flex--images-center"><img src={choiceAvatar} style={{ maxWidth: "100%" }} /></div>
          )}
          {archivedRowKeys.length > 1 && (
            <div className="flex--images-center"><img src={archeivedProject} style={{ maxWidth: "100%" }} /></div>
          )}
          {(selectedRowKeys.length === 1 || employe) && <TeamSelectTasksMain />}
          {archivedRowKeys.length === 1 && <ArchivedSelectedTeamsMain />}

        </div>
      </Col>
    </Row>
  );
};
