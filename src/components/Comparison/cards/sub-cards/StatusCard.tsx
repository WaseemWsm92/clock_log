import { Space, Progress, Divider, Row } from "antd";
import { FC } from "react";
import { IStatusCard } from "../../../../types/comparison";
import CommonCard from "../../../card";
import "./sub-card.scss";

const StatusCard: FC<IStatusCard> = (props) => {
  const { icon, title, color, type, totalDays, days } = props;
  return (
    <div className="status_card" key={title} style={{ minWidth: "180px", height: "208px", flex: 1 }}>
      <CommonCard color={color?.color ?? ""} hoverColor={color?.hoverColor ?? ""}>
        <div className="w-100" style={{ padding: "21px 12px" }}>
          <Row style={{ gap: 12 }} align="middle">
            <img src={icon} alt="calendar" width="24px" height="24px" className="hover-white-image" />
            <h2 color={`${color?.color} !important`} className="fs-14 fw-600 line-height-20 m-0 capitalize">
              {title}
            </h2>
          </Row>
          <Space
            className="fs-12 d-block text-center"
            style={{
              marginTop: "0.875rem",
            }}
          >
            <Progress
              type="circle"
              percent={(+days / +totalDays) * 100}
              width={68}
              format={() => (
                <>
                  <p className="fs-10 line-height-16 fw-300 m-0 progress_count" style={{ color: color?.strokeColor }}>
                    {days}
                  </p>
                  <p className="fs-10 line-height-16 fw-600 m-0 capitalize progress_title">{type === "worked" ? "days" : title}</p>
                </>
              )}
              strokeColor={color?.strokeColor}
              trailColor="#D9DBE9"
              className="m-auto text-center"
            />
          </Space>
          <Space size={4} className="w-100 justify-between" style={{ marginTop: "1rem" }}>
            <p className="fs-12  fw-600 darkBlue-color line-height-18 capitalize m-0">Total {type === "worked" ? "days" : type}:</p>
            <p className="fs-12 fw-400 line-height-18 m-0 capitalize">{type === "worked" ? `${totalDays} ${+totalDays > 1 ? "days" : "day"}` : `${days} ${+days > 1 ? "days" : "day"}`}</p>
          </Space>
          <Divider style={{ marginTop: "4px", marginBottom: "8px" }} />
          {type === "worked" && (
            <Space size={4} className="w-100 justify-between ">
              <p className="fs-12  fw-600 darkBlue-color line-height-18 capitalize m-0">you worked:</p>
              <p className="fs-14 fw-400 line-height-22 m-0">{days}</p>
            </Space>
          )}
        </div>
      </CommonCard>
    </div>
  );
};

export default StatusCard;
