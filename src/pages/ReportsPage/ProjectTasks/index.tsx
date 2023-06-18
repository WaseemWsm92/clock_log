import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectAndTasksMain from "../../../components/ReportsProjectandtasks/ProjectAndTasksMain";
import { ProjectsDetails } from "../../../layout/ReportData";

const ProjectTasks = () => {
  const { id } = useParams();

  const [selected, setSelected] = useState<any>({});

  useEffect(() => {
    setSelected(ProjectsDetails.find((obj: any) => obj.key === id));
  }, [id]);

  return (
    <>
      <ProjectAndTasksMain project={selected.label} />
    </>
  );
};

export default ProjectTasks;
