import { useState } from "react";
import dayjs from 'dayjs';
import { Button, Col, Modal, Row, Select, DatePicker, TimePicker, Input, Tooltip, Form } from "antd";
import { PlusOutlined, InfoCircleOutlined, EditOutlined } from '@ant-design/icons';
import userProfile from '../../assets/images/timeline/individualuserprofile.png';

export const AddTimeModal = (props: any) => {
    const [openAddReason, setOpenAddReason] = useState(false);
    const [openAddNote, setOpenAddNote] = useState(false);
    const [form] = Form.useForm();
    const format = 'HH:mm';
    const { TextArea } = Input;

    const onFinish = (values: any) => {
        props.setOpen(false);
        form.resetFields();
    };

    return (
        <Row className="showTime" justify="space-between">

            <Modal
                title={<span className="title-color">Add Time</span>}
                className="modal-theme"
                onOk={() => {
                    props.setOpen(false);
                }}
                onCancel={() => {
                    props.setOpen(false);
                }}
                open={props.open}
                okText="Save"
                centered
                width="862px"
                closable={false}
                footer={false}
            >
                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Row className="d-flex BreadCrum_main">
                        <Col span={3}>
                            <img src={userProfile} width="75%" alt='userProfile' />
                        </Col>
                        <Col span={12}>
                            <h6 className="m-0 fs-16 font-Poppins title-color">Esther Howard</h6>
                            <p className="m-0 fs-12 font-Poppins title-color">Program Manager</p>
                        </Col>
                    </Row>


                    <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12} lg={12}>
                            <label className="title-color">Project</label>
                            <Form.Item name="Category" rules={[{ required: true, message: "Required field" }]} className="mb-10">
                                <Select
                                    className="select-input-theme"
                                    popupClassName="select-theme"
                                    defaultValue="Buzz Hr"
                                    options={[
                                        { value: 'Buzz Hr', label: 'Buzz Hr' },
                                        { value: 'lucy', label: 'Lucy' },
                                        { value: 'Yiminghe', label: 'yiminghe' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12}>
                            <label className="title-color">Task</label>
                            <Form.Item name="Task" rules={[{ required: true, message: "Required field" }]}>
                                <Select
                                    className="select-input-theme"
                                    popupClassName="select-theme"
                                    defaultValue="User Stories"
                                    options={[
                                        { value: 'User Stories ', label: 'User Stories ' },
                                        { value: 'lucy', label: 'Lucy' },
                                        { value: 'Yiminghe', label: 'yiminghe' },
                                    ]}
                                />
                            </Form.Item>

                        </Col>
                        <Col xs={24} md={12}>
                            <label className="title-color">Date</label><br />
                            <Form.Item name="Date" rules={[{ required: true, message: "Required field" }]}>
                                <DatePicker className="custom-date-picker" />
                            </Form.Item>

                        </Col>

                    </Row>

                    <Row gutter={14} className="dateTime">
                        <Col xs={24} md={12}>
                            <label className="title-color">From</label><br />
                            <Form.Item name="Date" rules={[{ required: true, message: "Required field" }]}>
                                <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="custom-date-picker" popupClassName="custom-date-picker-popup" />
                            </Form.Item>

                        </Col>
                        <Col xs={24} md={12}>
                            <label className="title-color">To</label><br />
                            <Form.Item name="Date" rules={[{ required: true, message: "Required field" }]}>
                                <TimePicker defaultValue={dayjs('12:00', format)} format={format} className="custom-date-picker" popupClassName="custom-date-picker-popup" />
                            </Form.Item>

                        </Col>

                    </Row>

                    <Row className="showTimeClock" justify="space-between">
                        <Col span={2} xs={8} md={4} xl={2} className="AvaliableTimeSlot"><p className="fs-10 font-Poppins">12 am</p> </Col>
                        <Col span={2} xs={0} md={0} xl={2} className="AvaliableTimeSlot"><p className="fs-10 font-Poppins">2 am</p> </Col>
                        <Col span={2} xs={0} md={4} xl={2}><p className="fs-10 font-Poppins">4 am</p> </Col>
                        <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">6 am</p> </Col>
                        <Col span={2} xs={0} md={4} xl={2}><p className="fs-10 font-Poppins">8 am</p> </Col>
                        <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">10 am</p> </Col>
                        <Col span={2} xs={8} md={4} xl={2}><p className="fs-10 font-Poppins">12 pm</p> </Col>
                        <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">2 pm</p> </Col>
                        <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">4 pm</p> </Col>
                        <Col span={2} xs={0} md={4} xl={2}><p className="fs-10 font-Poppins">8 pm</p> </Col>
                        <Col span={2} xs={0} md={0} xl={2}><p className="fs-10 font-Poppins">10 pm</p> </Col>
                        <Col span={2} xs={8} md={4} xl={2}><p className="fs-10 font-Poppins">12 pm</p> </Col>
                    </Row>

                    <Row>
                        <a className='addTimeBtn cursor-pointer fs-14 font-Poppins p-0 title-color' onClick={() => setOpenAddReason(!openAddReason)}><PlusOutlined className="Addicon" />Add Reason</a>
                        {openAddReason &&
                            <TextArea
                                className="addTextArea"
                                placeholder="Add reason"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        }

                    </Row>
                    <Row>
                        <a className='addTimeBtn cursor-pointer fs-14 font-Poppins p-0 title-color' onClick={() => setOpenAddNote(!openAddNote)}><EditOutlined className="Addicon" />
                            Add Note
                            <Tooltip placement="right" title='add Additional Notes' >
                                <InfoCircleOutlined className="infoIcon white-img-theme-class" />
                            </Tooltip></a>
                        {openAddNote &&
                            <TextArea
                                className="addTextArea"
                                placeholder="Add reason"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        }

                    </Row>

                    <Col md={24} style={{ display: "flex", justifyContent: "end", gap: "8px" }}>
                        <Form.Item style={{ margin: "20px" }}>
                            <Button className="btn-cancel" onClick={() => props.setOpen(false)} style={{ marginRight: "10px" }}>
                                Cancel
                            </Button>
                            <Button className="btn-secondary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Col>
                </Form>
            </Modal>
        </Row>
    )
}
