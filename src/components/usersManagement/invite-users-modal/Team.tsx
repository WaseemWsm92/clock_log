import { useState } from "react";
import { Divider } from "antd";
import AddTeamModal from "./addTeamModal";
import { v4 as uuidv4 } from "uuid";

const InviteTeam = () => {
  const [projects, setProjects] = useState<any>([]);

  const handleRemoveTask = (val: any) => {
    setProjects(projects.filter((select: any) => select !== val));
  };
  return (
    <>
        <div style={{ padding: "10px", display: "flex", flexWrap: "wrap",gap:'10px',maxHeight:'56px',overflowY:'auto' }}>
        {projects.length === 0 && (
          <span className="fs-14 placeholder-color">Add Team here</span>
        )}
        {projects.map((item: any) => (
          <p className="m-0" key={uuidv4()}>
            <span
              style={{
                backgroundColor:" var(--card-bg-color) !important",
                // backgroundColor: "#F5F5F5",
                color:'#4E6073',
                borderLeft: "1px solid #E76F51",
                borderRadius: "16px",
                padding: "2px 20px 2px 8px",
                position: "relative",
                marginRight: "8px",
              }}
            >
              {item}
              <span
                onClick={() => handleRemoveTask(item)}
                className="cursor-pointer"
                style={{ position: "absolute", right: "5px", top: "0" }}
              >
                x
              </span>
            </span>
          </p>
        ))}
      </div>
      <Divider style={{ width: "40%", minWidth: "40%",margin:'15px' }} />
      <AddTeamModal setProjects={setProjects} />
    </>
  );
};

export default InviteTeam;
