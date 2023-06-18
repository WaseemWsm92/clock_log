import { Tabs } from 'antd';
import { useState } from 'react'

// Component
import ExceptionModalTabChild from './ExceptionModalTabChild/ExceptionModalTabChild';

// Interface and Mock Data
import { ExceptionModalTabsData } from '../../../../../mock/settings/AchievementsMockData';
import { IExceptionModalTabs } from '../../../../../types/settings/AchievementsInterface';


const ExceptionModalTab = (props: any) => {
    const { selectedValues, setSelectedValues, selectedTeamValues, setSelectedTeamValues } = props;
    const [childTabName, setChildTabName] = useState<IExceptionModalTabs[] | IExceptionModalTabs | undefined>(ExceptionModalTabsData);

    const onChange = (key: string) => {
        let filteredData = ExceptionModalTabsData.find((item: IExceptionModalTabs) => item.label === key);
        setChildTabName(filteredData);
    };


    return (
        <Tabs defaultActiveKey="Global Setting" className='wrapper-tabs' style={{ marginTop: '10px' }} items={ExceptionModalTabsData.map((item: IExceptionModalTabs) => {
            return {
                label: item.label,
                key: item.key,
                children: <ExceptionModalTabChild renderChild={childTabName} selectedValues={selectedValues} setSelectedValues={setSelectedValues} selectedTeamValues={selectedTeamValues} setSelectedTeamValues={setSelectedTeamValues} />,
            };
        })} onChange={onChange} />
    )
}

export default ExceptionModalTab