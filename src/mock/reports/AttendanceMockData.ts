
import CalendarSmIcon from "../../assets/images/attendance/calendar-sm.svg";
import absentIcon from "../../assets/images/attendance/absents.svg";
import hourTrackedIcon from "../../assets/images/attendance/hours-tracked.svg";
import overtimeIcon from "../../assets/images/attendance/overtime.svg";
import lastWorkingDayIcon from "../../assets/images/attendance/last-working-day.svg";
import user2Image from "../../assets/images/users/user-2.svg";
import user3Image from "../../assets/images/users/user-3.svg";
import user4Image from "../../assets/images/users/user-4.svg";
import dayWorkedIcon from "../../assets/images/attendance/calendar-sm.svg";
import absentsIcon from "../../assets/images/attendance/absents.svg";
import latesIcon from "../../assets/images/attendance/lates.svg";
import hoursTrackedIcon from "../../assets/images/attendance/hours-tracked.svg";


import { IAttendanceTabsData, IAttendanceTableData, IEmployeeHoursTrackedData, IEmployeeHoursTrackedTable, IEmployeeWorkingLogs } from "../../types/reports/AttendanceInterface";

// TabCard
export const EmployeeWorkingLogs: IEmployeeWorkingLogs[] = [
    {
        id: "1",
        name: "Days Worked",
        title: "Days Worked",
        total: "07",
        yours: "04",
        headerImage: CalendarSmIcon,
        colorClasses: {
            color: "lightGreenProgress-color",
            bgColor: "bgLightGreenProgress-color",
            hoverColor: "lightGreenGradient-color",
            strokeColor: "#37B4A4",
        },
    },
    {
        id: "2",
        name: "Absents",
        title: "Absents",
        total: "76",
        headerImage: absentIcon,
        colorClasses: {
            color: "error-color",
            bgColor: "bgError-color",
            hoverColor: "errorGradient-color",
            strokeColor: "#FF4D4F",
        },
    },
    {
        id: "3",
        name: "Lates",
        title: "Total Lates",
        total: "29",
        headerImage: latesIcon,
        colorClasses: {
            color: "lightYellow-color",
            bgColor: "bgLightYellow-color",
            hoverColor: "lightYellowGradient-color",
            strokeColor: "#FDCA64",
        },
    },
    {
        id: "4",
        name: "Hours Worked",
        title: "Working Hours",
        total: "54",
        yours: "20h 30min",
        hoursWorked: "32h 30min",
        headerImage: hourTrackedIcon,
        colorClasses: {
            color: "darkGreen-color",
            bgColor: "bgDarkGreen-color",
            hoverColor: "darkGreenGradient-color",
            strokeColor: "#045162",
        },
    },
    {
        id: "5",
        name: "Overtime",
        title: "Overtime",
        total: "95",
        yours: "30min",
        overtime: "30min",
        headerImage: overtimeIcon,
        colorClasses: {
            color: "blue-color",
            bgColor: "bgBlue-color",
            hoverColor: "blueGradient-color",
            strokeColor: "#1890FF",
        },
    },
    {
        id: "6",
        name: "Last Working Day",
        title: "Working Hours",
        total: "80",
        yours: "05h 20min",
        lastWorkingDays: "06h 20min",
        headerImage: lastWorkingDayIcon,
        colorClasses: {
            color: "darkOrange-color",
            bgColor: "bgDarkOrange-color",
            hoverColor: "darkOrangeGradient-color",
            strokeColor: "#F78812",
        },
    },
];



// Tabs
export const AttendanceTabsData: IAttendanceTabsData[] = [
    {
        key: "My",
        label: `My`,
    },
    {
        key: "Others",
        label: `Others`,
    },
];




export const EmployeeHoursTracked = [
    {
        key: '1',
        date: 'John Brown',
        expectedTime: 32,
        timeTracked: 'New York No. 1 Lake Park',
        timeBreakdown: [
            {
                computerTime: '20%',
            },
            {
                mobileTime: '30%',
            },
            {
                manualTime: '50%',
            },
        ],
    },
    {
        key: '2',
        date: 'Jim Green',
        expectedTime: 42,
        timeTracked: 'London No. 1 Lake Park',
        timeBreakdown: [
            {
                computerTime: '10%',
            },
            {
                mobileTime: '60%',
            },
            {
                manualTime: '30%',
            },
        ],
    },
    {
        key: '3',
        date: 'Joe Black',
        expectedTime: 32,
        timeTracked: 'Sydney No. 1 Lake Park',
        timeBreakdown: [
            {
                computerTime: '40%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '50%',
            },
        ],
    },
    {
        key: '4',
        date: 'Joe Black',
        expectedTime: 32,
        timeTracked: 'Sydney No. 1 Lake Park',
        timeBreakdown: [],
    },
];

export const SingleEmployeeRecordTableData: IEmployeeHoursTrackedTable[] = [
    {
        key: '1',
        date: 'Mon, 5-Sep-2022',
        shiftName: 'Morning',
        actualStartTime: '08:00am',
        actualEndTime: '3:15pm',
        totalTrackedTime: "7h 15pm",
        overtime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '20%',
            },
            {
                mobileTime: '30%',
            },
            {
                manualTime: '50%',
            },
        ],
    },
    {
        key: '2',
        date: 'Mon, 5-Sep-2022',
        shiftName: 'Morning',
        actualStartTime: "08:00am",
        actualEndTime: '03:15am',
        totalTrackedTime: "7h 15pm",
        overtime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '20%',
            },
            {
                mobileTime: '30%',
            },
            {
                manualTime: '50%',
            },
        ],
    },
    {
        key: '3',
        date: 'Mon, 5-Sep-2022',
        shiftName: 'Morning',
        actualStartTime: '08:00am',
        actualEndTime: '03:15am',
        totalTrackedTime: "7h 15pm",
        overtime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '20%',
            },
            {
                mobileTime: '30%',
            },
            {
                manualTime: '50%',
            },
        ],
    },
    {
        key: '4',
        date: 'Mon, 5-Sep-2022',
        shiftName: 'Morning',
        actualStartTime: '08:00am',
        actualEndTime: '03:15am',
        totalTrackedTime: "7h 15pm",
        overtime: "15 min",
        attendanceBreakdown: [],
    },
]


// ChildTab
export const EmployeeHoursTrackedData: IEmployeeHoursTrackedData[] = [
    {
        id: '1',
        userImage: user2Image,
        userName: 'Syed Nizam',
        timesSlots: [
            {
                timeHead: 'Days Worked',
                timeIcon: dayWorkedIcon,
                timeDuration: '04 Days',
                defaultColor: '#50BDAF',
            },
            {
                timeHead: 'Absents',
                timeIcon: absentsIcon,
                timeDuration: '01 Day',
                defaultColor: '#FF4D4F',
            },
            {
                timeHead: 'Lates',
                timeIcon: latesIcon,
                timeDuration: '02 Days',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Hours Worked',
                timeIcon: hoursTrackedIcon,
                timeDuration: '26h 30min',
                defaultColor: '#045162',
            },
            {
                timeHead: 'Overtime',
                timeIcon: overtimeIcon,
                timeDuration: '30min',
                defaultColor: '#1890FF',
            }
        ],
    },
    {
        id: '2',
        userImage: user3Image,
        userName: 'Yaqoob Shah',
        timesSlots: [
            {
                timeHead: 'Days Worked',
                timeIcon: dayWorkedIcon,
                timeDuration: '02 Days',
                defaultColor: '#50BDAF',
            },
            {
                timeHead: 'Absents',
                timeIcon: absentsIcon,
                timeDuration: '05 Day',
                defaultColor: '#FF4D4F',
            },
            {
                timeHead: 'Lates',
                timeIcon: latesIcon,
                timeDuration: '01 Days',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Hours Worked',
                timeIcon: hoursTrackedIcon,
                timeDuration: '12h 30min',
                defaultColor: '#045162',
            },
            {
                timeHead: 'Overtime',
                timeIcon: overtimeIcon,
                timeDuration: '3min',
                defaultColor: '#1890FF',
            }
        ],

    },
    {
        id: '3',
        userImage: user4Image,
        userName: 'Aftab',
        timesSlots: [
            {
                timeHead: 'Days Worked',
                timeIcon: dayWorkedIcon,
                timeDuration: '08 Days',
                defaultColor: '#50BDAF',
            },
            {
                timeHead: 'Absents',
                timeIcon: absentsIcon,
                timeDuration: '03 Day',
                defaultColor: '#FF4D4F',
            },
            {
                timeHead: 'Lates',
                timeIcon: latesIcon,
                timeDuration: '06 Days',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Hours Worked',
                timeIcon: hoursTrackedIcon,
                timeDuration: '66h 30min',
                defaultColor: '#045162',
            },
            {
                timeHead: 'Overtime',
                timeIcon: overtimeIcon,
                timeDuration: '5h 30min',
                defaultColor: '#1890FF',
            }
        ],
    },
]


// ############### Attendace 
// Interface

export const AttendanceTableData: IAttendanceTableData[] = [
    {
        key: '1',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '20%',
            },
            {
                mobileTime: '30%',
            },
            {
                manualTime: '50%',
            },
        ],
        status: "Present"
    },
    {
        key: '2',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '50%',
            },
            {
                mobileTime: '40%',
            },
            {
                manualTime: '10%',
            },
        ],
        status: "Present"
    },
    {
        key: '3',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '90%',
            },
            {
                mobileTime: '5%',
            },
            {
                manualTime: '5%',
            },
        ],
        status: "Present"
    },
    {
        key: '4',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '20%',
            },
            {
                mobileTime: '30%',
            },
            {
                manualTime: '50%',
            },
        ],
        status: "Present"
    },
    {
        key: '5',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '6',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '7',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '8',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '9',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '10',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '11',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '12',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '13',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '14',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '15',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '16',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
    {
        key: '17',
        date: 'Mon, 5-Sep-2022',
        shiftName: "Morning",
        actualStartTime: "08:00 am",
        actualEndTime: "3:15 pm",
        timeTrackedOver: "7h 15 min",
        overTime: "15 min",
        attendanceBreakdown: [
            {
                computerTime: '60%',
            },
            {
                mobileTime: '10%',
            },
            {
                manualTime: '30%',
            },
        ],
        status: "Present"
    },
];
