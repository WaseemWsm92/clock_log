import { Button, Col, DatePicker, Form, Modal, Row, Select, TimePicker } from 'antd'
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import { appliedWorkSchedule, applyMorningWorkSchedule, selectSchedule, selectUser } from '../../../../mock/applyWorkSchedule';
import WeeksDays from '../../../../shared/weeksDays/weeksDays';
import './addModal.scss';


const AddModal = (props: any) => {
    const { isAddModal, setIsAddModal, isActionType } = props;
    const [weeksArray, setWeeksArray] = useState<any>([]);
    const [applyWorkData, setApplyWorkData] = useState<any>({
        selectUser: {},
        selectSchedule: {},
        effectiveFromDate: {},
        effectiveToDate: {},
        scheduleStartTime: {},
        scheduleEndTime: {},
        breakStartTime: {},
        breakEndTime: {},
    })
    const [form] = useForm();

    const onFinish = () => {
        setIsAddModal(false);
        form.resetFields();
    };


    const handleAddModal = (value: any, type: string) => {
        switch (type) {
            case 'selectUser':
                setApplyWorkData({ ...applyWorkData, selectUser: value });
                break;
            case 'selectSchedule':
                setApplyWorkData({ ...applyWorkData, selectSchedule: value });
                break;
            case 'effectiveFromDate':
                setApplyWorkData({ ...applyWorkData, effectiveFromDate: value });
                break;
            case 'effectiveToDate':
                setApplyWorkData({ ...applyWorkData, effectiveToDate: value });
                break;
            case 'scheduleStartTime':
                setApplyWorkData({ ...applyWorkData, scheduleStartTime: value });
                break;
            case 'scheduleEndTime':
                setApplyWorkData({ ...applyWorkData, scheduleEndTime: value });
                break;
            case 'breakStartTime':
                setApplyWorkData({ ...applyWorkData, breakStartTime: value });
                break;
            case 'breakEndTime':
                setApplyWorkData({ ...applyWorkData, breakEndTime: value });
                break;
            default:
                break;
        }
    }

    console.log('applyWorkData', applyWorkData);



    return (
        <>
            <Modal centered title="Apply Work Schedule" footer={false} open={isAddModal} onOk={() => setIsAddModal(false)} onCancel={() => { setIsAddModal(false); form.resetFields() }} className="add-work-modal-wrapper  modal-theme" okText="Save" width="100%" style={{ maxWidth: "" }}>
                <div className='apply-work'>
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row gutter={[22, 16]} align="bottom">
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="apply-work-field-wrap ">
                                <Form.Item label="Select User" name={["selectUser"]} rules={[{ required: true, message: "Required field" }]} >
                                    <Select
                                        labelInValue
                                        style={{ width: "100%", }}
                                        className="select-input-theme"
                                        popupClassName="select-theme"
                                        defaultValue={{ value: 'Select', label: 'Select' }}
                                        onChange={(val) => handleAddModal(val, 'selectUser')}
                                        options={selectUser}
                                    />
                                </Form.Item>

                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Select Schedule" name={["selectSchedule"]} rules={[{ required: true, message: "Required field" }]}>
                                    <Select
                                        labelInValue
                                        style={{ width: "100%", }}
                                        className="select-input-theme"
                                        popupClassName="select-theme"
                                        defaultValue={{ value: 'Select', label: 'Select' }}
                                        onChange={(val) => handleAddModal(val, 'selectSchedule')}
                                        options={selectSchedule}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Effective From" name={["effectiveFrom"]} rules={[{ required: true, message: "Required field" }]}>
                                    <DatePicker onChange={(val) => handleAddModal(val, 'effectiveFromDate')} />
                                </Form.Item>
                            </Col>
                            <Col xl={12} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                <Form.Item label="Effective To" name={["effectiveTo"]} rules={[{ required: true, message: "Required field" }]}>
                                    <DatePicker onChange={(val) => handleAddModal(val, 'effectiveToDate')} />
                                </Form.Item>
                            </Col>
                            {isActionType === 'edit' &&
                                <>
                                    <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                        <Form.Item label="Schedule Start Time" name={["scheduleStartTime"]} rules={[{ required: true, message: "Required field" }]}>
                                            <TimePicker onChange={(val) => handleAddModal(val, 'scheduleStartTime')} />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                        <Form.Item label="Schedule End Time" name={["scheduleEndTime"]} rules={[{ required: true, message: "Required field" }]}>
                                            <TimePicker onChange={(val) => handleAddModal(val, 'scheduleEndTime')} />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap d-flex align-center" >
                                        <label className='fs-14 fw-600 m-0 grey-color'>Total Hours: </label> &nbsp;
                                        <span className='fs-20 fw-500 primary-color m-0'>7h</span>
                                    </Col>
                                    <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                        <Form.Item label="Break Start Time" name={["breakStartTime"]} rules={[{ required: true, message: "Required field" }]}>
                                            <TimePicker onChange={(val) => handleAddModal(val, 'breakStartTime')} />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap">
                                        <Form.Item label="Break End Time" name={["breakEndTime"]} rules={[{ required: true, message: "Required field" }]}>
                                            <TimePicker onChange={(val) => handleAddModal(val, 'breakEndTime')} />
                                        </Form.Item>
                                    </Col>
                                    <Col xl={8} lg={8} md={8} sm={24} xs={24} className="apply-work-field-wrap d-flex align-center" >
                                        <label className='fs-14 fw-600 m-0 grey-color'>Min.Effective Hours: </label> &nbsp;
                                        <span className='fs-20 fw-500 primary-color m-0'>6.5h</span>
                                    </Col>
                                </>
                            }

                        </Row>

                        {isActionType === 'add' && applyWorkData?.selectSchedule?.label === 'Morning' &&
                            <>
                                <div className='add-work-schedule'>
                                    <Row gutter={[0, 30]} justify="space-between">
                                        {applyMorningWorkSchedule.map((item) => (
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="apply-work-field-wrap" key={item.id}>
                                                <label className='fs-14 fw-600 line-height-18 grey-color'>{item.title}</label>
                                                <p className='fs-14 line-height-20 light-grey-color-2 m-0'>{item.desc}</p>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </>
                        }
                        {applyWorkData?.selectSchedule?.label === 'Morning' &&
                            <WeeksDays label={"Applied On"} setWeeksArray={setWeeksArray} weeksArray={weeksArray} />
                        }

                        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '10px', paddingTop: '45px', marginBottom: "8px" }}>
                            <Button onClick={() => { setIsAddModal(false); form.resetFields() }}>Cancel</Button>
                            <Button className="btn-primary" htmlType="submit" >Save</Button>
                        </div>

                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default AddModal