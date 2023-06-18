import { FC } from "react";

const HoverCard:FC<{color:string,hoverTitle:string,list:string[]}> = (props) => {
    const {color,hoverTitle,list} = props;
  return (
    <div style={{ border: `solid ${color} 1px`,backgroundColor:"#fff" }} className="custom_tooltip">
      <p style={{ backgroundColor: color }} className="tooltip_title fs-14 fw-600">
        {hoverTitle}
      </p>
      {list?.map((listItem: string) => (
        <p key={listItem} className="content_list fw-500">
          {listItem}
        </p>
      ))}
    </div>
  );
};
export default HoverCard;
