import { useState } from 'react';
import { Card, Col, Layout, Row, Tooltip } from 'antd';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg';
import { Watermark } from 'antd';
import DashboardWatermark from '../../assets/icons/Dashboard/DashboardWatermark.svg';
import Countdown from 'react-countdown';
import './AdminDashboard.scss';
import '../../sass/common.scss';

const IdleTime = ({ selectedOptions }: any) => {
  const [data, setData] = useState(
    { date: 2228282828222, delay: 60000 } //10 seconds
  );
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return "00:00:00";
    } else {
      // Render a countdown
      return (
        <>
          {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </>
      );
    }
  };
  return (
    <Watermark >  <Layout className='dashboard bg-unset' style={{ position: 'relative' }}>
      {selectedOptions.includes('Total Time Tracked') && <Card className="idle-time-card border-radius-8 card-bg-color" bordered={false} style={{ minHeight: "180px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>

        <div style={{
          position: 'absolute', top: '-2px', width: "120px", height: "120px", right: '0', background: `url(${DashboardWatermark})`, backgroundSize: 'contain', opacity: 0.4,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <div style={{ display: "flex" }}>
              <p className="fw-600 m-0 attendance-summary-text title-color fs-16 ">Total Time Tracked   </p>
              <Tooltip overlayClassName='theme-dark-tooltip' overlayStyle={{ width: '284px', height: "58px", borderRadius: "4px" }} placement='right' title={<span className="fw-400 fs-14">Total time logged on the clocklog system</span>}>
                <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px' }} />
              </Tooltip>
            </div>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            <p className='timetracked text-center fw-600'><Countdown
              date={data.date + 10000}
              renderer={renderer}
              onStart={(delta) => {
                //Save the end date

              }}
            /> </p>
          </Col>
        </Row>

      </Card>}
    </Layout>  </Watermark>

  );
};

export default IdleTime;
