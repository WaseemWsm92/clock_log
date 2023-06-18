
import { Card, Row, Col, Divider, Layout, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import MultipleAvatars from './MultipleAvatars';
import { v4 as uuidv4 } from "uuid";
import infocircle from '../../assets/icons/Dashboard/infocircle.svg';
import { DistractionAlertData } from '../../mock/Dashboard';
import './AdminDashboard.scss';
import '../../sass/common.scss'


const DistractionAlert = ({ selectedOptions }: any) => {
  return (
    <Layout className='dashboard bg-unset' >
      {selectedOptions.includes("Distraction  Alert") && <Card className="distraction-alert border-radius-8 card card-bg-color" bordered={false} style={{ minHeight: "490px" }}>
        <div className="attendance-summary" style={{paddingBottom:"10px"}}>
          <Row>

            <Col xs={24} sm={12}>
              <div className='d-flex'><p className="attendance-summary-text title-color fs-16 fw-600 " style={{ marginTop: "0px" }}>Distraction Alerts</p>
                <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '311px',height: "37px",borderRadius:"4px" }} placement="right" title={<span className='fw-400 fs-14 '>A list of all the triggered distraction alerts</span>}>
                  <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px', marginBottom: "15px" }} />
                </Tooltip></div>
            </Col>
            <Col xs={24} sm={12} style={{ textAlign: "end" }}>
              <Link to="/settings/distraction-Alerts" className='show-more' style={{color:"#A0ACBB"}}>Show more</Link></Col>
          </Row>
        </div>

        <>
          {
            DistractionAlertData.slice(0, 5)?.map((distractionData: any, index: number) => {
              return (
                <Row key={uuidv4()}>
                  <Col lg={12} md={12} sm={12} xs={12} style={{marginTop:"2px"}}>
                    <p className="distraction-title grey-color fw-700" style={{marginTop:"7px"}}>{distractionData.title}</p>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12} className='multiples-avatar text-end' style={{marginTop:"10px"}}>
                    <MultipleAvatars />
                  </Col>
                  <Col xs={24}>
                    <p className="distraction-description grey-color fw-400 m-0" >{distractionData.description}</p>
                  </Col>
                  {index !== DistractionAlertData.length - 1 && <Divider className='line-color' style={{marginBottom:"16px"}} />}
                </Row>
              )
            })
          }
        </>


      </Card>}
    </Layout>
  );
};
export default DistractionAlert


