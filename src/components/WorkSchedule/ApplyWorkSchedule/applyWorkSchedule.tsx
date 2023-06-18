import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import interactionPlugin from "@fullcalendar/interaction";
import ResourcePlugin from "@fullcalendar/resource"
import { workScheduleEvent, workScheduleResources } from "../../../mock/applyWorkSchedule";
import dayGridPlugin from '@fullcalendar/daygrid';
import "./applyWorkSchedule.scss";
import dayjs from "dayjs";
import ApplyWorkScheduleFilters from "./ApplyWorkScheduleFilters/applyWorkScheduleFilters";
import AddModal from "./addModal/addModal";
import EventModal from "./eventModal/eventModal";
import { Checkbox, Switch } from "antd";

const ApplyWorkSchedule = () => {
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const [isEventModal, setIsEventModal] = useState<boolean>(false);
  const [eventModalData, setEventModalData] = useState<any>({});
  const [isSelectedUser, setIsSelectedUser] = useState(true);
  const [isActionType, setIsActionType] = useState('add');
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  const handleCheckbox = (e: any) => {
    console.log(e, 'eeee')
    e.target.checked === true ? setIsSelectedUser(false) : setIsSelectedUser(true)
  }

  console.log("eventModalData", eventModalData)

  const eventContentHandler = (eventInfo: any) => {
    const event = eventInfo.event._def;
    const eventId = eventInfo.event._def.publicId;
    console.log("eventInfo", eventInfo)
    const backgroundColor: any = {
      '1': '#FF6A6C',
      '2': '#37B4A4',
      '3': '#FDCA64'
    }
    return (
      <>
        <div className="absent-grid d-flex justify-between h-100">
          <div className="absent-grid-item w-100 d-flex" style={{ backgroundColor: backgroundColor[eventId] }}>
            <span className="absent-line" ></span>
            <div className="absent-grid-content ">
              <h2 className="fs-14 fw-400 m-0">{event.title}</h2>
              <div className="absent-grid-circle d-flex align-center">
                <span style={{ backgroundColor: eventInfo.borderColor }}></span>
                <p className="fs-12 fw-500 m-0">{event?.extendedProps?.shift}</p>
              </div>
              <div className="working-grid">
                <h3 className="fs-12 fw-500 m-0">Working Hours : 7</h3>
                <p className="fs-14 fw-600 m-0">8:00 am to 3:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleSlotContent = (slotEvent: any) => {
    return (
      <>
        <div className="slot-event-wrapper">
          <div className="d-flex align-center" style={{ gap: "5px" }}>
            <h2 className="title-color m-0">{dayjs(slotEvent.date).format('DD')}</h2>
            <div>
              <p className="fs-14 fw-400 line-height-20 m-0">{dayjs(slotEvent.date).format('dddd')}</p>
              <p className="fs-14 fw-400 line-height-20 m-0">{dayjs(slotEvent.date).format('MMMM YYYY')}</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  const handleResourceRender = (info: any) => {
    const resource = info.resource._resource;
    console.log("infoassda", info)
    return (
      <>
        <div className="resource-render-wrapper d-flex align-center">
          {role === 'Employee' ? (<></>) : (
            <>
              <Checkbox onChange={handleCheckbox} className="resource-render-checked theme-checkbox" name={`${resource.id}`} id={`${resource.id}`}></Checkbox>
            </>
          )
          }
          <div className="resource-render-content d-flex align-center cursor-pointer" style={{ marginLeft: role === 'Employee' ? "25px" : "0" }}>
            <img src={resource.extendedProps.imageUrl} alt="" />
            <label className="grey-color fs-14 fw-400 line-height-20 cursor-pointer" htmlFor={`${resource.id}`}>{resource.title}</label>
          </div>
        </div>
      </>
    )
  }


  const handleResourceHeaderContent = (info: any) => {
    return (
      <>
        <div className="resource-user">
          <h2 className="fs-12 fw-500 m-0 black-color">Users</h2>
          {role === 'Employee' ? (
            <></>
          ) : (
            <div className="d-flex align-center" style={{ gap: "20px" }}>
              <p className="fs-12 fw-400 line-height-18 m-0">Show unschedual</p>
              <Switch defaultChecked size="small" />
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="apply-work-wrapper">
        <ApplyWorkScheduleFilters setIsSelectedUser={setIsSelectedUser} isSelectedUser={isSelectedUser} />
        <FullCalendar
          schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
          plugins={[resourceTimelinePlugin, interactionPlugin, dayGridPlugin, ResourcePlugin]}
          headerToolbar={{
            left: 'prev title next',
            right: '',
            center: 'today'
          }}
          titleFormat={{
            month: 'short',
            day: 'numeric',
            weekday: 'short'
          }}
          initialView="resourceTimelineWeek"
          resources={workScheduleResources}
          events={workScheduleEvent}
          editable={true}
          droppable={true}
          slotMinWidth={200}
          resourceAreaWidth={240}
          eventMinWidth={200}
          eventContent={eventContentHandler}
          eventBorderColor="1px solid #DBE4EF !important"
          resourceAreaHeaderContent={handleResourceHeaderContent}
          resourceLabelContent={handleResourceRender}
          slotDuration="24:00:00"
          slotLabelContent={handleSlotContent}
          slotLabelFormat={[{ day: "2-digit", month: "long", year: "numeric", weekday: "long" }]}
          dateClick={() => { setIsAddModal(true); setIsActionType('add') }}
          eventClick={(e) => { setIsEventModal(true); setEventModalData(e); setIsActionType('edit') }}
        />
      </div>
      <AddModal isAddModal={isAddModal} setIsAddModal={setIsAddModal} isActionType={isActionType} />
      <EventModal isEventModal={isEventModal} setIsEventModal={setIsEventModal} eventModalData={eventModalData} setIsAddModal={setIsAddModal} />
    </>
  );
};

export default ApplyWorkSchedule;
