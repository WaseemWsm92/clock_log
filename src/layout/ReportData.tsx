import Activity from "../assets/icons/reports/sidebar/activity.png";
import Projects from "../assets/icons/reports/sidebar/projects.png";
import Web from "../assets/icons/reports/sidebar/webUsage.png";
import Attendence from "../assets/icons/reports/sidebar/attendence.png";
import HoursTracked from "../assets/icons/reports/sidebar/hoursTracked.png";
import TopUsers from "../assets/icons/reports/sidebar/topUsers.png";
import CustomizedReports from "../assets/icons/reports/sidebar/customizedReports.png";
import WorkBalance from "../assets/icons/reports/sidebar/workbalance.png";
import TimelineIcon from "../assets/icons/reports/sidebar/timeline.png";
import Comparison from "../assets/icons/reports/sidebar/comparison.png";
import Timesheet from "../assets/icons/reports/sidebar/timesheet.png";
import ActivityLog from "../pages/ReportsPage/ActivityLog";
import ProjectTasks from "../pages/Setings/ProjectTasks";
import WebAppUsage from "../pages/ReportsPage/Web&AppUsage";
// import Attendance from "../pages/ReportsPage/Attendance";
import HourTracked from "../pages/ReportsPage/HourTracked";
import WorkLoadBalance from "../pages/ReportsPage/WorkLoadBalance";
import Timeline from "../pages/ReportsPage/Timeline";
import ChildTab from "../components/Attendance/ChildTabs/ChildTab";
import UserActivityLog from "../components/usersManagement/userReports/userActivityLog/UserActivityLog";
import UserAttendence from "../components/usersManagement/userReports/userAttendence/UserAttendence";
import UserHoursTracked from "../components/usersManagement/userReports/UserHoursTracked/UserHoursTracked";
import UserWorkLoadBalance from "../components/usersManagement/userReports/userWorkLoadBalance/UserWorkLoadBalance";
import UserTimeLine from "../components/usersManagement/userReports/userTimeline/UserTimeLine";
interface SideBarItem {
  label: string;
  key: string;
  icon: React.ReactElement;
  path: any;
  toshowforrole: string[];
}

export const SideBarItems: any = [
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Activity Log",
    key: "1",
    icon: <img src={Activity} alt="activity" />,
    path: "/reports/activity-log",
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Project & Task",
    key: "2",
    icon: <img src={Projects} alt="activity" />,
    path: "/reports/project-task/1",
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Web & App Usage",
    key: "3",
    icon: <img src={Web} alt="activity" />,
    path: "/reports/web-app-usage",
  },
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Top Users",
    key: "5",
    icon: <img src={TopUsers} alt="activity" />,
    path: "/reports/top-users",
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Attendance",
    key: "4",
    icon: <img src={Attendence} alt="activity" />,
    path: "/reports/attendance",
  },
  {
    toshowforrole: ["Admin", "Manager", "Employee"],
    label: "Hours Tracked",
    key: "8",
    icon: <img src={HoursTracked} alt="activity" />,
    path: "/reports/hours-tracked",
  },
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Customized Reports",
    key: "7",
    icon: <img src={CustomizedReports} alt="activity" />,
    path: "/reports/customized",
  },
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Workload Balance",
    key: "9",
    icon: <img src={WorkBalance} alt="activity" />,
    path: "/reports/workload-balance",
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Timeline",
    key: "6",
    icon: <img src={TimelineIcon} alt="activity" />,
    path: "/reports/timeline",
  },
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Comparison",
    key: "10",
    icon: <img src={Comparison} alt="activity" />,
    path: "/reports/comparison",
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Timesheet",
    key: "11",
    icon: <img src={Timesheet} alt="activity" />,
    path: "/reports/timesheet",
  },
];

export const usersManagementSidbar: any = [
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Activity Log",
    key: "0",
    icon: <img src={Activity} alt="activity" />,
    content: <UserActivityLog />,
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Project & Task",
    key: "1",
    icon: <img src={Projects} alt="activity" />,
    content: <ProjectTasks />,
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Web & App Usage",
    key: "2",
    icon: <img src={Web} alt="activity" />,
    content: <WebAppUsage />,
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Attendance",
    key: "3",
    icon: <img src={Attendence} alt="activity" />,
    content: <UserAttendence />,
  },
  {
    toshowforrole: ["Admin", "Manager", "Employee"],
    label: "Hours Tracked",
    key: "4",
    icon: <img src={HoursTracked} alt="activity" />,
    content: <UserHoursTracked />,
  },
  {
    toshowforrole: ["Admin", "Manager"],
    label: "Workload Balance",
    key: "5",
    icon: <img src={WorkBalance} alt="activity" />,
    content: <UserWorkLoadBalance />,
  },
  {
    toshowforrole: ["Admin", "Employee", "Manager"],
    label: "Timeline",
    key: "6",
    icon: <img src={TimelineIcon} alt="activity" />,
    content: <UserTimeLine />,
  },
];


export const ProjectsDetails: { label: string; key: string; path: string }[] = [
  {
    label: "Clock log",
    key: "1",
    path: "clock-log",
  },
  {
    label: "Buzz HR",
    key: "2",
    path: "buzz-hr",
  },
  {
    label: "DriverTok",
    key: "3",
    path: "drivertok",
  },
];
