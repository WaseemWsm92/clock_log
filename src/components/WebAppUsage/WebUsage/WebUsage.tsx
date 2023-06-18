import { useState } from 'react';
import { Col, Dropdown, Row, Space, Tooltip } from 'antd'
import Calendar from "../../../assets/images/reports/webApps/calendar.png"
import Charts from "../../../assets/images/reports/webApps/charts.png"
import Hide from "../../../assets/images/reports/webApps/hide.png"
import DemoColumn from './ProductiveGraph';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import PercentageGraph from './PercentageGraph';
import '../WebAppUsage.scss'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <span>Daily</span>
    ),
  },
  {
    key: '2',
    label: (
      <span>Weekly</span>

    ),
  },
  {
    key: '3',
    label: (
      <span>Monthly</span>
    ),
  },
];

const WebUsage = (props: any) => {
  const [IsShowGraphs, setIsShowGraphs] = useState(true);
  const { setIsShowUsage } = props;

  return (
    <>
      <Row gutter={[{ xs: 0, sm: 0, md: 12, lg: 30 }, { xs: 0, sm: 0, md: 12, lg: 10 }]} >
        <Col xs={24} md={8}> <span className='fs-20 fw-500 title-color'>Usage</span></Col>
        <Col xs={24} md={16} className='d-flex justify-end' >
          <Space size={10}>
            <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]} overlayClassName="graphtimeSpan"  >
              <div className='cursor-pointer d-flex align-center justify-center webUsage-icon border-radius-8'>
                <Tooltip placement="topLeft" title="Timespan" color="#264653"  >
                  <img src={Calendar} alt="calendar" />
                </Tooltip>

              </div>
            </Dropdown>
            <div
              className='cursor-pointer d-flex align-center justify-center webUsage-icon border-radius-8'
              onClick={() => setIsShowGraphs(!IsShowGraphs)}
            >
              <Tooltip placement="topLeft" title="Percantage/Total Hours" color="#264653" className='cursor-pointer' >
                <img src={Charts} alt="calendar" />
              </Tooltip>
            </div>
            <div className='cursor-pointer d-flex align-center justify-center webUsage-icon border-radius-8'>
              <Tooltip placement="topLeft" title="Show/Hide" color="#264653" className='cursor-pointer' >
                <img src={Hide} alt="calendar" className='cursor-pointer' onClick={() => setIsShowUsage(false)} />
              </Tooltip>
            </div>
          </Space>
        </Col>
      </Row>
      <Row gutter={[{ xs: 10, sm: 30, md: 12, lg: 30 }, { xs: 10, sm: 30, md: 12, lg: 10 }]} >
        <Col md={24} className='breadcrumb-color fs-12' style={{ paddingTop: "10px", paddingBottom: "10px" }}>Week 2-4  <span >
          <LeftOutlined className='fs-12' />
          <RightOutlined className='fs-12' />
        </span>
        </Col>
        <Col span={24} style={{ paddingTop: "2px" }}>
          {IsShowGraphs && <DemoColumn />}
          {!IsShowGraphs && < PercentageGraph />}
        </Col>
      </Row>


    </>
  )
}

export default WebUsage