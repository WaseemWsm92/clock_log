
import userIconImage from "../assets/images/hoursTracked/userImage.svg"

import underutilized from "../assets/icons/workloadbalance/underutilized.svg"
import underutilizedRounded from "../assets/icons/workloadbalance/underutilizedRounded.svg"
import overutilized from "../assets/icons/workloadbalance/overutilized.svg"
import healthy from "../assets/icons/workloadbalance/healthy.svg"

import underutilizedHov from "../assets/icons/workloadbalance/underutilizedHov.svg"
import overutilizedHov from "../assets/icons/workloadbalance/overutilizedHov.svg"
import healthyHov from "../assets/icons/workloadbalance/healthyHov.svg"

export interface DataType {
    key: string;
    date: string;
    trackedTime: string;
    productiveTime: string;
    expectedWorkingHours: string;
    minEffectiveHours: string;
    utilizationStatus: string;
}
export const WorkLoadTableData: DataType[] = [
    {
        key: "1",
        date: "Mon, 13-Mar-2022",
        trackedTime: "6h 30m",
        productiveTime: "6h 25m",
        expectedWorkingHours: "6h 20m",
        minEffectiveHours: "6h 30m",
        utilizationStatus: "Healthy",
    },
    {
        key: "2",
        date: "Mon, 13-Mar-2022",
        trackedTime: "6h 30m",
        productiveTime: "6h 25m",
        expectedWorkingHours: "6h 20m",
        minEffectiveHours: "6h 30m",
        utilizationStatus: "Underutilized",
    },
    {
        key: "3",
        date: "Mon, 13-Mar-2022",
        trackedTime: "6h 30m",
        productiveTime: "6h 25m",
        expectedWorkingHours: "6h 20m",
        minEffectiveHours: "6h 30m",
        utilizationStatus: "Overutilized",
    },
    {
        key: "4",
        date: "Mon, 13-Mar-2022",
        trackedTime: "6h 30m",
        productiveTime: "6h 25m",
        expectedWorkingHours: "6h 20m",
        minEffectiveHours: "6h 30m",
        utilizationStatus: "Healthy",
    },
];


export const WorkLoadData: any = [
    {
        id: '1',
        userImage: userIconImage,
        userName: 'Shariq Shahzad',
        timesSlots: [
            {
                timeHead: 'Underutilized',
                timeIcon: underutilizedRounded,
                timeDuration: '01 Day',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Overutilized',
                timeIcon: overutilized,
                timeDuration: '01 Day',
                defaultColor: '#FF6A6C',
            },
            {
                timeHead: 'Healthy',
                timeIcon: healthy,
                timeDuration: '01 Day',
                defaultColor: '#Healthy',
            },
        ],

    },
    {
        id: '2',
        userImage: userIconImage,
        userName: 'Alyse Parry',
        timesSlots: [
            {
                timeHead: 'Underutilized',
                timeIcon: underutilizedRounded,
                timeDuration: '01 Day',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Overutilized',
                timeIcon: overutilized,
                timeDuration: '01 Day',
                defaultColor: '#FF6A6C',
            },
            {
                timeHead: 'Healthy',
                timeIcon: healthy,
                timeDuration: '01 Day',
                defaultColor: '#Healthy',
            },
        ],

    },
    {
        id: '3',
        userImage: userIconImage,
        userName: 'Marina William',
        timesSlots: [
            {
                timeHead: 'Underutilized',
                timeIcon: underutilizedRounded,
                timeDuration: '01 Day',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Overutilized',
                timeIcon: overutilized,
                timeDuration: '01 Day',
                defaultColor: '#FF6A6C',
            },
            {
                timeHead: 'Healthy',
                timeIcon: healthy,
                timeDuration: '01 Day',
                defaultColor: '#Healthy',
            },
        ],

    },
    {
        id: '4',
        userImage: userIconImage,
        userName: 'Waqas Ahmad',
        timesSlots: [
            {
                timeHead: 'Underutilized',
                timeIcon: underutilizedRounded,
                timeDuration: '01 Day',
                defaultColor: '#FDCA64',
            },
            {
                timeHead: 'Overutilized',
                timeIcon: overutilized,
                timeDuration: '01 Day',
                defaultColor: '#FF6A6C',
            },
            {
                timeHead: 'Healthy',
                timeIcon: healthy,
                timeDuration: '01 Day',
                defaultColor: '#Healthy',
            },
        ],

    }
]

export const overallWorkLoadData: any = [
    {
        id: '1',
        cardIcon: underutilized,
        cardIconHov: underutilizedHov,
        cardTitle: 'Underutilized',
        content: '1 User',
        color: "lightYellow-color",
        hoverColor: "lightYellowGradient-color"
    },
    {
        id: '2',
        cardIcon: overutilized,
        cardIconHov: overutilizedHov,
        cardTitle: 'Overutilized',
        content: '2 User',
        color: "Orange-color",
        hoverColor: "OrangeGradient-color"
    },
    {
        id: '3',
        cardIcon: healthy,
        cardIconHov: healthyHov,
        cardTitle: 'Healthy',
        content: '2 User',
        color: "lightGreenProgress-color",
        hoverColor: "lightGreenGradient-color"
    },

]

export const overallWorkLoadDataByUser: any = [
    {
        id: '1',
        cardIcon: underutilized,
        cardIconHov: underutilizedHov,
        cardTitle: 'Underutilized',
        content: '1 Day',
        color: "lightYellow-color",
        hoverColor: "lightYellowGradient-color"
    },
    {
        id: '2',
        cardIcon: overutilized,
        cardIconHov: overutilizedHov,
        cardTitle: 'Overutilized',
        content: '2 Day',
        color: "Orange-color",
        hoverColor: "OrangeGradient-color"
    },
    {
        id: '3',
        cardIcon: healthy,
        cardIconHov: healthyHov,
        cardTitle: 'Healthy',
        content: '2 Day',
        color: "lightGreenProgress-color",
        hoverColor: "lightGreenGradient-color"
    },

]