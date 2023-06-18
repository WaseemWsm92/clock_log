export interface DataType {
    key: React.Key;
    scheduleReport: string;
    report: string;
    path:string;
    recipients: string;
    deliveryFrequency: string;
    deliveryTime: string;
    fileType:string;
    active:boolean;
    actions:string
}