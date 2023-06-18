import CommonCard from "../../card";
import { Card, Image } from "antd";
import { v4 as uuidv4 } from "uuid";
interface IDynamicCardsProps {
  dataArray: any;
}

const DynamicCards = ({ dataArray }: IDynamicCardsProps) => {
  return (
    <div
      style={{ marginBottom: "20px", gap: "20px" }}
      className="main-cards-flex custom-scroll-hor "
    >
      {dataArray.map((ele: any) => (
        // <Col xs={24} sm={12} md={8} lg={6} xl={5} style={{marginBottom:'10px'}} key={i}>
        <div style={{ marginBottom: "10px" }} key={uuidv4()}>
          <CommonCard color={ele?.color} hoverColor={ele?.hoverColor}>
            <Card
              className="wrapper-card-times "
              style={{
                borderBottom: "1px solid #37B4A4",
                textAlign: "left",
                height: 134,
                backgroundColor: "unset",
                color: "inherit",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <div className="card-image-wrapper">
                  <Image
                    className="main-card-image offHover"
                    src={ele?.cardIcon}
                  />
                  <Image
                    className="main-card-image onHover"
                    src={ele?.cardIconHov}
                  />
                </div>
                <h4 className="fs-16 fw-600" style={{ margin: "0px" }}>
                  {ele?.cardTitle}
                </h4>
              </div>
              <p
                className="fs-26 fw-400"
                style={{ margin: "0px", marginTop:'20px', textAlign: "center" }}
              >
                {ele?.timeSlot}
              </p>
            </Card>
          </CommonCard>
        </div>
      ))}
    </div>
  );
};

export default DynamicCards;
