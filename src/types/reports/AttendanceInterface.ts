// Tabs
export interface IAttendanceTabsData {
    key: string;
    label: string;
    children?: React.ReactNode;
}

// TabCard
export interface IEmployeeWorkingLogs {
    id: string;
    name: string;
    title: string;
    total: string;
    yours?:string,
    hoursWorked?: string;
    overtime?: string;
    lastWorkingDays?: string;
    headerImage: string;
    colorClasses: {
        color: string,
        bgColor: string,
        hoverColor: string,
        strokeColor: string,
    },
}

export interface IEmployeeHoursTrackedTable {
    key: string;
    date: string;
    shiftName: string;
    actualStartTime: string;
    actualEndTime: string;
    overtime: string;
    totalTrackedTime: string;
    attendanceBreakdown: any[];
}


// ChildTab
export interface IEmployeeHoursTrackedDataTimeslots {
    timeHead: string,
    timeIcon: string,
    timeDuration: string,
    defaultColor: string,
}

export interface IEmployeeHoursTrackedData {
    id: string,
    userImage: string,
    userName: string,
    timesSlots: IEmployeeHoursTrackedDataTimeslots[]
}



// #########################
export interface ISingleEmployeeRecordTableColumn {
    key: React.Key;
    title: string,
}


// ###################
export interface IAttendanceTableData {
    key: React.Key;
    date: string;
    shiftName: string;
    actualStartTime: string;
    actualEndTime: string;
    timeTrackedOver: string;
    overTime: string;
    attendanceBreakdown: any[];
    status: string;
}
