import { Row, Col, Progress, Avatar } from "antd";
import { FC } from "react";
import { IUsersList } from "../../../types/comparison";
import "./cards.scss";
const UserCard: FC<{ usersList: IUsersList[] }> = (props) => {
  const { usersList } = props;
  return (
    <div className="users_card_wrapper ">
      <Row gutter={[26,26]}>
        {usersList?.map(({ title, name, image, progress, designation, color, time },index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={12} className="without-gradient-bg-2 graident-card-box-shadow">
            <div className="user-card without-gradient-bg-2 ">
              <p className="title line-height-24 fw-600 fs-20 m-0 text-color capitalize title-color">{title}</p>
              <div className="d-flex progress_wrapper " style={{ justifyContent: "space-around", alignItems: "center" }}>
                <Progress
                  type="circle"
                  percent={+progress}
                  format={() => (
                    <p className="fw-600 fs-14" style={{ color: color }}>
                      {time}
                    </p>
                  )}
                  width={96}
                  strokeWidth={6}
                  strokeColor={color}
                  trailColor="#C7C7C7"
                />
                <Avatar src={image} className="user_image" alt="" style={{ width: 78, height: 78 }} />
              </div>
              <div className="d-flex" style={{ flexDirection: "column", textAlign: "center" }}>
                <span className="fs-16 fw-400 line-height-24 title-color capitalize user-name">{name}</span>
                <span className="fs-12 fw-400 border-color line-height-18 report-title-color capitalize designation">{designation}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserCard;
