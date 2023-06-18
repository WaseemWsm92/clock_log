import { Row, Col, Space, Progress } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import "../UserTab/UserTab.scss";
import { RightOutlined, } from '@ant-design/icons';
import { UserActivityDetails } from '../../../../mock/web&AppUsageData';
// import "../UserTab/UserTab.scss"

interface DataType {
  key: string;
  name: string;
  time: string;
  percentage: number;
}

const DailyActivityTable = (props: any) => {
  const { setIsShowServices } = props
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      width: 300,
      render: (_, text) => (
        <Space className='cursor-pointer' onClick={() => setIsShowServices(false)}>
          <RightOutlined style={{ fontSize: 12 }} />
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
      render: (_, text) => (
        <div className="d-flex" style={{ width: "395px" }}>
          <span className='fs-14 fw-400 title-color' style={{ minWidth: "80px" }}>{text?.time}</span>
          <Progress
            percent={text?.percentage}
            strokeColor={text?.percentage > 30 ? '#2A9D8F' : '#F4A261'}
            strokeWidth={6}
            width={50}
            showInfo={false}
          />
        </div>
      ),
    },
  ];

  return (
    <div className='user-webapp-wrapper border-radius-8'>
      <Table className='wrapper-table' columns={columns} dataSource={UserActivityDetails} scroll={{ x: `max-content` }} />
    </div>
  );
};

export default DailyActivityTable;