// Images
import userImage1 from "../../assets/images/users/user-2.svg";
import userImage2 from "../../assets/images/users/user-3.svg";
import userImage3 from "../../assets/images/users/user-4.svg";

// Interfaces
import { IAchievementsTableData, IAchievementsTabsData, IExceptionModalTabs } from "../../types/settings/AchievementsInterface";

export const AchievementsTabsData: IAchievementsTabsData[] = [
    {
        key: "Global Setting",
        label: `Global Setting`,
    },
    {
        key: "User Exception",
        label: `User Exception`,
    },
];


export const AchievementsTableData: IAchievementsTableData[] = [
    {
        key: "1",
        userName: [
            {
                key: "1a",
                name: `Ali`,
                image: userImage1,
            },
            {
                key: "2a",
                name: `Nizam`,
                image: userImage2,
            },
            {
                key: "3a",
                name: `Usman`,
                image: userImage1,
            },
            {
                key: "4a",
                name: `Kamran`,
                image: userImage3,
            }
        ],
        performanceEvaluation: "Done",
        productivityWeightage: "30",
        idleTimeWeightage: "40",
        timeTrackedWeightage: "30",
    },
    {
        key: "2",
        team: "Clocklog",
        userName: [
            {
                key: "11a",
                name: `Aesa Khan`,
                image: userImage3,
            },
            {
                key: "22a",
                name: `Maaz Khan`,
                image: userImage2,
            }
        ],
        performanceEvaluation: "Not Done",
        productivityWeightage: "30",
        idleTimeWeightage: "40",
        timeTrackedWeightage: "30",
    }
]


// ################################# EXECPTIONMODALTABSDATA  IEXECPTIONMODALTABS

export const ExceptionModalTabsData: IExceptionModalTabs[] = [
    {
        key: "Users",
        label: `Users`,
    },
    {
        key: "Teams",
        label: `Teams`,
    },
];