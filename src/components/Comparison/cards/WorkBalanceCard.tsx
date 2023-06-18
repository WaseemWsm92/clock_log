import { FC } from "react";
import "./cards.scss";
import { Card, Row, Col } from "antd";
import { IWorkBalanceData } from "../../../types/comparison";
import CardWrapper from "./card-wrapper";

const WorkBalanceCard: FC<{ icon: string; title: string; WorkBalanceData: IWorkBalanceData[]; color: string, selectedTab:string }> = (props) => {
  const { icon, title, WorkBalanceData, color,selectedTab } = props;
  return (
    <CardWrapper title={title} icon={icon} color={color}>
      <Row className="Work_balance_card" gutter={[30, 28]}>
        {WorkBalanceData?.map(({ title, icon, color, count }) => (
          <Col flex={1} key={title} style={{marginBottom:"1.5rem"}}>
            <Card className="sub_card card-bg-color" style={{ borderBottom: `8px solid ${color}` }}>
              <Row dir="column" justify="space-between" className="sub_card-container">
                <Col className="w-100">
                  <Row align="middle" justify="space-between">
                    <p className="m-0 fw-600 fs-16 line-height-24 capitalize title-color sub_card_title">{title}</p>
                    <img src={icon} height={24} width={24} alt="" />
                  </Row>
                </Col>
                <Col lg={24} md={24} sm={24} xs={24}>
                  <h4 className="days_count line-height-30 fw-500 m-0 fs-18 capitalize title-color">{`${count} ${selectedTab==="teams"?"user":"days"}`}</h4>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </CardWrapper>
  );
};

export default WorkBalanceCard;
