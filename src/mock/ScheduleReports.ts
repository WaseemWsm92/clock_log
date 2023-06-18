import { DataType } from "../types/ScheduleReports";

export const data: DataType[] = [
    {
        key: 1, 
        scheduleReport:"Daily Report",
        report: 'Attendance', 
        path:'/reports/attendance',
        recipients: 'Start Time',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: true,
        actions:""
    },
    {
        key: 2,
        scheduleReport:"Daily Report",
        report: 'Web & App',
        path:'/reports/web-app-usage',
        recipients: 'Did not follow Work Schedule',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
    {
        key: 3,
        scheduleReport:"Daily Report",
        path:'',
        report: 'Work Efficiency',
        recipients: 'Productivity',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
    {
        key: 4,
        scheduleReport:"Daily Report",
        report: 'Team Comparison',
        path:'',
        recipients: 'Idle Time ',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
    {
        key: 5,
        scheduleReport:"Daily Report",
        report: 'Activity Log',
        path:'/reports/activity-log',
        recipients: 'Accessed Blocked Services',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
    {
        key: 6,
        scheduleReport:"Daily Report",
        report: 'Activity Log ',
        path:'/reports/activity-log',
        recipients: 'Tracked Time',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
    {
        key: 7,
        scheduleReport:"Daily Report",
        report: 'Activity Log',
        path:'/reports/activity-log',
        recipients: 'Start Time',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
    {
        key: 8,
        scheduleReport:"Daily Report",
        report: 'Activity Log',
        path:'/reports/activity-log',
        recipients: 'Did not follow Work Schedule',
        deliveryFrequency: 'Daily',
        deliveryTime: "08:00Pm",
        fileType: "PDF",
        active: false,
        actions:""
    },
];
