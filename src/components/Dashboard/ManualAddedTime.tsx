import { Card, Col, Layout, Row, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import { OverAllSCore } from '../../mock/Dashboard';
import DemoProgress from './OverScoreGrapgh';
import { v4 as uuidv4 } from "uuid";
import Users from '../../assets/icons/Dashboard/master.svg'
import './AdminDashboard.scss';
import '../../sass/common.scss'

export const ManualTime = ({ selectedOptions }: any) => {
  return (
    <Layout className="dashboard bg-unset">
      {selectedOptions.includes("Manual Added Time") && <Card className="overallscoreManual border-radius-8 card-bg-color" bordered={false} style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>
        <div className="attendance-summary d-flex justify-between">
          <div style={{ display: "flex" }}>
            <p className="title fw-600 title-color fs-16">Manualy Added Time</p>
            <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '289px', height: "58px", borderRadius: "4px" }} placement='right' title={<span className="fw-400 fs-14">The total time manually added to the timeline by an employee</span>}>
              <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px', marginBottom: "15px" }} />
            </Tooltip>
          </div>
          <div className="filter-score">
            <Link to="" className="lowest" style={{ color: "#A0ACBB" }}>Show more</Link>
          </div>
        </div>

        {OverAllSCore.slice(0, 5)?.map((score) => {
          return (
            <Row gutter={16} key={uuidv4()} style={{ paddingBottom: "12.8px", marginTop: "3px" }}>
              <Col xl={7} lg={12} md={24} xs={24} sm={24} style={{ paddingBottom: "5.6px" }}>

                <div className='d-flex align-center manual-avatar'>
                  <img src={Users} alt="cup" className="icon" width={35} height={35} />
                  <p className="name title-color fs-14 fw-500 " style={{ marginTop: "0px", marginLeft: "14px", marginBottom: "6px" }} >{score.name}</p>
                </div>


              </Col>
              <Col xl={6} lg={12} md={24} xs={24} sm={24} style={{ padding: "0px", marginTop: "8px" }}>
                <p className='fs-14 grey-color text-center' style={{ marginTop: "0px", marginBottom: "0px" }}>{score.manualTime}</p>
              </Col>
              <Col xl={10} lg={24} md={24} xs={24} sm={24}>
                <DemoProgress score={score.manual} />
              </Col>
            </Row>
          );
        })}

      </Card>}
    </Layout>

  );
};