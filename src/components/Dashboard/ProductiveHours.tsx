import { useState } from 'react';
import { Card, Col, Layout, Row } from 'antd';
import Countdown from "react-countdown";
import ProgressBar from './PercentGraph';
import './AdminDashboard.scss';
import '../../sass/common.scss'


export const ProductiveHours = ({selectedOptions}:any) => {
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
         {hours<10? `0${hours}`:hours}:{minutes<10? `0${minutes}`:minutes}:{ seconds<10? `0${seconds}`:seconds}
        </>
      );
    }
  };
  return (
    <Layout className='dashboard bg-unset'>
     {selectedOptions.includes('Productive Hours') && <Card className="productivehours border-radius-8 card-bg-color" bordered={false} style={{ minHeight: "180px" }}>
        <div className="productive-hours-card title-color fw-600 fs-16">Productive Hours </div>
        <ProgressBar />

        <Row gutter={24} className="productive-hours d-flex justify-between">
          <Col xs={24} sm={12} md={12} lg={12} className="attendance-border">
            <div className="attendance-summary text-center">
              <h6 className="productive-title grey-color m-0 fs-12 fw-500 " style={{ marginTop: "15px" }}>Productive</h6>


              <p className="productive-value m-0 fs-24 fw-500"> 
              <Countdown
                date={data.date + 10000}
                renderer={renderer}
                onStart={(delta) => {
                  //Save the end date

                }}
              />
              </p>
            </div>

          </Col>
          {/* <Col lg={2} md={0} xs={0} sm={0} >
            <div className="attendance-summary attendance-border" style={{ height: "50px" ,marginTop: "20px"  }}>

            </div>
          </Col> */}
          <Col xs={24} md={12} sm={12} lg={12} >
            <div className="attendance-summary">
              <h6 className="unproductive-title fs-12 m-0 grey-color fw-500" style={{ marginTop: "15px" }}>Un Productive </h6>
              <p className="unproductive-value m-0 fs-24 fw-500"><Countdown
                date={data.date + 10000}
                renderer={renderer}
                onStart={(delta) => {
                  //Save the end date

                }}
              /> </p>
            </div>
          </Col>
        </Row>


      </Card>}
    </Layout>
  );
};
