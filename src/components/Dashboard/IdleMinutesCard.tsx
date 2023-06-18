import { useState } from 'react';
import { Card, Col, Layout, Row, Tooltip } from 'antd';
import Cup from '../../assets/icons/Dashboard/cup.svg';
import { OverAllSCore } from '../../mock/Dashboard';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import DemoProgress from './OverScoreGrapgh';
import { v4 as uuidv4 } from "uuid";
import './AdminDashboard.scss';
import '../../sass/common.scss'

export const IdleMinutes = ({selectedOptions}:any) => {
    const [selectedProductivityLevel ,setSelectedProductivityLevel]=useState(1)
    const [highestLinkColor, setHighestLinkColor] = useState("#E76F51");
    const [lowestLinkColor, setLowestLinkColor] = useState("");
  return (
    <Layout className="dashboard bg-unset">
      {selectedOptions.includes("Idle Minutes") &&  
       <Card className="overallscore idleMinutesCard border-radius-8 card-bg-color" bordered={false} style={{boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)"}}>
      <div className="attendance-summary d-flex justify-between ">
      <div  style={{display:"flex"}}>
       <p className="title fw-600 title-color fs-16">Idle Minutes</p>
       <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '306px',height: "58px" ,borderRadius:"4px"}} placement='right' title={<span className="fw-400 fs-14">Total Idle time (Time in which there
was no activity recorded on the system)
</span>}>
        <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px',marginBottom:"15px" }} />
      </Tooltip>
       </div>
            <div className="filter-score">
          <Row>
            <Col sm={12} style={{borderRight: "1px solid #a0acbb"}}>
            <span className="showmore fw-500 fs-16  lowest cursor-pointer " onClick={()=>{setSelectedProductivityLevel(1);setHighestLinkColor("#E76F51");setLowestLinkColor("");}} style={{color: highestLinkColor}}>Highest</span>
        
            </Col>
            <Col sm={12} className="lowestfiltertext">
            <span className="lowest fs-16 cursor-pointer" onClick={()=>{setSelectedProductivityLevel(2); setHighestLinkColor("");    setLowestLinkColor("#E76F51");}} style={{color: lowestLinkColor,margin:"10px"}}>Lowest</span>
            </Col>
          </Row>

        </div>
      </div>
        {  (selectedProductivityLevel===1) &&OverAllSCore.slice(0, 5)?.map((score) => {
          return (
            <Row gutter={16} key={uuidv4()}>
              <Col lg={1}><div className="score m-auto" style={{display:"none"}}>
                      <img src={Cup} alt="attendance" className="icon d-block m-auto" width={22} height={23} />
                    </div>
              </Col>
              <Col lg={7} md={6} xs={24} sm={24} style={{padding:"0px" ,paddingTop:"2px"}}>
                  <div className="name-designation">
                    <p className="name m-0  fw-500 fs-14 black-color" >{score.name}</p>
                    <p className="designation fs-10 fw-400 light-grey-color-2">{score.designation}</p>
                  </div>
              </Col>
              <Col lg={4} md={6} xs={24} sm={24} className="score-value text-center" >
                <span className='fs-14 grey-color'>{score.score}%</span>
              </Col>
              <Col lg={10} md={10} xs={24} sm={24} style={{marginTop:"12px"}}>
      <DemoProgress score={score.score}  />
</Col>
</Row>
          );
        })}
        {  (selectedProductivityLevel===2) &&OverAllSCore.slice(0, 5)?.map((score) => {
          return (
            <Row gutter={16} key={uuidv4()}>
                  <Col lg={2} md={3} xs={24} sm={24}>
                    <div className="score m-auto">
                      <img src={Cup} alt="attendance" className="icon d-block m-auto" width={22} height={23} />
                    </div>
                  </Col>
                  <Col lg={5} md={5} xs={24} sm={24} style={{padding:"0px"}}>
                  <div className="name-designation">
                        <p className="name m-0 title-color fw-500 fs-14" style={{color:" #000000"}}>{score.name}</p>
                        <p className="designation $border-color fs-10 fw-400" >{score.designation}</p>
                      </div></Col>
                  <Col lg={6} md={6} xs={24} sm={24} className="score-value dark-grey-color text-center">
                    <span className='fs-14 dark-grey-color'>{score.idle}%</span>
                  </Col>
                  <Col lg={10} md={10} xs={24} sm={24}  style={{marginTop:"12px"}}>
          <DemoProgress score={score.idle}  />
    </Col>
    </Row>
          );
        })}
      
    </Card>}
    </Layout>
    
  );
};