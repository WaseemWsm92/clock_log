import { submitReport } from "../types/submitReportModal";

export const fileTypeData:submitReport[] = [
    {
        id: '1',
        value: 'PDF',
        label: 'PDF',
    },
    {
        id: '2',
        value: 'CSV',
        label: 'CSV',
    },
]

export const dateRangeData:submitReport[] = [
    {
        id: '1',
        value: 'Today',
        label: 'Today',
    },
    {
        id: '2',
        value: 'Yesterday',
        label: 'Yesterday',
    },
    {
        id: '3',
        value: 'Last 7 Days',
        label: 'Last 7 Days',
    },
    {
        id: '4',
        value: 'Last Week',
        label: 'Last Week',
    },
]

export const deliveryTime:submitReport[] = [
    {
        id: '1',
        value: '9: 00 AM',
        label: '9: 00 AM',
    },
    {
        id: '2',
        value: '9: 30 AM',
        label: '9: 30 AM',
    },
    {
        id: '3',
        value: '10: 00 AM',
        label: '10: 00 AM',
    },
]

export const deliveryFrequency:submitReport[] = [
    {
        id: '1',
        value: 'Daily',
        label: 'Daily',
    },
    {
        id: '2',
        value: 'Weekly',
        label: 'Weekly',
    },
    {
        id: '3',
        value: 'Monthly',
        label: 'Monthly',
    },
]