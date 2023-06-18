import { useState } from "react";
import "./hoursTracked.scss";
import { Col, Collapse, Image, Row, Tooltip } from "antd";
import HoursTrackedTable from "./table/table";
import { Space } from "antd";
import {
  DataType,
  hoursTrackedData,
  HoursTrackedTableData,
  logedUserData,
  overallTrackingData,
  overallTrackingDataByUser,
} from "../../mock/hoursTrackedData";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import DynamicCards from "./DynamicCards/dynamicCards";
import { ColumnsType } from "antd/es/table";

const HoursTracked = () => {
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  const { Panel } = Collapse;
  const [setCompID, setsetCompID] = useState<any>();
  const onChange = (key: string | string[]) => {
    setsetCompID(key);
  };

  const HoursTrackedTableColumns: ColumnsType<DataType> = [
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

      render: (_, { timeBreakdown }) => (
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
    <>
    {/*  */}
      <div className="hour-tracked--wrapper table-striped-rows accordian-bg-color">
        {role === "Employee" ? null : (
          <>
            <div className="hours-tracked-head fs-20 fw-600">
              <span className="title-color">Cumulative Analytics</span>
              <span className="date-tags-lower fs-12 fw-400 grey-color">
                March 13, 2022 - March 19, 2022
              </span>
            </div>
            <div className="hourtracked-mian-card">
              <DynamicCards dataArray={overallTrackingData} />
            </div>
          </>
        )}

        {role === "Employee" ? (
          <>
            {logedUserData.map((data: any, index: any) => (
              <>
                <div className="h--auto bg--none wrapper-header ">
                  <Row
                    align="middle"
                    gutter={16}
                    className=" wrapper-fr-date"
                    style={{ marginBottom: "20px" }}
                  >
                    <Col>
                      <img src={data.userImage} alt="User Icon" />
                    </Col>
                    <Col>
                      <div className="fs-16 w-100 fw-600 res-font-16">
                        <span>{data.userName}</span>
                      </div>
                    </Col>
                    <span className="fs-12 fw-400 grey-color flex-abs">
                      March 13, 2022 - March 19, 2022
                    </span>
                  </Row>

                  <div className="dispBlock tracked-info-flex custom-scroll ">
                    {data.timesSlots.map((ele: any, i: any) => (
                      <div
                        className="tracked-info-inner-cards-low accordian-bg-color"
                        key={i}
                        style={{ color: `${ele.defaultColor}` }}
                      >
                        <Space>
                          <Image
                            style={{ width: "20px", height: "20px" }}
                            src={ele.timeIcon}
                            alt="Time Track"
                          />
                          <h2 className="fs-14 fw-700">{ele.timeHead}</h2>
                        </Space>
                        <span className="fs-14 fw-400">{ele.timeDuration}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <DynamicCards dataArray={overallTrackingDataByUser} />
                <div className="wrapper-table wrapper-table-inset custom-scroll-hor">
                  <HoursTrackedTable
                    tableColumns={HoursTrackedTableColumns}
                    tableDataSourse={HoursTrackedTableData}
                    isPagination={false}
                  />
                </div>
              </>
            ))}
          </>
        ) : (
            <div className="wrapper-tracked-info-content  no-scroll-track without-gradient-bg-2">
            <Collapse accordion bordered={false} onChange={onChange} className="accordian-bg-color card-bg-3-border-color border-radius-4">
              {hoursTrackedData.map((data: any, index: any) => (
                <Panel
                className="accordian-bg-color "
                  key={data.id}
                  header={
                    <div
                      className={`h--auto bg--light wrapper-header accordian-bg-color title-color ${
                        setCompID == data.id
                          ? "h--auto bg--none wrapper-header"
                          : "h--100 bg--light wrapper-header"
                      }`}
                    >
                      <Row align="middle" gutter={16}>
                        <Col>
                          <img src={data.userImage} alt="User Icon" />
                        </Col>
                        <Col>
                          <div className="fs-16 fw-600 res-font-16">
                            {data.userName}
                          </div>
                        </Col>
                        {setCompID == data.id ? (
                          <UpOutlined className="down-icon ico--active"  />
                        ) : (
                            <DownOutlined className="down-icon" style={{ filter: "var(--dynamic-img-filter)" }} />
                        )}
                      </Row>

                      <div
                        className={`tracked-info-flex custom-scroll  ${
                          setCompID == data.id
                            ? "dispBlock tracked-info-flex custom-scroll"
                            : "dispNone"
                        }`}
                      >
                        {data.timesSlots.map((ele: any, i: any) => (
                          <div
                            className="tracked-info-inner-cards-low without-gradient-bg-2 card-bg-3-border-color"
                            key={i}
                            style={{ color: `${ele.defaultColor}` }}
                          >
                            <Space>
                              <Image
                                style={{ width: "20px", height: "20px" }}
                                src={ele.timeIcon}
                                alt="Time Track"
                              />
                              <h2 className="fs-14 fw-700">{ele.timeHead}</h2>
                            </Space>
                            <span className="fs-14 fw-400">
                              {ele.timeDuration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <DynamicCards dataArray={overallTrackingDataByUser} />
                  <div className="wrapper-table wrapper-table-inset custom-scroll-hor ">
                    <HoursTrackedTable
                      tableColumns={HoursTrackedTableColumns}
                      tableDataSourse={HoursTrackedTableData}
                      isPagination={false}
                    />
                  </div>
                </Panel>
              ))}
            </Collapse>
          </div>
        )}
      </div>
    </>
  );
};

export default HoursTracked;
