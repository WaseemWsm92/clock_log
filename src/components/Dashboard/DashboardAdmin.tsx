import { useContext } from "react";
import { Col, Layout, Row } from "antd";
import { AttendanceDashboard } from "./AttendanceDashboard";
import { EmployeesMonth } from "./EmployeesMonth";
import { IdleMinutes } from "./IdleMinutesCard";
import IdleTime from "./IdleTime";
import { ManualTime } from "./ManualAddedTime";
import { MostUsedServices } from "./MostUsedServices";
import { OrganizationProductivity } from "./OrganizationProductivity";
import { OverAllScore } from "./OverAllScore";
import { ProductiveHours } from "./ProductiveHours";
import { ProductivityCard } from "./ProductivityCard";
import { TopProjects } from "./TopProjects";
import { TotalTimeHours } from "./TotalTimeTracked";
import { TrackingTime } from "./TrackinTime";
import { WorkBalanceIssues } from "./WorkBalanceIssues";
import { HoursTracking } from "./HoursTracking";
import { TimeLines } from "./TimeLine";
import {
  EmploeeMostUsedServices,
  RecentUnratedServices,
  TopUnproductive,
} from "./TopUnproductive";
import { FilterContext } from "../DatePicker/datePicker";
import UnderConstructionPage from "../../pages/UnderConstruction/UnderConstructionPage";
import DistractionAlert from "./DistractionAlert";
import "../../sass/common.scss";
import "../timeLine/TimeLine.scss";
const DashboardAdmin = () => {
  const { state }: any = useContext(FilterContext);

  const selectedOptions = state.selectedOptions;
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  interface Tabs {
    [key: string]: string[];
  }

  const renderSelectedAttendance = (item: string) => {
    if (item === "Attendance Summary") {
      return <AttendanceDashboard selectedOptions={selectedOptions} />;
    } else if (item==="Productive Hours") {
      return <ProductiveHours selectedOptions={selectedOptions} />;
    } else if (item==="Productive Hours") {
      return <ProductiveHours selectedOptions={selectedOptions} />;
    } else if (item==="Idle Time") {
      return <IdleTime selectedOptions={selectedOptions} />;
    }
  };
  const renderSelectedMostUsedServices = (item: string) => {
    if (item === "Most Used Services") {
      return <MostUsedServices selectedOptions={selectedOptions} />;
    } else if (item === "Distraction  Alert") {
      return <DistractionAlert selectedOptions={selectedOptions} />;
    } else if (item === "Workload Balance Issues") {
      return <WorkBalanceIssues selectedOptions={selectedOptions} />;
    }
  };

  const tabArrays: { [key: string]: string[] } = {
    attendance: [],
    mostUsedServices: [],
    topProjects: [],
    overAllScore: [],
    trackingTime: [],
    organizationProductivity: [],
    TimeLine:[],
    HoursTracked:[],
    EmployeeMostUsedServices:[]
  };

  const tabs: Tabs = {
    attendance: [
      "Attendance Summary",
      "Productive Hours",
      "Idle Time",
      "Total Time Tracked",
    ],
    mostUsedServices: [
      "Most Used Services",
      "Distraction  Alert",
      "Workload Balance Issues",
    ],
    topProjects: ["Top Projects", "Employees of the Month"],
    overAllScore: ["Overall Score", "Productivity Hours", "Idle Minutes"],
    trackingTime: ["Haven't Started Tracking Time", "Manual Added Time"],
    organizationProductivity: ["Organization Productivity (Last 7 Days)"],
    TimeLine:["TimeLine"],
    HoursTracked:["Hours Tracked"],
    EmployeeMostUsedServices:["Employee Most Used Services","Unrated Services","Unproductive Services"]

  };

  Object.keys(tabs).forEach((category) => {
    tabs[category].forEach((tab: string) => {
      if (selectedOptions.includes(tab)) {
        tabArrays[category].push(tab);
      }
    });
  });
  return (
    <>
      {selectedOptions?.length === 0  ? (
        <UnderConstructionPage
          tabText={
            <span className="fs-26">
              No Tabs <span className="secondary-color"> Selected </span>For{" "}
              <span className="secondary-color">Customized</span> Dashboard{" "}
            </span>
          }
        />
      ) : (
        <Layout className="bgLight-color dashboard">
          <Row gutter={[25,25]} style={{ paddingBottom: (selectedOptions.includes("Attendance Summary") || selectedOptions.includes("Productive Hours") || selectedOptions.includes("Idle Time") || selectedOptions.includes("Total Time Tracked")) ? "25px":"0px"  }}>
            {tabArrays.attendance.includes("Attendance Summary") && (
              <Col
             
                xs={24}
                sm={tabArrays.attendance.length === 1 ? 24 : 12}
                md={tabArrays.attendance.length === 1 ? 24 : 12}
                lg={
                  tabArrays.attendance.length > 0
                    ? 24 / tabArrays.attendance.length
                    : 6
                }
              >
                {" "}
                <AttendanceDashboard selectedOptions={selectedOptions} />
              </Col>
            )}
            {tabArrays.attendance.includes("Productive Hours") && (
              <Col
                xs={24}
                sm={tabArrays.attendance.length === 1 ? 24 : 12}
                md={tabArrays.attendance.length === 1 ? 24 : 12}
                lg={
                  tabArrays.attendance.length > 0
                    ? 24 / tabArrays.attendance.length
                    : 6
                }
                className="attandance-cards"
              >
                {" "}
                <ProductiveHours selectedOptions={selectedOptions} />
              </Col>
            )}
            {tabArrays.attendance.includes("Idle Time") && (
              <Col
                xs={24}
                sm={tabArrays.attendance.length === 1 ? 24 : 12}
                md={tabArrays.attendance.length === 1 ? 24 : 12}
                lg={
                  tabArrays.attendance.length > 0
                    ? 24 / tabArrays.attendance.length
                    : 6
                }
                className="attandance-cards"
              >
                {" "}
                <TotalTimeHours selectedOptions={selectedOptions} />{" "}
              </Col>
            )}
            {tabArrays.attendance.includes("Total Time Tracked") && (
              <Col
                xs={24}
                sm={tabArrays.attendance.length === 1 ? 24 : 12}
                md={tabArrays.attendance.length === 1 ? 24 : 12}
                lg={
                  tabArrays.attendance.length > 0
                    ? 24 / tabArrays.attendance.length
                    : 6
                }
                className="attandance-cards"
              >
                {" "}
                <IdleTime selectedOptions={selectedOptions} />{" "}
              </Col>
            )}
          </Row>
          {role === "Employee" && (
            <Row gutter={[25,25]}>
             {tabArrays.TimeLine.includes("TimeLine") &&     <Col xs={24} sm={24} md={24} lg={24}>
                <TimeLines selectedOptions={selectedOptions} />
              </Col>}
            </Row>
          )}

          {(role === "Admin" || role === "Manager") && (
            <>
              <Row gutter={[25,25]} style={{  paddingBottom: (selectedOptions.includes("Most Used Services") || selectedOptions.includes("Distraction  Alert") || selectedOptions.includes("Workload Balance Issues")) ? "25px":"0px" }}>
                {(tabArrays.mostUsedServices.includes("Most Used Services")) && (
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={
                      tabArrays.mostUsedServices.length > 0
                        ? 24 / tabArrays.mostUsedServices.length
                        : 8
                    }
                    style={{ minHeight: "490px" }}
                  >
                    <MostUsedServices selectedOptions={selectedOptions} />
                  </Col>
                )}
                {tabArrays.mostUsedServices.includes("Distraction  Alert") && (
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={
                      tabArrays.mostUsedServices.length > 0
                        ? 24 / tabArrays.mostUsedServices.length
                        : 8
                    }
                  >
                    <DistractionAlert selectedOptions={selectedOptions} />
                  </Col>
                )}
                {tabArrays.mostUsedServices.includes(
                  "Workload Balance Issues"
                ) && (
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={
                      tabArrays.mostUsedServices.length > 0
                        ? 24 / tabArrays.mostUsedServices.length
                        : 8
                    }
                  >
                    <WorkBalanceIssues selectedOptions={selectedOptions} />
                  </Col>
                )}
              </Row>
            </>
          )}
          <Row gutter={[25,25]} style={{ paddingBottom:  (selectedOptions.includes("Top Projects") || selectedOptions.includes("Employees of the Month")) ? "25px":"0px" }}>
            {tabArrays.topProjects.includes("Top Projects") && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={
                  tabArrays.topProjects.length > 0
                    ? 24 / tabArrays.topProjects.length
                    : 12
                }
              >
                <TopProjects selectedOptions={selectedOptions} />
              </Col>
            )}
            {tabArrays.topProjects.includes("Employees of the Month") && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={
                  tabArrays.topProjects.length > 0
                    ? 24 / tabArrays.topProjects.length
                    : 12
                }
              >
                <EmployeesMonth selectedOptions={selectedOptions} />
              </Col>
            )}
          </Row>
          {role === "Employee" && (
            <>
              <Row
                className="employeeServices"
                gutter={[25,25]}
                style={{ paddingBottom: "25px" }}
              >
                {(tabArrays.EmployeeMostUsedServices.includes("Employee Most Used Services") && role === "Employee") && 
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={
                      tabArrays?.EmployeeMostUsedServices?.length > 0
                      ? 24 / tabArrays?.EmployeeMostUsedServices?.length
                      : 8
                    }
                    className="employee-services"
                  >
                    <EmploeeMostUsedServices selectedOptions={selectedOptions} />
                  </Col>
                }
              { (tabArrays.EmployeeMostUsedServices.includes("Unproductive Services") && role === "Employee") && <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={
                    tabArrays?.EmployeeMostUsedServices?.length > 0
                    ? 24 / tabArrays?.EmployeeMostUsedServices?.length
                    : 8
                   
                  }
                >
                  <TopUnproductive selectedOptions={selectedOptions} />
                </Col>}

               { (tabArrays.EmployeeMostUsedServices.includes("Unrated Services") && role === "Employee") &&    <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={   tabArrays.EmployeeMostUsedServices.length > 0
                    ? 24 / tabArrays.EmployeeMostUsedServices.length
                    : 8}
                >
                  <RecentUnratedServices selectedOptions={selectedOptions}/>
                </Col>}
              </Row>
            </>
          )}
          {(role === "Admin" || role === "Manager") && (
            <Row gutter={[25,25]} style={{ paddingBottom: (selectedOptions.includes("Productivity Hours") || selectedOptions.includes("Idle Minutes")) || selectedOptions.includes("Productivity Hours") ? "25px":"0px"  }}>
              {tabArrays.overAllScore.includes("Overall Score") && (
                <Col
                  xs={24}
                  sm={24}
                  md={tabArrays.overAllScore.length === 1 ? 24 : 12}
                  lg={24}
                  xl={
                    tabArrays.overAllScore.length > 0
                      ? 24 / tabArrays.overAllScore.length
                      : 8
                  }
                >
                  <OverAllScore selectedOptions={selectedOptions} />
                </Col>
              )}
              {tabArrays.overAllScore.includes("Productivity Hours") && (
                <Col
                  xs={24}
                  sm={24}
                  md={tabArrays.overAllScore.length === 1 ? 24 : 12}
                  lg={24}
                  xl={
                    tabArrays.overAllScore.length > 0
                      ? 24 / tabArrays.overAllScore.length
                      : 8
                  }
                >
                  <ProductivityCard selectedOptions={selectedOptions} />
                </Col>
              )}
              {tabArrays.overAllScore.includes("Idle Minutes") && (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={
                    tabArrays.overAllScore.length > 0
                      ? 24 / tabArrays.overAllScore.length
                      : 8
                  }
                >
                  <IdleMinutes selectedOptions={selectedOptions} />
                </Col>
              )}
            </Row>
          )}

          <Row gutter={[25,25]} style={{ paddingBottom:  (selectedOptions.includes("Haven't Started Tracking Time") || selectedOptions.includes("Manual Added Time"))  ? "25px":"0px" }}>
            {tabArrays.trackingTime.includes(
              "Haven't Started Tracking Time"
            ) && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={
                  tabArrays.trackingTime.length > 0
                    ? 24 / tabArrays.trackingTime.length
                    : 12
                }
              >
                <TrackingTime selectedOptions={selectedOptions} />
              </Col>
            )}
            {tabArrays.trackingTime.includes("Manual Added Time") && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={
                  tabArrays.trackingTime.length > 0
                    ? 24 / tabArrays.trackingTime.length
                    : 12
                }
              >
                <ManualTime selectedOptions={selectedOptions} />
              </Col>
            )}
          </Row>
          <Row gutter={[25,25]} style={{ paddingBottom: "25px" }}>
            {(role === "Employee" && tabArrays.HoursTracked.includes("Hours Tracked") ) && (
              <Col xs={24} sm={24} md={24} lg={12}>
                <HoursTracking  selectedOptions={selectedOptions} />
              </Col>
            )}
            {tabArrays.organizationProductivity.includes(
              "Organization Productivity (Last 7 Days)"
            ) && (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={
                  tabArrays.organizationProductivity.length > 0
                    ? 12 / tabArrays.organizationProductivity.length
                    : 24
                }
              >
                <OrganizationProductivity selectedOptions={selectedOptions} />
              </Col>
            )}
          </Row>
        </Layout>
      )}
    </>
  );
};

export default DashboardAdmin;
