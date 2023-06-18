import { Link } from "react-router-dom";
import { Col, Layout, Row, Card, Tooltip } from "antd";
import underutilized from "../../assets/icons/Dashboard/underutilized.svg";
import overutilized from "../../assets/icons/Dashboard/overutilized.svg";
import { WorkLoad } from "../../mock/Dashboard";
import { v4 as uuidv4 } from "uuid";
import infocircle from "../../assets/icons/Dashboard/infocircle.svg";
import hoverimage from "../../assets/icons/Dashboard/overutilizedHov.svg";
import CommonCard from "../card";
import "./AdminDashboard.scss";

export const WorkBalanceIssues = ({ selectedOptions }: any) => {
  return (
    <Layout className="dashboard bg-unset">
      {selectedOptions.includes("Workload Balance Issues") && <Card
        className="work-balance-issues-container border-radius-8 card card-bg-color"
        bordered={false}
        style={{
          minHeight: "490px",
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="attendance-summary">
          <Row>
            <Col xs={24} sm={12}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  className="fw-600 attendance-summary-text title-color fs-16 "
                  style={{ marginTop: "0px" }}
                >
                  Workload Balance Issues{" "}
                </p>
                <Tooltip overlayClassName="theme-dark-tooltip" overlayStyle={{ width: '304px', height: "58px", borderRadius: "4px" }} placement="right" title={<span className='fw-400 fs-14'>Top work load balance related issues in
                  the organization</span>}>
                  <img
                    src={infocircle}
                    alt="info"
                    className="white-img-theme-class cursor-pointer"
                    style={{ marginLeft: "5px", marginBottom: "15px" }}
                  />
                </Tooltip>
              </div>
            </Col>
            <Col xs={24} sm={12} style={{ textAlign: "end" }}>
              <Link to="/reports/workload-balance" className="show-more" style={{ color: "#A0ACBB" }}>
                Show more
              </Link>
            </Col>
          </Row>
        </div>
        <Row gutter={[8, 8]}>
          <Col lg={12} md={12} sm={24} xs={24} className="work-issues-order1">
            <CommonCard
              color="lightYellow-color"
              hoverColor="lightYellowGradient-color"
            >
              <Card
                className="underutilized-card"
                style={{ backgroundColor: "unset" }}
                bordered={false}
              >
                <Row className="utilized-container">
                  <Col xs={12}>
                    <p className="m-0 underutilized dark-pink-color fs-18 fw-600">Underutilized</p>
                  </Col>
                  <Col
                    xs={12}
                    style={{ textAlign: "end" }}
                  >
                    <img
                      src={underutilized}
                      alt="attendance"
                      className="hover-white-image"
                      height={34}
                      width={34}
                    />
                  </Col>
                  <Col lg={24} md={24} sm={24} xs={24}>
                    <p className="m-0 fw-500 light-pink-color">1 User</p>
                  </Col>
                </Row>
              </Card>
            </CommonCard>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24} className="work-issues-order1 overutilized-work-issues-order">
            {/* <CommonCard color="error-color" hoverColor="errorGradient-color">
              <Card
                className="underutilized-card overutilized"
                style={{ backgroundColor: "unset" }}
                bordered={false}

              >
                <Row className="utilized-container" >
                  <Col lg={12} md={12} sm={24} xs={24}>
                    <h4 className="m-0 overutilized-text underutilized  dark-pink-color fs-18">
                      Overutilized
                    </h4>
                  </Col>
                  <Col
                    xs={12}
                    style={{ textAlign: "end" }}
                  >
                    <div style={{position:"relative"}}>
                      <div className="div-image" style={{position:"absolute",marginLeft:"94px"}} >
                        <img className="hover-image" height={34} width={34} src={hoverimage} alt="card_img" />
                      </div>
                      <img src={overutilized} alt="attendance"className="hover-white-image-dashboard" height={34} width={34}/>
                    </div>

                  </Col>
                  <Col lg={24} md={24} sm={24} xs={24}>
                    <p className="m-0 fw-500 light-pink-color">2 User</p>
                  </Col>
                </Row>
              </Card>
            </CommonCard> */}
            <CommonCard
              color="error-color"
              hoverColor="errorGradient-color"
            >
              <Card
                className="underutilized-card"
                style={{ backgroundColor: "unset" }}
                bordered={false}
              >
                <Row className="utilized-container">
                  <Col xs={12}>
                    <p className="m-0 underutilized dark-pink-color fs-18 fw-600">Overutilized</p>
                  </Col>
                  <Col
                    xs={12}
                    style={{ textAlign: "end" }}
                  >
                    <img src={overutilized} alt="attendance" className="hover-white-image" height={34} width={34} />
                    {/* <img src={hoverimage} alt="attendance" className="on-hover-image" height={34} width={34} /> */}
                  </Col>
                  <Col lg={24} md={24} sm={24} xs={24}>
                    <p className="m-0 fw-500 light-pink-color">2 User</p>
                  </Col>
                </Row>
              </Card>
            </CommonCard>
          </Col>
          <Col
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className="work-isses-border work-issues-order3"
          >
            {WorkLoad.slice(0, 5)?.map((data) => {
              return (
                <Row key={uuidv4()} style={{ marginTop: "6px" }}>
                  <Col
                    lg={3}
                    md={3}
                    sm={8}
                    xs={8}
                    className="avatar-work-balance"
                  >
                    <img
                      src={data.img}
                      alt="attendance"
                      className="work-issues-avatar"
                    />
                  </Col>
                  <Col lg={3} md={3} sm={8} xs={8}>
                    <p className="work-issue-name black-color fs-14">
                      {data.name}
                    </p>
                  </Col>
                  <Col lg={18} md={18} sm={8} xs={8}>
                    <p className="work-issue-number text-end">{data.issues}</p>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col lg={12} md={12} sm={24} xs={24} className="work-issues-order4">
            {WorkLoad.map((data) => {
              return (
                <Row key={uuidv4()} style={{ marginTop: "6px" }}>
                  <Col
                    lg={3}
                    md={3}
                    sm={8}
                    xs={8}
                    className="avatar-work-balance"
                  >
                    <img
                      src={data.img}
                      alt="attendance"
                      className="work-issues-avatar"
                    />
                  </Col>
                  <Col lg={3} md={3} sm={8} xs={8}>
                    <p className="work-issue-name black-color fs-14">
                      {data.name}
                    </p>
                  </Col>
                  <Col lg={18} md={18} sm={8} xs={8}>
                    <p className="work-issue-number-box text-end">
                      {data.issues}
                    </p>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Card>}
    </Layout>
  );
};
