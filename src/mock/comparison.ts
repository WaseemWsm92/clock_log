import { Checked, Equalizer, image, image1, inProgress, Overutilized, ProductivityIcon, redTimeIcon, Task, timeIcon, Underutilized } from "../assets/export";
import CalendarSmIcon from "../assets/images/attendance/calendar-sm.svg";
import latesIcon from "../assets/images/attendance/lates.svg";
import absentIcon from "../assets/images/attendance/absents.svg";

import { ICard, IMembers, ITaskList, ITeamAbsence, IUsageData, IUsersList, IWorkBalanceData } from "../types/comparison";

export const cardsList: ICard[] = [
  {
    icon: timeIcon,
    title: "Time Tracked",
    value: "195h 30m",
    color: "#E76F51",
    progressValue: "",
  },
  {
    icon: timeIcon,
    title: "Total Time",
    value: "195h 30m",
    color: "#49416D",
    progressValue: "",
  },
  {
    icon: timeIcon,
    title: "Productivity time",
    value: "185h 30m",
    color: "#2A9D8F",
    progressValue: "",
  },
  {
    icon: ProductivityIcon,
    title: "Productivity Efficiency",
    value: "195h 30m",
    color: "#2A9D8F",
    progressValue: "97",
  },
  {
    icon: timeIcon,
    title: "Unproductive Time",
    value: "01h 15m",
    color: "#E75151",
    progressValue: "",
  },
  {
    icon: timeIcon,
    title: "Idle Time",
    value: "45m",
    color: "#898347",
    progressValue: "",
  },
  {
    icon: timeIcon,
    title: "Neutral Time",
    value: "01h 20m",
    color: "#EA7111",
    progressValue: "",
  },
  {
    icon: timeIcon,
    title: "Unrated Time",
    value: "01h 40m",
    color: "#939393",
    progressValue: "",
  },
];

export const list = ["Clocklog", "Foster App", "Care Libarary", "Formation Book", "Internship ken"];

export const WorkBalanceData: IWorkBalanceData[] = [
  {
    title: "Underutilized",
    icon: Underutilized,
    count: "2",
    color: "#FDCA64",
  },
  {
    title: "Healthy",
    icon: Equalizer,
    count: "2",
    color: "#37B4A4",
  },
  {
    title: "Overutilized",
    icon: Overutilized,
    count: "5",
    color: "#FF6A6C",
  },
];

export const usersList: IUsersList[] = [
  {
    title: "most productive user",
    image: image,
    progress: "70",
    name: "Slade Wilson",
    designation: "Developer",
    color: "#2A9D8F",
    time: "40h 30m",
  },
  {
    title: "most unproductive user",
    image: image1,
    progress: "30",
    name: "Victoria Ferguson",
    designation: "Desginer",
    color: "#E75151",
    time: "08h 10m",
  },
];

export const teamAbsence: ITeamAbsence[] = [
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    days: "2",
    imageStroke: "",
  },
];

export const taskList: ITaskList[] = [
  {
    taskIcon: Task,
    title: "to do",
    count: "5",
    color: "#1890FF",
    hoverData: {
      hoverTitle: "Hover Task",
      list: ["Task 1", "Task 2"],
    },
  },
  {
    taskIcon: redTimeIcon,
    title: "Review",
    count: "3",
    color: "#FF4D4F",
    hoverData: {
      hoverTitle: "Task 2",
      list: ["Task 1", "Task 2", "Task 3"],
    },
  },
  {
    taskIcon: inProgress,
    title: "In progress",
    count: "3",
    color: "#2A9D8F",
    hoverData: {
      hoverTitle: "Task 2",
      list: ["Task 1", "Task 2"],
    },
  },
  {
    taskIcon: Checked,
    title: "Completed",
    count: "1",
    color: "#52C41A",
    hoverData: {
      hoverTitle: "Task 4",
      list: ["Task 1", "Task 2"],
    },
  },
];
export const usagecardTopData = [
  {
    usageColor: "#2A9D8F",
    usageType: "productive",
  },
  {
    usageColor: "#E75151",
    usageType: "Unproductive",
  },
  {
    usageColor: "#F4A261",
    usageType: "neutral",
  },
  {
    usageColor: "#D9D9D9",
    usageType: "unrated",
  },
];

export const usageData: IUsageData[] = [
  {
    domainName: "outlook.com",
    timeTracked: "10h30m",
    type: "productive",
    progress: "90",
  },
  {
    domainName: "google.com",
    timeTracked: "10h30m",
    type: "productive",
    progress: "80",
  },
  {
    domainName: "facebook.com",
    timeTracked: "10h30m",
    type: "Unproductive",
    progress: "60",
  },
  {
    domainName: "youtube.com",
    timeTracked: "10h30m",
    type: "Unproductive",
    progress: "50",
  },
  {
    domainName: "gmail.com",
    timeTracked: "10h30m",
    type: "neutral",
    progress: "30",
  },
  {
    domainName: "figma.com",
    timeTracked: "10h30m",
    type: "unrated",
    progress: "10",
  },
];

export const workRecord = [
  {
    title: "days worked",
    type: "worked",
    totalDays: "07",
    days: "05",
    icon: CalendarSmIcon,
    workedDays: "05",
    colorClasses: {
      color: "lightGreenProgress-color",
      bgColor: "bgLightGreenProgress-color",
      hoverColor: "lightGreenGradient-color",
      strokeColor: "#37B4A4",
    },
  },
  {
    title: "absents",
    type: "absents",
    totalDays: "07",
    days: "01",
    icon: absentIcon,
    colorClasses: {
      color: "error-color",
      bgColor: "bgError-color",
      hoverColor: "errorGradient-color",
      strokeColor: "#FF4D4F",
    },
  },
  {
    title: "Lates",
    type: "lates",
    totalDays: "07",
    days: "01",
    icon: latesIcon,
    colorClasses: {
      color: "lightYellow-color",
      bgColor: "bgLightYellow-color",
      hoverColor: "lightYellowGradient-color",
      strokeColor: "#FDCA64",
    },
  },
];

export const members: IMembers[] = [
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    time: "23h 15m",
    progress: "50",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    time: "32h 25m",
    progress: "70",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    time: "55h 40m",
    progress: "30",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    time: "02h 25m",
    progress: "80",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    time: "23h 15m",
    progress: "50",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    time: "32h 25m",
    progress: "70",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    time: "55h 40m",
    progress: "30",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    time: "02h 25m",
    progress: "80",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    time: "23h 15m",
    progress: "50",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    time: "32h 25m",
    progress: "70",
  },
  {
    image: image,
    name: "Eva Smith",
    designation: "product owner",
    time: "55h 40m",
    progress: "30",
  },
  {
    image: image1,
    name: "Eva Smith",
    designation: "product owner",
    time: "02h 25m",
    progress: "80",
  },
];

export const teamsList = [
  {
    id: "1",
    label: "designer team"
  },
  {
    id: "2",
    label: "frontend team"
  },
  {
    id: "3",
    label: "backend team"
  },
];

export const usersSelectList = [
  {
    id: "1",
    label: "Ahamad"
  },
  {
    id: "2",
    label: "Aslam"
  },
  {
    id: "3",
    label: "Iqbal"
  },
];