import type { ColumnsType } from 'antd/es/table';
import { Tooltip } from 'antd';

import expectedTimeIcon from "../assets/images/hoursTracked/ExpectedTime.svg"
import expectedTimeHov from "../assets/images/hoursTracked/ExpectedTimeHov.svg"

import timeTrackedIcon from "../assets/images/hoursTracked/timeTracked.svg"
import timeTrackedHov from "../assets/images/hoursTracked/TimeTrackedHov.svg"

import computerTimeIcon from "../assets/images/hoursTracked/computerTime.svg"
import computerTimeHov from "../assets/images/hoursTracked/computerTimeHov.svg"

import manualTimeIcon from "../assets/images/hoursTracked/manualTime.svg"
import manualTimeHov from "../assets/images/hoursTracked/manualTimeHov.svg"

import mobileTimeIcon from "../assets/images/hoursTracked/mobileTime.svg"
import mobileTimeHov from "../assets/images/hoursTracked/mobileTimeHov.svg"

import userIconImage from "../assets/images/hoursTracked/userImage.svg"

import clkExpectedTime from "../assets/images/hoursTracked/clkExpectedTime.svg"
import clkTimeTracked from "../assets/images/hoursTracked/clkTimeTracked.svg"
import clkComputerTime from "../assets/images/hoursTracked/clkComputerTime.svg"
import clkManualTime from "../assets/images/hoursTracked/clkManualTime.svg"
import clkMobileTime from "../assets/images/hoursTracked/clkMobileTime.svg"

import clkExpectedTimeHov from "../assets/images/hoursTracked/clkExpectedTimeHov.svg"
import clkTimeTrackedHov from "../assets/images/hoursTracked/clkTimeTrackedHov.svg"
import clkComputerTimeHov from "../assets/images/hoursTracked/clkComputerTimeHov.svg"
import clkManualTimeHov from "../assets/images/hoursTracked/clkManualTimeHov.svg"
import clkMobileTimeHov from "../assets/images/hoursTracked/clkMobileTimeHov.svg"

export interface DataType {
    key: string;
    date: string;
    expectedTime: string;
    timeTracked: string;
    timeBreakdown: any[];
}
export const HoursTrackedTableData: DataType[] = [
    {
        key: '1',
        date: 'Mon, 13-Mar-2022',
        expectedTime: "6h 30min",
        timeTracked: '6h 20min',
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
        date: 'Mon, 13-Mar-2022',
        expectedTime: "6h 30min",
        timeTracked: '6h 20min',
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
        key: '3',
        date: 'Mon, 13-Mar-2022',
        expectedTime: "6h 30min",
        timeTracked: '6h 20min',
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
        key: '4',
        date: 'Mon, 13-Mar-2022',
        expectedTime: "6h 30min",
        timeTracked: '6h 20min',
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
        key: '5',
        date: 'Mon, 13-Mar-2022',
        expectedTime: '-',
        timeTracked: '-',
        timeBreakdown: [],
    },
];


export const hoursTrackedData: any = [
    {
        id: '1',
        userImage: userIconImage,
        userName: 'Allen Jhon',
        timesSlots: [
            {
                timeHead: 'Expected Time',
                timeIcon: clkExpectedTime,
                timeDuration: '32h 30m',
                defaultColor: '#49416D',
            },
            {
                timeHead: 'Time Tracked',
                timeIcon: clkTimeTracked,
                timeDuration: '31h 30m',
                defaultColor: '#E76F51',
            },
            {
                timeHead: 'Computer Time',
                timeIcon: clkComputerTime,
                timeDuration: '20h 20m',
                defaultColor: '#2A9D8F',
            },
            {
                timeHead: 'Manual Time',
                timeIcon: clkManualTime,
                timeDuration: '30m',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Mobile Time',
                timeIcon: clkMobileTime,
                timeDuration: '10h 40m',
                defaultColor: '#E75151',
            }
        ],
        role: ["Employee"],
    },
    {
        id: '2',
        userImage: userIconImage,
        userName: 'Allen Jhon',
        timesSlots: [
            {
                timeHead: 'Expected Time',
                timeIcon: clkExpectedTime,
                timeDuration: '32h 30m',
                defaultColor: '#49416D',
            },
            {
                timeHead: 'Time Tracked',
                timeIcon: clkTimeTracked,
                timeDuration: '31h 30m',
                defaultColor: '#E76F51',
            },
            {
                timeHead: 'Computer Time',
                timeIcon: clkComputerTime,
                timeDuration: '20h 20m',
                defaultColor: '#2A9D8F',
            },
            {
                timeHead: 'Manual Time',
                timeIcon: clkManualTime,
                timeDuration: '30m',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Mobile Time',
                timeIcon: clkMobileTime,
                timeDuration: '10h 40m',
                defaultColor: '#E75151',
            }
        ],
        role: ["Admin"],
    },
    {
        id: '3',
        userImage: userIconImage,
        userName: 'Allen Jhon',
        timesSlots: [
            {
                timeHead: 'Expected Time',
                timeIcon: clkExpectedTime,
                timeDuration: '32h 30m',
                defaultColor: '#49416D',
            },
            {
                timeHead: 'Time Tracked',
                timeIcon: clkTimeTracked,
                timeDuration: '31h 30m',
                defaultColor: '#E76F51',
            },
            {
                timeHead: 'Computer Time',
                timeIcon: clkComputerTime,
                timeDuration: '20h 20m',
                defaultColor: '#2A9D8F',
            },
            {
                timeHead: 'Manual Time',
                timeIcon: clkManualTime,
                timeDuration: '30m',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Mobile Time',
                timeIcon: clkMobileTime,
                timeDuration: '10h 40m',
                defaultColor: '#E75151',
            }
        ],
        role: ["Admin,Employee"],

    }, {
        id: '4',
        userImage: userIconImage,
        userName: 'Allen Jhon',
        timesSlots: [
            {
                timeHead: 'Expected Time',
                timeIcon: clkExpectedTime,
                timeDuration: '32h 30m',
                defaultColor: '#49416D',
            },
            {
                timeHead: 'Time Tracked',
                timeIcon: clkTimeTracked,
                timeDuration: '31h 30m',
                defaultColor: '#E76F51',
            },
            {
                timeHead: 'Computer Time',
                timeIcon: clkComputerTime,
                timeDuration: '20h 20m',
                defaultColor: '#2A9D8F',
            },
            {
                timeHead: 'Manual Time',
                timeIcon: clkManualTime,
                timeDuration: '30m',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Mobile Time',
                timeIcon: clkMobileTime,
                timeDuration: '10h 40m',
                defaultColor: '#E75151',
            }
        ],
        role: ["Admin,Employee"],


    },
]
export const logedUserData: any = [
    {
        id: '1',
        userImage: userIconImage,
        userName: 'Allen Jhon',
        timesSlots: [
            {
                timeHead: 'Expected Time',
                timeIcon: clkExpectedTime,
                timeDuration: '32h 30m',
                defaultColor: '#49416D',
            },
            {
                timeHead: 'Time Tracked',
                timeIcon: clkTimeTracked,
                timeDuration: '31h 30m',
                defaultColor: '#E76F51',
            },
            {
                timeHead: 'Computer Time',
                timeIcon: clkComputerTime,
                timeDuration: '20h 20m',
                defaultColor: '#2A9D8F',
            },
            {
                timeHead: 'Manual Time',
                timeIcon: clkManualTime,
                timeDuration: '30m',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Mobile Time',
                timeIcon: clkMobileTime,
                timeDuration: '10h 40m',
                defaultColor: '#E75151',
            }
        ],
        role: ["Employee"],
    }
]


export const overallTrackingData: any = [
    {
        id: '1',
        cardIcon: expectedTimeIcon,
        cardIconHov: expectedTimeHov,
        cardTitle: 'Expected Time',
        timeSlot: '162h 30m',
        color: "darkPurple-color",
        hoverColor: "darkPurpleGradient-color"
    },
    {
        id: '2',
        cardIcon: timeTrackedIcon,
        cardIconHov: timeTrackedHov,
        cardTitle: 'Time Tracked',
        timeSlot: '162h 30m',
        color: "secondary-color",
        hoverColor: "secondaryGradient-color"
    },
    {
        id: '3',
        cardIcon: computerTimeIcon,
        cardIconHov: computerTimeHov,
        cardTitle: 'Computer Time',
        timeSlot: '162h 30m',
        color: "progress-color",
        hoverColor: "progressGradient-color"
    },
    {
        id: '4',
        cardIcon: manualTimeIcon,
        cardIconHov: manualTimeHov,
        cardTitle: 'Manual Time',
        timeSlot: '162h 30m',
        color: "lightYellow-color",
        hoverColor: "lightYellowGradient-color"
    },
    {
        id: '5',
        cardIcon: mobileTimeIcon,
        cardIconHov: mobileTimeHov,
        cardTitle: 'Mobile Time',
        timeSlot: '162h 30m',
        color: "darkRed-color",
        hoverColor: "darkRedGradient-color"
    },

]

export const overallTrackingDataByUser: any = [
    {
        id: '1',
        cardIcon: clkExpectedTime,
        cardIconHov: clkExpectedTimeHov,
        cardTitle: 'Expected Time',
        timeSlot: '162h 30m',
        color: "darkPurple-color",
        hoverColor: "darkPurpleGradient-color"
    },
    {
        id: '2',
        cardIcon: clkTimeTracked,
        cardIconHov: clkTimeTrackedHov,
        cardTitle: 'Time Tracked',
        timeSlot: '162h 30m',
        color: "secondary-color",
        hoverColor: "secondaryGradient-color"
    },
    {
        id: '3',
        cardIcon: clkComputerTime,
        cardIconHov: clkComputerTimeHov,
        cardTitle: 'Computer Time',
        timeSlot: '162h 30m',
        color: "progress-color",
        hoverColor: "progressGradient-color"
    },
    {
        id: '4',
        cardIcon: clkManualTime,
        cardIconHov: clkManualTimeHov,
        cardTitle: 'Manual Time',
        timeSlot: '162h 30m',
        color: "lightYellow-color",
        hoverColor: "lightYellowGradient-color"
    },
    {
        id: '5',
        cardIcon: clkMobileTime,
        cardIconHov: clkMobileTimeHov,
        cardTitle: 'Mobile Time',
        timeSlot: '162h 30m',
        color: "darkRed-color",
        hoverColor: "darkRedGradient-color"
    },

]