import { List } from "antd";
import { FC } from "react";
import CardWrapper from "./card-wrapper";
import './cards.scss'
import HoverCard from "./sub-cards/HoverCard";
const TaskCard: FC<{ icon: string; title: string; color: string; taskList: any[] }> = (props) => {
  const { icon, title, color, taskList } = props;
  return (
    <CardWrapper title={title} icon={icon} color={color}>
      <List
        className="tasks_card"
        itemLayout="horizontal"
        dataSource={taskList}
        size="small"
        renderItem={({ taskIcon, title, count, color, hoverData: { hoverTitle, list } }) => (
          <li className="task-list-item fs-18 line-height-24 fw-500">
            <div className="task_wrapper">
              <img style={{ width: 24, height: 24 }} src={taskIcon} alt={title} />
              <p style={{ color: "#4E4B66" }} className="task-title fw-500 fs-14 line-height-22 capitalize report-title-color">
                {title}
              </p>
            </div>
            <div className="count_wrapper" style={{ backgroundColor: color }}>
              <p className="count fs-12 m-0 fw-500 text-white">{count}</p>
            </div>
            <HoverCard color={color} hoverTitle={hoverTitle} list={list} />
          </li>
        )}
      />
    </CardWrapper>
  );
};

export default TaskCard;
