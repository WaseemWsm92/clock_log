import { Col, Row, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import IntegrationCard from "./card";
import { CardsDataType } from "../../mock/integrationData";
import "./style.scss";

const CardsList = ({ cardItems }: any) => {
  return (
    <>
      <div className="search-field">
        <Input
          className="input"
          style={{height:"40px"}}
          placeholder="Search Integrations"
          onChange={(e) => console.log(e.target.value)}
          prefix={<SearchOutlined style={{fontSize: "18px", color: "#98A2B3"}} className="site-form-item-icon" />}
        />
      </div>
      <Row gutter={[48, 48]} style={{ marginTop: "30px",overflowY:'scroll' }}>
        {cardItems?.map((card: CardsDataType) => (
          <Col className="gutter-row" style={{marginTop:'2rem'}} xs={24} sm={24} md={12} lg={8} xl={6}>
            <IntegrationCard cardData={card} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CardsList;
