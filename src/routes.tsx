import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Login from "./pages/authentication/SignIn";
import Register from "./pages/authentication/SignUp";
import ForgetPassword from "./pages/authentication/ForgotPassword";
import AuthGuard from "./auth/authGuard";
import GuestGuard from "./auth/guestGuard";
import DashboardLayout from "./layout/DashboardLayout";
import ReportsLayout from "./layout/ReportsLayout";
import SettingsLayout from "./layout/SettingsLayout";
import CompanySettings from "./pages/Setings/CompanySettings";
import ActivityLog from "./pages/ReportsPage/ActivityLog";
import Loader from "./assets/icons/lazy2.gif";
import UsersManagementLayout from "./layout/UsersManagementLayout";
const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense
    fallback={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "250px",
        }}
      >
        <img src={Loader} alt="loader" />
      </div>
    }
  >
    <Component {...props} />
  </Suspense>
);
// Dashboard pages
const ResetPassword = Loadable(
  lazy(() => import("./pages/authentication/ResetPassword"))
);
const Dashboard = Loadable(lazy(() => import("./pages/Dashboard/Dashboard")));
const Screencasts = Loadable(
  lazy(() => import("./pages/Screencasts/Screencasts"))
);
const Settings = Loadable(lazy(() => import("./pages/Setings/Settings")));
const WorkSchedule = Loadable(
  lazy(() => import("./pages/Setings/WorkSchedule"))
);
const ProjectTasks = Loadable(
  lazy(() => import("./pages/Setings/ProjectTasks"))
);
const ManageTeams = Loadable(lazy(() => import("./pages/Setings/ManageTeams")));
const WebApps = Loadable(lazy(() => import("./pages/Setings/WebApps")));
const ReportsWebApps = Loadable(
  lazy(() => import("./pages/ReportsPage/Web&AppUsage"))
);
const ReportsProjectTasks = Loadable(
  lazy(() => import("./pages/ReportsPage/ProjectTasks"))
);
const Attendance = Loadable(
  lazy(() => import("./pages/ReportsPage/Attendance"))
);
const TopUsers = Loadable(lazy(() => import("./pages/ReportsPage/TopUsers")));
const Timeline = Loadable(lazy(() => import("./pages/ReportsPage/Timeline")));
const Customized = Loadable(
  lazy(() => import("./pages/ReportsPage/Customized"))
);
const HourTracked = Loadable(
  lazy(() => import("./pages/ReportsPage/HourTracked"))
);
const WorkLoadBalance = Loadable(
  lazy(() => import("./pages/ReportsPage/WorkLoadBalance"))
);
const Comparison = Loadable(
  lazy(() => import("./pages/ReportsPage/Comparison"))
);
const Timesheet = Loadable(lazy(() => import("./pages/ReportsPage/Timesheet")));
const Integrations = Loadable(lazy(() => import("./pages/Integrations")));
const Help = Loadable(lazy(() => import("./pages/Help")));
const LatestUpdates = Loadable(
  lazy(() => import("./pages/LatestUpdates/LatesUpadate"))
);
const DistractionAlerts = Loadable(
  lazy(() => import("./pages/Setings/DistractionAlerts"))
);
const SchedluleReports = Loadable(
  lazy(() => import("./pages/Setings/ScheduledReports"))
);
const Achievements = Loadable(lazy(() => import("./pages/Setings/Achievements")));
const Blocking = Loadable(lazy(() => import("./pages/Setings/Blocking")));
const Email = Loadable(lazy(() => import("./pages/Setings/Email")));
const Users = Loadable(lazy(() => import("./pages/Users/Users")));
const MyAccount = Loadable(
  lazy(() => import("./components/profile/MyAccount/MyAccount"))
);
const Security = Loadable(
  lazy(() => import("./components/profile/Security/Security"))
);
const SupportTicket = Loadable(
  lazy(() => import("./components/profile/SuportTicket/SupportTicket"))
);
// error
const Error = Loadable(lazy(() => import("./pages/404/404")));
export const authRoutes = [
  { path: "/", element: <Navigate to="login" /> },
  {
    path: "login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "sign-up",
    element: (
      <GuestGuard>
        <Register />
      </GuestGuard>
    ),
  },
  {
    path: "forget-password",
    element: (
      <GuestGuard>
        <ForgetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "reset-password",
    element: (
      <GuestGuard>
        <ResetPassword />
      </GuestGuard>
    ),
  },
];
//Admin Module Routes
const adminRoutes = [
  { path: "/", element: <Navigate to="dashboard" /> },
  {
    path: "login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "sign-up",
    element: (
      <GuestGuard>
        <Register />
      </GuestGuard>
    ),
  },
  {
    path: "forget-password",
    element: (
      <GuestGuard>
        <ForgetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "reset-password",
    element: (
      <GuestGuard>
        <ResetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "screencasts",
        element: <Screencasts />,
      },
      {
        path: "",
        element: <SettingsLayout />,
        children: [
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "settings/company-settings",
            element: <CompanySettings />,
          },
          {
            path: "settings/work-schedule",
            element: <WorkSchedule />,
          },
          {
            path: "settings/project-tasks",
            element: <ProjectTasks />,
          },
          {
            path: "settings/manage-teams",
            element: <ManageTeams />,
          },
          {
            path: "settings/web-apps",
            element: <WebApps />,
          },
          {
            path: "settings/distraction-alerts",
            element: <DistractionAlerts />,
          },
          {
            path: "settings/scheduled-reports",
            element: <SchedluleReports />,
          },
          {
            path: "settings/Achievements",
            element: <Achievements />,
          },
          {
            path: "settings/blocking",
            element: <Blocking />,
          },
          {
            path: "settings/email",
            element: <Email />,
          },
        ],
      },
      {
        path: "",
        element: <ReportsLayout />,
        children: [
          {
            path: "reports/activity-log",
            element: <ActivityLog />,
          },
          {
            path: "reports/project-task/:id",
            element: <ReportsProjectTasks />,
          },
          {
            path: "reports/web-app-usage",
            element: <ReportsWebApps />,
          },
          {
            path: "reports/attendance",
            element: <Attendance />,
          },
          {
            path: "reports/top-users",
            element: <TopUsers />,
          },
          {
            path: "reports/timeline",
            element: <Timeline />,
          },
          {
            path: "reports/customized",
            element: <Customized />,
          },
          {
            path: "reports/hours-tracked",
            element: <HourTracked />,
          },
          {
            path: "reports/workload-balance",
            element: <WorkLoadBalance />,
          },
          {
            path: "reports/comparison",
            element: <Comparison />,
          },
          {
            path: "reports/timesheet",
            element: <Timesheet />,
          },
        ],
      },
      {
        path: "users-management",
        element: <Users />,
      },
      {
        path: "integrations",
        element: <Integrations />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "latest-updates",
        element: <LatestUpdates />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "security",
        element: <Security />,
      },
      {
        path: "support-ticket",
        element: <SupportTicket />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
//Manager Module Routes
const managerRoutes = [
  { path: "/", element: <Navigate to="dashboard" /> },
  {
    path: "login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "sign-up",
    element: (
      <GuestGuard>
        <Register />
      </GuestGuard>
    ),
  },
  {
    path: "forget-password",
    element: (
      <GuestGuard>
        <ForgetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "reset-password",
    element: (
      <GuestGuard>
        <ResetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "screencasts",
        element: <Screencasts />,
      },
      {
        path: "",
        element: <SettingsLayout />,
        children: [
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "settings/work-schedule",
            element: <WorkSchedule />,
          },
          {
            path: "settings/project-tasks",
            element: <ProjectTasks />,
          },
          {
            path: "settings/manage-teams",
            element: <ManageTeams />,
          },
          {
            path: "settings/web-apps",
            element: <WebApps />,
          },
          {
            path: "settings/distraction-alerts",
            element: <DistractionAlerts />,
          },
          {
            path: "settings/scheduled-reports",
            element: <SchedluleReports />,
          },
        ],
      },
      {
        path: "",
        element: <ReportsLayout />,
        children: [
          {
            path: "reports/activity-log",
            element: <ActivityLog />,
          },
          {
            path: "reports/project-task/:id",
            element: <ReportsProjectTasks />,
          },
          {
            path: "reports/web-app-usage",
            element: <ReportsWebApps />,
          },
          {
            path: "reports/attendance",
            element: <Attendance />,
          },
          {
            path: "reports/top-users",
            element: <TopUsers />,
          },
          {
            path: "reports/timeline",
            element: <Timeline />,
          },
          {
            path: "reports/customized",
            element: <Customized />,
          },
          {
            path: "reports/hours-tracked",
            element: <HourTracked />,
          },
          {
            path: "reports/workload-balance",
            element: <WorkLoadBalance />,
          },
          {
            path: "reports/comparison",
            element: <Comparison />,
          },
          {
            path: "reports/timesheet",
            element: <Timesheet />,
          },
        ],
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "latest-updates",
        element: <LatestUpdates />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "security",
        element: <Security />,
      },
      {
        path: "support-ticket",
        element: <SupportTicket />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
const employeeRoutes = [
  { path: "/", element: <Navigate to="dashboard" /> },
  {
    path: "login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "sign-up",
    element: (
      <GuestGuard>
        <Register />
      </GuestGuard>
    ),
  },
  {
    path: "forget-password",
    element: (
      <GuestGuard>
        <ForgetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "reset-password",
    element: (
      <GuestGuard>
        <ResetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "screencasts",
        element: <Screencasts />,
      },
      {
        path: "scheduled-reports",
        element: <SchedluleReports />,
      },
      // {
      //   path: "",
      //   element: <SettingsLayout />,
      //   children: [
      //     {
      //       path: "settings/work-schedule",
      //       element: <WorkSchedule />,
      //     },
      //     {
      //       path: "settings/project-tasks",
      //       element: <ProjectTasks />,
      //     },
      //     {
      //       path: "settings/scheduled-reports",
      //       element: <SchedluleReports />,
      //     },
      //   ],
      // },










      {
        path: "",
        element: <ReportsLayout />,
        children: [
          {
            path: "reports/project-task/:id",
            element: <ReportsProjectTasks />,
          },
          {
            path: "reports/web-app-usage",
            element: <ReportsWebApps />,
          },
          {
            path: "reports/attendance",
            element: <Attendance />,
          },
          {
            path: "reports/timeline",
            element: <Timeline />,
          },
          {
            path: "reports/hours-tracked",
            element: <HourTracked />,
          },
          {
            path: "reports/timesheet",
            element: <Timesheet />,
          },
        ],
      },



      {
        path: "work-schedule",
        element: <WorkSchedule />,
      },
      {
        path: "project-tasks",
        element: <ProjectTasks />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "latest-updates",
        element: <LatestUpdates />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "security",
        element: <Security />,
      },
      {
        path: "support-ticket",
        element: <SupportTicket />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
const ROLES_ROUTES: any = {
  Admin: adminRoutes,
  Manager: managerRoutes,
  Employee: employeeRoutes,
  auth: authRoutes,
};
export const getRoutes = (role: any) => {
  return ROLES_ROUTES[role] ?? authRoutes;
};
