import { Avatar, Input, Space, Table, } from 'antd';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

import Profile1 from "../../assets/images/reports/webApps/profile1.png";
import Profile2 from "../../assets/images/reports/webApps/profile2.png";
import Profile3 from "../../assets/images/reports/webApps/profile3.png";
import Profile4 from "../../assets/images/reports/webApps/profile4.png";

import searchIcon from "../../assets/icons/search-icon.svg";

import './projectAndTasks.scss'

interface DataType {
    key: string;
    name: string;
    profile: string;
    startDate: string;
    taskDeadLine: string;
    totalTime: string;
    completedPercentage: string;
}

interface Props {
    setProjectDetails: any;
    projectDetsils: any
}
const ProjectDetailsTable = (props: Props) => {
    const { setProjectDetails, projectDetsils } = props

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 300,
            render: (_: any, text: any) => (
                <Space className="cursor-pointer">
                    <span>
                        <Avatar src={text.profile} alt="profile" />
                    </span>
                    <span className="fs-14 fw-400 title-color">{text.name}</span>
                </Space>
            ),
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            width: 200,
        },
        {
            title: 'Task Deadline',
            dataIndex: 'taskDeadLine',
            key: 'taskDeadLine',
            width: 200,
        },
        {
            title: 'Total Time',
            dataIndex: 'totalTime',
            key: 'totalTime',
            width: 220,
        },
        {
            title: 'Completed Percentage',
            dataIndex: 'completedPercentage',
            key: 'completedPercentage',
            width: 220,
            render: (completedPercentage: any) => (
                <p
                    style={{
                        color: completedPercentage >= '80%' ? "#2A9D8F" : (completedPercentage >= '50' ? "#F4A261" : "#E76F51"),
                        backgroundColor: completedPercentage >= '80%' ? "rgba(42, 157, 143, 0.15)" : (completedPercentage >= '50' ? "rgba(244, 162, 97, 0.15)" : "rgba(231, 111, 81, 0.15)"),
                        borderRadius: "16px",
                        fontSize: "14px",
                        width: "100%",
                        maxWidth: "60px",
                        textAlign: "center",
                        padding: "3px 0",
                        margin: 0
                    }}
                >
                    {completedPercentage}
                </p>
            ),
        },
    ];
    const ProjectsDetailsTableData: DataType[] = [
        {
            key: '1',
            name: 'Arlene McCoy',
            profile: Profile1,
            startDate: '10/11/2022',
            taskDeadLine: '18/10/2022',
            totalTime: '8 Hours 10 Minutes',
            completedPercentage: '94%'
        },
        {
            key: '2',
            name: 'Arlene McCoy',
            profile: Profile2,
            startDate: '10/11/2022',
            taskDeadLine: '18/10/2022',
            totalTime: '8 Hours 10 Minutes',
            completedPercentage: '94%'
        },
        {
            key: '3',
            name: 'Arlene McCoy',
            profile: Profile3,
            startDate: '10/11/2022',
            taskDeadLine: '18/10/2022',
            totalTime: '8 Hours 10 Minutes',
            completedPercentage: '66%'
        },
        {
            key: '4',
            name: 'Arlene McCoy',
            profile: Profile4,
            startDate: '10/11/2022',
            taskDeadLine: '18/10/2022',
            totalTime: '8 Hours 10 Minutes',
            completedPercentage: '45%'
        },

    ];
    return (
        <>
            <div className='projectDetailsHeader'>
                <div>
                    <ArrowLeftOutlined className='grey-color' style={{ marginRight: '20px' }} onClick={() => setProjectDetails({ isToggled: false, name: '' })} /><span className='fs-20 fw-700 grey-color' style={{ color: "var(--grey-color)" }}>{projectDetsils.name}</span>
                </div>
                <div className='search_input'>
                    <span style={{ color: '#A0ACBB' }}>{dayjs().format('MMMM DD, YYYY')}</span>
                    <Input style={{ height: "40px" }} type='text' prefix={<img src={searchIcon} alt="search" />} onChange={(e) => console.log(e.target.value)} className="tasksSearch custom-input-field" placeholder="Search by user" />
                </div>
            </div>
            <div className="projectDetailsTable">
                <Table columns={columns} className="wrapper-table" dataSource={ProjectsDetailsTableData} scroll={{ x: 'max-content' }} pagination={{ pageSize: 10 }} />
            </div>
        </>
    )
}
export default ProjectDetailsTable

