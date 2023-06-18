import { Progress } from "antd";
import { FC } from "react";
import CardWrapper from "./card-wrapper";
import './cards.scss'
const TimeCard: FC<{ icon: string; title: string; value?: string; color: string; progressValue?: string }> = (props) => {
  const { icon, title, value, color, progressValue } = props;
  return (
    <CardWrapper isTimeCard={true} title={title} icon={icon} color={color}>
      <div className="time_card">
        {progressValue ? (
          <>
            <p className="line-height-22 progress-text fs-14 fw-600 title-color">Progress</p>
            <Progress percent={75} strokeColor={color} strokeWidth={6}  className="title-color"/>
          </>
        ) : (
          <>
            <p style={{ color: color }} className="fs-26 line-height-22 value-text title-color">
              {value}
            </p>
            <div style={{ backgroundColor: color }} className="bottom-line"></div>
          </>
        )}
      </div>
    </CardWrapper>
  );
};

export default TimeCard;
