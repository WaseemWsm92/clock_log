import { Card, Row, Col, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { TopProjectsData } from '../../mock/Dashboard';
import DemoRadialBar from './RadialBar';
import { v4 as uuidv4 } from "uuid";
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import './AdminDashboard.scss';
import '../../sass/common.scss'

export const TopProjects = ({ selectedOptions }: any) => {
  return (
    <Layout className='dashboard bg-unset' >

      {selectedOptions.includes("Top Projects") && <Card className="topprojects border-radius-8 card-bg-color" bordered={false} style={{ minHeight: "380px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }} >
        <div className='attendance-summary d-flex justify-between'>
          <div style={{ display: "flex" }}>
            <p className="fw-600 m-0 title-color fs-16">Top Projects </p>
            <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '353px', height: "58px", borderRadius: "4px" }} placement="right" title={<span className='fw-400 fs-14'>A list of projects that have been tracked
              most on the clock log and their respective time</span>}>
              <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px' }} />
            </Tooltip>
          </div>
          <Link to="" className='show-more  fs-14 fw-400' style={{ color: "#A0ACBB" }} > Show more</Link>
        </div>

        <Row style={{ marginTop: "15px" }}>
          <Col lg={12} md={12} sm={24} xs={24}>
            {TopProjectsData.map((data: any) => {
              return (
                <div key={uuidv4()} className='top-projetrs-issues-card'>
                  <div className='work-issues'>

                    <div className='text-center'>
                      <p className={` projects-name  fw-700 fs-20 ${data.color == "green" ? "attendance-image green" : data.color == "black" ? "attendance-image black" : data.color == "yellow" ? "attendance-image yellow" : data.color == "secondary" ? "attendance-image secondary" : "attendance-image orange"} `} style={{ paddingTop: "4px", display: "inline-block", marginLeft: "0px" }}> {data.firsNameLetter}</p>
                    </div>

                    <p className='person-name fs-16  fw-400 black-color'>  {data.frstName} {data.name}  </p>
                  </div>
                  <p className='counter fw-500 fs-16 grey-color'>{data.counter}</p>
                </div>
              )
            })}
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <DemoRadialBar />
          </Col>
        </Row>



      </Card>}
    </Layout>
  )
}
