
import React from 'react';
import { Space, Table, Progress, Row, Col } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import "../TimeLine.scss";
import "./AppsUsage.scss";
import "../../../sass/common.scss";

interface DataType {
    key: string;
    name: string;
    perdaytime: string[];
    timetrack: number;
    color: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        key: 'Name',
        ellipsis:true,
        render: (_, record) => (
            <div className='profileRow'>
              
                    <a className='title-color fs-14'>{record.name}</a>
               

            </div>
        ),
    },

    {

        title: 'End Time',
        dataIndex: 'endtime',
        key: 'endtime',
        ellipsis:true,
        render: (_, record) => (
            <>

                <Space direction="vertical" className='websiteUsageBar'>
                    <Row>
                        <Col xs={24} lg={4} xl={4}>
                            <a className='title-color'>{record.perdaytime}</a>
                        </Col>
                        <Col xs={24} lg={18} xl={14}>
                            <Progress percent={record.timetrack} strokeColor={record.color} />
                        </Col>
                    </Row>

                </Space>
            </>


        ),

    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'youtube.com',
        perdaytime: ['7h 22m'],
        timetrack: 70,
        color: '#2A9D8F'

    },
    {
        key: '2',
        name: 'google.com',
        perdaytime: ['5h 43m'],
        timetrack: 50,
        color: '#2A9D8F'
    },
    {
        key: '3',
        name: 'other web pages',
        perdaytime: ['6h 67m'],
        timetrack: 70,
        color: '#2A9D8F'

    },
    {
        key: '4',
        name: 'fonts.google.com',
        perdaytime: ['3h 41m'],
        timetrack: 20,
        color: '#F4A261'
    },
];

const AppUsage: React.FC = () => {

    return (
        <div>
            <div className='reportTimeline appUsageTable wrapper-table'>
                <Table columns={columns} dataSource={data} scroll={{ x: 700 }} />
            </div>

        </div>

    )
}

export default AppUsage