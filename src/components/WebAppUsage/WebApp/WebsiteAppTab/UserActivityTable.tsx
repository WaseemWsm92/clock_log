
import { Row, Col, Space, Progress, Avatar,Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { RightOutlined, ArrowLeftOutlined, } from '@ant-design/icons';
import {  UserActivityTableData } from '../../../../mock/web&AppUsageData';
import "../UserTab/UserTab.scss";

interface DataType {
    key: string;
    name: string;
    time: string;
    percentage: number;
    profile: string
}

const UserActivityTable = (props: any) => {

    const { setIsShowServices, setShowUserReport } = props;
    const columns: ColumnsType<DataType> = [
        {
            title: <span className='cursor-pointer' style={{ paddingLeft: "4px" }} onClick={() => setIsShowServices(true)}> <ArrowLeftOutlined style={{ marginRight: "18px", fontSize: 16 }} />Names</span>,
            dataIndex: 'Name',
            key: 'name',
            ellipsis: true,
            render: (_: any, text: any) => (
                <Space className='cursor-pointer' onClick={() => setShowUserReport(false)} >
                    <RightOutlined style={{ fontSize: 12 }} />
                    <span> <Avatar src={text.profile} alt="profile" /></span>
                    <span className='fs-14 fw-400 title-color'>
                        {text.name}
                    </span>
                </Space>
            ),
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, text) => (
                <Row >
                    <Col xs={24} lg={6} xl={6} >
                        <span className='fs-14 fw-400 title-color'>{text?.time}</span>
                    </Col>
                    <Col xs={24} lg={18} xl={14} >
                        <div>
                            <Progress
                                percent={text?.percentage}
                                strokeColor={'#2A9D8F'}
                                strokeWidth={6}
                                width={50}
                                showInfo={false}
                            />
                        </div>
                    </Col>
                </Row>
            ),
        },
    ];
    return (
        <div>  <Table className='wrapper-table' columns={columns} dataSource={UserActivityTableData} scroll={{ x: 700 }} /></div>
    )
}
export default UserActivityTable