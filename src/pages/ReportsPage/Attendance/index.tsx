import { Col, Row } from "antd";

// Components
import AttendanceTabs from "../../../components/Attendance/Tabs/Tabs";

const Attendance = () => {
  return (
    <Row gutter={[33, 24]} style={{ paddingBottom:"1rem" }}>
      <Col xs={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <AttendanceTabs />
      </Col>
    </Row>
  );
};

export default Attendance;
