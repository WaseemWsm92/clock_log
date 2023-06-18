
import React from 'react';
import { Col, Row} from 'antd';

const ShowTimeline: React.FC = () => {

    return (
        <div>
                <Row className="showTimeClock" justify="space-between">
                    <Col span={2} xs={8} md={4} xl={2}><p className="fs-14 fw-500 font-Poppins">12 am</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-14 fw-500 font-Poppins">2 am</p> </Col>
                    <Col span={2} xs={0} md={4} xl={2}><p className="fs-14 fw-500 font-Poppins">4 am</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-14 fw-500 font-Poppins">6 am</p> </Col>
                    <Col span={2} xs={0} md={4} xl={2}><p className="fs-14 fw-500 font-Poppins">8 am</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-14 fw-500 font-Poppins">10 am</p> </Col>
                    <Col span={2} xs={8} md={4} xl={2}><p className="fs-14 fw-500 font-Poppins">12 pm</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-14 fw-500 font-Poppins">2 pm</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-14 fw-500 font-Poppins">4 pm</p> </Col>
                    <Col span={2} xs={0} md={4} xl={2}><p className="fs-14 fw-500 font-Poppins">8 pm</p> </Col>
                    <Col span={2} xs={0} md={0} xl={2}><p className="fs-14 fw-500 font-Poppins">10 pm</p> </Col>
                    <Col span={2} xs={8} md={4} xl={2}><p className="fs-14 fw-500 font-Poppins">12 pm</p> </Col>
                </Row>

        </div>

    )
}

export default ShowTimeline