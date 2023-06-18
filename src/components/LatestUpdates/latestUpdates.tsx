import React from "react";
import { Collapse, Row, Col, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Message from "../../assets/icons/message.svg";
import { updates } from "../../mock/latestUpdateMock-data";
import "../../sass/common.scss";
import "./latestUpdates.scss";
const { Panel } = Collapse;

const LatestUpdate: React.FC = () => {
  return (
    <div className="latestUpdates bgWhite-color border-radius-8 card-bg-color">
      <Collapse
        accordion
        ghost={true}
        expandIconPosition="end"
        expandIcon={({ isActive }) => {
          return (
            <Button className="btn-simple bgLight-color title-color">
              {isActive ? <UpOutlined style={{ color: "var(--title-color)" }} /> : <DownOutlined style={{ color: "var(--title-color)" }} />}
              <span style={{ marginLeft: "8px" }} className="title-color fs-16 fw-500">
                Read {isActive ? "Less" : "More"}
              </span>
            </Button>
          );
        }}
      >
        {updates.map((e, index) => {
          return (
            <Panel
              key={index}
              header={
                <Row
                  justify="center"
                  align="middle"
                  gutter={12}
                  className="accordionHeader"
                >
                  <Col xs={5} sm={3} lg={1}>
                    <img src={Message} alt="message" className="white-img-theme-class " />
                  </Col>
                  <Col xs={19} sm={21} lg={23}>
                    <p className="fw-500 fs-20 title-color m-0">{e.type}</p>
                    <p className="fw-500 fs-14 dark-grey-color m-0">{e.date}</p>
                  </Col>
                </Row>
              }
            >
              <div className="accordion-body">
                <Row>
                  <Col span={23} offset={1}>
                    <p className="fs-14 description dark-grey-color">{e.description}</p>
                    <p
                      className="fs-14 fw-500 m-0 dark-grey-color"
                    // style={{ color: "#4E6073" }}
                    >
                      Click the link below:
                    </p>
                    <p className="blue-color fs-14 fw-500 m-0">
                      How to Setup Your Account
                    </p>
                  </Col>
                </Row>
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
};

export default LatestUpdate;
