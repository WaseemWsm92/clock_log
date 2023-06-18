import { useState } from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "./WebApp.scss"
import UserTab from './UserTab/UserTab';
import WebsiteAppTab from './WebsiteAppTab/WebsiteAppTab';
import UserActivityDetails from './UserActivityDetails/UserActivityDetails';



const WebApp = () => {
    const [IsShowUserActivity, setIsShowUserActivity] = useState(true);
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Users`,
            children: <UserTab setIsShowUserActivity={setIsShowUserActivity} IsShowUserActivity={IsShowUserActivity} />,
        },
        {
            key: '2',
            label: `Website & Apps`,
            children: <WebsiteAppTab />,
        }
    ];
    return (
        <div className='web-app-wrapper   ' style={{ padding: "1rem" }} >
            {IsShowUserActivity && <Tabs defaultActiveKey="1" items={items} className="grey-color wrapper-tabs" />}
            {!IsShowUserActivity && <UserActivityDetails setIsShowUserActivity={setIsShowUserActivity} />}
        </div>
    )
}

export default WebApp