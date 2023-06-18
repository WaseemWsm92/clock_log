
export interface IAchievementsTabsData {
    key: string;
    label: string;
    children?: React.ReactNode;
}

export interface IAchievementsTableUsername {
    key: string;
    name: string,
    image: string
}

export interface IAchievementsTableData {
    key: React.Key;
    index?: number;
    userName: IAchievementsTableUsername | IAchievementsTableUsername[];
    team?: string;
    performanceEvaluation: string;
    productivityWeightage: string;
    idleTimeWeightage: string;
    timeTrackedWeightage: string;
}


// ############ EXECPTION MODAL TABS
export interface IExceptionModalTabs {
    key: string;
    label: string;
    children?: React.ReactNode;
}
