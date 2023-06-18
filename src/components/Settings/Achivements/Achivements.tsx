import { Tabs } from 'antd';
import React, { useState } from 'react'
import AchivementChildTab from './AchivementTabChild/AchivementChildTab';

// Mock Data and Interface
import { IAchievementsTabsData } from '../../../types/settings/AchievementsInterface';
import { AchievementsTabsData } from '../../../mock/settings/AchievementsMockData';

// scss
import "./Achivement.scss";


const AchivementsMain = () => {

    const [childTabName, setChildTabName] = useState<IAchievementsTabsData[] | IAchievementsTabsData | undefined>(AchievementsTabsData);

    const onChange = (key: string) => {
        let filteredData = AchievementsTabsData.find((item: IAchievementsTabsData) => item.label === key);
        setChildTabName(filteredData);
    };

    return (
        <div className="achivements-main">
            <Tabs defaultActiveKey="Global Setting" items={AchievementsTabsData.map((item: IAchievementsTabsData) => {
                return {
                    label: item.label,
                    key: item.key,
                    children: <AchivementChildTab renderChild={childTabName} />,
                };
            })} onChange={onChange} />
        </div>
    )
}

export default AchivementsMain