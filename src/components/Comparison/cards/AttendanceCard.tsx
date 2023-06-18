import { Row } from "antd";
import { FC } from "react";
import './cards.scss'
import { workRecord } from "../../../mock/comparison";
import { IAttendanceCard } from "../../../types/comparison";
import CardWrapper from "./card-wrapper";
import StatusCard from "./sub-cards/StatusCard";

const AttendanceCard: FC<IAttendanceCard> = (props) => {
  const { title, icon, data, color } = props;
  return (
    <CardWrapper title={title} icon={icon} data={data} color={color}>
      <Row className="attendance_card" align="middle" justify="center" style={{ gap: 29 }}>
        {workRecord?.map(({ icon, title, type, colorClasses, totalDays, days },index) => (
          <StatusCard key={index} icon={icon} title={title} color={colorClasses} type={type} totalDays={totalDays} days={days} />
        ))}
      </Row>
    </CardWrapper>
  );
};

export default AttendanceCard;
