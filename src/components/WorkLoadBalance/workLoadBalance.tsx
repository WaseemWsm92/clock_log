import "./workLoadBalance.scss";
import {
  Checkbox,
  Col,
  Collapse,
  Dropdown,
  Image,
  MenuProps,
  Row,
  Space,
  Table,
} from "antd";
import { useState } from "react";
import {
  WorkLoadData,
  WorkLoadTableData,
  overallWorkLoadData,
  overallWorkLoadDataByUser,
  DataType,
} from "../../mock/workLoadBalanceData";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
import DynamicCards from "./DynamicCards/dynamicCards";
import { ColumnsType } from "antd/es/table";
import TableToolTip from "./tableToolTip/tableToolTip";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const options = [
  { label: "Underutilized", value: "underutilized" },
  { label: "Overutilized", value: "overutilized" },
  { label: "Healthy", value: "healthy" },
];

const WorkLoadBalanceMain = () => {
  const { Panel } = Collapse;
  const [setCompID, setsetCompID] = useState<any>();
  const onChange = (key: string | string[]) => {
    setsetCompID(key);
  };

  const WorkLoadTableColumns: ColumnsType<DataType> = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Tracked Time",
      dataIndex: "trackedTime",
      key: "trackedTime",
    },
    {
      title: "Productive Time",
      dataIndex: "productiveTime",
      key: "productiveTime",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span>Expected Working Hours</span>
          <TableToolTip renderTooltopContent={"expectedWorkingHours"} />
        </div>
      ),
      dataIndex: "expectedWorkingHours",
      key: "expectedWorkingHours",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span>Min. Effective Hours</span>
          <TableToolTip renderTooltopContent={"minEffectiveHours"} />
        </div>
      ),
      dataIndex: "minEffectiveHours",
      key: "minEffectiveHours",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span>Utilization Status</span>
          <TableToolTip renderTooltopContent={"utilizationStatus"} />
        </div>
      ),
      key: "utilizationStatus",
      dataIndex: "utilizationStatus",

      render: (_, { utilizationStatus }) => (
        <>
          {(() => {
            switch (utilizationStatus) {
              case "Healthy":
                return (
                  <div className="workload-tag fs-14 fw-400 bgLightGreenProgress-color">
                    Healthy
                  </div>
                );
              case "Underutilized":
                return (
                  <div className="workload-tag fs-14 fw-400 bgLow-yellow-color">
                    Underutilized
                  </div>
                );
              case "Overutilized":
                return (
                  <div className="workload-tag fs-14 fw-400 bg-Orange-color">
                    Overutilized
                  </div>
                );
              default:
                return null;
            }
          })()}
        </>
      ),
    },
  ];

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  const onUtilixationStatusChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Checkbox.Group
          options={options}
          value={checkedList}
          onChange={onUtilixationStatusChange}
          className="workload-select-status"
        />
      ),
      key: "1",
    },
  ];

  return (
    <>
      <div className="work-load--wrapper table-striped-rows">
        <div className="select-utililization-filter">
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            open={isOpenDropdown}
            onOpenChange={setisOpenDropdown}
          >
            <div
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ height: "39px" }}
              className="select-dropdown-btn fs-14 fw-400 border-radius-4"
            >
              <Space>
                Utilization Status
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>

        <div className=" workload--head fs-20 fw-600">
          <span className="title-color">Cumulative Analytics</span>
          <span className="date-tags-lower fs-12 fw-400 grey-color">
            March 13, 2022 - March 19, 2022
          </span>
        </div>
        <div className="workLoad-mian-card">
          <DynamicCards dataArray={overallWorkLoadData} />
        </div>
        <div className="wrapper-tracked-info-content no-scroll-track without-gradient-bg-2">
          <Collapse accordion bordered={false} onChange={onChange} className="accordian-bg-color card-bg-3-border-color border-radius-4">
            {WorkLoadData.map((data: any, index: any) => (
              <Panel  className="accordian-bg-color "
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
                        <img src={data.userImage} alt="User Icon"  />
                      </Col>
                      <Col>
                        <div className="fs-16 fw-600 res-font-16">
                          {data.userName}
                        </div>
                      </Col>
                      {setCompID == data.id ? (
                        <UpOutlined className="down-icon ico--active title-color" />
                      ) : (
                        <DownOutlined className="down-icon title-color" />
                      )}
                    </Row>

                    <div
                      className={`tracked-info-flex custom-scroll ${
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
                key={data.id}
              >
                <DynamicCards dataArray={overallWorkLoadDataByUser} />

                <div className="wrapper-table wrapper-table-inset custom-scroll-hor">
                  <Table
                    className="ant-table-content"
                    columns={WorkLoadTableColumns}
                    // rowSelection={rowSelection}
                    dataSource={WorkLoadTableData}
                    pagination={false}
                  />
                </div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default WorkLoadBalanceMain;
