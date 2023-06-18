import { Col, Row } from "antd";
import { v4 as uuidv4 } from "uuid";

/********************** dropdown values *****************************/
export const dropdownValues = [
    "UserName",
    "User ID",
    "User Role",
    "Shift",
    "Location",
    "Teams",
    "Projects",
    "Actions",
  ];
/********************** table columns values *****************************/
  export const optionsColumn = [
    "UserName",
    "User ID",
    "User Role",
    "Shift",
    "Location",
    "Teams",
    "Projects",
    "Actions",
  ];
/********************** team data and details *****************************/
export const teams = ["ClockLog", "BuzzHR", "R&D", "DriverTok", "BuzzHR", "R&D"];
export const teamContent = (
    <div className="popover-content-teams">
      {teams.map((data: any) => {
        return (
          <div key={uuidv4()}>
            <span
              className="cursor-pointer"
              style={{
                backgroundColor: "#F5F5F5",
                borderLeft: "1px solid #E76F51",
                borderRadius: "16px",
                paddingInline: "5px",
              }}
            >
              {data}
            </span>
          </div>
        );
      })}
    </div>
  );
/********************** projects data and details *****************************/
  export const projects = ["R&D", "ClockLog", "BuzzHR", "R&D", "DriverTok", "BuzzHR"];
  export const projectContent = (
    <div className="popover-content-teams">
      {projects.map((data: any) => {
        return (
          <div key={uuidv4()} >
            <span
              className="cursor-pointer"
              style={{
                backgroundColor: "#F5F5F5",
                borderLeft: "1px solid #E76F51",
                borderRadius: "16px",
                paddingInline: "5px",
                fontSize: "12px",
                lineHeight: "18px",
                fontWeight: "400"
              }}
            >
              {data}
            </span>
          </div>
        );
      })}
    </div>
  );
  
  