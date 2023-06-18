import { DataType } from "../types/DistractionAlert";

export const data: DataType[] = [
    { key: 1, distractionName: "Distraction 1", description: 'The user did not start time before 8:01 for 3 days in one week', condition: 'Start Time', selectUsers: 'All Users', action: '...' },
    { key: 2, distractionName: "Distraction 2", description: 'The user did not follow work schedule  for 3 days in one week', condition: 'Did not follow Work Schedule', selectUsers: 'All Users', action: '...' },
    { key: 3, distractionName: "Distraction 3", description: 'The user had productivity less than 40 % for 3 days in one week', condition: 'Productivity', selectUsers: 'All Users', action: '...' },
    { key: 4, distractionName: "Distraction 4", description: 'The user had idle time greater than 60 % for 3 days in one week', condition: 'Idle Time ', selectUsers: 'All Users', action: '...' },
    { key: 5, distractionName: "Distraction 5", description: 'The user accessed blocked service 5 times in one week', condition: 'Accessed Blocked Services', selectUsers: 'All Users', action: '...' },
    { key: 6, distractionName: "Distraction 6", description: 'The user did not start time before 8:01 for 3 days in one week', condition: 'Tracked Time', selectUsers: 'All Users', action: '...' },
    { key: 7, distractionName: "Distraction 7", description: 'The user did not follow work schedule  for 3 days in one week', condition: 'Start Time', selectUsers: 'All Users', action: '...' },
    { key: 8, distractionName: "Distraction 8", description: 'The user had productivity less than 40 % for 3 days in one week', condition: 'Did not follow Work Schedule', selectUsers: 'All Users', action: '...' },
];
