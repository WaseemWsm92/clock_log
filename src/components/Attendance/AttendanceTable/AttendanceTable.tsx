import { Fragment } from "react";

// Ant
import { Space, Table, Tooltip, Divider, Row, Col } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";

// Interface and Mock Data
import { IAttendanceTableData } from "../../../types/reports/AttendanceInterface";

import { AttendanceTableData } from "../../../mock/reports/AttendanceMockData";
// Images
import infoIcon from "../../../assets/icons/Alerts.svg";

// Attendance Table Header Constant
const ATTENDANCETABLECOLUMNS: ColumnsType<IAttendanceTableData> = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date) => <span className="fs-12 fw-400 line-height-18 title-color">{date}</span>,
  },
  {
    title: "Shift Name",
    dataIndex: "shiftName",
    key: "shiftName",
    render: (_, { shiftName, actualStartTime, actualEndTime }) => (
      <Space className="d-flex align-items-center title-color">
        <span className="fs-12 fw-400 line-height-18 title-color">{shiftName}</span>
        <Tooltip
          placement="bottomLeft"
          autoAdjustOverflow={true}
          arrow={false}
          showArrow={false}
          overlayInnerStyle={{
            backgroundColor: "var(--card-bg-color)",
            color: "#264653",
            width: "314px",
          }}
          title={
            <AttendanceTableTooltip
              shiftName={shiftName}
              actualStartTime={actualStartTime}
              actualEndTime={actualEndTime}
            />
          }
        >
          <img
            src={infoIcon}
            alt="info"
            className="cursor-pointer  white-img-theme-class"
            style={{ marginTop: "0.5rem" }}
          />
        </Tooltip>
      </Space>
    ),
  },
  {
    title: "Actual Start Time",
    dataIndex: "actualStartTime",
    key: "actualStartTime",
    render: (actualStartTime) => (
      <span className="fs-12 fw-400 line-height-18 title-color">{actualStartTime}</span>
    ),
  },
  {
    title: "Actual End Time",
    dataIndex: "actualEndTime",
    key: "actualEndTime",
    render: (actualEndTime) => (
      <span className="fs-12 fw-400 line-height-18 title-color">{actualEndTime}</span>
    ),
  },
  {
    title: "Time Tracked Time",
    dataIndex: "timeTrackedOver",
    key: "timeTrackedOver",
    render: (timeTrackedOver) => (
      <span className="fs-12 fw-400 line-height-18 title-color">{timeTrackedOver}</span>
    ),
  },
  {
    title: "Over Time",
    dataIndex: "overTime",
    key: "overTime",
    render: (overTime) => (
      <span className="fs-12 fw-400 line-height-18 title-color">{overTime}</span>
    ),
  },
  {
    title: "Attendance Breakdown",
    key: "attendanceBreakdown",
    dataIndex: "attendanceBreakdown",
    render: (_, { attendanceBreakdown }: any) => (
      <>
        <div className="multi-progress-bar" style={{ width: "395px" }}>
          {!!attendanceBreakdown.length ? (
            attendanceBreakdown.map((values: any, i: any) => {
              return (
                <Fragment key={i}>
                  <Tooltip
                    overlayClassName="class-tooltip"
                    title="Computer Time"
                    color="#37B4A4"
                    placement="topLeft"
                    arrow={false}
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
                    arrow={false}

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
                    arrow={false}
                  >
                    <div
                      className="bar-slots p--yellow"
                      style={{ width: `${values.manualTime}` }}
                    ></div>
                  </Tooltip>
                </Fragment>
              );
            })
          ) : (
            <Tooltip
              overlayClassName="class-tooltip day-off"
              title="Day Off"
              color="#D9D9D9"
              placement="topLeft"
              arrow={false}

            >
              <div className="bar-slots p--grey" style={{ width: "100%" }}></div>
            </Tooltip>
          )}
        </div>
      </>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <button
        className="cursor-pointer text-white fs-12 fw-600 line-height-22 fw-600 bgLightGreenProgress-color"
        style={{ padding: "0.21rem 0.631rem", border: 0, borderRadius: "45px" }}
      >
        {status}
      </button>
    ),
    align: "center",
  },
];

const AttendanceTable = () => {
  const onChange: TableProps<IAttendanceTableData>["onChange"] = (// pagination: any,    // filters: any,    // sorter: any,    // extra: any 
  ) => { };
  return (
    <Table
      dataSource={AttendanceTableData}
      className=" wrapper-table w-100"
      style={{ padding: "1rem 0rem", width: '100%' }}
      pagination={{ pageSize: 5 }}
      columns={ATTENDANCETABLECOLUMNS}
      scroll={{ x: "max-content", scrollToFirstRowOnChange: true }}
      tableLayout="fixed"
      onChange={onChange}
    />
  );
};

export default AttendanceTable;

// Attendance Table Tooltip Separate Component
export const AttendanceTableTooltip = ({
  shiftName,
  actualStartTime,
  actualEndTime,
}: {
  shiftName: string;
  actualStartTime: string;
  actualEndTime: string;
}) => {
  return (
    <div className="" style={{ padding: "0.688rem 1.75rem" }}>
      <h3 className="fs-20 fw-600  title-color line-height-30" style={{ margin: "0.688rem 0 0 0 " }}>
        {shiftName}
      </h3>
      <Divider
        style={{
          backgroundColor: "#E76F51",
          height: "1px",
          maxWidth: "184px",
          minWidth: "unset",
        }}
      />
      <Row gutter={[16, 16]} className="m-0">
        <Col xs={12} className="m-0">
          <p className="fs-12 fw-400 line-height-18  light-grey-color-2" style={{ margin: "1rem 0 0 0" }}>
            Shift Start time
          </p>
          <p className="fs-14 fw-400 line-height-22 grey-color" style={{ marginTop: "0.125rem" }}>
            {actualStartTime}
          </p>
        </Col>
        <Col xs={12} className="m-0">
          <p className="fs-12 fw-400 line-height-18  light-grey-color-2" style={{ margin: "1rem 0 0 0" }}>
            Shift End time
          </p>
          <p className="fs-14 fw-400 line-height-22 grey-color" style={{ marginTop: "0.125rem" }}>
            {actualEndTime}
          </p>
        </Col>
        <Col xs={12} className="m-0">
          <p className="fs-12 fw-400 line-height-18  light-grey-color-2" style={{ margin: "1rem 0 0 0" }}>
            Break Start time
          </p>
          <p className="fs-14 fw-400 line-height-22 grey-color" style={{ marginTop: "0.125rem" }}>
            12:00pm
          </p>
        </Col>
        <Col xs={12} className="m-0">
          <p className="fs-12 fw-400 line-height-18  light-grey-color-2" style={{ margin: "1rem 0 0 0" }}>
            Break Start time
          </p>
          <p className="fs-14 fw-400 line-height-22 grey-color" style={{ marginTop: "0.125rem" }}>
            12:30pm
          </p>
        </Col>
        <Col xs={12} className="m-0">
          <p className="fs-12 fw-400 line-height-18  light-grey-color-2" style={{ margin: "1rem 0 0 0" }}>
            Relaxation time:
          </p>
          <p className="fs-14 fw-400 line-height-22 grey-color" style={{ marginTop: "0.125rem" }}>
            15min
          </p>
        </Col>
      </Row>
    </div>
  );
};
