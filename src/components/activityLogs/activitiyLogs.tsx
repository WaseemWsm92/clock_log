import { useState } from "react";
import dayjs from "dayjs";
import { Button, Input, Select } from "antd";
import ActivityLogsTable from "./Table";
import DropdownIcon from "../../assets/icons/reports/webApp/column.svg";
import ColumnDropdownWrapper from "../../shared/ColumnDropdown";
import { renderBackgroundColor, renderColor } from "../../mock/ActivityLogs-MockData";
import searchIcon from "../../assets/icons/search-icon.svg";
import CustomModal from "./customModal";
import "./activityLogs.scss";

const ActivitiyComp = ({ user }: any) => {

  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Productivity Status");
  const dropdownValues = [
    "ID-Name",
    "Date/Time",
    "Web/App Name",
    "Description",
    "URLs",
    "Duration",
    "Productivity Status",
    "Idle Minutes %",
  ];
  const optionsColumn = [
    "ID-Name",
    "Date/Time",
    "Web/App Name",
    "Description",
    "URLs",
    "Duration",
    "Productivity Status",
    "Idle Minutes %",
    "Idle Minutes",
    "Manually Added Time %",
    "Manually Added Time",
  ];
  const [IsShowTableColumns, setIsShowTableColumns] = useState(dropdownValues);
  const options = [
    {
      value: "Neutral",
      label: "Neutral",
    },
    {
      value: "Productive",
      label: "Productive",
    },
    {
      value: "Unproductive",
      label: "Unproductive",
    },
  ];
  const stateTasksOptions = options?.map((item) => (
    <Select.Option key={item.value} value={item.value}>
      <span
        style={{
          backgroundColor: renderBackgroundColor[item.label],
          color: renderColor[item.label],
          padding: "5.5px 10px",
          borderRadius: "13px",
          maxWidth: "fit-content",
          textAlign: "center",
        }}
      >
        {item.label}
      </span>
    </Select.Option>
  ));
  return (
    <>
      <div className="activityBar">
        <div className="selectFilterBox">
          <Select
            value={selectedOption}
            onChange={(value: string) => setSelectedOption(value)}
            className="activitySelect select-input-theme"
          >
            {" "}
            {options.map((option) => (
              <Select.Option
                key={option.value}
                value={option.value}
                style={{
                  backgroundColor:
                    option.value === "Neutral"
                      ? "#EBEAEA"
                      : option.value === "Productive"
                        ? "#D9FFDA"
                        : option.value === "Unproductive"
                          ? "#FFCBCB"
                          : "",
                  borderRadius: "25px",
                  width: "fit-content",
                  marginTop: "10px",
                  color:
                    option.value === "Neutral"
                      ? "#4E4B66"
                      : option.value === "Productive"
                        ? "#0FBE16"
                        : option.value === "Unproductive"
                          ? "#FF3737"
                          : "",
                }}
              >
                {" "}
                {option.label}
              </Select.Option>
            ))}
          </Select>
          <Select
            size="large"
            placeholder="Idle Minutes %"
            optionFilterProp="children"
            className="activitySelect1 select-input-theme"
            popupClassName="select-theme"
            onChange={(values: any) => values === "custom" && setIsShowCustomModal(true)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "greaterThen40",
                label: "Greater than 40%",
              },
              {
                value: "greaterThen50",
                label: "Greater than 50%",
              },
              {
                value: "greaterThen60",
                label: "Greater than 60%",
              },
              {
                value: "custom",
                label: "Custom",
              },
            ]}
          />
        </div>
        <div className="rightSearch">
          <span className="fs-12" style={{ color: "#a0acbb" }}>
            {dayjs().format("MMM DD, YYYY")}
          </span>
          <Input
            style={{ height: "40px" }}
            placeholder="Search  by user, web & app"
            className="activitySearch"
            onChange={(e) => console.log(e.target.value)}
            prefix={<img src={searchIcon} alt="search" />}
          />
          <ColumnDropdownWrapper
            menuValue={IsShowTableColumns}
            setMenuValue={setIsShowTableColumns}
            options={optionsColumn}
          >
            <Button className="d-flex align-center  column_btns btn-theme-color">
              <img src={DropdownIcon} alt="" style={{ marginRight: "10px" }} />
              <span className="fw-500" style={{ marginLeft: "5px" }}>
                Column
              </span>
            </Button>
          </ColumnDropdownWrapper>
        </div>
      </div>
      <div className="acivitiyTable">
        <ActivityLogsTable user={user} IsShowTableColumns={IsShowTableColumns} />
      </div>
      {isShowCustomModal && (
        <CustomModal
          isShowCustomModal={isShowCustomModal}
          setIsShowCustomModal={setIsShowCustomModal}
        />
      )}
    </>
  );
};

export default ActivitiyComp;
