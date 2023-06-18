import { Card, Button, Col, Row, Layout, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import { TrackingTimeData } from '../../mock/Dashboard';
import { v4 as uuidv4 } from "uuid";
import './AdminDashboard.scss';
import '../../sass/common.scss'

export const TrackingTime = ({ selectedOptions }: any) => {

  return (
    <Layout className='dashboard bg-unset'>
      {selectedOptions.includes("Haven't Started Tracking Time") &&
        <Card className="tracking-time-card border-radius-8 card-bg-color" bordered={false} style={{ minHeight: "200px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)", paddingBottom: "6px" }}>
          <div className="attendance-summary d-flex justify-between" >
            <div style={{ display: "flex" }}>
              <p className="fw-600 m-0 fs-16 title-color started-tracking-time">Haven't Started Tracking Time</p>
              <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '316px', height: "79px", borderRadius: "4px" }} placement="right" title={<span className='fw-400 fs-14' >A list of user who either haven’t accepted
                the clocklog invitaion or haven’t tracked
                time in recent days</span>}>
                <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px' }} />
              </Tooltip>
            </div>
            <Link to="/reports/hours-tracked" className='showmore' style={{ color: "#A0ACBB" }}>Manage Users</Link>
          </div>


          {TrackingTimeData.slice(0, 5)?.map((data: any) => {
            return (
              <Row key={uuidv4()} gutter={16} style={{ paddingBottom: "5px" }}>
                <Col xl={4} lg={24} md={24} sm={24} xs={24} style={{ paddingRight: "0px", marginTop: "18px" }} className="avatar-time-tracking">
                  <div className='d-flex align-center tracking-avatar'>
                    <img alt="attendance" className="icon" src={data.img} width={35} height={35} />

                    <p className="name fs-14 fw-500 title-color m-0" style={{ marginLeft: "14px" }}>{data.name}</p>
                  </div>
                </Col>
                {/* <Col lg={2} md={24} sm={24} xs={24} style={{ paddingLeft: "0px", marginTop: "22px" }}>


                </Col> */}
                <Col xl={10} lg={24} md={24} sm={24} xs={24} style={{ paddingLeft: "0px", marginTop: "10px" }}>
                  <p className='fw-500 fs-14 title-color tracking-time-issues-text' style={{ textIndent: '6em', marginTop: "5px", marginBottom: "1px" }}>
                    {data.issues}
                  </p>
                  <p className='m-0 fw-300 fs-10 light-dark-grey-color tracking-time-lastSeen-text' style={{ textIndent: '8.5em' }}>{data.lastSeen}</p>
                </Col>
                <Col xl={10} lg={24} md={24} sm={24} xs={24} className="tracking-time-buttons text-center " style={{ paddingLeft: "0px", marginTop: "15px" }}>

                  <Button className={data.buttonText === "Resend" ? "resend-button" : ""} danger size="small" ><span style={{ display: 'flex', alignItems: "center" }}> <img src={data.imageHide} style={{ color: "red" }} width={14} height={14} className="resendButton text-center" alt="" /><span >{data.buttonText}</span></span></Button>
                </Col>
              </Row>
            )
          })}

        </Card>}
    </Layout>
  );
};
