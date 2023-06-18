import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Pending from './pending/Pending';
import Tagged from './tagged/Tagged';
import SettingsWebApps from './settingsWebApps/SettingsWebApps';

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Pending`,
        children: <Pending />,
    },
    {
        key: '2',
        label: `Tagged`,
        children: <Tagged />,
    },
    {
        key: '3',
        label: `Settings`,
        children: <SettingsWebApps />,
    },
];

const WebsiteAppClassification = (props: any) => {
    return (
        <div className='wrap-web-apps-tabs'>
            <Tabs defaultActiveKey="1" items={items} className="wrapper-tabs"/>
           

        </div>
    )
}

export default WebsiteAppClassification
