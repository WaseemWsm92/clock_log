export const timeSheetResources = [
  {
    id: "1",
    title: "Projects/Tasks",
  },
  {
    id: "2",
    title: "Activities",
  },
  {
    id: "3",
    title: "Scheduled Event",
  },
];

export const timeSheetEvents = [
  {
    id: "1",
    resourceIds: ["1"],
    title: "Currency Gram",
    start: "2023-03-03T09:00:00",
    end: "2023-03-03T10:20:00",
  },
  {
    id: "2",
    resourceIds: ["3"],
    title: "Call with Daniyal muneer",
    start: "2023-03-03T09:00:00",
    end: "2023-03-03T10:25:00",
  },
  {
    id: "3",
    resourceIds: ["2"],
    title: "Feed | LinkedIn",
    start: "2023-03-03T09:00:00",
    end: "2023-03-03T10:25:00",
  },
];

export const activitiesMockData = [
  {
    id: "1",
    title: "Gmail",
    progress: 45,
  },
  {
    id: "2",
    title: "Outlook",
    progress: 35,
  },
  {
    id: "3",
    title: "Monday",
    progress: 20,
  },
];

export const scheduledEventMockData = [
    {
        id: "1",
        title: "Duration",
        desc: "8:10 to 8:20"
    },
    {
        id: "2",
        title: "Repeat",
        desc: "No"
    },
    {
        id: "3",
        title: "Calendar",
        desc: "Outlook Calendar"
    },
    {
        id: "4",
        title: "Link",
        link: "https://outlook.office.com/mail/inbox/id/AAQkADI3MGE5MzVhLWI3MjEtNGYxOS04ZTY2LTU"
    },
]