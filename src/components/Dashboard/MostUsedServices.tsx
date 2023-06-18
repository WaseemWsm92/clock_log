
import { Card, Col, Layout, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { Link } from 'react-router-dom';
import DemoRose from './MostUsedServicesGrapgh';
import './AdminDashboard.scss';

export const MostUsedServices = ({selectedOptions}:any) => {
  return (
    <Layout className='dashboard bg-unset' >
    {selectedOptions.includes("Most Used Services") && <Card className="most-used-services-card  border-radius-8 card card-bg-color" bordered={false}  style={{minHeight:"490px",boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)"}}>
      <div className="attendance-summary">
        <Row>
          <Col xs={24} sm={12}>
          <Paragraph className="attendance-summary-text title-color fw-600 fs-16">Most Used Services</Paragraph>
          </Col>
          <Col xs={24} sm={12} style={{textAlign:"end"}}>
          <Link to="" className='show-more-link ' style={{color:"#A0ACBB"}}>Show more</Link></Col>
        </Row>
      </div>
      <DemoRose />
    </Card>}
    </Layout>
  );
};