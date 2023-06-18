import { Modal } from 'antd';
import React from 'react';
import User from "../../../../assets/images/workSchedule/user.png"
import './eventModal.scss';

const EventModal = (props: any) => {
    const { isEventModal, setIsEventModal, eventModalData, setIsAddModal } = props;
    const event = eventModalData?.event?._def
    const eventsModalShiftData = [
        {
            id: "1",
            title: "Shift",
            desc: `${event?.title}`
        },
        {
            id: "2",
            title: "Minimum effective hours",
            desc: "6:30"
        },
        {
            id: "3",
            title: "Working Hours",
            desc: "0"
        }
    ]

    return (
        <>
            <Modal title="Shift" open={isEventModal} centered onOk={() => setIsEventModal(false)} onCancel={() => setIsEventModal(false)} className="work-schedule-modal" okText="Edit" footer={[
                <div className='event-modal-btn d-flex'>
                    <button className='button-modal-delete text-white fs-16 fw-500 line-height-24 cursor-pointer' type='button'>Delete</button>
                    <button className='button-modal-edit grey-color fs-16 fw-500 line-height-24 cursor-pointer' type='button' onClick={() => {setIsAddModal(true); setIsEventModal(false)}}>Edit</button>
                </div>
            ]}>
                <div className='event-modal-details'>
                    <div className='d-flex align-center' style={{ gap: "10px" }}>
                        <img src={User} alt="" />
                        <div className='grid-circle'>
                            <h2 className='fs-16 line-height-24 fw-400 m-0'>Tayyaba Gul</h2>
                            <p className='fs-12 fw-500 m-0 d-flex align-center lightest-dark-grey-color'><span style={{ backgroundColor: event?.ui?.borderColor }}></span>{event?.extendedProps?.shift}</p>
                        </div>
                    </div>
                    <div className='event-modal-content'>
                        {eventsModalShiftData.map((item: any) => (
                            <div className='d-flex' style={{ gap: "25px", paddingTop: "5px" }} key={item.id}>
                                <h2 className='grey-color fs-16 fw-500 m-0'>{item.title}</h2>
                                <p className='fs-14 fw-400 m-0 extra-dull'>{item.desc}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </Modal>
        </>
    )
}

export default EventModal