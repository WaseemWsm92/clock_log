
import React, { useState } from 'react';
import { Space, Table, Tag, Avatar, Col, Row, Tabs, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TabsProps } from 'antd';
import userProfile from '../../assets/images/timeline/userProfile.png';
import individualuserprofile from '../../assets/images/timeline/individualuserprofile.png';
import { AddTime } from './addTime/AddTime';
import ScreenCasts from './screenCasts/ScreenCasts';
import AppUsage from './appsUsage/AppsUsage';
import { RightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import ShowTimeline from './showTimeLine/ShowTimeline';
import ShowActiveTimeline from './showActiveTimeline/ShowActiveTimeline'
import Search from 'antd/es/transfer/search';
import "./TimeLine.scss";
import "../../sass/common.scss";

interface DataType {
    key: string;
    name: string;
    project: string,
    totaltime: string;
    Productivity: string[];
    timeline: string;
    perdaytime: string[];
    timetrack: number;
    userProfile: string;
    numberOfActive: string[];

}

const data: DataType[] = [
    {
        key: '1',
        name: 'Esther Howard',
        project: 'PPCN',
        totaltime: '7h 40m',
        perdaytime: ['7h 22m'],
        timetrack: 70,
        Productivity: ['60%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['2am', '4am'],

    },
    {
        key: '2',
        name: 'Leslie Alexander',
        project: 'RND',
        totaltime: '7h 23m',
        perdaytime: ['5h 12m'],
        timetrack: 90,
        Productivity: ['90%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['12am', '2am'],
    },
    {
        key: '3',
        name: 'Leslie Alexander',
        project: 'CLOCKLOG',
        totaltime: '7h 50m',
        perdaytime: ['3h 48m'],
        timetrack: 20,
        Productivity: ['30%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['10pm', '12Pm'],
    },
    {
        key: '4',
        name: 'Esther Howard',
        project: 'PPCN',
        totaltime: '7h 40m',
        perdaytime: ['7h 22m'],
        timetrack: 55,
        Productivity: ['50%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['2Pm', '8pm'],

    },
    {
        key: '5',
        name: 'Jacob Jones',
        project: 'RND',
        totaltime: '7h 23m',
        perdaytime: ['5h 12m'],
        timetrack: 50,
        Productivity: ['20%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['4Pm', '12pm'],
    },
    {
        key: '6',
        name: 'Ralph Edwards',
        project: 'CLOCKLOG',
        totaltime: '7h 50m',
        perdaytime: ['3h 48m'],
        timetrack: 80,
        Productivity: ['75%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['6am', '12pm'],
    },
    {
        key: '7',
        name: 'Leslie Alexander',
        project: 'CLOCKLOG',
        totaltime: '7h 50m',
        perdaytime: ['3h 48m'],
        timetrack: 20,
        Productivity: ['60%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['8am', '10pm'],
    },
    {
        key: '8',
        name: 'Esther Howard',
        project: 'PPCN',
        totaltime: '7h 40m',
        perdaytime: ['7h 22m'],
        timetrack: 75,
        Productivity: ['40%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['4am', '8am'],

    },
    {
        key: '9',
        name: 'Jacob Jones',
        project: 'RND',
        totaltime: '7h 23m',
        perdaytime: ['5h 12m'],
        timetrack: 35,
        Productivity: ['65%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['4pm', '8pm'],
    },
    {
        key: '10',
        name: 'Ralph Edwards',
        project: 'CLOCKLOG',
        totaltime: '7h 50m',
        perdaytime: ['3h 48m'],
        timetrack: 95,
        Productivity: ['90%'],
        timeline: '123',
        userProfile: userProfile,
        numberOfActive: ['2am', '6am'],
    },
];

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `Websites & Apps Usage`,
        children: <AppUsage />,
    },
    {
        key: '2',
        label: `Screencasts`,
        children: <ScreenCasts />,
    },
];

const TimeLine: React.FC = () => {
    const [showIndividualReport, setShowIndividualRepor] = useState(true);
    // const [showAddButton, setShowAddButton] = useState(false);
    //   const showAddButton;

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            key: 'Name',
            render: (_, record) => (
                <a className='profileRow' onClick={() => { setShowIndividualRepor(false) }}>
                    <RightOutlined className='white-img-theme-class' />
                    <Space className="setProfile">
                        {/* <img src={userProfile} className="App-userProfile" alt="userProfile" width='80%' /> */}
                        <Avatar src={record.userProfile} className="profileImg" />
                        <span className='ActiveUser progress-color'></span>
                    </Space>

                    <Space direction="vertical">
                        <a className='title-color fs-14'>{record.name}</a>
                        <a className='title-color progress-color fs-12'>{record.project}</a>
                    </Space>

                </a>
            ),
        },

        {
            title: 'Total Time',
            dataIndex: 'totaltime',
            key: 'totaltime',
        },
        {
            title: 'Productivity%',
            dataIndex: 'Productivity',
            key: 'Productivity',
            render: (_, { Productivity }) => (
                <>
                    {Productivity.map((Productivity) => {
                        return (
                            <Tag color='#2a9d8f26' className="ProductivityTag" key={Productivity}>
                                {Productivity}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        // After Filter a week on date range
        // {
        //     title: 'Monday',
        //     dataIndex: 'timeline',
        //     key: 'timeline',
        //     render: (_, record) => (
        //         <Space direction="vertical" className='progressData'>
        //             <a className='title-color'>{record.perdaytime}</a>
        //             <Tooltip title={record.perdaytime}>
        //                 <Progress percent={record.timetrack} />
        //             </Tooltip>

        //             {/* <Progress strokeLinecap="butt" percent={record.timetrack} /> */}

        //         </Space>

        //     ),
        // },
        // {
        //     title: 'Tuesday',
        //     dataIndex: 'timeline',
        //     key: 'timeline',
        //     render: (_, record) => (
        //         <Space direction="vertical" className='progressData'>
        //             <a className='title-color'>{record.perdaytime}</a>
        //             <Tooltip title={record.perdaytime}>
        //                 <Progress percent={record.timetrack} />
        //             </Tooltip>

        //         </Space>

        //     ),
        // },
        {

            title: <div className='individualReport m-0 p-0'>
                <ShowTimeline />
            </div>,
            dataIndex: 'timeline',
            key: 'timeline',

            render: (_, record) => (
                <>

                    <Space direction="vertical" className='progressData'>
                        <ShowActiveTimeline showAddButton={false} numberOfActive={record.numberOfActive} />
                    </Space>
                </>


            ),

        },
    ];

    const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

    return (
        <div>
            {showIndividualReport && (role === "Admin" || role === 'Manager') ?
                <div className='reportTimeline  border-radius-8 p-15 --card-bg-color' >

                    <Row gutter={[14, 10]} className="tableFilter" justify='space-between'>
                        <Col xl={5} xs={24}>
                            <Select
                                className="select-input-theme"
                                popupClassName="select-theme"
                                defaultValue="Productivity%"
                                options={[
                                    { value: 'Less Than 100', label: 'Less Than 100' },
                                    { value: 'Less Than 90', label: 'Less Than 90' },
                                    { value: 'Less Than 80', label: 'Less Than 80' },
                                    { value: 'Less Than 70', label: 'Less Than 70' },
                                    { value: 'Less Than 60', label: 'Less Than 60' },
                                    { value: 'Less Than 50', label: 'Less Than 50' },
                                ]}
                            />
                        </Col>
                        <Col xl={12} md={24} xs={24} className="d-flex justify-end">
                            <div className='d-flex align-center search_section' style={{ gap: "10px" }}>
                                <p className='fs-12 fw-500 title-color m-0'>March 13, 2022</p>
                                <span className='custom-search-field'><Search placeholder="Search by user" /></span>
                            </div>
                        </Col>
                    </Row>
                    <div className='wrapper-table'><Table columns={columns} dataSource={data} scroll={{ x: 1400 }} /></div>

                </div>
                :
                <div className='individualReport border-radius-8 '>
                    <div className='card-bg-color border-radius-8 p-15'>

                        <Row className='individualDetails border-radius-8 accordian-bg-color'>
                            {(role === "Admin" || role === 'Manager') &&
                                <a className='backArrow' onClick={() => { setShowIndividualRepor(true) }}>
                                    <ArrowLeftOutlined />
                                </a>
                            }

                            <Col span={12} xs={24} md={12} xl={12} className='individualProfileRow'>
                                <div style={{ paddingLeft: "2rem" }}>
                                    <Space className="setProfile">
                                        <Avatar src={individualuserprofile} className="individualProfileImg" />
                                        <span className='ActiveUser progress-color'></span>
                                    </Space>

                                    <Space direction="vertical">
                                        <a className='title-color fs-24 fw-500 font-Poppins'>Esther Howard</a>
                                        <a className='title-color fs-14 font-Poppins'>Program Manager</a>
                                    </Space>
                                </div>
                            </Col>
                            <Col span={12} xs={24} md={12} xl={12}>
                                <Row>
                                    <Col span={8} xs={24} md={12} xl={8} className="timeTracked">
                                        <p className='fs-16 m-0 font-Poppins'>Time Tracked</p>
                                        <h6 className='title-color fs-24 fw-500 m-0 font-Poppins'> 7:13:24</h6>
                                    </Col>
                                    <Col span={8} xs={24} md={12} xl={8} className="ProductivityPecent">
                                        <p className='fs-16 m-0 font-Poppins'>Productivity%</p>
                                        <h6 className='title-color  m-0 fs-20 progress-color'> 94%</h6>
                                    </Col>
                                    <Col span={8} xs={24} md={12} xl={8} className="idleMinutes">
                                        <p className='fs-16 m-0 font-Poppins'>Idle Minutes%</p>
                                        <h6 className='title-color   m-0 fs-20' style={{ color: "#E76F51" }}> 01%</h6>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <AddTime />

                        <div className='individualReport white-dark-bg border-radius-8 m-0 p-0'>
                            <ShowTimeline />
                            <div className='oneDayTimeline'>
                                {/* <Progress percent={50} steps={30} strokeColor={['red', 'green']} /> */}
                                <ShowActiveTimeline showAddButton={true} />
                            </div>

                        </div>

                    </div>
                    {/* white-dark-bg */}
                    <div className="individualTabs white-dark-bg border-radius-8 p-15 wrapper-tabs">

                        <Tabs defaultActiveKey="1" items={items} />

                    </div>
                </div>

            }

        </div>

    )
}

export default TimeLine