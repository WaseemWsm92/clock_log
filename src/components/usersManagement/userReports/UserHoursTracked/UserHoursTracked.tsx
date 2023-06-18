import { Col, Row, Space, Tooltip } from "antd";

import userImage from "../../../../assets/images/users/user-1.svg";
import {
  HoursTrackedTableData,
  overallTrackingDataByUser,
} from "../../../../mock/hoursTrackedData";
import DynamicCards from "../../../hoursTracked/DynamicCards/dynamicCards";
import HoursTrackedTable from "../../../hoursTracked/table/table";
import "../../../hoursTracked/hoursTracked.scss";
import "./style.scss";
import DateRangePickerComp from "../../../../shared/datePicker/DatePicker";

const UserHoursTracked = () => {
  const HoursTrackedTableColumns: any = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Expected Time",
      dataIndex: "expectedTime",
      key: "expectedTime",
    },
    {
      title: "Time Tracked",
      dataIndex: "timeTracked",
      key: "timeTracked",
    },
    {
      title: "Time Breakdown",
      key: "timeBreakdown",
      dataIndex: "timeBreakdown",

      render: (_: any, { timeBreakdown }: any) => (
        <>
          <div className="multi-progress-bar">
            {timeBreakdown.length > 0 ? (
              timeBreakdown.map((values: any, i: any) => {
                return (
                  <>
                    <Tooltip
                      overlayClassName="class-tooltip"
                      title="Computer Time"
                      color="#37B4A4"
                      placement="topLeft"
                    >
                      <div
                        className="bar-slots p--green"
                        style={{ width: `${values.computerTime}` }}
                      ></div>
                    </Tooltip>
                    <Tooltip
                      overlayClassName="class-tooltip"
                      title="Mobile Time"
                      color="#FF4D4F"
                      placement="topLeft"
                    >
                      <div
                        className="bar-slots p--red"
                        style={{ width: `${values.mobileTime}` }}
                      ></div>
                    </Tooltip>
                    <Tooltip
                      overlayClassName="class-tooltip"
                      title="Manual Time"
                      color="#FDCA64"
                      placement="topLeft"
                    >
                      <div
                        className="bar-slots p--yellow"
                        style={{ width: `${values.manualTime}` }}
                      ></div>
                    </Tooltip>
                  </>
                );
              })
            ) : (
              <Tooltip
                overlayClassName="class-tooltip day-off"
                title="Day Off"
                color="#D9D9D9"
                placement="topLeft"
              >
                <div
                  className="bar-slots p--grey"
                  style={{ width: "100%" }}
                ></div>
              </Tooltip>
            )}
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="hour-tracked--wrapper hours-tracked-wrapper">
      <div className="user-info">
        <div className="user-details">
          <img
            src={userImage}
            alt="user"
            width="40px"
            height="40px"
            className="border-radius-50"
          />
          <div className="user-name-email">
            <h2 className="fs-16 fw-600 title-color m-0">Tayyaba Gul</h2>
            <p className="email m-0">Allan john@ceative.co.uk</p>
          </div>
        </div>
        <div className="time-stamp">
          <DateRangePickerComp />
          <p className="fs-12 fw-400 m-0 line-height-16 date">March 13, 2022 &mdash; March 19, 2022</p>
          </div>
      </div>

      <div className="user-hours-tracked-cards">
        <DynamicCards dataArray={overallTrackingDataByUser} />
      </div>

      <div className="hour-tracked-table wrapper-table wrapper-table-inset custom-scroll-hor">
        <HoursTrackedTable
          tableColumns={HoursTrackedTableColumns}
          tableDataSourse={HoursTrackedTableData}
          isPagination={false}
        />
      </div>
    </div>
  );
};

export default UserHoursTracked;
