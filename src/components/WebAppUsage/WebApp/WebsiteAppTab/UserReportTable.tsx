
import { Row, Col, Space, Progress, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {  ArrowLeftOutlined, } from '@ant-design/icons';
import { UserReportData } from '../../../../mock/web&AppUsageData';
import "../UserTab/UserTab.scss";

interface DataType {
    key: string;
    name: string;
    time: string;
    percentage: number;
}

const UserReportTable = (props: any) => {
    const { setShowUserReport } = props;

    const columns: ColumnsType<DataType> = [
        {
            title: <span className='cursor-pointer' style={{ paddingLeft: "4px" }} onClick={() => setShowUserReport(true)}>
                <ArrowLeftOutlined style={{ marginRight: "18px", fontSize: 16 }} />Bessie Copper</span>,
            dataIndex: 'Name',
            key: 'name',
            ellipsis: true,
            render: (_: any, text: any) => (
                <Space >
                    <span className='fs-14 fw-400 title-color'>
                        {text.name}
                    </span>
                </Space>
            ),
        },
        {
            title: <Row >
                <Col xs={24} lg={6} xl={6} >
                    <span className='fs-14 fw-400 title-color'> 30h 20m</span>
                </Col>
                <Col xs={24} lg={18} xl={14} >
                    <div>
                        <Progress
                            percent={70}
                            strokeColor={'#2A9D8F'}
                            strokeWidth={6}
                            width={50}
                            showInfo={false}
                        />
                    </div>
                </Col>
            </Row>
            ,
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
        <div>

            <Table className='wrapper-table' columns={columns} dataSource={UserReportData} scroll={{ x: "max-content"}} />
        </div>
    )
}
export default UserReportTable