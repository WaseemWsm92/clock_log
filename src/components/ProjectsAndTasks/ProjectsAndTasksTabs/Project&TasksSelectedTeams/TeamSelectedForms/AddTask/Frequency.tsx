import { Col, Row, Select } from "antd";
import { useState } from "react";
import WeeksDays from "../../../../../../shared/weeksDays/weeksDays";
import DailySchedule from "./DailySchedule";
import "./DailySchedule.scss";

const Frequency = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [weeksArray, setWeeksArray] = useState<any>([]);
  const [dailyOption, setdailyOption] = useState("");
  const [montlyArray, setMontlyArray] = useState("");
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };
  const options = [
    {
      value: "Daily",
      label: "Daily",
    },
    {
      value: "Weekly",
      label: "Weekly",
    },
    {
      value: "Monthly",
      label: "Monthly",
    },
  ];

  const MonthlySchedule = [
    "First Day of Month ",
    "15th of month",
    "Last day of month",
  ];
  return (
    <Row>
      <Col lg={24} xs={24}>
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          placeholder="Web & Apps "
          style={{ width: "100%" }}
        >
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col xs={24}>
        {selectedOption?.includes("Weekly") && (
          <WeeksDays setWeeksArray={setWeeksArray} weeksArray={weeksArray} />
        )}
      </Col>
      <Col xs={24}>
        {selectedOption?.includes("Daily") && (
          <DailySchedule
            dailyOption={dailyOption}
            setDailyOption={setdailyOption}
          />
        )}
      </Col>
      {selectedOption?.includes("Monthly") && (
        <Col span={24}>
          <div className="daily-schedule">
            <div className="applied-work d-flex align-items-center">
              {MonthlySchedule.map((item, i: number) => (
                <p
                  className="d-flex align-items-center justify-center text-center m-0 fs-14 line-height-20 cursor-pointer"
                  style={{
                    backgroundColor: montlyArray.includes(item)
                      ? "#E76F51"
                      : "#DBE4EF",
                    color: montlyArray.includes(item) ? "#FFFFFF" : "#3B4D60",
                    padding: "0.4rem",
                  }}
                  key={i}
                  onClick={() => {
                    montlyArray.includes(item)
                      ? setMontlyArray("")
                      : setMontlyArray(item);
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Col>
      )}

      <br />
    </Row>
  );
};

export default Frequency;
