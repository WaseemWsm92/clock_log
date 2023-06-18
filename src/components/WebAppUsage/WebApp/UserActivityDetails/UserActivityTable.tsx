import { Row, Col, Space, Progress } from 'antd';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { RightOutlined, } from '@ant-design/icons';
import "../UserTab/UserTab.scss";
import "../UserTab/UserTab.scss"

interface DataType {
  key: string;
  name: string;
  time: string;
  percentage: number;

}

const UserActivityTable = (props: any) => {
  const { setIsShowAppUsage } = props;
  const columns: ColumnsType<DataType> = [
    {
      title: <span style={{ paddingLeft: "30px" }}>Name</span>,
      dataIndex: 'name',
      key: 'name',
      responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      ellipsis: true,


      render: (_, text) =>

        <Space onClick={() => setIsShowAppUsage(false)} className="cursor-pointer" >
          <RightOutlined style={{ fontSize: 12, color: "#4E4B66" }} />
          <span className='fs-14 fw-400 title-color'>
            {text.name}
          </span>
        </Space>,

    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      render: (_, text) =>
      <div className='d-flex'>
          <span className='fs-14 fw-400 title-color' style={{ minWidth: "70px" }}>{text?.time}</span>
          <Progress percent={text?.percentage} strokeColor={text?.percentage > 30 ? "#2A9D8F" : "#F4A261"} strokeWidth={6} width={50} showInfo={false} />
      </div>
    }];

  const UserActivityDetails = [
    {
      key: '1',
      name: "Google",
      time: '30h 10m',
      percentage: 40,

    },
    {
      key: '2',
      name: "Youtube",
      time: '30h 10m',
      percentage: 20,

    }
  ]
  return (
    <Row className="user-webapp-wrapper border-radius-8" >
      <Col span={24}>
       
        <Table className="wrapper-table" columns={columns} dataSource={UserActivityDetails} />
      </Col>
    </Row>
  )
}

export default UserActivityTable