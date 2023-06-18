import { NodeElement } from "rc-tree/lib/interface";
export interface ICard {
  icon: string;
  title: string;
  value?: string;
  color: string;
  progressValue?: string;
}
export interface ITaskList {
  taskIcon: string;
  title: string;
  count: string;
  color: string;
  hoverData: {
    hoverTitle: string;
    list: string[];
  };
}
export interface IWorkBalanceData {
  title: string;
  icon: any;
  count: string;
  color: string;
}
export interface IUsersList {
  title: string;
  image: any;
  progress: string;
  name: string;
  designation: string;
  color: string;
  time: string;
}
export interface ITeamAbsence {
  image: any;
  name: string;
  designation: string;
  days: string;
  imageStroke: string;
}

export interface IUsageData {
  domainName: string;
  timeTracked: string;
  progress: string;
  type: string;
}
export interface IUsageCard {
  title: string;
  subIcon: string;
  color: string;
  icon: string;
  data?: any;
  usageData: IUsageData[];
}
export interface ICardWrapper {
  title: string;
  icon: string;
  subIcon?: string;
  color?: string;
  data?: any;
  count?:number|string,
  noSidePadding?:boolean;
  isTimeCard?:boolean;
  children: NodeElement | NodeElement[];
}
export interface IAttendanceCard {
  title: string;
  icon: string;
  color?: string;
  data?: any;
}

export interface IStatusCard {
  icon: string;
  title: string;
  color: any;
  type: string;
  totalDays: string;
  days: string;
}

export interface IMembers {
  image: any;
  name: string;
  designation: string;
  time: string;
  progress: string;
}