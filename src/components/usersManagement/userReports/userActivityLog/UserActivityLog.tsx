import { Col, Row, Space } from "antd";

import ActivityLog from "../../../../pages/ReportsPage/ActivityLog";
import userImage from "../../../../assets/images/users/user-1.svg";
import "./style.scss";

const UserActivityLog = () => {
  return (
    <div className="user-activity-log-wrapper">
      <div className="user-info">
        <Row gutter={[33, 24]} justify="space-between">
          <Col xs={12} lg={20} className="gutter-row">
            <Space direction="horizontal" size={11}>
              <img
                src={userImage}
                alt="user"
                width="40px"
                height="40px"
                className="border-radius-50"
              />
              <div>
                <h2 className="fs-16 fw-600 title-color m-0">Tayyaba Gul</h2>
                <p className="email m-0">Allan john@ceative.co.uk</p>
              </div>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="user-activity-log-table">
        <ActivityLog user="Joe Black" />
      </div>
    </div>
  );
};

export default UserActivityLog;
