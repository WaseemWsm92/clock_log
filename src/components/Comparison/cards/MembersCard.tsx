import { List, Progress } from "antd";
import { FC } from "react";
import { IMembers } from "../../../types/comparison";
import CardWrapper from "./card-wrapper";
import "./cards.scss";

const MembersCard: FC<{ icon: string; title: string; count: number; color: string; members: IMembers[] }> = (props) => {
  const { icon, title, color, members } = props;
  return (
    <CardWrapper title={title} count={"18"} icon={icon} color={color}>
      <List className="members_card " itemLayout="horizontal" size="small">
        <li className="members-list-item header title-color">
          {["name", "designation", "time tracked"].map((item, index) => (
            <p key={item} style={{ width: index === 0 ? 150 : "auto" }} className="black-color fw-700 fs-20 line-height-24 m-0 capitalize title-color">
              {item}
            </p>
          ))}
        </li>
        <div className="list_item_wrapper ">
          {members?.map(({ image, name, designation, time, progress }: IMembers, index: number) => (
            <li key={index} className="members-list-item card-bg-color-3 card-bg-color-3-box-shadow default-color fs-18 line-height-24 fw-500">
              <div className="task_wrapper">
                <div className="image_wrapper" style={{ background: "linear-gradient(45deg, purple, orange) border-box" }}>
                  <div className="inner_wrapper">
                    <img className="image title-color" style={{ width: 46, height: 46 }} src={image} alt={title} />
                  </div>
                </div>
                <p className="text-color fw-500 fs-18 line-height-24 m-0 capitalize  title-color">{name}</p>
              </div>
              <p className="text-color fw-500 fs-18 line-height-24 m-0 capitalize  title-color">{designation}</p>
              <div className="progress_wrapper">
                <Progress showInfo={false} strokeWidth={7} type="circle" percent={+progress} width={53} strokeColor={color} trailColor="#E6E6E6" className="m-0 text-center" />
                <p className=" text-color fs-18 line-height-24 fw-500 m-0 title-color">
                  {time}
                </p>
              </div>
            </li>
          ))}
        </div>
      </List>
    </CardWrapper>
  );
};

export default MembersCard;
