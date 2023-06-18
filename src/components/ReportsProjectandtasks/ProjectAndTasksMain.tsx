import { Col, Row } from "antd";
import React, { useState } from "react";
// import AllTasksTable from "./AllTasksTable";
import ProjectAndTasksCards from "./ProjectAndTasks";
import ProjectDetailsTable from "./ProjectDetailsTable";
import TasksTable from "./Table";

const dropdownValues = ["All Task", "Time"];

const ProjectAndTasksMain = (props: any) => {
  const [projectDetsils, setProjectDetails] = useState({isToggled:false, name:''})
  const [IsShowTableColumns, setIsShowTableColumns] = useState(dropdownValues);
  return (
    <Row>
      {!projectDetsils.isToggled && <><Col md={24}>
        <ProjectAndTasksCards project={props?.project} setIsShowTableColumns={setIsShowTableColumns} IsShowTableColumns={IsShowTableColumns}/>
      </Col>
        <Col md={24}>
          <TasksTable  setProjectDetails={setProjectDetails} IsShowTableColumns={IsShowTableColumns}/>
        </Col></>}
      {projectDetsils.isToggled && <Col md={24}>
        <ProjectDetailsTable setProjectDetails={setProjectDetails} projectDetsils={projectDetsils}/>
      </Col>}
    </Row>
  );
}

export default ProjectAndTasksMain;
