
import { Card, Col, Image, Layout, Row, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import DemoColumn from './OrganizationProductivityGraph';
import './AdminDashboard.scss';

export const OrganizationProductivity = ({ selectedOptions }: any) => {
  return (
    <Layout className='dashboard bg-unset'>
      {selectedOptions.includes("Organization Productivity (Last 7 Days)") && <Card className="organization  border-radis-8 card-bg-color" bordered={false} style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>
        <div className="AttendanceSummary d-flex justify-between">
          <div style={{ display: "flex" }}>
            <p className="fw-600 title-color fs-16">Organization Productivity (Last 7 days)</p>
            <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '283px', height: "58px", borderRadius: "4px" }} placement="right" title={<span className='fw-400 fs-14'>Historical data of productivity for the
              last one week</span>}>
              <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px', marginBottom: "15px" }} />
            </Tooltip>
          </div>
          <div className="filterScore">
            <Link to="" className="showmore" style={{ color: "#A0ACBB" }}>Show more</Link>
          </div>
        </div>

        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <DemoColumn />
          </Col>
        </Row>
      </Card>}</Layout>
  );
}