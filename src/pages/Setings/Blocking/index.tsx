
import { Col, Row } from "antd"
import BlockingMain from "../../../components/Settings/Blocking/Blocking"

const Achivements = () => {
  return (
    <Row gutter={[33, 24]}  style={{ paddingBottom: "1rem" }}>
      <Col xs={24} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <BlockingMain />
      </Col>
    </Row>
  )
}

export default Achivements