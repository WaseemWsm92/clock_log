import { Card, Layout, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import infocircle from '../../assets/icons/Dashboard/infocircle.svg'
import Cup from '../../assets/icons/Dashboard/cup.svg'
import { EmployeeMonthData } from '../../mock/Dashboard';
import { v4 as uuidv4 } from "uuid";
import './AdminDashboard.scss';
import '../../sass/common.scss'
export const EmployeesMonth = ({ selectedOptions }: any) => {
  return (
    <Layout className="dashboard bg-unset" >
      {selectedOptions.includes("Employees of the Month") &&
        <Card className="employee-month-details border-radius-8 card-bg-color" bordered={false} style={{ minHeight: "380px", boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)" }}>
          <div className="employees-month-header d-flex justify-between ">
            <div style={{ display: "flex" }}>
              <p className="fw-600 m-0 fs-16 title-color">Employees Of the Month </p>
              <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '353px', height: "58px", borderRadius: "4px" }} placement="right" title={<span className='fw-400 fs-14'>Top employees of the month with respect to productivity, idle time and total time tracked</span>}>
                <img src={infocircle} alt="info" className="white-img-theme-class cursor-pointer" style={{ marginLeft: '5px' }} />
              </Tooltip>
            </div>
            <Link to="/reports/top-users" className='show-more  fw-400 fs-14' style={{ color: "#A0ACBB" }}>Show more </Link>
          </div>
          <Row gutter={16} className="d-flex" style={{ height: "100%", marginTop: "25px", paddingBottom: "21px" }} justify="center" align="middle">
            {EmployeeMonthData.slice(0, 5)?.map((employee: any) => {
              return (
                <Col key={uuidv4()} md={12} sm={24} xs={24} lg={12} xl={6} className="employee-details-card">
                  <Card className="employee-card text-center border-radius-14 card-bg-color" bordered={false}>
                    <div className="cup-details justify-center d-flex">
                      <img src={Cup} height={16} width={13} alt="cup" className="cup-icon" />
                      <p className="mvp-label title-color fs-10 fw-400"> {employee.cupTitle} </p></div>
                    <img src={employee.emplyeeImage} alt="cup" height={60} width={60} className="employee-avatar" />
                    <p className="employee-name  fw-500 fs-16 m-0 black-color">{employee.name}</p>
                    <p className="employee-title fs-12 fw-400  m-0 light-grey-color-2">{employee.designation}</p>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Card>}
    </Layout>
  )
}
