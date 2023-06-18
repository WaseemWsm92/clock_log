
import { Card, Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';
import HoursTrackedGraph from './HoursTrackedGraph';
import './AdminDashboard.scss';

export const HoursTracking = ({ selectedOptions }: any) => {
  return (
    <Layout className='dashboard bg-unset'>
      {selectedOptions.includes("Hours Tracked") && <Card bordered={false} className="organization border-radis-8 card-bg-color" style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>
        <div className="AttendanceSummary d-flex justify-between">
          <div style={{ display: "flex" }}>
            <p className="fw-600 title-color fs-16">Hours Tracked</p>
            {/* <Tooltip  overlayClassName="theme-dark-tooltip"  overlayStyle={{ width: '283px',height: "58px" }} placement="right" title={<span>Historical data of productivity for the
last one week</span>}>
        <img src={infocircle} alt="" style={{ marginLeft: '5px' ,marginBottom:"15px"}} />
      </Tooltip> */}
          </div>
          <div className="filterScore">
            <Link to="/reports/hours-tracked" className="showmore">Show more</Link>
          </div>
        </div>

        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <HoursTrackedGraph />
          </Col>
        </Row>
      </Card>}</Layout>
  );
}