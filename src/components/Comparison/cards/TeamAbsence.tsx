import { List } from "antd";
import { FC } from "react";
import { ITeamAbsence } from "../../../types/comparison";
import CardWrapper from "./card-wrapper";
import './cards.scss'
const TeamAbsence: FC<{ icon: string; title: string; count: number; color: string; teamAbsenceList: ITeamAbsence[] }> = (props) => {
  const { icon, title, color, teamAbsenceList } = props;
  return (
    <CardWrapper title={title} count={"06"} icon={icon} color={color}>
      <List
        itemLayout="horizontal"
        dataSource={teamAbsenceList}
        size="small"
        className="Team_absence_card"
        renderItem={({ image, name, designation, days, imageStroke }: ITeamAbsence) => (
          <li className="team-absence-list-item  card-bg-color-3 card-bg-color-3-box-shadow default-color fs-18 line-height-24 fw-500">
            <div className="task_wrapper">
              <div className="image_wrapper" style={{ background: "linear-gradient(45deg, purple, orange) border-box" }}>
                  <div className="inner_wrapper">
                    <img className="image" style={{ width: 46, height: 46 }} src={image} alt={title} />
                  </div>
                </div>
              <div>
                <p className="text-color fw-500 fs-18 line-height-24 title-color m-0 capitalize">{name}</p>
                <p style={{opacity:0.5}} className="text-color fs-14 fw-500 line-height-22 m-0 capitalize  title-color">{designation}</p>
              </div>
            </div>
            <p className="fs-20 fw-700 line-height-24" style={{ color: color }}>{days} Days</p>
          </li>
        )}
      />
    </CardWrapper>
  );
};

export default TeamAbsence;
