import { FC } from "react";
import "./card-wrapper.scss";
import { Avatar, Row } from "antd";
import { ICardWrapper } from "../../../../types/comparison";

const CardWrapper: FC<ICardWrapper> = (props) => {
  const { title, icon, subIcon, children, data, color, noSidePadding, isTimeCard, count } = props;
  return (
    <div className={`card_wrapper without-gradient-bg-2 card-bg-3-border-color card-bg-3-border-radius title-color ${!isTimeCard ? `${noSidePadding ? "zero_side_padding" : "wrapper_padding_24"}` : ""}`}>
      <Row className="content_wrapper" gutter={[16, 16]} align="middle" justify="space-between" style={{ paddingBottom: noSidePadding ? 5 : "1.5rem" }}>
        <Row className="title_wrapper" align="middle" style={{ gap: 8 }}>
          <Avatar className="icon" style={{ width: 36, height: 36, backgroundColor: color, padding: "6px" }} src={icon} />
          <div>
            <p className={`title ${isTimeCard ? "title-color" : "dark_title_color"} line-height-24 fw-600 fs-16 capitalize`}>{title}</p>
            {count && (
              <p style={{ opacity: 0.5 }} className={`title dark_title_color title-color line-height-20 fw-600 fs-16 capitalize`}>
                {count}
              </p>
            )}
          </div>
          {subIcon && <img src={subIcon} alt={title} />}
        </Row>
        {data && (
          <Row style={{ gap: 11 }}>
            {data?.map(({ usageColor, usageType }: { usageColor: string; usageType: string }, index: number) => (
              <Row key={index} align="middle" justify="space-between" style={{ gap: 4 }}>
                <span className="usageType_box" style={{ backgroundColor: usageColor }}></span>
                <span className="capitalize fw-400 color-black usageType title-color">{usageType}</span>
              </Row>
            ))}
          </Row>
        )}
      </Row>
      {children}
    </div>
  );
};

export default CardWrapper;
