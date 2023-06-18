import { ArrowRightOutlined } from "@ant-design/icons";

import "./style.scss";

const IntegrationCard = ({ cardData }: any) => {
  return (
    <div className="myCard card-gradient-bg graident-card-box-shadow  cursor-pointer">
      <img src={cardData.icon} alt="" />
      <div style={{ textAlign: "center", marginTop: "35px" }}>
        <h3 className="title-color fs-20 fw-500">{cardData.title}</h3>
        <p className="card-gradient-color" style={{ marginTop: "-5px" }}>{cardData.desc}</p>
        <p className="link">
          {cardData.link} <ArrowRightOutlined />
        </p>
      </div>
    </div>
  );
};

export default IntegrationCard;
