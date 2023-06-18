import { List } from "antd";
import { FC } from "react";
import CardWrapper from "./card-wrapper";
import "./cards.scss";
const ListCard: FC<{ icon: string; title: string; color: string; list: string[] }> = (props) => {
  const { icon, title, color, list } = props;
  return (
    <CardWrapper noSidePadding={true} title={title} icon={icon} color={color}>
      <List
        className="list_card"
        itemLayout="horizontal"
        dataSource={list}
        size="small"
        renderItem={(item: any) => (
          <List.Item key={item} className="list-item fs-16 line-height-20 fw-500 report-title-color">
            {item}
          </List.Item>
        )}
      />
    </CardWrapper>
  );
};

export default ListCard;
