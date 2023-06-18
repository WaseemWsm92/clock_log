import { FC, useState } from "react";
import { Button, Col, Row, } from "antd";
import AddTimeLineBtn from '../../../assets/images/timeline/timelineAdd.png';
import { AddTimeModal } from "../AddTimeModal";

export const AddTime: FC = (props: any) => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    return (
        <Row className="showTime" justify="space-between">
            <Col span={6} xs={24} sm={8} xl={12}><p className="fs-16 fw-600 font-Poppins">March 16, 2022 - Friday</p> </Col>
            <Col span={6} xs={24} sm={8} xl={12} className="addTimeButton">
                <Button className="font-Poppins grey-color fs-16 fw-500 align-center d-flex" onClick={showModal}>
                    <img src={AddTimeLineBtn} alt="addTimeline" height={20} width={21} /> Add time
                </Button>

            </Col>
            {open && <AddTimeModal open={open} setOpen={setOpen} />}
        </Row>
    )
}
