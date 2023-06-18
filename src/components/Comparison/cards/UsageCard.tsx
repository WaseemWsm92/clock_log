import { FC } from "react";
import { Progress, Row } from "antd";
import CardWrapper from "./card-wrapper";
import { IUsageCard, IUsageData } from "../../../types/comparison";
import './cards.scss'
const UsageCard: FC<IUsageCard> = (props) => {
  const { data, color, subIcon, icon, title, usageData } = props;
  const handleColor = (type: string) => {
    const { usageColor } = data?.find((item: any) => type === item?.usageType)
    return (usageColor ?? "")
  }
  return (
    <CardWrapper title={title} icon={icon} subIcon={subIcon} data={data} color={color}>
      <div className="usage_card ">
        {usageData?.map(({ domainName, timeTracked, type, progress }: IUsageData,index:number) => (
          <Row className="usage_card_row" key={index} gutter={0} align="middle" justify="space-between">
            <p className="domain_name line-height-18 m-0 fw-500 fs-12 title-color">{domainName}</p>
            <Progress style={{ flex: 1, display: "inline-block" }} trailColor="transparent" percent={+progress} strokeColor={handleColor(type)} strokeWidth={10} showInfo={false} />
            <p className="time_tracked line-height-18 m-0 fw-500 fs-12 title-color">{timeTracked}</p>
          </Row>
        ))}
      </div>
    </CardWrapper>
  );
};

export default UsageCard;
