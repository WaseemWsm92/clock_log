import UserImg from "../assets/images/workSchedule/user.png";
export const calendarMockData = [
  {
    id: 1,
    title: "Absent",
    start: "2023-02-15T08:02:17-05:00",
    end: "2023-02-15T08:02:17-05:00",
    desc: "Discuss project status and next steps",
    color: "#FF6A6C",
    allDay: true,
  },
  {
    id: 2,
    title: "Late",
    start: "2023-02-13T08:02:17-05:00",
    end: "2023-02-13T08:02:17-05:00",
    color: "#FDCA64",
    allDay: true,
  },
  {
    id: 3,
    title: "Present",
    start: "2023-02-16T08:02:17-05:00",
    end: "2023-02-16T08:02:17-05:00",
    color: "#37B4A4",
    allDay: true,
  },
];

export const selectUser = [
  {
    id: "1",
    value: "Tabbaya gul",
    label: "Tabbaya gul",
  },
  {
    id: "2",
    value: "Bilal",
    label: "Bilal",
  },
];

export const selectSchedule = [
  {
    id: "1",
    value: "Morning",
    label: "Morning",
  },
  {
    id: "2",
    value: "Evening",
    label: "Evening",
  },
  {
    id: "3",
    value: "Night",
    label: "Night",
  },
];

export const applyMorningWorkSchedule = [
  {
    id: "1",
    title: "Schedule Start",
    desc: "08:00Am",
  },
  {
    id: "2",
    title: "Schedule End",
    desc: "03:00Pm",
  },
  {
    id: "3",
    title: "Total Hours:",
    desc: "7h",
  },
  {
    id: "4",
    title: "Break Start",
    desc: "12:00 Am",
  },
  {
    id: "5",
    title: "Break End",
    desc: "12:30 Pm",
  },
  {
    id: "6",
    title: "Min Effective Hours",
    desc: "6.5h",
  },
];

export const appliedWorkSchedule = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



export const workScheduleResources = [
  {
    id: "a",
    title: "Tayyaba Gul",
    imageUrl: UserImg
  },
  {
    id: "b",
    title: "Kiran Anwar",
    imageUrl: UserImg
  },
  {
    id: "c",
    title: "Kanwal Aftab",
    imageUrl: UserImg
  },
  {
    id: "d",
    title: "Rabia Anam",
    imageUrl: UserImg
  },
  {
    id: "e",
    title: "Tayyaba Gul",
    imageUrl: UserImg
  },
  {
    id: "f",
    title: "Sania Muneer",
    imageUrl: UserImg
  },
];

export const workScheduleEvent = [
  {
    id: "1",
    resourceIds: ["a"],
    title: "Morning",
    start: "2023-02-26T04:00:00",
    end: "2023-02-27T12:40:00",
    shift: "Absent",
    borderColor: "#FF4D4F",
  },
  {
    id: "2",
    resourceIds: ["b"],
    title: "Morning",
    start: "2023-02-27T09:00:00",
    end: "2023-02-28T10:20:00",
    shift: "Late",
    borderColor: "#2A9D8F",
    
  },
  {
    id: "3",
    resourceIds: ["c"],
    title: "Morning",
    start: "2023-02-27T09:00:00",
    end: "2023-02-29T10:20:00",
    shift: "Present",
    borderColor: "#FAAD14"
  },
  // {
  //   id: "4",
  //   resourceIds: ["b"],
  //   title: "Currency Gram",
  //   start: "2023-02-27T11:00:00",
  //   end: "2023-02-27T12:20:00",
  // },
];
