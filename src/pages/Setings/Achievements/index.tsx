import { Col, Row } from "antd"
import AchivementsMain from "../../../components/Settings/Achivements/Achivements"

const Achievements = () => {
  return (
    <Row gutter={[33, 24]} style={{ paddingBottom: "1rem" }}>
      <Col xs={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <AchivementsMain />
      </Col>
    </Row>
  )
}

export default Achievements