import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid"
import { timeSheetEvents, timeSheetResources } from '../../mock/timeSheetMockData';
import CalendarIcon from "../../assets/images/timeSheet/calendarIcon.png"
import './timeSheet.scss';
import EventModals from './EventModals/EventModals';
import interactionPlugin from '@fullcalendar/interaction';
import { AddTimeModel } from './addTimeModal/addTimeModel';
import LinkedinIcon from "../../assets/images/timeSheet/linkedinIcon.png"
import dayjs from 'dayjs';

const TimeSheet = () => {
    const [timeSheetEvent, setTimeSheetEvent] = useState({});
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

    const handleEventClick = (event: any) => {
        setIsModalOpen(true);
        setTimeSheetEvent(event);
    }

    const eventContentHandler = (eventInfo: any) => {
        const event = eventInfo.event._def
        const eventId = eventInfo.event._def.publicId;
        const backgroundColor: any = {
            '1': '#FFC6B8',
            '2': '#FFEDC1',
            '3': '#ECF2F9',
        }
        eventInfo.backgroundColor = "transparent";
        return (
            <>
                <div className="project-grid d-flex justify-between h-100" style={{ backgroundColor: backgroundColor[eventId], boxShadow: eventId === '2' || eventId === '3' ? '0px 0px 5px -2px rgba(0, 0, 0, 0.22)' : '' }}>
                    <div className='project-grid-item d-flex'>
                        {eventId === '1' &&
                            <span></span>
                        }
                        <div className='d-flex'>
                        {eventId === '3' && 
                            <img src={LinkedinIcon} alt='' width="15px" height="15px" />
                        }
                        {eventId === '2' && 
                            <img src={CalendarIcon} alt='' width="21px" height="18px" />
                        }
                            <p className='fs-14 fw-400 m-0'>{event.title}</p>
                        </div>
                    </div>
                    <span className='fs-14 fw-400'>{eventInfo.timeText}</span>
                </div>
            </>
        )
    }

    const handleSlotLabelContent = (info: any) => {
        return (
            <>
                <div className='slot-label-wrapper'>
                    <span>{dayjs(info.time.milliseconds).format('hh:mm A')}</span>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="timesheet-wrapper ">
                <FullCalendar
                    plugins={[resourceTimeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "",
                        center: "",
                        right: "",
                    }}
                    initialView='resourceTimeGridDay'
                    schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                    resources={timeSheetResources}
                    events={timeSheetEvents}
                    droppable={true}
                    // allDaySlot={false}
                    // height="100vh"
                    slotDuration="00:05:00"
                    businessHours={{
                        start: '09:00',
                    }}
                    slotLabelContent={handleSlotLabelContent}
                    slotLabelInterval='00:05:00'
                    eventContent={eventContentHandler}
                    eventClick={(e) => handleEventClick(e)}
                    dateClick={() => setIsAddModalOpen(true)}

                />
            </div>
            <EventModals setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} timeSheetEvent={timeSheetEvent} />
            <AddTimeModel isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} />
        </>
    )
}

export default TimeSheet
