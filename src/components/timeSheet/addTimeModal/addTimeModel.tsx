import { Col, Modal, Row, Select, DatePicker, TimePicker, Input, Tooltip } from "antd";
import dayjs from 'dayjs';
import { PlusOutlined, InfoCircleOutlined, EditOutlined, } from '@ant-design/icons';
import './addTimeModal.scss';
import { useState } from "react";

export const AddTimeModel = (props: any) => {
    const { isAddModalOpen, setIsAddModalOpen } = props;
    const format = 'HH:mm';
    const { TextArea } = Input;
    const [openAddReason, setOpenAddReason] = useState(false);
    const [openAddNote, setOpenAddNote] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            // setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    return (
        <Row>

            <Modal
                title="Add Time"
                open={isAddModalOpen}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={() => setIsAddModalOpen(false)}
                okText="Save"
                centered
                width={800}
                className="showTimeCalender modal-theme"
            >


                <Row gutter={14} className="dateTimeCalender">
                    <Col xs={24} md={12} lg={12}>
                        <label className="label-color">Project</label>
                        <Select
                            popupClassName="select-theme"
                            className="select-input-theme"

                            placeholder="Select Project"
                            // style={{ width: 230 }}
                            options={[
                                { value: 'Stand-up Meeting', label: 'Stand-up Meeting' },
                                { value: 'Stand-up Meeting', label: 'Stand-up Meeting' },
                                { value: 'Stand-up Meeting', label: 'Stand-up Meeting' },
                            ]}
                        />
                    </Col>
                </Row>

                <Row gutter={14} className="dateTimeCalender">
                    <Col xs={24} md={12}>
                        <label className="label-color">Task</label>
                        <Select
                            popupClassName="select-theme"
                            className="select-input-theme"
                            // style={{ width: 395 }}
                            placeholder="Select Task"

                            options={[
                                { value: 'User Stories ', label: 'User Stories ' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <label className="label-color">Date</label><br />
                        <DatePicker className="custom-date-picker" />
                    </Col>

                </Row>

                <Row gutter={14} className="dateTimeCalender">
                    <Col xs={24} md={12}>
                        <label className="label-color">From</label><br />
                        <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="custom-date-picker" popupClassName="custom-date-picker-popup" />
                    </Col>
                    <Col xs={24} md={12}>
                        <label className="label-color">To</label><br />
                        <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="custom-date-picker" popupClassName="custom-date-picker-popup" />
                    </Col>

                </Row>

                <Row>
                    <button className='addTimeBtnCalender cursor-pointer fs-14 font-Poppins p-0 heading-color' onClick={() => setOpenAddReason(!openAddReason)}><PlusOutlined className="Addicon heading-color" />Add Reason</button>
                    {openAddReason &&
                        <TextArea
                            className="addTextArea"
                            placeholder="Add reason"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    }

                </Row>
                <Row>
                    <button className='addTimeBtnCalender cursor-pointer fs-14 font-Poppins p-0 heading-color' onClick={() => setOpenAddNote(!openAddNote)}><EditOutlined className="Addicon heading-color" />Add Note   <Tooltip title="Add Additional Notes" placement="right"><InfoCircleOutlined className="infoIcon white-img-theme-class" /> </Tooltip></button>
                    {openAddNote &&
                        <TextArea
                            className="addTextArea"
                            placeholder="Add reason"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    }

                </Row>

            </Modal>

        </Row>
    )
}
