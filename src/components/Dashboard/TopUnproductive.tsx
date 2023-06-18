import { Card, Col, Layout, Row, Select } from 'antd';
import { Link } from 'react-router-dom';
import { OverAllSCore } from '../../mock/Dashboard';
import DemoProgress from './OverScoreGrapgh';
import Unproductive from '../../assets/icons/Dashboard/unproductive.svg'
import { v4 as uuidv4 } from "uuid";
import Paragraph from 'antd/es/typography/Paragraph';
import DemoRose from './MostUsedServicesGrapgh';
import './AdminDashboard.scss';
import '../../sass/common.scss'

export const TopUnproductive = ({ selectedOptions }: any) => {

  return (
    <Layout className="dashboard bg-unset">
      {selectedOptions.includes("Unproductive Services") && <Card className="overallscore border-radius-8 card-bg-color" bordered={false} style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>
        <div className='attendance-summary d-flex justify-between' style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex" }}>
            <p className="fw-600 m-0 fs-16 title-color">Top Unproductive Services</p>
          </div>
          <Link to="/reports/web-app-usage" className='showmore fs-14 fw-400' > Show more</Link>
        </div>

        {OverAllSCore.slice(0, 7).map((score) => {
          return (
            <Row gutter={16} key={uuidv4()} style={{ paddingBottom: "21px" }}>
              <Col xl={8} lg={12} md={12} xs={12} sm={12}>
                <div className="d-flex align-center" style={{ marginTop: "3px" }}>
                  <img src={Unproductive} alt="attendance" className="icon white-img-theme-class" width={24} height={24} />
                  <span className=" unproductive-sites fs-14 fw-500 lightest-dark-grey-color" style={{ paddingLeft: "6px" }}>{score.unProductive}</span>
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} xs={12} sm={12} style={{ textAlign: "center", marginTop: "2px" }} >
                <span className=" fs-14 fw-500 lightest-dark-grey-color">{score.manualTime}</span>
              </Col>
              <Col xl={8} lg={24} md={24} xs={24} sm={24} >
                <DemoProgress score={score.score} style={{ marginTop: "11px" }} />
              </Col>
            </Row>
          );
        })}


      </Card>}
    </Layout>

  );
};
export const RecentUnratedServices = ({ selectedOptions }: any) => {
  return (
    <Layout className="dashboard bg-unset">
      {selectedOptions.includes("Unrated Services") &&
        <Card className="overallscore border-radius-8 card-bg-color" bordered={false} style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>
          <div className='attendance-summary d-flex justify-between ' style={{ marginBottom: "20px" }}>

            <p className="fw-600 m-0 fs-16 title-color">Recent Unrated Services</p>

            <Link to="" className='showmore fs-14 fw-400' > Show more</Link>
          </div>

          {OverAllSCore.slice(0, 7).map((score) => {
            return (
              <Row gutter={16} key={uuidv4()} style={{ paddingBottom: "30px" }}>
                <Col xl={8} lg={24} md={24} xs={24} sm={24} style={{ marginTop: "3px" }}>
                  <div className="d-flex align-center justify-center">
                    <img src={Unproductive} alt="attendance" className="icon white-img-theme-class" width={24} height={24} />
                    <span className=" unproductive-sites fs-14 fw-500 lightest-dark-grey-color" style={{ paddingLeft: "6px" }}>{score.unProductive}</span>
                  </div>
                </Col>
                {/* <Col lg={6} md={6} xs={12} sm={12} style={{ padding: "0px" }}>
                
                </Col> */}
                <Col xl={8} lg={12} md={12} xs={24} sm={24} style={{ marginTop: "3px" }}>

                  <Select
                    size="small"
                    placeholder="Select Status"
                    className="select-input-theme"
                    popupClassName="select-theme"
                    dropdownMatchSelectWidth={true}
                    dropdownStyle={{ maxHeight: 200 }}
                    virtual={true}
                    style={{ width: '100%' }}
                  >

                  </Select>


                </Col>
                <Col xl={8} lg={12} md={12} xs={24} sm={24} style={{ marginTop: "3px" }}>

                  <Select
                    size="small"
                    placeholder="Select Category"
                    className="select-input-theme"
                    popupClassName="select-theme"
                    dropdownMatchSelectWidth={true}
                    dropdownStyle={{ maxHeight: 200 }}
                    virtual={true}
                    style={{ width: '100%' }}
                  >

                  </Select>


                </Col>
              </Row>
            );
          })}


        </Card>}
    </Layout>

  );
}
export const EmploeeMostUsedServices = ({ selectedOptions }: any) => {
  return (
    <Layout className='dashboard bg-unset'  >
      {selectedOptions.includes("Employee Most Used Services")
        && <Card className="most-used-services-card-employee  border-radius-8 card card-bg-color" bordered={false} style={{ minHeight: "428px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)", paddingBottom: "6px" }}>
          <div className="attendance-summary">
            <Row>
              <Col xs={24} sm={12}>
                <Paragraph className="attendance-summary-text title-color fw-600 fs-16">Most Used Services</Paragraph>

              </Col>
              <Col xs={24} sm={12} style={{ textAlign: "end" }}>
                <Link to="" className='showmore'>Show more</Link></Col>
            </Row>
          </div>

          <DemoRose />
        </Card>}
    </Layout>
  );
};