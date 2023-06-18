import { Button, Col, Modal, Row } from 'antd';
import React, { useState } from 'react';
import manageCalendarIcon from '../../assets/icons/AddSchedule.png';
import GoogleCalenarIcon from "../../assets/images/timeSheet/googleCalenarIcon.png";
import OutlookCalenarIcon from "../../assets/images/timeSheet/outlookCalendarIcon.png";
import calendarImage from "../../assets/images/timeSheet/manageCalendar.png"

import './manageCalendar.scss';

const ManageCalendar = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isManageCalendar, setIsManageCalendar] = useState<boolean>(false);


    return (
        <>
            <Modal title="" open={isModalOpen} footer={[]} onCancel={() => setIsModalOpen(false)} className="manage-calendar-modal" centered width={860}>
                <div className='manage-calendar-content d-flex align-center flex-column'>
                    <img src={calendarImage} alt="" />
                    <p className='fs-14 fw-400 line-height-20 label-color m-0'>It seems like you haven’t added any calendar yet.</p>
                    <button type='button' className='border-radius-6 text-white fs-16 fw-500 line-height-24 cursor-pointer' onClick={() => { setIsManageCalendar(true); setIsModalOpen(false) }}>Add Calendar</button>
                </div>
            </Modal>
            <div className='manage-calendar-wrapper '>
                <Button
                    className="manageBtn d-flex align-items-center justify-between fs-16 fw-500 btn-simple"
                    onClick={() => {
                        setIsModalOpen(true)
                    }}
                >
                    <img src={manageCalendarIcon} alt="manageCalendar" className='white-img-theme-class' /> <span> Manage Calendar </span>
                </Button>
            </div>
            <Modal title="" open={isManageCalendar} footer={[]} onCancel={() => setIsManageCalendar(false)} className="manage-calendar-modal" centered width={860}>
                <div className='connect-calendar-content d-flex align-center flex-column'>
                    <h2 className='title-color fw-600 m-0'>Connect your Calendar</h2>
                    <p className='fs-14 fw-500 grey-color w-100 m-0'>Clocklog allows its user to connect to their Calendar Apps and sync’s upcoming events on the timesheet report</p>

                </div>
                <Row className='connect-calendar-btn'>
                    <Col span={24} className='featured-calendar-icon d-flex align-center justify-center border-radius-10 cursor-pointer'>
                        <img src={GoogleCalenarIcon} alt="googleCalendarIcon" />
                        <h2 className='grey-color fs-16 fw-600 m-0'>Google Calendar</h2>
                    </Col>
                    <Col span={24} className='featured-calendar-icon d-flex align-center justify-center border-radius-10 cursor-pointer' >
                        <img src={OutlookCalenarIcon} alt="outlookIcon" />
                        <h2 className='grey-color fs-16 fw-600 m-0'>Outlook.com</h2>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}

export default ManageCalendar