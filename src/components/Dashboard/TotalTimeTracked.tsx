import { useState } from 'react';
import { Card, Layout, Tooltip } from 'antd';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import ItemTimeGraph from './IdleTimeGraph';
import Countdown from 'react-countdown';
import './AdminDashboard.scss';
import '../../sass/common.scss'

export const TotalTimeHours = ({ selectedOptions }: any) => {
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
    <Layout className='dashboard bg-unset'>
      {selectedOptions.includes('Idle Time') && <Card className="total-time-hours-card border-radius-8 card-bg-color" bordered={false} style={{ minHeight: "180px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}  >
        <div style={{ display: "flex" }}>
          <p className="fw-600 m-0 attendance-summary-text title-color fs-16 " style={{ marginTop: "0px" }}>Idle Time  </p>
          <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '306px', height: "58px", borderRadius: "4px" }} placement="right" title={<span className='fw-400 fs-14'>Total Idle time (Time in which there
            was no activity recorded on the system)</span>}>
            <img src={infocircle} alt="info"  className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px', zIndex: 1 }} />
          </Tooltip>
        </div>
        <ItemTimeGraph />
        <h6 className='fw-500 fs-12 idle-minutes grey-color text-center m-0' style={{ marginTop: "15px" }}>Idle Minutes</h6>
        <p className="productive text-center fs-24 fw-500 m-0"><Countdown
          date={data.date + 10000}
          renderer={renderer}
          onStart={(delta) => {
            //Save the end date

          }}
        /> </p>
      </Card>}
    </Layout>
  );
};