import { Checkbox, Col, Input, Progress, Row, Select, Space } from "antd";
import CommonCard from "../../../card";
import { AllServices, UserActivityLog } from "./UserActivityData";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import UserActivityTable from "./UserActivityTable";
import Profile1 from "../../../../assets/images/reports/webApps/profile1.png";
import AppUsageTable from "./AppUsageTable";
import { useState } from "react";
import dayjs from "dayjs";
import "./UserActivityDetails.scss";

const UserActivityDetails = (props: any) => {
  const [IsShowAppUsage, setIsShowAppUsage] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const { role }: any = JSON.parse(localStorage.getItem("UserData") || "{}");

  const options = [
    {
      value: "Website & Apps",
      label: "Website & Apps",
    },
    {
      value: "Websites",
      label: "Websites",
    },
    {
      value: "Apps",
      label: "Apps",
    },
  ];
  return (
    <>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
        justify="space-between"
        style={{ paddingBottom: "1rem" }}
      >
        <Col xs={12} lg={20} className="gutter-row">
          <Space direction="horizontal" size={11}>
            <img src={Profile1} alt="userProfile" width="40px" height="40px" />
            <div>
              <span className="fs-14 black-color fw-500">Theresa Web</span>
              <div className="fs-14 fw-500" style={{ color: "#A3AED0" }}>
                7h 30m
              </div>
            </div>
          </Space>
        </Col>
        <Col
          xs={12}
          lg={4}
          className="gutter-row d-flex justify-end cursor-pointer align-center"
          style={{ color: "#A0ACBB" }}
          onClick={() => props.setIsShowUserActivity(true)}
        >
          {role === "Employee" ? (
            <span className="d-flex align-center ">
              {dayjs().format("MMM DD, YYYY")}
            </span>
          ) : (
            <CloseOutlined />
          )}
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 20 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col sm={24} md={24} lg={24} xl={24} xxl={18}>
          <Row className="user-detials-card"
            gutter={[
              { xs: 8, sm: 16, md: 12, lg: 20 },
              { xs: 8, sm: 16, md: 12, lg: 24 },
            ]}
          >
            {UserActivityLog.map((item: any) => (
              <Col
                xs={24}
                md={12}
                lg={12}
                style={{ height: "89px" }}
                key={item?.id}
              >
                <CommonCard
                  key={item?.id}
                  color={item?.colorClasses?.color}
                  hoverColor={item?.colorClasses?.hoverColor}
                >
                  <Row
                    gutter={[
                      { xs: 120, sm: 120, lg: 120 },
                      { xs: 120, sm: 120, lg: 120 },
                    ]}
                    style={{ padding: "1rem" }}
                  >
                    <Col span={12} className="transition-from-left">
                      <div
                        className="align-center"
                        style={{ paddingTop: "8px" }}
                      >
                        <span className="fs-14 darkBluee-color fw-500">{item?.name}</span>
                        <div className="fs-14 fw-400 light-grey">7h 30m</div>
                      </div>
                    </Col>
                    <Col
                      span={12}
                      className="d-flex justify-end transition-from-right "
                    >
                      <Progress
                        type="circle"
                        width={58}
                        percent={item?.total}
                        format={(percent: any) => <span className="progressText fs-14 fw-400">{`${percent}%`}</span>}
                        strokeColor={item?.colorClasses?.strokeColor}
                        trailColor="#D9DBE9"
                        className="fs-12"
                        strokeWidth={10}
                        style={{ margin: "auto", textAlign: "center" }}
                      />
                    </Col>
                  </Row>
                </CommonCard>
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          xs={24}
          lg={12}
          xl={12}
          xxl={6}
          style={{ height: "202px" }}
          className="border-radius-10 user-detials-card"
        >
          <CommonCard
            key="1"
            color={AllServices.color}
            hoverColor={AllServices.hoverColor}
          >
            <div style={{ padding: "1rem" }}>
              <div className="transition-from-left">
                <span className="fs-14 fw-500 darkBluee-color ">
                  All Services
                </span>
                <div className="fs-14 fw-400 light-grey">7h 30m</div>
              </div>

              <div
                className="d-flex justify-end transition-from-right"
                style={{ paddingTop: "0.7rem" }}
              >
                <Progress
                  type="circle"
                  width={121}
                  percent={70}
                  format={(percent: any) => <span className="progressText fs-24 fw-400">{`${percent}%`}</span>}
                  strokeWidth={10}
                  strokeColor={AllServices.strokeColor}
                  trailColor="#D9DBE9"
                  className="fs-24"
                  style={{ textAlign: "center" }}
                />
              </div>
            </div>
          </CommonCard>
        </Col>
        {IsShowAppUsage && (
          <>
            <Col span={24}>
              <Row
                className="user-details"
                gutter={[
                  { xs: 0, sm: 0, md: 0, lg: 32 },
                  { xs: 12, sm: 12, md: 12, lg: 32 },
                ]}
                justify="space-between"
              >
                <Col xs={24} lg={8} xl={8}>
                  <Select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    style={{ width: "100%" }}
                    placeholder="Website & Apps"
                    className="select-webapp select-input-theme"
                    popupClassName="select-theme"
                  >
                    {options.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        <Checkbox
                          value={option.value}
                          checked={selectedOption === option.value}
                          onChange={() => handleOptionChange(option.value)}
                        />
                        &nbsp; {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                </Col>

                <Col xs={24} lg={16} xl={16}>
                  <div className="rightSearch d-flex justify-end">
                    <span
                      className="fs-12 fw-500 d-flex align-center border-color "
                      style={{ marginRight: "15px" }}
                    >
                      {dayjs().format("MMM DD, YYYY")}
                    </span>
                    <Input
                      placeholder="Search by Service"
                      className="webapp-input"
                      onChange={(e) => console.log(e.target.value)}
                      prefix={
                        <SearchOutlined className="site-form-item-icon" />
                      }
                      style={{ height: "40px" }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24} className="user-activity-Table border-radius-8">
              <UserActivityTable setIsShowAppUsage={setIsShowAppUsage} />
            </Col>
          </>
        )}
        {!IsShowAppUsage && (
          <Col span={24}>
            <AppUsageTable setIsShowAppUsage={setIsShowAppUsage} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default UserActivityDetails;
